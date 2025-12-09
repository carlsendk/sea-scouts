# Assets – retningslinjer

Retningslinjer for billeder, diagrammer og printbare filer til Søspejder Wiki. Brug dem for at sikre ensartet stil og tydelig ophavsret.

## Mappestruktur

- `assets/`: publicerede billeder og diagrammer, der bruges direkte i siderne.
- `assets/cheatsheets/`: PDF’er og billeder af printbare quickguides.
- `assets/source/`: kildefiler (fx .ai, .svg, .psd), så grafik kan redigeres igen.

## Filnavne

- Brug **kebab-case**: `optimist-rigging-side.png`, `mob-flowchart.svg`.
- Tilføj perspektiv eller variant hvis relevant: `lanterne-nat-front.png`, `lanterne-nat-profil.png`.
- Undgå mellemrum og specialtegn; brug kun a–z, 0–9 og bindestreg.

## Format og opløsning

- Diagrammer: foretræk **SVG** for skarphed, eller **PNG** i 144–300 DPI til tryk.
- Fotos: **JPEG** i 1920px bredde til web, 300 DPI hvis de skal i PDF-cheatsheets.
- Undgå filer over 2–3 MB til webbrug; komprimer før commit.

## Farver og stil

- Brug høj kontrast og tydelige konturer; tekst i mørk grå/sort (#1e1e1e) på lys baggrund.
- Vand og hav-temaer: brug blå/grønne nuancer, fx #0d47a1 (dyb blå) og #009688 (turkis).
- Brug ensartede pile og ikoner; undgå gennemsigtige baggrunde hvis billedet placeres på farvede felter.

## Metadata og kreditering

- Angiv kilde/ophavsret i billedets alt-tekst og i commit-besked hvis relevant.
- Gem originale kildefiler i `assets/source/` og noter licens (fx CC BY 4.0) i en README eller i filnavn.
- Sørg for at billeder uden egen produktion er lovlige til brug og har korrekt attribution.

## Indsættelse i Markdown

- Link billeder relativt: `![titel](assets/filnavn.png)`.
- Brug korte billedtekster og placér dem tæt på teksten, der forklarer diagrammet.
- Skalér store billeder via Markdown-udvidelser eller statisk bredde i temaet fremfor at uploade enorme filer.
