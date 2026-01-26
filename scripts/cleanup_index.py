import os
import json

WEB_REPORTS_DIR = "/Users/soohyunglee/Documents/GitHub/SHawn-WEB/public/reports"
WEB_INDEX_FILE = os.path.join(WEB_REPORTS_DIR, "index.json")

def cleanup_index():
    with open(WEB_INDEX_FILE, 'r') as f:
        data = json.load(f)
    
    new_data = []
    for entry in data:
        # Check HTML path
        html_path = os.path.join(WEB_REPORTS_DIR, os.path.basename(entry['path']))
        if os.path.exists(html_path):
            # Check JSON path if exists
            if 'json_path' in entry:
                json_path = os.path.join(WEB_REPORTS_DIR, os.path.basename(entry['json_path']))
                if not os.path.exists(json_path):
                    del entry['json_path'] # JSON removed but HTML exists? (Rare)
            new_data.append(entry)
            
    with open(WEB_INDEX_FILE, 'w') as f:
        json.dump(new_data, f, indent=2, ensure_ascii=False)
    
    print(f"Cleaned index. Left {len(new_data)} entries.")

if __name__ == "__main__":
    cleanup_index()
