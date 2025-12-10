#!/usr/bin/env python3
import os, re, json

ROOT = os.path.dirname(os.path.abspath(__file__))
DOCS = os.path.abspath(os.path.join(ROOT, '..', 'docs'))
GLOSSARY_PATH = os.path.join(DOCS, 'assets', 'glossary.json')

def slugify(text):
    s = text.strip().lower()
    s = re.sub(r"[\s/]+", '-', s)
    s = re.sub(r"[^\w\-æøåÆØÅ]+", '', s)
    return s

def url_for(md_path):
    rel = os.path.relpath(md_path, DOCS).replace('\\','/')
    if rel.endswith('index.md'):
        rel = rel[:-8]
    elif rel.endswith('.md'):
        rel = rel[:-3] + '/'
    return rel

def read_title(md_path):
    title = None
    with open(md_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    # front matter
    if len(lines) > 2 and lines[0].strip() == '---':
        for line in lines[1:50]:
            if line.strip() == '---':
                break
            m = re.match(r'^title:\s*(.+)$', line.strip())
            if m:
                title = m.group(1).strip()
                # strip quotes
                title = title.strip('"\'')
                return title
    # first H1
    for line in lines[:50]:
        if line.lstrip().startswith('# '):
            return line.lstrip()[2:].strip()
    return None

def add_key(d, key, href):
    if not key: return
    if key in d: return
    d[key] = { 'href': href }

def main():
    mapping = {}
    # 1) map pages: use title and key tokens from titles/filenames
    for root, _, files in os.walk(DOCS):
        for fn in files:
            if not fn.endswith('.md'): continue
            md = os.path.join(root, fn)
            rel_url = url_for(md)
            # skip ordbog for now; handled later with anchors
            rel_rel = os.path.relpath(md, DOCS).replace('\\','/')
            if rel_rel == 'ordbog.md':
                continue
            title = read_title(md) or os.path.splitext(os.path.basename(md))[0]
            # exact title
            add_key(mapping, title, rel_url)
            # simple tokens from title and filename
            tokens = re.split(r'[^\wæøåÆØÅ]+', title)
            tokens += re.split(r'[^\wæøåÆØÅ]+', os.path.splitext(os.path.basename(md))[0])
            for t in tokens:
                t = t.strip()
                if not t: continue
                # accept acronyms or length >=3
                if len(t) >= 3 or t.isupper():
                    add_key(mapping, t.lower(), rel_url)
    # 2) ordbog anchors
    ordbog = os.path.join(DOCS, 'ordbog.md')
    if os.path.exists(ordbog):
        with open(ordbog, 'r', encoding='utf-8') as f:
            for line in f:
                if line.startswith('#### '):
                    term = line[5:].strip()
                    anchor = slugify(term)
                    add_key(mapping, term, f'ordbog/#{anchor}')
                    # ascii-ish fallback
                    add_key(mapping, term.lower(), f'ordbog/#{anchor}')
    # write file
    os.makedirs(os.path.join(DOCS, 'assets'), exist_ok=True)
    with open(GLOSSARY_PATH, 'w', encoding='utf-8') as f:
        json.dump(mapping, f, ensure_ascii=False, indent=2)

if __name__ == '__main__':
    main()

