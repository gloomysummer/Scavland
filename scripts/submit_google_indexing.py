#!/usr/bin/env python3
"""
High-Performance Google Search Indexing API Batch Submitter for Scavland Wiki
Submits URLs concurrently using Google Indexing API (URL_UPDATED).
Default Quota: 200 requests / day per project.
"""

import sys
import os
import json
import time
import argparse
import urllib.request
import xml.etree.ElementTree as ET
from concurrent.futures import ThreadPoolExecutor, as_completed

KEY_SEARCH_PATHS = [
    os.path.expanduser("~/.gemini/config/google-indexing-key.json"),
    os.path.expanduser("~/Downloads/"),
    os.getcwd(),
]

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
    print(f"[*] Fetching sitemap from: {sitemap_url}", flush=True)
    req = urllib.request.Request(sitemap_url, headers={"User-Agent": "Google-Indexing-Tool/1.0"})
    with urllib.request.urlopen(req) as resp:
        xml_content = resp.read()
    
    root = ET.fromstring(xml_content)
    urls = []
    for loc in root.findall(".//{http://www.sitemaps.org/schemas/sitemap/0.9}loc"):
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
        r = requests.post(endpoint, headers=headers, json=payload, timeout=10)
        return {"url": target_url, "status_code": r.status_code, "text": r.text.strip()}
    except Exception as e:
        return {"url": target_url, "status_code": 0, "text": str(e)}

def main():
    parser = argparse.ArgumentParser(description="Batch submit Scavland Wiki URLs to Google Indexing API")
    parser.add_argument("--key", help="Path to Google Service Account JSON key file")
    parser.add_argument("--site", default="https://scavland.wiki/sitemap-0.xml", help="Sitemap URL")
    parser.add_argument("--url", help="Single URL to submit")
    parser.add_argument("--limit", type=int, default=200, help="Max URLs to submit in this run (default: 200)")
    parser.add_argument("--concurrency", type=int, default=10, help="Concurrent workers (default: 10)")
    parser.add_argument("--action", choices=["URL_UPDATED", "URL_DELETED"], default="URL_UPDATED")
    args = parser.parse_args()

    key_path = args.key or find_key_file()
    if not key_path or not os.path.isfile(key_path):
        print(f"[!] Error: Service account JSON key file not found.", flush=True)
        sys.exit(1)

    print(f"[+] Using Service Account Key: {key_path}", flush=True)

    urls_to_submit = []
    if args.url:
        urls_to_submit.append(args.url)
    else:
        urls_to_submit.extend(fetch_sitemap_urls(args.site))

    urls_to_submit = urls_to_submit[:args.limit]
    print(f"[+] Target URLs to submit: {len(urls_to_submit)} (Limit: {args.limit})", flush=True)

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

    start_time = time.time()
    with ThreadPoolExecutor(max_workers=args.concurrency) as executor:
        futures = {executor.submit(submit_single_url, u, headers, ENDPOINT, args.action): u for u in urls_to_submit}
        for idx, fut in enumerate(as_completed(futures), 1):
            res = fut.result()
            if res["status_code"] == 200:
                print(f"[{idx}/{len(urls_to_submit)}] ✅ (200 OK) {res['url']}", flush=True)
                success_count += 1
            else:
                print(f"[{idx}/{len(urls_to_submit)}] ❌ ({res['status_code']}) {res['url']} -> {res['text'][:80]}", flush=True)
                fail_count += 1

    elapsed = time.time() - start_time
    print(f"\n==========================================", flush=True)
    print(f"🎉 Batch submission finished in {elapsed:.2f}s!", flush=True)
    print(f"   • Success: {success_count} / {len(urls_to_submit)}")
    print(f"   • Failed:  {fail_count}")
    print(f"==========================================")

if __name__ == "__main__":
    main()
