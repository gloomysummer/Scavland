#!/usr/bin/env python3
"""重新生成 public/_redirects 里的「未翻译 slug -> 英文页」301 回退块。

背景（2026-11-11）：/ru/ /de/ /ja/ 三个语言目录只翻译了英文指南的一部分，
剩下的 slug 会直接 404。GSC 里这些 URL 已有展示和点击（例如
/ru/guide/scavland-anomaly-scanner-and-artifacts/ 前 30 天还有 36 次点击），
404 等于把已经积累的信号扔掉。统一 301 到英文对应页。

另一个实测约束（2026-11-11）：Cloudflare Pages 只认 _redirects 里前 ~100 条规则，
超出的会被静默忽略。所以本脚本额外做两件事：
  1. 每个 slug 只写一条规则（不带结尾斜杠），不再成对写两遍；
  2. 对手写段落里「仅差结尾斜杠」的重复项去重，腾出配额。
规则顺序保持：手写段落原样在前，生成块在最后（`--sort` 可把源路径按字典序排）。

用法：
    python3 scripts/gen_locale_fallbacks.py          # 打印到 stdout
    python3 scripts/gen_locale_fallbacks.py --write  # 就地更新 public/_redirects
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


def parse_rules(text: str):
    """(comment_or_blank, source, dest) 顺序保留；返回去重后的手写段落。"""
    out, seen = [], set()
    for line in text.splitlines():
        s = line.strip()
        if not s or s.startswith("#"):
            out.append(line)
            continue
        parts = s.split()
        if len(parts) < 2:
            out.append(line)
            continue
        src = parts[0].rstrip("/") or "/"
        if src in seen:          # 与已保留规则只差结尾斜杠 -> 丢弃
            continue
        seen.add(src)
        out.append(f"{parts[0]}   {parts[1]}  301")
    # 收敛连续空行
    res, prev_blank = [], False
    for line in out:
        blank = not line.strip()
        if blank and prev_blank:
            continue
        res.append(line)
        prev_blank = blank
    return "\n".join(res).strip() + "\n"


def build_block(existing_rules: set) -> str:
    en = slugs(ROOT / "src/data/guides.ts")
    out = [BEGIN,
           "# 未翻译的本地化 URL 一律 301 到英文对应页，避免 404 丢掉已积累的展示与点击。",
           "# 每个 slug 一条（Cloudflare Pages 会处理结尾斜杠变体）。",
           "# 由 scripts/gen_locale_fallbacks.py 生成，不要手改。"]
    added = 0
    for loc in LOCALES:
        missing = sorted(en - slugs(ROOT / f"src/data/guides-{loc}.ts"))
        for slug in missing:
            src = f"/{loc}/guide/{slug}"
            if src in existing_rules:
                continue
            out.append(f"{src}   /guide/{slug}/   301")
            added += 1
    out.append(END)
    return "\n".join(out) + "\n", added


def main() -> None:
    p = ROOT / "public/_redirects"
    raw = p.read_text(encoding="utf-8").split(BEGIN)[0]
    body = parse_rules(raw).rstrip() + "\n"
    existing = {l.split()[0].rstrip("/") or "/" for l in body.splitlines()
                if l.strip() and not l.lstrip().startswith("#") and len(l.split()) >= 2}
    block, added = build_block(existing)
    final = body + "\n" + block
    total = sum(1 for l in final.splitlines()
                if l.strip() and not l.lstrip().startswith("#") and len(l.split()) >= 3)
    if "--write" in sys.argv:
        p.write_text(final, encoding="utf-8")
        print(f"已写入 {p}：手写段落保留，生成 {added} 条，总规则 {total} 条")
    else:
        sys.stdout.write(final)
        print(f"# 总规则 {total} 条", file=sys.stderr)


if __name__ == "__main__":
    main()
