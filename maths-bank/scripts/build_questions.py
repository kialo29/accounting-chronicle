"""Merge per-topic question parts (data/questions/parts/<topicId>.json) into one file per strand
(data/questions/<strand>.json), ordered by topic then question id."""
import json, pathlib, sys

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
import skeleton  # noqa: E402

ROOT = pathlib.Path(__file__).resolve().parent.parent
FIELD_ORDER = ["id", "topicId", "difficulty", "type", "question", "parts", "marks", "calculator", "hint",
               "answer", "solution", "linkedTopicIds", "misconceptionIds", "variationSet", "diagram"]


def main():
    topics = skeleton.load()
    order = {t["id"]: i for i, t in enumerate(topics)}
    strand_of = {t["id"]: skeleton.STRAND_FILE[t["strand"]] for t in topics}
    out = {f: [] for f in skeleton.STRAND_FILE.values()}
    missing = []
    for t in topics:
        f = ROOT / "data" / "questions" / "parts" / f"{t['id']}.json"
        if not f.exists():
            missing.append(t["id"])
            continue
        for q in json.loads(f.read_text()):
            out[strand_of[t["id"]]].append({k: q[k] for k in FIELD_ORDER if k in q} | {k: v for k, v in q.items() if k not in FIELD_ORDER})
    total = 0
    for name, qs in out.items():
        qs.sort(key=lambda q: (order.get(q["topicId"], 9999), q["id"]))
        (ROOT / "data" / "questions" / f"{name}.json").write_text(json.dumps(qs, indent=1, ensure_ascii=False) + "\n")
        total += len(qs)
        print(f"{name:20s} {len(qs):5d}")
    print(f"total {total} questions; topics without questions: {len(missing)} {missing[:8]}")


if __name__ == "__main__":
    main()
