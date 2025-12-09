# Agent / Redaktør-oversigt – Søspejder Wiki (DDS)

Denne fil er en kort oversigt over wiki’ens formål, struktur og indhold.
Wiki’en er skrevet i Markdown og hostes statisk på GitHub via MkDocs.

## Formål

- Samle alt grundstof til DDS søspejdere ét sted.
- Dække både sejlads og spejderliv.
- Understøtte progression i to spor:
  - **8–12 år** (begyndere/junior)
  - **12–16 år** (øvede/trop/ungledere)
- Koble færdigheder til **DDS Spejderloven, Spejdermetoden og mærker/badges**.

## Teknisk setup

- **MkDocs** bruges til statisk site-generator.
- Indhold ligger i `docs/`.
- Navigation styres i `mkdocs.yml`.

### Kør lokalt

Kode:

```
pip install mkdocs mkdocs-material
mkdocs serve
```

### Byg til GitHub Pages

Kode:

```
mkdocs build
```

## Mappestruktur (docs/)

- `index.md`
  - Forside med velkomst og “sådan bruger du wiki’en”.
- `alder.md`
  - Forklarer de to aldersspor og hvordan man læser wiki’en som spejder/leder.
- `dds/`
  - `spejderliv.md`
    - Spejderloven (DDS) og Spejdermetoden, koblet til søspejderliv og patruljesystem.
- `badges.md`
  - Oversigt over relevante DDS mærker (søsport + friluft), med kobling til sider/øvelser.
- `sikkerhed.md`
  - Sikkerhed på vandet: udstyr, vejrgrænser, MOB, hypotermi, nødprocedure m.m.
- `teori.md`
  - Sejladsens grundteori: vind, sejlpunkter, balance, ror, strøm/bølger (basis).
- `boats/`
  - `optimist.md`
    - Rigging, trim, manøvrer, fejl/fixes, vedligehold – i 8–12 og 12–16 spor.
  - `j70.md`
    - Roller ombord, rigging, trim, gennaker-manøvrer, sikkerhed, kap-intro.
  - `jolle.md`
    - Generel jolleviden: rigging, kæntring/opretning, manøvrer, vedligehold.
- `knob.md`
  - Knob & tovværk: formål, trin-for-trin, typiske fejl, plus ekstra knob til øvede.
- `regler.md`
  - COLREG light + øvet: vigepligtssituationer, lydsignaler, sejl/motor osv.
- `navigation.md`
  - Navigation basics: søkort, kompas, pejling, simpel ruteplanlægning A→B.
- `vhf.md`
  - VHF i spejderbåde: regler, kanaler, call-procedure, MAYDAY/PAN-PAN, DDS praksis.
- `friluftsliv.md`
  - Knivhåndtering, bål, pionering/raftebyg, tur- og lejrliv (koblet til mærker).
- `træning.md`
  - Øvelser, progression, miniquizzer og forslag til træningsforløb pr. alder og bådtype.
- `assets/`
  - Tom mappe til billeder, diagrammer og printbare cheatsheets.

## Indholdsprincipper

- **Kort og visuelt for 8–12**:
  - korte sider, mange trin-for-trin guides, simple regler/knob, små opgaver.
- **Mere teknik og ansvar for 12–16**:
  - trimtabeller, flere scenarier, navigation, kapsejladsintro, lederroller.
- **DDS i centrum**:
  - Spejderloven og Spejdermetoden bruges som “linse” i alle emner.
- **Praktik først**:
  - tjeklister, “sådan gør du”, typiske fejl, og øvelser i patruljeform.

## Sådan udvider du wiki’en

1. Opret en ny `.md` fil i passende mappe.
2. Tilføj siden til `mkdocs.yml` under korrekt sektion.
3. Brug samme stil:
   - H2/H3-overskrifter
   - korte afsnit
   - bullet-lister
   - aldersbokse (8–12 / 12–16)
4. Læg evt. billeder i `docs/assets/` og link relativt:
   - `![tekst](assets/filnavn.png)`

## Forslag til næste forbedringer

- Tilføj billeder/diagrammer til:
  - manøvrer i Optimist/J/70/jolle
  - fyr/lanterner og afmærkning
  - knob (trin-for-trin)
- Lav printbare cheatsheets i PDF (knob, VHF, søvejsregler, trim).
- Overvej små interaktive quizzer (fx via MkDocs plugins).

---

Ved spørgsmål eller ændringer: opdatér denne `agent.md`, så den altid matcher wiki’ens aktuelle struktur.
