import pathlib
import sys
import zipfile
from xml.etree import ElementTree as ET

path = r"C:\My work\Job\Resume\Meet_Patel_Resume_Updated.docx"
NS = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}

try:
    with zipfile.ZipFile(path) as z:
        root = ET.fromstring(z.read("word/document.xml"))
    paragraphs = []
    for p in root.iter("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p"):
        texts = []
        for t in p.iter("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t"):
            if t.text:
                texts.append(t.text)
            if t.tail:
                texts.append(t.tail)
        line = "".join(texts).strip()
        if line:
            paragraphs.append(line)
    text = "\n".join(paragraphs)
    out = pathlib.Path(__file__).resolve().parent.parent / "resume_content.txt"
    out.write_text(text, encoding="utf-8")
    print(text)
    print(f"\n--- Saved to {out} ---", file=sys.stderr)
except Exception as e:
    print(f"ERROR: {e}", file=sys.stderr)
    sys.exit(1)
