"""
Vedic Path - Flask Server
D:\\Hindu Religious\\serve.py
Run: python serve.py
"""
import json, re
from pathlib import Path
from flask import Flask, jsonify, render_template

app  = Flask(__name__)
BASE = Path(__file__).parent
DATA = BASE / "data"

def load_gita():
    # use SGS parsed data
    with open(DATA/"gita_sgs.json", encoding="utf-8") as f:
        sgs = json.load(f)
    return sgs

def load_rudram():
    with open(DATA/"rudram.json", encoding="utf-8") as f:
        return json.load(f)

def load_vsn():
    with open(DATA/"vsn.json", encoding="utf-8") as f:
        return json.load(f)

def clean_itrans(text):
    text = re.sub(r'\{[^}]+\}', '', text)
    for old, new in [
        ('R^i','ṛ'),('~N','ṅ'),('~n','ñ'),('N^','ṇ'),
        ('.m','ṁ'),('.h','ḥ'),('aa','ā'),('ii','ī'),('uu','ū'),
        ('AA','Ā'),('II','Ī'),('UU','Ū'),('Sh','ṣ'),('sh','ś'),('OM','ॐ'),
    ]:
        text = text.replace(old, new)
    return text.strip()

def clean_lines(lines):
    skip = ("#include","#end","##","Please send","send corrections")
    clean = []
    for line in lines:
        line = line.strip()
        if not line or any(line.startswith(s) for s in skip):
            continue
        clean.append(clean_itrans(line))
    return clean

print("Loading data...")
GITA   = load_gita()
RUDRAM = load_rudram()
VSN    = load_vsn()
print(f"Ready — Gita {len(GITA)} chapters, "
      f"{len(RUDRAM)} Rudram sections, {len(VSN)} VSN sections")

CHAPTER_NAMES = {
    1:"Arjuna Viṣāda Yoga",   2:"Sāṅkhya Yoga",
    3:"Karma Yoga",            4:"Jñāna Yoga",
    5:"Karma Sannyāsa Yoga",   6:"Ātma Saṁyama Yoga",
    7:"Jñāna Vijñāna Yoga",   8:"Akṣara Parabrahma Yoga",
    9:"Rājavidyā Rājaguhya Yoga", 10:"Vibhūti Yoga",
    11:"Viśvarūpa Sandarśana Yoga", 12:"Bhakti Yoga",
    13:"Kṣetra Kṣhetrajña Vibhāga Yoga", 14:"Guṇatraya Vibhāga Yoga",
    15:"Puruṣottama Prāpti Yoga", 16:"Daivāsura Sampad Vibhāga Yoga",
    17:"Śhraddhātraya Vibhāga Yoga", 18:"Mokṣha Sannyāsa Yoga",
}

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/gita/<int:ch>")
def api_gita(ch):
    data = GITA.get(str(ch), {})
    hdr  = data.get("header", {})
    verses = data.get("verses", [])

    # clean up header title — remove chapter number prefix if present
    title = hdr.get("title","")
    title = re.sub(r'^\d+\.\s*','', title).strip()

    # ensure header line1 has Om line
    line1 = hdr.get("line1","")
    if not line1:
        line1 = "|| Om Śrī Paramātmanē Namaḥ ||"

    return jsonify({
        "chapter": ch,
        "name_en": CHAPTER_NAMES.get(ch,""),
        "header_en": {
            "line1": line1,
            "line2": hdr.get("line2",""),
            "title": title
        },
        "verses": verses,
        "total": len(verses),
    })

@app.route("/api/chapters")
def api_chapters():
    return jsonify([{
        "ch": ch,
        "name": CHAPTER_NAMES.get(ch,""),
        "total": GITA.get(str(ch),{}).get("total",0)
    } for ch in range(1,19)])

@app.route("/api/namakam/<int:sec>")
def api_namakam(sec):
    idx   = min(sec + 2, len(RUDRAM)-1)
    lines = clean_lines(RUDRAM[idx].get("lines",[]))
    return jsonify({"sec":sec,"total":11,
                    "name":f"Anuvaka {sec+1}","lines":lines})

@app.route("/api/chamakam/<int:sec>")
def api_chamakam(sec):
    idx   = min(sec + 13, len(RUDRAM)-1)
    lines = clean_lines(RUDRAM[idx].get("lines",[]))
    return jsonify({"sec":sec,"total":9,
                    "name":f"Anuvaka {sec+1}","lines":lines})

@app.route("/api/vsn/<int:sec>")
def api_vsn(sec):
    sec   = min(sec, len(VSN)-1)
    lines = clean_lines(VSN[sec].get("lines",[]))
    labels = (["Dhyana Shlokas"] +
              [f"Shloka {i}" for i in range(1,len(VSN))] +
              ["Phala Shruti"])
    name = labels[sec] if sec < len(labels) else f"Section {sec+1}"
    return jsonify({"sec":sec,"total":len(VSN),"name":name,"lines":lines})

if __name__ == "__main__":
    print("\n🕉  Vedic Path")
    print("   Laptop : http://localhost:5000")
    print("   Network: http://0.0.0.0:5000\n")
    app.run(host="0.0.0.0", port=5000, debug=False)
