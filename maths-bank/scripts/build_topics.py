"""Merge the topic skeleton with per-strand topic details into data/topics.json.

leadsTo is derived as the inverse of prerequisites so the two can never disagree.
"""
import json, pathlib, sys

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
import skeleton  # noqa: E402

ROOT = pathlib.Path(__file__).resolve().parent.parent
FIELDS = ["prerequisites", "keyIdea", "workedExamples", "misconceptions"]


def main():
    topics = skeleton.load()
    by_id = {t["id"]: t for t in topics}
    for f in sorted((ROOT / "data" / "topics-parts").glob("*.json")):
        for d in json.loads(f.read_text()):
            if d["id"] not in by_id:
                sys.exit(f"{f.name}: unknown topic {d['id']}")
            for k in FIELDS:
                if k in d:
                    by_id[d["id"]][k] = d[k]
    # Per-topic corrections made during verification (data/topics-fixes/<topicId>.json) win.
    for f in sorted((ROOT / "data" / "topics-fixes").glob("*.json")):
        d = json.loads(f.read_text())
        tid = d.get("id", f.stem)
        if tid not in by_id:
            sys.exit(f"{f.name}: unknown topic {tid}")
        for k in FIELDS:
            if k in d:
                by_id[tid][k] = d[k]
    missing = [t["id"] for t in topics if "keyIdea" not in t]
    if missing:
        print(f"WARNING: {len(missing)} topics have no details yet: {missing[:10]}")
    for t in topics:
        t.setdefault("prerequisites", [])
        t["prerequisites"] = [p for p in dict.fromkeys(t["prerequisites"]) if p != t["id"]]
        t["leadsTo"] = []
    for t in topics:
        for p in t["prerequisites"]:
            if p in by_id:
                by_id[p]["leadsTo"].append(t["id"])
    order = ["id", "title", "strand", "stages", "years", "convention", "scope", "prerequisites",
             "leadsTo", "keyIdea", "workedExamples", "misconceptions"]
    out = {
        "title": "Learn With Kian — Maths Question Bank",
        "strands": list(skeleton.STRANDS.values()),
        "stages": skeleton.STAGES,
        "topics": [{k: t[k] for k in order if k in t} for t in topics],
    }
    (ROOT / "data" / "topics.json").write_text(json.dumps(out, indent=1, ensure_ascii=False) + "\n")
    print(f"wrote data/topics.json with {len(topics)} topics")


if __name__ == "__main__":
    main()
