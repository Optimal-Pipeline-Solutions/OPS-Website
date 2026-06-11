import requests
import json
import os
from datetime import datetime, timezone

SHEET_ID = "5004471427878788"
API_TOKEN = os.environ.get("SMARTSHEET_TOKEN", "rhvriSvnpHOTVjqnDtPYqQyveTpKDr8WKO3T1")
OUTPUT_FILE = os.path.join(os.path.dirname(__file__), "..", "golf-data.json")


def fetch_sheet():
    headers = {"Authorization": "Bearer {}".format(API_TOKEN)}
    url = "https://api.smartsheet.com/2.0/sheets/{}".format(SHEET_ID)
    resp = requests.get(url, headers=headers, timeout=30)
    resp.raise_for_status()
    return resp.json()


def parse_rows(data):
    col_map = {col["id"]: col["title"] for col in data.get("columns", [])}
    rows = []
    for row in data.get("rows", []):
        r = {}
        for cell in row.get("cells", []):
            col = col_map.get(cell.get("columnId"), "")
            r[col] = cell.get("displayValue") or cell.get("value") or ""
        if any(r.values()):
            rows.append({
                "name":          r.get("Name", ""),
                "company":       r.get("Company", ""),
                "number":        r.get("Number", ""),
                "shot1":         r.get("Shot #1 ", "") or r.get("Shot #1", ""),
                "shot2":         r.get("Shot # 2", "") or r.get("Shot #2", ""),
                "shot3":         r.get("Shot #3", ""),
                "current_score": r.get("Current Score", ""),
            })
    return rows


def main():
    data = fetch_sheet()
    rows = parse_rows(data)
    output = {
        "last_updated": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "row_count": len(rows),
        "rows": rows,
    }
    out_path = os.path.normpath(OUTPUT_FILE)
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(output, f, indent=2)
    print("Wrote {} rows to {}".format(len(rows), out_path))


if __name__ == "__main__":
    main()
