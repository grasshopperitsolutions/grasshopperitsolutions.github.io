## Brief overview
Guidelines for managing internationalized (i18n) content across language-specific directories in this project.

## Localization workflow
- The `en-us/` directory contains the base/reference files for all content
- New language directories must start as exact copies of the `en-us/` files
- Translations for new languages should be implemented in separate, incremental phases — not all at once
- Each language phase should be a focused, reviewable change

## File structure
- Each language has its own top-level directory named by locale code (e.g., `en-us/`, `es-co/`)
- The file structure within each language directory mirrors `en-us/` exactly
- When adding a new language, replicate the full `en-us/` directory structure first, then translate incrementally

## When adding a new language
- Copy all files from `en-us/` to the new locale directory as-is
- Translate and update content in subsequent phases, one page or section at a time
- Do not attempt to translate all pages in a single change