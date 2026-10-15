#!/usr/bin/env python3
"""Assemble chapters into book.md, then build docx/epub and TTS files."""
import pathlib, re, subprocess, sys
ROOT = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "tools"))
import tts
chs = sorted((ROOT / "chapters").glob("ch*.md"))
front = (ROOT / "front_matter.md").read_text()
parts = [front.strip()]
for f in chs:
    t = f.read_text().strip()
    # demote: Part headings stay '#', chapter headings become '##'
    t = re.sub(r"(?m)^# (Chapter )", r"## \1", t)
    parts.append(t)
book = "\n\n".join(parts) + "\n"
(ROOT / "book.md").write_text(book)
words = sum(len(f.read_text().split()) for f in chs)
print("chapters:", len(chs), "words:", words)
out = ROOT / "output"; out.mkdir(exist_ok=True)
meta = ["--metadata", "title=The Wrong Verdict", "--metadata", "subtitle=Book One", "--metadata", "author=A Star Wars fanfiction"]
subprocess.run(["pandoc", str(ROOT / "book.md"), "-o", str(out / "The_Wrong_Verdict_Book_One.docx")] + meta, check=True)
subprocess.run(["pandoc", str(ROOT / "book.md"), "-o", str(out / "The_Wrong_Verdict_Book_One.epub"), "--toc", "--split-level=2"] + meta, check=True)
ffn = ROOT / "ffn_upload"; ffn.mkdir(exist_ok=True)
for f in chs:
    subprocess.run(["pandoc", str(f), "-o", str(ffn / (f.stem + ".docx"))], check=True)
# TTS per chapter + full
(ROOT / "tts").mkdir(exist_ok=True)
full = []
for f in chs:
    t = tts.convert(f.read_text())
    (ROOT / "tts" / (f.stem + ".txt")).write_text(t)
    full.append(t)
(ROOT / "tts" / "full_book_tts.txt").write_text("The Wrong Verdict. Book One.\n\n" + "\n\n".join(full))
print("built docx, epub, ffn_upload, tts")
