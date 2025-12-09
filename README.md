# sea-scouts

Søspejder-wiki bygget med MkDocs Material. Indholdet findes i `soespejder-wiki/docs/` og strukturen styres af `soespejder-wiki/mkdocs.yml`.
Opdatér `site_url`, `repo_url` og `edit_uri` i konfigurationen, når GitHub-repo og Pages-URL er endeligt besluttet.

## Lokal udvikling
1. (Valgfrit) Opret et virtuelt miljø.
2. Installer afhængigheder:
   ```bash
   pip install -r soespejder-wiki/requirements.txt
   ```
3. Start udviklingsserveren:
   ```bash
   mkdocs serve --config-file soespejder-wiki/mkdocs.yml --dev-addr 0.0.0.0:8000
   ```
   Serveren livereloader når du ændrer filer i `docs/`.

## Byg statisk site
Kør en produktionbuild til den lokale `site/` mappe:
```bash
mkdocs build --config-file soespejder-wiki/mkdocs.yml --site-dir site
```
Udskriften lander i `soespejder-wiki/site/` (sti relativ til konfigurationsfilen).

## GitHub Pages deploy
Workflowen `.github/workflows/deploy-mkdocs.yml` bygger og publicerer automatisk sitet til GitHub Pages ved pushes til `main` (eller manuelt via “Run workflow”).

For at aktivere Pages første gang:
1. Gå til **Settings → Pages** i GitHub.
2. Vælg **Source: GitHub Actions**.
3. Kør workflowen, hvorefter Pages-URL’en vises under miljøet `github-pages`.

## Dokumentation
- [Agent / Redaktør-oversigt – Søspejder Wiki (DDS)](AGENTS.md)
- Indholdssiderne i `soespejder-wiki/docs/`
