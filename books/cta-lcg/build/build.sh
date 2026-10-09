#!/bin/bash
# Compile the book: full audio script, combined reading edition (md, html, pdf).
set -e
cd "$(dirname "$0")"
CH=../chapters
NAME=The-Living-Law-Groups-and-Borders
AUD=$NAME-full-audio-script.txt
RD=$NAME-reading-edition.md
: > "$AUD"
first=1
while read -r s; do
  [ -z "$s" ] && continue
  [ $first -eq 0 ] && printf '\n\n' >> "$AUD"
  cat "$CH/$s.txt" >> "$AUD"; first=0
done < order.txt
{
  printf -- '---\ntitle: "The Living Law: Groups and Borders"\nsubtitle: "A story-led guide to the CTA Advanced Technical paper, Taxation of Larger Companies and Groups (Finance Act 2026)"\nlang: en-GB\n---\n\n'
  while read -r s; do
    [ -z "$s" ] && continue
    cat "$CH/$s-reading.md"; printf '\n\n'
  done < order.txt
} > "$RD"
pandoc "$RD" -f markdown -t html5 -s --toc --toc-depth=1 --css style.css --embed-resources --metadata title="The Living Law: Groups and Borders" -o "$NAME-reading-edition.html"
/opt/pw-browsers/chromium-1194/chrome-linux/chrome --headless --no-sandbox --disable-gpu --no-pdf-header-footer --print-to-pdf="$NAME-reading-edition.pdf" "file://$PWD/$NAME-reading-edition.html" 2>/dev/null
wc -w "$AUD" "$RD"
ls -la "$NAME"*
