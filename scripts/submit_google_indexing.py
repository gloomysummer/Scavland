#!/usr/bin/env python3
"""
High-Performance Google Search Indexing API Incremental Submitter for Scavland Wiki
Submits URLs concurrently using Google Indexing API (URL_UPDATED).
Default Quota: 200 requests / day per project.
Supports:
  - Incremental diff (never resubmit unchanged or already submitted URLs)
  - Smart priority (new locales/pages and newly updated guides first)
  - Persistent state history in .google_indexing_history.json
  - Safe quota handling (aborts on 429 Quota Exceeded)
"""

import sys
import os
import json
import time
import datetime
import argparse
import urllib.request
import xml.etree.ElementTree as ET
from concurrent.futures import ThreadPoolExecutor, as_completed

HISTORY_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), ".google_indexing_history.json")

KEY_SEARCH_PATHS = [
    os.path.expanduser("~/.gemini/config/google-indexing-key.json"),
    os.path.expanduser("~/Downloads/"),
    os.getcwd(),
]

def load_history():
    if os.path.isfile(HISTORY_FILE):
        try:
            with open(HISTORY_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            return {}
    return {}

def save_history(history):
    try:
        with open(HISTORY_FILE, "w", encoding="utf-8") as f:
            json.dump(history, f, indent=2, ensure_ascii=False)
    except Exception as e:
        print(f"[!] Warning: Failed to save history file: {e}", file=sys.stderr)

def find_key_file():
    for path in KEY_SEARCH_PATHS:
        if os.path.isfile(path) and path.endswith(".json"):
            return path
        if os.path.isdir(path):
            for f in os.listdir(path):
                if f.endswith(".json") and ("scenic-arc" in f or "indexing" in f or "gserviceaccount" in f):
                    return os.path.join(path, f)
    return None

def fetch_sitemap_urls(sitemap_url):
    print(f"[*] Fetching sitemap: {sitemap_url}", flush=True)
    req = urllib.request.Request(sitemap_url, headers={"User-Agent": "Google-Indexing-Tool/1.0"})
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            xml_content = resp.read()
    except Exception as e:
        print(f"[!] Failed to fetch sitemap: {e}", file=sys.stderr)
        return []

    try:
        root = ET.fromstring(xml_content)
    except Exception as e:
        print(f"[!] XML parse error: {e}", file=sys.stderr)
        return []

    urls = []
    for loc in root.findall(".//{http://www.sitemaps.org/schemas/sitemap/0.9}loc"):
        if loc.text:
            url = loc.text.strip()
            if url.endswith(".xml"):
                urls.extend(fetch_sitemap_urls(url))
            else:
                urls.append(url)
    return list(dict.fromkeys(urls))

def submit_single_url(target_url, headers, endpoint, action):
    import requests
    payload = {"url": target_url, "type": action}
    try:
        r = requests.post(endpoint, headers=headers, json=payload, timeout=30)
        return {"url": target_url, "status_code": r.status_code, "text": r.text.strip()}
    except Exception as e:
        return {"url": target_url, "status_code": 0, "text": str(e)}

def sort_priority(urls):
    """
    Sort URLs to prioritize high-value new content:
    1. Localized core roots (/ru/, /de/)
    2. Localized landing guide index
    3. New tactical guides
    """
    def score(u):
        s = 0
        if u.rstrip("/").endswith("/ru") or u.rstrip("/").endswith("/de"):
            s += 100
        if "/ru/guide/" in u or "/de/guide/" in u:
            s += 50
        if u.count("/") <= 4:
            s += 30
        if "/guide/" in u:
            s += 20
        return -s
    return sorted(urls, key=score)

def main():
    parser = argparse.ArgumentParser(description="Batch submit Scavland Wiki URLs to Google Indexing API with incremental tracking")
    parser.add_argument("--key", help="Path to Google Service Account JSON key file")
    parser.add_argument("--site", help="Sitemap URL", default="https://scavland.wiki/sitemap-0.xml")
    parser.add_argument("--url", help="Single URL or comma-separated URLs to submit")
    parser.add_argument("--urls", nargs="+", help="Multiple specific URLs to submit (incremental mode)")
    parser.add_argument("--limit", type=int, default=25, help="Max URLs to submit in this run (default: 25)")
    parser.add_argument("--concurrency", type=int, default=6, help="Concurrent workers (default: 6)")
    parser.add_argument("--action", choices=["URL_UPDATED", "URL_DELETED"], default="URL_UPDATED")
    parser.add_argument("--force", action="store_true", help="Force submit all URLs ignoring incremental cache")
    parser.add_argument("--status", action="store_true", help="Print current indexed cache status and exit")
    args = parser.parse_args()

    history = load_history()

    if args.status:
        total_cached = len(history)
        print(f"📊 Google Indexing Incremental Cache Status:")
        print(f"   • History file: {HISTORY_FILE}")
        print(f"   • Recorded submitted URLs: {total_cached}")
        sys.exit(0)

    key_path = args.key or find_key_file()
    if not key_path or not os.path.isfile(key_path):
        print(f"[!] Error: Service account JSON key file not found.", flush=True)
        sys.exit(1)

    all_urls = []
    if args.urls:
        all_urls.extend(args.urls)
    elif args.url:
        all_urls.extend([u.strip() for u in args.url.split(",") if u.strip()])
    else:
        # Check if local dist sitemap exists
        local_sitemap = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "dist", "sitemap-0.xml")
        if os.path.isfile(local_sitemap):
            try:
                tree = ET.parse(local_sitemap)
                all_urls = [loc.text.strip() for loc in tree.findall(".//{http://www.sitemaps.org/schemas/sitemap/0.9}loc") if loc.text]
            except Exception:
                all_urls = fetch_sitemap_urls(args.site)
        else:
            all_urls = fetch_sitemap_urls(args.site)

    if not all_urls:
        print("[!] No URLs found.", flush=True)
        sys.exit(1)

    all_urls = list(dict.fromkeys(all_urls))
    print(f"[+] Total URLs discovered: {len(all_urls)}", flush=True)

    if args.force:
        urls_to_submit = all_urls
        print(f"[!] --force specified: ignoring cache, will evaluate all {len(urls_to_submit)} URLs", flush=True)
    else:
        urls_to_submit = [u for u in all_urls if u not in history or history[u].get("status") != 200]
        skipped_count = len(all_urls) - len(urls_to_submit)
        print(f"[*] Incremental filter: skipped {skipped_count} already-submitted/cached URLs", flush=True)
        print(f"[+] Unsubmitted / New URLs remaining: {len(urls_to_submit)}", flush=True)

    if not urls_to_submit:
        print("✨ All URLs have already been submitted! No new URLs need indexing quota.", flush=True)
        print("💡 Use --force to resubmit, or check status with --status.", flush=True)
        sys.exit(0)

    urls_to_submit = sort_priority(urls_to_submit)
    urls_to_submit = urls_to_submit[:args.limit]
    print(f"[+] Submitting next batch of {len(urls_to_submit)} URLs (Limit: {args.limit})", flush=True)

    from google.oauth2 import service_account
    import google.auth.transport.requests

    SCOPES = ["https://www.googleapis.com/auth/indexing"]
    ENDPOINT = "https://indexing.googleapis.com/v3/urlNotifications:publish"

    credentials = service_account.Credentials.from_service_account_file(
        key_path, scopes=SCOPES
    )
    auth_req = google.auth.transport.requests.Request()
    credentials.refresh(auth_req)
    access_token = credentials.token
    print(f"[+] Authenticated as: {credentials.service_account_email}", flush=True)

    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json",
    }

    success_count = 0
    fail_count = 0
    quota_exceeded = False

    now_iso = datetime.datetime.now(datetime.timezone.utc).isoformat()
    start_time = time.time()

    with ThreadPoolExecutor(max_workers=args.concurrency) as executor:
        futures = {executor.submit(submit_single_url, u, headers, ENDPOINT, args.action): u for u in urls_to_submit}
        for idx, fut in enumerate(as_completed(futures), 1):
            res = fut.result()
            target_url = res["url"]
            code = res["status_code"]
            text = res["text"]

            if code == 200:
                print(f"[{idx}/{len(urls_to_submit)}] ✅ (200 OK) {target_url}", flush=True)
                history[target_url] = {
                    "last_submitted": now_iso,
                    "status": 200,
                    "action": args.action
                }
                success_count += 1
            elif code == 429 or "Quota exceeded" in text:
                print(f"[{idx}/{len(urls_to_submit)}] ⚠️ (429 Quota Exceeded) {target_url}", flush=True)
                quota_exceeded = True
                fail_count += 1
                break
            else:
                print(f"[{idx}/{len(urls_to_submit)}] ❌ ({code}) {target_url} -> {text[:80]}", flush=True)
                fail_count += 1

    save_history(history)
    elapsed = time.time() - start_time

    print(f"\n==========================================", flush=True)
    print(f"🎉 Incremental batch finished in {elapsed:.2f}s!", flush=True)
    print(f"   • Success (New Recorded): {success_count} / {len(urls_to_submit)}")
    print(f"   • Failed:                  {fail_count}")
    print(f"   • Total in History Cache:  {len(history)}")
    if quota_exceeded:
        print(f"\n⚠️ Google Daily Quota limit (200/day) reached! Remaining unsubmitted URLs are saved in state.")
        print(f"   They will automatically be picked up on the next run tomorrow without wasting quota on old pages.")
    print(f"==========================================", flush=True)

if __name__ == "__main__":
    main()
