#!/usr/bin/env python3
"""Assemble the manuscript: book.md, DOCX, EPUB, and a TTS-friendly plain-text version."""
import glob
import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))
CH_DIR = os.path.join(ROOT, "chapters")
OUT = os.path.join(ROOT, "output")
os.makedirs(OUT, exist_ok=True)

TITLE = "What the Dead Remember"
SUBTITLE = "A Star Wars story"

PARTS = {
    1: "Part One: The Returned",
    10: "Part Two: The Watchers",
    15: "Part Three: Two Against the Dark",
    24: "Part Four: Three",
}

NUM_WORDS = {
    1: "One", 2: "Two", 3: "Three", 4: "Four", 5: "Five", 6: "Six", 7: "Seven",
    8: "Eight", 9: "Nine", 10: "Ten", 11: "Eleven", 12: "Twelve", 13: "Thirteen",
    14: "Fourteen", 15: "Fifteen", 16: "Sixteen", 17: "Seventeen", 18: "Eighteen",
    19: "Nineteen", 20: "Twenty", 21: "Twenty-One", 22: "Twenty-Two",
    23: "Twenty-Three", 24: "Twenty-Four", 25: "Twenty-Five", 26: "Twenty-Six",
    27: "Twenty-Seven", 28: "Twenty-Eight", 29: "Twenty-Nine", 30: "Thirty",
    31: "Thirty-One", 32: "Thirty-Two", 33: "Thirty-Three", 34: "Thirty-Four",
}


def chapter_files():
    files = sorted(glob.glob(os.path.join(CH_DIR, "ch*.md")))
    out = []
    for f in files:
        m = re.search(r"ch(\d+)\.md$", f)
        if m:
            out.append((int(m.group(1)), f))
    return sorted(out)


def read_chapter(path):
    with open(path, encoding="utf-8") as fh:
        text = fh.read().strip()
    # First line is the heading: "## Chapter N: Title"
    lines = text.split("\n", 1)
    heading = lines[0].strip()
    body = lines[1].strip() if len(lines) > 1 else ""
    m = re.match(r"#+\s*Chapter\s+(\d+)\s*[:.\-–—]\s*(.+)$", heading)
    if m:
        num, title = int(m.group(1)), m.group(2).strip()
    else:
        num, title = None, heading.lstrip("# ").strip()
    return num, title, body


def build_book_md(chapters):
    parts = [f"% {TITLE}\n% \n% \n"]
    parts.append(f"# {TITLE}\n\n*{SUBTITLE}*\n\n")
    parts.append(
        "A work of fan fiction. Star Wars and all associated characters and settings "
        "belong to Lucasfilm and Disney. No infringement is intended; no money is made.\n\n"
    )
    for num, path in chapters:
        cnum, title, body = read_chapter(path)
        n = cnum or num
        if n in PARTS:
            parts.append(f"\n\n# {PARTS[n]}\n\n")
        parts.append(f"\n\n## Chapter {n}: {title}\n\n{body}\n")
    return "".join(parts)


# ---------- TTS conversion ----------

SMALL = {
    0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six",
    7: "seven", 8: "eight", 9: "nine", 10: "ten", 11: "eleven", 12: "twelve",
    13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen",
    18: "eighteen", 19: "nineteen",
}
TENS = {2: "twenty", 3: "thirty", 4: "forty", 5: "fifty", 6: "sixty", 7: "seventy",
        8: "eighty", 9: "ninety"}


def num_to_words(n: int) -> str:
    if n < 20:
        return SMALL[n]
    if n < 100:
        t, r = divmod(n, 10)
        return TENS[t] + ("" if r == 0 else "-" + SMALL[r])
    if n < 1000:
        h, r = divmod(n, 100)
        return SMALL[h] + " hundred" + ("" if r == 0 else " and " + num_to_words(r))
    if n < 1_000_000:
        th, r = divmod(n, 1000)
        return num_to_words(th) + " thousand" + ("" if r == 0 else (" and " if r < 100 else " ") + num_to_words(r))
    m, r = divmod(n, 1_000_000)
    return num_to_words(m) + " million" + ("" if r == 0 else " " + num_to_words(r))


def spell_numbers(text: str) -> str:
    def rep(m):
        s = m.group(0).replace(",", "")
        try:
            return num_to_words(int(s))
        except ValueError:
            return m.group(0)
    return re.sub(r"\b\d{1,3}(?:,\d{3})+\b|\b\d+\b", rep, text)


def to_tts(body: str) -> str:
    t = body
    # Scene breaks
    t = re.sub(r"^\s*\*\s*\*\s*\*\s*$", "\n\n\n", t, flags=re.M)
    # Remove emphasis markers
    t = re.sub(r"\*\*(.+?)\*\*", r"\1", t, flags=re.S)
    t = re.sub(r"(?<!\w)\*(?!\s)(.+?)(?<!\s)\*(?!\w)", r"\1", t, flags=re.S)
    t = re.sub(r"(?<!\w)_(?!\s)(.+?)(?<!\s)_(?!\w)", r"\1", t, flags=re.S)
    # Headings inside body (shouldn't be any) -> plain
    t = re.sub(r"^#+\s*", "", t, flags=re.M)
    # Dashes to commas for TTS pacing
    t = t.replace("—", ", ").replace("–", ", ")
    t = re.sub(r"\s*,\s*,\s*", ", ", t)
    # BBY/ABY abbreviations
    t = re.sub(r"\bBBY\b", "B B Y", t)
    t = re.sub(r"\bABY\b", "A B Y", t)
    t = spell_numbers(t)
    # Collapse >2 blank lines
    t = re.sub(r"\n{4,}", "\n\n\n", t)
    return t.strip()


def build_tts(chapters):
    out = [f"{TITLE}.\n\nA Star Wars story.\n\nA work of fan fiction.\n\n\n"]
    for num, path in chapters:
        cnum, title, body = read_chapter(path)
        n = cnum or num
        if n in PARTS:
            pt = PARTS[n].replace(":", ".")
            out.append(f"\n\n{pt}\n\n\n")
        out.append(f"\n\nChapter {NUM_WORDS.get(n, str(n))}. {title}.\n\n\n{to_tts(body)}\n")
    out.append("\n\nThe end.\n")
    return "".join(out)


def main():
    chapters = chapter_files()
    if not chapters:
        print("no chapters")
        sys.exit(1)
    book_md = build_book_md(chapters)
    with open(os.path.join(OUT, "What-the-Dead-Remember.md"), "w", encoding="utf-8") as fh:
        fh.write(book_md)
    tts = build_tts(chapters)
    with open(os.path.join(OUT, "What-the-Dead-Remember-TTS.txt"), "w", encoding="utf-8") as fh:
        fh.write(tts)
    # per-chapter TTS files
    tts_dir = os.path.join(OUT, "tts-chapters")
    os.makedirs(tts_dir, exist_ok=True)
    for num, path in chapters:
        cnum, title, body = read_chapter(path)
        n = cnum or num
        safe = re.sub(r"[^A-Za-z0-9]+", "-", title).strip("-")
        parts = []
        if n in PARTS:
            parts.append(f"{PARTS[n].replace(':', '.')}\n\n\n")
        parts.append(f"Chapter {NUM_WORDS.get(n, str(n))}. {title}.\n\n\n{to_tts(body)}\n")
        if n == max(c for c, _ in chapters):
            parts.append("\n\nThe end.\n")
        with open(os.path.join(tts_dir, f"{n:02d}-{safe}.txt"), "w", encoding="utf-8") as fh:
            fh.write("".join(parts))
    # pandoc conversions
    md = os.path.join(OUT, "What-the-Dead-Remember.md")
    meta = ["--metadata", f"title={TITLE}", "--metadata", "lang=en-GB", "--toc", "--toc-depth=2"]
    subprocess.run(["pandoc", md, "-o", os.path.join(OUT, "What-the-Dead-Remember.docx")] + meta, check=True)
    subprocess.run(["pandoc", md, "-o", os.path.join(OUT, "What-the-Dead-Remember.epub")] + meta
                   + ["--split-level=2"], check=True)
    total = sum(len(read_chapter(p)[2].split()) for _, p in chapters)
    print(f"chapters: {len(chapters)}  words: {total}")
    for n, p in chapters:
        print(f"  ch{n:02d}: {len(read_chapter(p)[2].split())}")


if __name__ == "__main__":
    main()
