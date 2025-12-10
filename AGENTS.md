# Repository Guidelines

## Project Structure & Module Organization
- Root: `README.md`, `LICENSE`, `AGENTS.md`.
- Site lives in `soespejder-wiki/`:
  - `mkdocs.yml` (navigation, theme, plugins).
  - `docs/` (Markdown content), incl. `boats/`, `dds/`, `cheatsheets/`, `assets/`.
  - `requirements.txt` (MkDocs and plugins).
- GitHub Pages deploy is configured in `.github/workflows/deploy-mkdocs.yml`.

## Build, Test, and Development Commands
- Create venv: `python3 -m venv .venv && source .venv/bin/activate`.
- Install deps: `pip install -r soespejder-wiki/requirements.txt`.
- Live preview: `mkdocs serve -f soespejder-wiki/mkdocs.yml` (serves at http://127.0.0.1:8000).
- Build site: `mkdocs build -f soespejder-wiki/mkdocs.yml` (outputs to `soespejder-wiki/site/`).

## Coding Style & Naming Conventions
- Content is Markdown (Danish). Use `##`/`###` for sectioning; keep paragraphs short and scannable.
- Filenames: lowercase, hyphen-separated (e.g., `regler-quickguide.md`).
- Place images in `docs/assets/`; link relatively: `![Alt-tekst](assets/fil.png)`.
- Prefer lists, admonitions, and tabs supported by MkDocs Material; avoid raw HTML.
- Keep lines under ~100 chars; no trailing spaces.

## Testing Guidelines
- Run `mkdocs build` before committing; fix warnings and broken links.
- Verify navigation updates in `mkdocs.yml` when adding/moving pages.
- Check images render and external links are valid; preview via `mkdocs serve`.

## Commit & Pull Request Guidelines
- Commits: short, imperative, and scoped (e.g., `docs: add MOB checklist`, `build: update mkdocs plugins`).
- PRs: include a summary (what/why), link related issues (e.g., `Closes #12`), and note any nav changes.
- Ensure `mkdocs build` passes locally before requesting review. Merges to `main` trigger Pages deploy.

## Security & Configuration Tips
- No secrets required. Keep assets lightweight (SVG/PNG preferred). Use local assets over hotlinks.
- Do not commit large binaries to `docs/assets/cheatsheets/`—store only final, optimized files.
