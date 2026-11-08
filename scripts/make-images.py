"""Render og.png, apple-touch-icon.png and favicon.ico into src/static.

Run with any Python that has Playwright + Chromium:
    python scripts/make-images.py
The images are committed, so the Cloudflare build never needs this.
"""
import pathlib, struct
from playwright.sync_api import sync_playwright

root = pathlib.Path(__file__).resolve().parent.parent
static = root / "src" / "static"
icon = (static / "favicon.svg").read_text()

def chip(color, label, path):
    return f"""<div class="chip"><svg viewBox="0 0 24 24" style="color:{color}">{path}</svg>{label}</div>"""

PRINTER = '<path d="M7 9V3h10v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M7 14h10v7H7z"/>'
SEND = '<path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4z"/>'
PEN = '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/><path d="m9 17 .8-2.8 4.7-4.7 2 2-4.7 4.7z"/>'
SCAN = '<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M7 12h10"/>'

OG = f"""<!doctype html><html><head><style>
*{{margin:0;box-sizing:border-box}}
body{{width:1200px;height:630px;background:#f7f8fb;font-family:-apple-system,"Helvetica Neue",Arial,sans-serif;color:#121726;
display:flex;flex-direction:column;justify-content:space-between;padding:70px 80px;border-bottom:18px solid #2454d6}}
.top{{display:flex;align-items:center;gap:18px;font-size:38px;font-weight:800;letter-spacing:-1px}}
.top svg{{width:72px;height:72px}} .top span{{color:#2454d6}}
h1{{font-size:78px;line-height:1.05;letter-spacing:-2.5px;max-width:1040px}}
.chips{{display:flex;gap:16px}}
.chip{{display:flex;align-items:center;gap:12px;background:#fff;border:2px solid #e1e5ee;border-radius:18px;padding:14px 22px;font-size:30px;font-weight:700}}
.chip svg{{width:34px;height:34px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}}
</style></head><body>
<div class="top">{icon}<div>Smart<span>Printer</span></div></div>
<h1>Print, scan, fax and edit PDFs from your phone</h1>
<div class="chips">{chip('#2454d6','Print',PRINTER)}{chip('#2454d6','Scan',SCAN)}{chip('#0b7a69','Fax',SEND)}{chip('#c8392b','PDF',PEN)}</div>
</body></html>"""

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width": 1200, "height": 630})
    pg.set_content(OG); pg.screenshot(path=str(static / "og.png"))
    for size, name in [(180, "apple-touch-icon.png"), (32, "favicon-32.png")]:
        pg = b.new_page(viewport={"width": size, "height": size})
        sized = icon.replace('<svg ', f'<svg width="{size}" height="{size}" ')
        pg.set_content(f"<html><body style='margin:0'>{sized}</body></html>")
        pg.screenshot(path=str(static / name), omit_background=True)
    b.close()

# favicon.ico = one 32x32 PNG wrapped in an ICO container
png = (static / "favicon-32.png").read_bytes()
ico = struct.pack("<HHH", 0, 1, 1) + struct.pack("<BBBBHHII", 32, 32, 0, 0, 1, 32, len(png), 22) + png
(static / "favicon.ico").write_bytes(ico)
(static / "favicon-32.png").unlink()
print("wrote", sorted(f.name for f in static.iterdir()))
