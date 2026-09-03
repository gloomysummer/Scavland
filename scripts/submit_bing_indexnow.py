#!/usr/bin/env python3
"""
Microsoft Bing & Yandex IndexNow Batch Submitter for Scavland Wiki
Submits URLs directly to Bing/IndexNow API for instant crawl and indexing.
Protocol Docs: https://www.indexnow.org/documentation
"""

import sys
import os
import json
import argparse
import urllib.request
import urllib.error
import xml.etree.ElementTree as ET

HOST = "scavland.wiki"
KEY = "7f50a8b9e6dc40439d73d6b049c812ef"
KEY_LOCATION = f"https://{HOST}/{KEY}.txt"
INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow"
DEFAULT_SITEMAP = f"https://{HOST}/sitemap-index.xml"

STATUS_EXPLANATIONS = {
    200: "✅ 200 OK: URLs submitted successfully and validated by IndexNow.",
    202: "🟡 202 Accepted: URLs received, Key validation in progress by search engines.",
    400: "❌ 400 Bad Request: Invalid payload structure or formatting.",
    403: "❌ 403 Forbidden: Key not found or does not match host.",
    422: "❌ 422 Unprocessable: URLs don't belong to the host or key invalid.",
}

def check_online_key():
    """Verify if the key file is publicly accessible on the live website."""
    print(f"[*] Checking if verification key is live at: {KEY_LOCATION}", flush=True)
    req = urllib.request.Request(KEY_LOCATION, headers={"User-Agent": "IndexNow-Checker/1.0"})
    try:
        with urllib.request.urlopen(req, timeout=8) as resp:
            content = resp.read().decode("utf-8").strip()
            if KEY in content:
                print("    ✅ Online key verified successfully!", flush=True)
                return True
            else:
                print(f"    ⚠️ Key file returned different content: {content[:50]}", flush=True)
                return False
    except Exception as e:
        print(f"    ⚠️ Key file not reachable yet online ({e}).", flush=True)
        print("    ℹ️ Please make sure to deploy/push your public directory to Cloudflare/hosting first.", flush=True)
        return False

def fetch_sitemap_urls(sitemap_url):
    """Recursively parse XML sitemaps to extract all target URLs."""
    print(f"[*] Fetching sitemap: {sitemap_url}", flush=True)
    req = urllib.request.Request(sitemap_url, headers={"User-Agent": "IndexNow-Submitter/1.0"})
    try:
        with urllib.request.urlopen(req, timeout=12) as resp:
            xml_content = resp.read()
    except Exception as e:
        print(f"❌ Failed to download sitemap: {e}", file=sys.stderr)
        return []

    try:
        root = ET.fromstring(xml_content)
    except ET.ParseError as e:
        print(f"❌ Failed to parse sitemap XML: {e}", file=sys.stderr)
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

def submit_indexnow(urls):
    """Send batch URLs to IndexNow endpoint."""
    if not urls:
        print("❌ No URLs provided to submit.", file=sys.stderr)
        return False

    print(f"[*] Preparing to submit {len(urls)} URLs to IndexNow for {HOST}...", flush=True)
    payload = {
        "host": HOST,
        "key": KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": urls[:10000]
    }
    
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        INDEXNOW_ENDPOINT,
        data=data,
        headers={
            "Content-Type": "application/json; charset=utf-8",
            "User-Agent": "IndexNow-Batch-Submitter/1.0"
        },
        method="POST"
    )

    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            code = resp.getcode()
            print(STATUS_EXPLANATIONS.get(code, f"Status code: {code}"))
            return True
    except urllib.error.HTTPError as e:
        code = e.code
        print(STATUS_EXPLANATIONS.get(code, f"HTTP Error {code}: {e.read().decode('utf-8', errors='ignore')}"), file=sys.stderr)
        return False
    except Exception as e:
        print(f"❌ Submission network error: {e}", file=sys.stderr)
        return False

def main():
    parser = argparse.ArgumentParser(description="Batch submit URLs to Microsoft Bing & IndexNow (Scavland Wiki)")
    parser.add_argument("--sitemap", default=DEFAULT_SITEMAP, help="URL of the XML sitemap (default: https://scavland.wiki/sitemap-index.xml)")
    parser.add_argument("--urls", nargs="+", help="Explicit URLs to submit")
    parser.add_argument("--skip-key-check", action="store_true", help="Skip checking key online")
    args = parser.parse_args()

    print("=" * 65)
    print("🚀 Microsoft Bing & IndexNow Batch Submitter (Scavland Wiki)")
    print("=" * 65)

    if not args.skip_key_check:
        check_online_key()

    target_urls = []
    if args.urls:
        for item in args.urls:
            target_urls.extend([u.strip() for u in item.split(",") if u.strip()])
    else:
        target_urls = fetch_sitemap_urls(args.sitemap)

    if not target_urls:
        print("❌ No URLs found to submit.")
        sys.exit(1)

    print(f"[*] Found {len(target_urls)} unique URLs:")
    for u in target_urls[:5]:
        print(f"    - {u}")
    if len(target_urls) > 5:
        print(f"    ... and {len(target_urls) - 5} more.")

    success = submit_indexnow(target_urls)
    if success:
        print("\n✨ Done! Microsoft Bing and IndexNow-enabled engines will begin crawling these URLs shortly.")
    else:
        print("\n⚠️ Submission encountered an issue. Please verify deployment of the key file.")

if __name__ == "__main__":
    main()
