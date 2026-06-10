"""
Vedic Path - Streamlit App
D:\\Hindu Religious\\app.py
Deploy: streamlit run app.py
"""
import json, re, streamlit as st
from pathlib import Path

BASE = Path(__file__).parent
DATA = BASE / "data"

st.set_page_config(page_title="Vedic Path 🕉", page_icon="🕉",
                   layout="wide", initial_sidebar_state="collapsed")

# ── hide streamlit chrome ──────────────────────────────────────────────────
st.markdown("""<style>
#MainMenu,header,footer,[data-testid="stToolbar"],
[data-testid="stDecoration"],[data-testid="stStatusWidget"]{display:none!important;}
.main .block-container{padding:0!important;max-width:480px!important;margin:0 auto!important;}
.main{padding:0!important;background:#0f0f1e;}
[data-testid="stAppViewContainer"]{background:#0f0f1e;}
[data-testid="stVerticalBlock"]{gap:0!important;}

/* selectbox */
.stSelectbox label{display:none!important;}
.stSelectbox>div>div{background:#c8a030!important;border:none!important;
  border-radius:20px!important;color:#0a0808!important;font-weight:700!important;font-size:13px!important;}
.stSelectbox>div>div>div{color:#0a0808!important;}
.stSelectbox svg{fill:#0a0808!important;}

/* buttons */
.stButton>button{background:#1e1a08!important;border:1.5px solid #b09040!important;
  border-radius:20px!important;color:#c8a840!important;font-size:12px!important;
  font-weight:600!important;padding:6px 4px!important;width:100%!important;}
.stButton>button[kind="primary"]{background:#c8a030!important;
  border-color:#c8a030!important;color:#0a0808!important;}
.stButton>button:hover{border-color:#c8a030!important;color:#c8a030!important;}

/* control row */
[data-testid="stHorizontalBlock"]{gap:4px!important;padding:7px 10px!important;
  background:#0c0c20!important;border-bottom:1px solid #1a1a08!important;}

/* verse styles */
.topbar{background:#1a1a2e;padding:10px 14px;display:flex;align-items:center;
  justify-content:space-between;border-bottom:2px solid #c8a03033;}
.tt{color:#e8c97a;font-size:17px;font-weight:500;font-family:Georgia,serif;}
.ts{color:#7878a8;font-size:11px;margin-top:2px;}
.tc{color:#7878a8;font-size:12px;white-space:nowrap;}
.ch-hdr{text-align:center;padding:16px 14px 12px;border-bottom:0.5px solid #1a1a38;}
.ch-hdr-line{font-size:16px;color:#9898c8;font-family:Georgia,serif;line-height:1.9;}
.ch-hdr-title{font-size:21px;color:#e8c97a;font-family:Georgia,serif;font-weight:500;margin-top:6px;}
.vblock{padding:14px 14px 12px;border-bottom:0.5px solid #1a1a38;}
.speaker{font-size:14px;font-style:italic;margin-bottom:12px;color:#7aaad8;font-family:Georgia,serif;}
.sl{font-size:22px;color:#ede0b0;line-height:1.7;padding:7px 12px;
  background:#141428;border-radius:7px;margin-bottom:7px;font-family:Georgia,serif;}
.si{font-size:22px;color:#ccc090;line-height:1.7;padding:7px 12px 7px 38px;
  background:#141428;border-radius:7px;margin-bottom:7px;font-family:Georgia,serif;}
.vnum{color:#c8a03077;text-align:right;margin:4px 0 10px;font-size:13px;}
.mbox{background:#12122a;border-radius:8px;padding:10px 12px;
  border:0.5px solid #252548;margin-top:4px;}
.mlbl{font-size:10px;color:#5858a0;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:5px;}
.mtxt{line-height:1.7;color:#9898c8;font-size:15px;}
.progbar{background:#1a1a2e;padding:5px 14px;display:flex;align-items:center;
  gap:8px;border-bottom:0.5px solid #2a2a4a;}
.pbg{flex:1;height:3px;background:#2a2a4a;border-radius:2px;overflow:hidden;}
.pf{height:100%;background:#c8a030;border-radius:2px;}
.pbl{font-size:11px;color:#6060a0;white-space:nowrap;}
.dots{background:#0c0c20;padding:6px 14px;display:flex;justify-content:center;
  align-items:center;gap:4px;border-bottom:0.5px solid #1a1a38;flex-wrap:wrap;}
.dot{width:9px;height:9px;border-radius:50%;background:#2a2a40;
  border:1.5px solid #4a4a70;display:inline-block;}
.doton{width:9px;height:9px;border-radius:50%;background:#c8a030;
  border:1.5px solid #c8a030;display:inline-block;}
.dotl{font-size:11px;color:#6060a0;margin-right:4px;}
.idx-card{background:#141428;border-radius:8px;padding:12px 14px;
  margin-bottom:6px;border:0.5px solid #252548;display:flex;
  align-items:center;justify-content:space-between;}
.idx-card-on{background:#1e1a08;border-color:#c8a030;}
.idx-cn{color:#c8a030;font-size:12px;font-weight:600;}
.idx-cname{color:#ede0b0;font-size:15px;font-family:Georgia,serif;margin-top:2px;}
.idx-ct{color:#5858a0;font-size:12px;}
.sec-hdr{color:#c8a030;font-size:11px;text-transform:uppercase;letter-spacing:2px;padding:10px 14px 6px;}
.prc{background:#141428;border-radius:8px;padding:12px;margin-bottom:8px;border:0.5px solid #252548;}
</style>""", unsafe_allow_html=True)

# ── DATA ───────────────────────────────────────────────────────────────────

@st.cache_data
def load_gita():
    with open(DATA/"gita_meanings.json", encoding="utf-8") as f:
        raw = json.load(f)
    with open(DATA/"gita_translations.json", encoding="utf-8") as f:
        traw = json.load(f)
    trans = {}
    for item in traw:
        vid = item["verse_id"]
        if vid not in trans: trans[vid] = {}
        if item["author_id"] == 16: trans[vid]["en"] = item["description"]
        elif item["author_id"] == 1:  trans[vid]["hi"] = item["description"]
    chapters = {}
    for v in raw:
        ch = v["chapter_number"]
        if ch not in chapters: chapters[ch] = []
        tlines_raw = [l.strip() for l in v["transliteration"].strip().split("\n") if l.strip()]
        spk_en = ""
        if tlines_raw and "uvācha" in tlines_raw[0].lower():
            spk_en = tlines_raw[0]; tlines_raw = tlines_raw[1:]
        tlines = []
        for line in tlines_raw:
            words = line.split()
            if len(words) <= 2: tlines.append(line); continue
            mid = len(words)//2
            tlines.append(" ".join(words[:mid]))
            tlines.append(" ".join(words[mid:]))
        text  = re.sub(r'।।[\d\.]+।।','',v["text"].strip())
        dparts= [p.strip() for p in text.split("।") if p.strip()]
        spk_sa= ""
        if dparts and "उवाच" in dparts[0]:
            spk_sa = dparts[0]+" -"; dparts = dparts[1:]
        dlines= []
        for part in dparts:
            words = part.split()
            if len(words)<=2: dlines.append(part); continue
            mid=len(words)//2
            dlines.append(" ".join(words[:mid]))
            dlines.append(" ".join(words[mid:]))
        vo = v["verse_order"]
        chapters[ch].append({
            "vn":v["verse_number"],"vo":vo,"ch":ch,
            "tlines":tlines,"dlines":dlines,
            "spk_en":spk_en,"spk_sa":spk_sa,
            "meaning_en":trans.get(vo,{}).get("en",""),
            "meaning_hi":trans.get(vo,{}).get("hi",""),
        })
    return chapters

@st.cache_data
def load_sgs_headers():
    try:
        with open(DATA/"gita_sgs.json", encoding="utf-8") as f:
            sgs = json.load(f)
        hdrs = {}
        for ch_str, data in sgs.items():
            ch = int(ch_str)
            h = data.get("header",{})
            title = re.sub(r'^\d+\.\s*','',h.get("title","")).strip()
            hdrs[ch] = {"line1":h.get("line1","|| Om Śrī Paramātmanē Namaḥ ||"),
                        "line2":h.get("line2",""),"title":title}
        return hdrs
    except: return {}

@st.cache_data
def load_rudram():
    with open(DATA/"rudram.json", encoding="utf-8") as f: return json.load(f)

@st.cache_data
def load_vsn():
    with open(DATA/"vsn.json", encoding="utf-8") as f: return json.load(f)

def clean_itrans(text):
    text = re.sub(r'\{[^}]+\}','',text)
    for o,n in [('R^i','ṛ'),('~N','ṅ'),('~n','ñ'),('N^','ṇ'),('.m','ṁ'),
                ('.h','ḥ'),('aa','ā'),('ii','ī'),('uu','ū'),('AA','Ā'),
                ('II','Ī'),('UU','Ū'),('Sh','ṣ'),('sh','ś'),('OM','ॐ')]:
        text = text.replace(o,n)
    return text.strip()

def clean_lines(lines):
    skip=("#include","#end","##","Please send","send corrections")
    return [clean_itrans(l.strip()) for l in lines
            if l.strip() and not any(l.strip().startswith(s) for s in skip)]

CHAPTER_NAMES = {
    1:"Arjuna Viṣāda Yoga",2:"Sāṅkhya Yoga",3:"Karma Yoga",
    4:"Jñāna Yoga",5:"Karma Sannyāsa Yoga",6:"Ātma Saṁyama Yoga",
    7:"Jñāna Vijñāna Yoga",8:"Akṣara Parabrahma Yoga",
    9:"Rājavidyā Rājaguhya Yoga",10:"Vibhūti Yoga",
    11:"Viśvarūpa Sandarśana Yoga",12:"Bhakti Yoga",
    13:"Kṣetra Kṣhetrajña Vibhāga Yoga",14:"Guṇatraya Vibhāga Yoga",
    15:"Puruṣottama Prāpti Yoga",16:"Daivāsura Sampad Vibhāga Yoga",
    17:"Śhraddhātraya Vibhāga Yoga",18:"Mokṣha Sannyāsa Yoga",
}

# ── STATE ──────────────────────────────────────────────────────────────────
def init():
    defs={"tab":"gita","lang":"en","mode":"recite","nav":"read",
          "ch":12,"vi":0,"nam_sec":0,"cham_sec":0,"vsn_sec":0,
          "done":set()}
    for k,v in defs.items():
        if k not in st.session_state: st.session_state[k]=v
init()

# ── HTML HELPERS ───────────────────────────────────────────────────────────
def verse_html(v, lang):
    spk   = v["spk_sa"] if lang=="sa" else v["spk_en"]
    lines = v["dlines"] if lang=="sa" else v["tlines"]
    mean  = v["meaning_hi"] if lang=="sa" else v["meaning_en"]
    h = '<div class="vblock">'
    if spk: h+=f'<div class="speaker">{spk}</div>'
    for i,l in enumerate(lines):
        h+=f'<div class="{"si" if i%2==1 else "sl"}">{l}</div>'
    h+=f'<div class="vnum">||{v["vn"]}||</div>'
    if mean: h+=f'<div class="mbox"><div class="mlbl">Meaning</div><div class="mtxt">{mean}</div></div>'
    h+='</div>'
    return h

def ch_header_html(ch, lang, hdrs):
    if lang=="sa":
        sa_hdrs={1:("|| अथ प्रथमोऽध्यायः ||","अर्जुनविषादयोगः"),
                 2:("|| अथ द्वितीयोऽध्यायः ||","साङ्ख्ययोगः"),
                 3:("|| अथ तृतीयोऽध्यायः ||","कर्मयोगः"),
                 4:("|| अथ चतुर्थोऽध्यायः ||","ज्ञानयोगः"),
                 5:("|| अथ पञ्चमोऽध्यायः ||","कर्मसंन्यासयोगः"),
                 6:("|| अथ षष्ठोऽध्यायः ||","आत्मसंयमयोगः"),
                 7:("|| अथ सप्तमोऽध्यायः ||","ज्ञानविज्ञानयोगः"),
                 8:("|| अथ अष्टमोऽध्यायः ||","अक्षरपरब्रह्मयोगः"),
                 9:("|| अथ नवमोऽध्यायः ||","राजविद्याराजगुह्ययोगः"),
                 10:("|| अथ दशमोऽध्यायः ||","विभूतियोगः"),
                 11:("|| अथ एकादशोऽध्यायः ||","विश्वरूपसन्दर्शनयोगः"),
                 12:("|| अथ द्वादशोऽध्यायः ||","भक्तियोगः"),
                 13:("|| अथ त्रयोदशोऽध्यायः ||","क्षेत्रक्षेत्रज्ञविभागयोगः"),
                 14:("|| अथ चतुर्दशोऽध्यायः ||","गुणत्रयविभागयोगः"),
                 15:("|| अथ पञ्चदशोऽध्यायः ||","पुरुषोत्तमप्राप्तियोगः"),
                 16:("|| अथ षोडशोऽध्यायः ||","दैवासुरसम्पद्विभागयोगः"),
                 17:("|| अथ सप्तदशोऽध्यायः ||","श्रद्धात्रयविभागयोगः"),
                 18:("|| अथ अष्टादशोऽध्यायः ||","मोक्षसंन्यासयोगः")}
        l2,title = sa_hdrs.get(ch,("",""))
        l1 = "|| ॐ श्री परमात्मने नमः ||"
    else:
        h = hdrs.get(ch,{})
        l1 = h.get("line1","|| Om Śrī Paramātmanē Namaḥ ||")
        l2 = h.get("line2","")
        title = h.get("title", CHAPTER_NAMES.get(ch,""))
    return f'''<div class="ch-hdr">
        <div class="ch-hdr-line">{l1}</div>
        <div class="ch-hdr-line">{l2}</div>
        <div class="ch-hdr-title">{title}</div>
    </div>'''

def dots_html(total, current):
    show = min(total,25)
    h = f'<div class="dots"><span class="dotl">{current+1}/{total}</span>'
    for i in range(show):
        h+=f'<span class="{"doton" if i==current else "dot"}"></span>'
    h+='</div>'
    return h

def rudram_vsn_html(lines):
    h=""
    for i,l in enumerate(lines):
        h+=f'<div class="{"si" if i%2==1 else "sl"}">{l}</div>'
    return h

# ── CONTROLS ───────────────────────────────────────────────────────────────
def ctrl_bar():
    tab=st.session_state.tab; lang=st.session_state.lang
    mode=st.session_state.mode
    tab_map={"gita":"Bhagavad Gita","namakam":"Namakam",
             "chamakam":"Chamakam","vsn":"Vishnu Sahasranamam"}
    c0,c1,c2,c3,c4,c5,c6,c7 = st.columns([2.5,2.2,1.4,1.6,0.2,0.9,0.9,0.9])
    with c0:
        nt=st.selectbox("Text",list(tab_map.keys()),
            format_func=lambda x:tab_map[x],
            index=list(tab_map.keys()).index(tab),
            key="tab_sel",label_visibility="collapsed")
        if nt!=tab:
            st.session_state.tab=nt; st.session_state.vi=0; st.rerun()
    with c1:
        if tab=="gita":
            nch=st.selectbox("Ch",list(range(1,19)),
                format_func=lambda x:f"Ch.{x} — {CHAPTER_NAMES[x][:16]}",
                index=st.session_state.ch-1,
                key="ch_sel",label_visibility="collapsed")
            if nch!=st.session_state.ch:
                st.session_state.ch=nch; st.session_state.vi=0; st.rerun()
        elif tab=="namakam":
            ns=st.selectbox("Anuvaka",list(range(1,12)),
                format_func=lambda x:f"Anuvaka {x}",
                index=st.session_state.nam_sec,
                key="nam_sel",label_visibility="collapsed")
            if ns-1!=st.session_state.nam_sec:
                st.session_state.nam_sec=ns-1; st.rerun()
        elif tab=="chamakam":
            ns=st.selectbox("Anuvaka",list(range(1,10)),
                format_func=lambda x:f"Anuvaka {x}",
                index=st.session_state.cham_sec,
                key="cham_sel",label_visibility="collapsed")
            if ns-1!=st.session_state.cham_sec:
                st.session_state.cham_sec=ns-1; st.rerun()
        else:
            vsn=load_vsn()
            labels=["Dhyana Shlokas"]+[f"Shloka {i}" for i in range(1,len(vsn))]
            ns=st.selectbox("Section",list(range(len(vsn))),
                format_func=lambda x:labels[x] if x<len(labels) else f"Sec {x}",
                index=st.session_state.vsn_sec,
                key="vsn_sel",label_visibility="collapsed")
            if ns!=st.session_state.vsn_sec:
                st.session_state.vsn_sec=ns; st.rerun()
    with c2:
        if st.button("Recite",key="b_re",
                     type="primary" if mode=="recite" else "secondary"):
            st.session_state.mode="recite"; st.rerun()
    with c3:
        if st.button("Tutorial",key="b_tu",
                     type="primary" if mode=="tutorial" else "secondary"):
            st.session_state.mode="tutorial"; st.session_state.vi=0; st.rerun()
    with c5:
        if st.button("EN",key="b_en",type="primary" if lang=="en" else "secondary"):
            st.session_state.lang="en"; st.rerun()
    with c6:
        if st.button("SA",key="b_sa",type="primary" if lang=="sa" else "secondary"):
            st.session_state.lang="sa"; st.rerun()
    with c7:
        if st.button("TE",key="b_te",type="primary" if lang=="te" else "secondary"):
            st.session_state.lang="te"; st.rerun()

def bottom_nav():
    st.markdown("<br>",unsafe_allow_html=True)
    nav=st.session_state.nav
    c1,c2,c3=st.columns(3)
    with c1:
        if st.button("📖 Recite",key="nav_r",use_container_width=True,
                     type="primary" if nav=="read" else "secondary"):
            st.session_state.nav="read"; st.rerun()
    with c2:
        if st.button("☰ Index",key="nav_i",use_container_width=True,
                     type="primary" if nav=="index" else "secondary"):
            st.session_state.nav="index"; st.rerun()
    with c3:
        if st.button("📊 Progress",key="nav_p",use_container_width=True,
                     type="primary" if nav=="progress" else "secondary"):
            st.session_state.nav="progress"; st.rerun()

# ── PAGES ──────────────────────────────────────────────────────────────────
def page_gita():
    gita=load_gita(); hdrs=load_sgs_headers()
    ch=st.session_state.ch; lang=st.session_state.lang
    mode=st.session_state.mode; vi=st.session_state.vi
    verses=gita.get(ch,[]); total=len(verses)
    done_count=sum(1 for v in verses if f"g_{ch}_{v['vn']}" in st.session_state.done)
    count_str=f"Verse {vi+1}/{total}" if mode=="tutorial" else f"{done_count}/{total} done"
    st.markdown(f'''<div class="topbar">
        <div><div class="tt">Bhagavad Gita</div>
        <div class="ts">Chapter {ch} — {CHAPTER_NAMES.get(ch,"")}</div></div>
        <div class="tc">{count_str}</div></div>''',unsafe_allow_html=True)
    if mode=="recite":
        pct=int(done_count/total*100) if total else 0
        st.markdown(f'''<div class="progbar">
            <span class="pbl">Ch.{ch}</span>
            <div class="pbg"><div class="pf" style="width:{pct}%"></div></div>
            <span class="pbl">{done_count}/{total}</span></div>''',unsafe_allow_html=True)
    else:
        st.markdown(dots_html(total,vi),unsafe_allow_html=True)
    html = ch_header_html(ch,lang,hdrs)
    if mode=="recite":
        html += "".join(verse_html(v,lang) for v in verses)
    else:
        html += verse_html(verses[vi],lang) if verses else ""
    st.markdown(html,unsafe_allow_html=True)
    if mode=="tutorial":
        c1,c2,c3=st.columns(3)
        with c1:
            if st.button("◀ Prev",key="tp",use_container_width=True,disabled=vi==0):
                st.session_state.vi=vi-1; st.rerun()
        with c2:
            vkey=f"g_{ch}_{verses[vi]['vn']}" if verses else ""
            is_done=vkey in st.session_state.done
            if st.button("✓ Done" if is_done else "Mark Done",key="td",use_container_width=True):
                if is_done: st.session_state.done.discard(vkey)
                else:
                    st.session_state.done.add(vkey)
                    if vi<total-1: st.session_state.vi=vi+1
                st.rerun()
        with c3:
            if st.button("Next ▶",key="tn",use_container_width=True,disabled=vi>=total-1):
                st.session_state.vi=vi+1; st.rerun()
    else:
        c1,c2,c3,c4,c5=st.columns([2,1,1,1,2])
        with c1:
            if st.button("◀ Ch.Prev",key="cp",use_container_width=True,disabled=ch<=1):
                st.session_state.ch=ch-1; st.session_state.vi=0; st.rerun()
        with c5:
            if st.button("Ch.Next ▶",key="cn",use_container_width=True,disabled=ch>=18):
                st.session_state.ch=ch+1; st.session_state.vi=0; st.rerun()

def page_gita_index():
    gita=load_gita()
    st.markdown('<div class="sec-hdr">Select Chapter</div>',unsafe_allow_html=True)
    for ch in range(1,19):
        verses=gita.get(ch,[])
        done=sum(1 for v in verses if f"g_{ch}_{v['vn']}" in st.session_state.done)
        cls="idx-card idx-card-on" if ch==st.session_state.ch else "idx-card"
        st.markdown(f'''<div class="{cls}">
            <div><div class="idx-cn">Chapter {ch}</div>
            <div class="idx-cname">{CHAPTER_NAMES.get(ch,"")}</div></div>
            <div class="idx-ct">{done}/{len(verses)}</div></div>''',unsafe_allow_html=True)
        if st.button(f"Open",key=f"idx_{ch}",use_container_width=True):
            st.session_state.ch=ch; st.session_state.vi=0
            st.session_state.nav="read"; st.rerun()

def page_rudram_vsn(tab):
    rudram=load_rudram(); vsn=load_vsn()
    if tab=="namakam":
        sec=st.session_state.nam_sec; total=11
        idx=min(sec+2,len(rudram)-1)
        lines=clean_lines(rudram[idx].get("lines",[]))
        title=f"Namakam — Anuvaka {sec+1}"
    elif tab=="chamakam":
        sec=st.session_state.cham_sec; total=9
        idx=min(sec+13,len(rudram)-1)
        lines=clean_lines(rudram[idx].get("lines",[]))
        title=f"Chamakam — Anuvaka {sec+1}"
    else:
        sec=st.session_state.vsn_sec; total=len(vsn)
        labels=["Dhyana Shlokas"]+[f"Shloka {i}" for i in range(1,total)]+["Phala Shruti"]
        lines=clean_lines(vsn[sec].get("lines",[]))
        title=f"Vishnu Sahasranamam — {labels[sec] if sec<len(labels) else f'Section {sec+1}'}"
    tab_title={"namakam":"Namakam","chamakam":"Chamakam","vsn":"Vishnu Sahasranamam"}[tab]
    st.markdown(f'''<div class="topbar">
        <div><div class="tt">{tab_title}</div><div class="ts">{title}</div></div>
        <div class="tc">{sec+1}/{total}</div></div>''',unsafe_allow_html=True)
    st.markdown(dots_html(total,sec),unsafe_allow_html=True)
    st.markdown(rudram_vsn_html(lines),unsafe_allow_html=True)
    c1,c2=st.columns(2)
    with c1:
        if st.button("◀ Previous",key="rv_p",use_container_width=True,disabled=sec==0):
            if tab=="namakam": st.session_state.nam_sec-=1
            elif tab=="chamakam": st.session_state.cham_sec-=1
            else: st.session_state.vsn_sec-=1
            st.rerun()
    with c2:
        if st.button("Next ▶",key="rv_n",use_container_width=True,disabled=sec>=total-1):
            if tab=="namakam": st.session_state.nam_sec+=1
            elif tab=="chamakam": st.session_state.cham_sec+=1
            else: st.session_state.vsn_sec+=1
            st.rerun()

def page_progress():
    gita=load_gita()
    total_all=sum(len(v) for v in gita.values())
    done_all=len(st.session_state.done)
    pct_all=int(done_all/total_all*100) if total_all else 0
    st.markdown(f'''<div class="topbar">
        <div><div class="tt">Progress</div><div class="ts">Bhagavad Gita</div></div>
        <div class="tc">{pct_all}%</div></div>''',unsafe_allow_html=True)
    st.markdown(f'''<div class="prc" style="margin:12px 14px">
        <div class="mlbl">Overall — {pct_all}%</div>
        <div class="pbg" style="margin:8px 0"><div class="pf" style="width:{pct_all}%"></div></div>
        <div class="mtxt">{done_all} of {total_all} verses done</div></div>''',unsafe_allow_html=True)
    for ch in range(1,19):
        verses=gita.get(ch,[])
        done=sum(1 for v in verses if f"g_{ch}_{v['vn']}" in st.session_state.done)
        pct=int(done/len(verses)*100) if verses else 0
        st.markdown(f'''<div style="padding:3px 14px">
            <div style="display:flex;justify-content:space-between">
                <span class="pbl">Ch.{ch}</span><span class="pbl">{done}/{len(verses)}</span></div>
            <div class="pbg" style="margin:3px 0 5px">
                <div class="pf" style="width:{pct}%"></div></div></div>''',unsafe_allow_html=True)

# ── MAIN ───────────────────────────────────────────────────────────────────
ctrl_bar()
tab=st.session_state.tab; nav=st.session_state.nav
if nav=="index":
    if tab=="gita": page_gita_index()
    else: st.session_state.nav="read"; st.rerun()
elif nav=="progress":
    page_progress()
else:
    if tab=="gita": page_gita()
    else: page_rudram_vsn(tab)
bottom_nav()
