PYTHON ?= python3
PIP ?= $(PYTHON) -m pip
DOCS_DIR ?= soespejder-wiki
REQUIREMENTS ?= $(DOCS_DIR)/requirements.txt

.PHONY: install serve build

install:
	cd $(DOCS_DIR) && $(PIP) install -r requirements.txt

serve:
	cd $(DOCS_DIR) && mkdocs serve

build:
	cd $(DOCS_DIR) && mkdocs build
