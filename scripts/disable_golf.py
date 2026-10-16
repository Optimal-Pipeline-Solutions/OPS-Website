"""Close out the golf/putting contest: set enabled=false in golf-config.json and push.

Intended for a one-shot Windows Task Scheduler run (or manual execution) after an
event's winners display window ends. Resolves the repo root from its own location,
so no hardcoded paths. Safe to re-run: exits cleanly if already disabled.
"""
import json
import os
import subprocess
import sys

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONFIG = os.path.join(REPO, "golf-config.json")


def run(args):
    r = subprocess.run(args, cwd=REPO, capture_output=True, text=True, encoding="utf-8")
    print("$ " + " ".join(args))
    if r.stdout:
        print(r.stdout.strip())
    if r.stderr:
        print(r.stderr.strip())
    return r.returncode


def main():
    with open(CONFIG, encoding="utf-8") as f:
        cfg = json.load(f)

    if not cfg.get("enabled"):
        print("Golf event already disabled - nothing to do.")
        return 0

    cfg["enabled"] = False
    with open(CONFIG, "w", encoding="utf-8", newline="\n") as f:
        json.dump(cfg, f, indent=2)
        f.write("\n")
    print("golf-config.json: enabled set to false.")

    if run(["git", "add", "golf-config.json"]) != 0:
        return 1
    if run(["git", "commit", "-m",
            "Close out golf event: disable golf-config switch (scheduled takedown)"]) != 0:
        return 1
    # The sync workflow may commit upstream until this push lands; rebase and retry once.
    for attempt in (1, 2):
        run(["git", "pull", "--rebase", "origin", "main"])
        if run(["git", "push", "origin", "main"]) == 0:
            print("Pushed - golf event closed out.")
            return 0
        print("Push attempt {} failed, retrying...".format(attempt))
    print("ERROR: push failed after retries - close-out NOT published.")
    return 1


if __name__ == "__main__":
    sys.exit(main())
