"""Print one topic's full record (skeleton + details + verification fixes) as JSON.
   python3 scripts/show_topic.py <topicId>"""
import json, pathlib, sys

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
import skeleton  # noqa: E402

ROOT = pathlib.Path(__file__).resolve().parent.parent
tid = sys.argv[1]
t = next((x for x in skeleton.load() if x["id"] == tid), None)
if not t:
    sys.exit(f"unknown topic {tid}")
for f in sorted((ROOT / "data" / "topics-parts").glob("*.json")):
    for d in json.loads(f.read_text()):
        if d["id"] == tid:
            t.update(d)
            t["_detailsFile"] = str(f.relative_to(ROOT))
fx = ROOT / "data" / "topics-fixes" / f"{tid}.json"
if fx.exists():
    t.update(json.loads(fx.read_text()))
print(json.dumps(t, indent=1, ensure_ascii=False))
