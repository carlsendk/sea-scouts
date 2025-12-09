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

## CI

Documentation builds are validated in GitHub Actions (`.github/workflows/docs.yml`) on pushes and pull requests. The workflow sets up Python, installs `soespejder-wiki/requirements.txt`, and runs `mkdocs build --strict` to catch broken links or configuration errors before merging.
