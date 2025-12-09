# sea-scouts

Wiki for søspejder

## Documentation

The MkDocs project lives in `soespejder-wiki/`.

1. (Optional) Create and activate a virtual environment.
2. Install dependencies:
   ```bash
   cd soespejder-wiki
   python -m pip install -r requirements.txt
   ```
3. Serve the site locally with live reload:
   ```bash
   mkdocs serve
   ```
4. Build the static site:
   ```bash
   mkdocs build
   ```

You can also use the Makefile shortcuts from the repository root:

- `make install` installs the documentation dependencies.
- `make serve` starts the live-reloading development server.
- `make build` produces the static site in `soespejder-wiki/site`.
- `make clean` removes the generated `site/` output and any stray `soespejder-wiki.zip` archive that could sneak into a merge.

## CI

Documentation builds are validated in GitHub Actions (`.github/workflows/docs.yml`) on pushes and pull requests. The workflow sets up Python, installs `soespejder-wiki/requirements.txt`, and runs `mkdocs build --strict` to catch broken links or configuration errors before merging.

## Håndtering af merge-konflikter

Hvis du støder på en merge-konflikt, skyldes det typisk binære eller genererede filer (fx `soespejder-wiki.zip` eller indhold i `soespejder-wiki/site/`), som ikke bør være under versionstyring. Brug `.gitignore`, og kør `make clean` for at fjerne disse filer, inden du forsøger en ny merge. Derefter kan du committe de oprydede ændringer og forsøge merge igen.

For at undgå konflikter fra forskellige linjeender mellem platforme er der tilføjet en `.gitattributes`, som tvinger tekstfiler til LF. Hvis du allerede har checkoutet med CRLF, kan du normalisere arbejdsbiblioteket med:

```bash
make normalize
```
