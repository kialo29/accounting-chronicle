#!/usr/bin/env python3
"""Convert chapters/chNN.md into TTS-friendly plain text in tts/chNN.txt."""
import re, sys, pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent
PHON = [
    (r"\bPadmé\b", "Padmay"), (r"\bPadme\b", "Padmay"),
    (r"\bBarriss\b", "Barris"),
    (r"\bAhsoka\b", "Ah-soka"),
    (r"\bMirialans?\b", lambda m: "Mirry-ah-lan" + ("s" if m.group(0).endswith("s") else "")),
    (r"\bCoruscanti\b", "Core-uh-santee"), (r"\bCoruscant\b", "Core-uh-sant"),
    (r"\bDathomirian\b", "Dath-oh-meerian"), (r"\bDathomir\b", "Dath-oh-meer"),
    (r"\bWeequay\b", "Wee-kway"), (r"\bTwi'lek\b", "Twy-lek"),
    (r"\blekku\b", "lekoo"), (r"\bmontrals\b", "mon-trahls"),
    (r"\bTogrutan?\b", lambda m: "Toe-groota" + ("n" if m.group(0).endswith("n") else "")),
    (r"\bKaminoans?\b", lambda m: "Ka-mee-noan" + ("s" if m.group(0).endswith("s") else "")),
    (r"\bKamino\b", "Ka-mee-no"), (r"\bNala Se\b", "Nahla Say"),
    (r"\bSerenno\b", "Seh-renno"), (r"\bDuros\b", "Dur-ose"),
    (r"\bkyber\b", "kyber"), (r"\bShaak Ti\b", "Shahk Tee"),
    (r"\bKi-Adi-Mundi\b", "Kee Ah-dee Mundi"),
    (r"\bCT-5555\b", "C T five five five five"), (r"\bCT-5385\b", "C T five three eight five"),
    (r"\bCC-1010\b", "C C ten ten"), (r"\bAZI-3\b", "Ay Zee Eye Three"),
    (r"\bC-3PO\b", "See Threepio"), (r"\bR2-D2\b", "Artoo Detoo"),
    (r"\bHoloNet\b|\bHolonet\b", "Holo-net"),
]
def convert(md: str) -> str:
    lines = md.splitlines()
    out = []
    for ln in lines:
        s = ln.strip()
        if s.startswith("#"):
            h = s.lstrip("#").strip()
            h = re.sub(r"^Chapter (\d+):\s*", r"Chapter \1. ", h)
            out.append(h.rstrip(".") + ".")
            out.append("")
            continue
        if re.fullmatch(r"(\*\s*){3,}|-{3,}|_{3,}|⁂", s):
            out.append("")
            out.append("Scene break.")
            out.append("")
            continue
        out.append(ln)
    t = "\n".join(out)
    t = re.sub(r"[*_]{1,3}([^*_\n]+?)[*_]{1,3}", r"\1", t)   # italics/bold
    t = t.replace("*", "")
    t = re.sub(r"\s*[—–]\s*", ", ", t)                         # dashes -> comma pause
    t = re.sub(r",\s*,", ",", t)
    t = t.replace("…", "...")
    t = re.sub(r"[“”]", '"', t); t = re.sub(r"[‘’]", "'", t)
    t = re.sub(r"#(\d+)", r"number \1", t)
    for pat, rep in PHON:
        t = re.sub(pat, rep, t)
    t = re.sub(r"\n{3,}", "\n\n", t)
    return t.strip() + "\n\nEnd of chapter.\n"
if __name__ == "__main__":
    (ROOT / "tts").mkdir(exist_ok=True)
    files = sorted((ROOT / "chapters").glob("ch*.md"))
    for f in files:
        (ROOT / "tts" / (f.stem + ".txt")).write_text(convert(f.read_text()))
    print(f"converted {len(files)} chapters")
