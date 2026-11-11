#!/usr/bin/env python3
"""重新生成 public/_redirects 里的「未翻译 slug -> 英文页」301 回退块。

背景（2026-11-11）：/ru/ /de/ /ja/ 三个语言目录只翻译了英文指南的一部分，
剩下的 slug 会直接 404。GSC 里这些 URL 已有展示和点击（例如
/ru/guide/scavland-anomaly-scanner-and-artifacts/ 前 30 天还有 36 次点击），
404 等于把已经积累的信号扔掉。统一 301 到英文对应页。

用法：
    python3 scripts/gen_locale_fallbacks.py          # 打印到 stdout
    python3 scripts/gen_locale_fallbacks.py --write  # 就地更新 public/_redirects

规则：只处理「英文有、该语言没有」的 slug；已有手工规则不重复添加。
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BEGIN = "# >>> locale-fallback (generated) >>>"
END = "# <<< locale-fallback <<<"
LOCALES = ["ru", "de", "ja"]


def slugs(path: Path) -> set:
    return set(re.findall(r"slug:\s*'([^']+)'", path.read_text(encoding="utf-8")))


def build_block() -> str:
    en = slugs(ROOT / "src/data/guides.ts")
    existing = (ROOT / "public/_redirects").read_text(encoding="utf-8")
    existing = existing.split(BEGIN)[0]  # 已有生成块视为待替换
    out = [BEGIN,
           "# 未翻译的本地化 URL 一律 301 到英文对应页，避免 404 丢掉已积累的展示与点击。",
           "# 由 scripts/gen_locale_fallbacks.py 生成，不要手改。"]
    seen = set()
    for loc in LOCALES:
        missing = sorted(en - slugs(ROOT / f"src/data/guides-{loc}.ts"))
        for slug in missing:
            dst = f"/guide/{slug}/"
            for src in (f"/{loc}/guide/{slug}", f"/{loc}/guide/{slug}/"):
                if src in seen or re.search(rf"^{re.escape(src)}\s", existing, re.M):
                    continue
                seen.add(src)
                out.append(f"{src}   {dst}  301")
    out.append(END)
    return "\n".join(out) + "\n"


def main() -> None:
    block = build_block()
    if "--write" in sys.argv:
        p = ROOT / "public/_redirects"
        text = p.read_text(encoding="utf-8")
        head = text.split(BEGIN)[0].rstrip() + "\n\n"
        p.write_text(head + block, encoding="utf-8")
        print(f"已写入 {p}（{block.count(' 301')} 条规则）")
    else:
        sys.stdout.write(block)


if __name__ == "__main__":
    main()
