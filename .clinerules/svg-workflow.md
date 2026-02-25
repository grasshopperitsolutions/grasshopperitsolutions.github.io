## Brief overview
Guidelines for creating and editing SVG files in this project.

## SVG file creation workflow
- Always create SVG files by first writing to a `.txt` file, then renaming to `.svg`
- SVG files can only be modified when they have the `.txt` extension
- Example workflow:
  1. `write_to_file` with path `filename.txt` containing SVG content
  2. `execute_command` with `ren filename.txt filename.svg` to rename

## SVG file editing workflow
- When needing to edit an existing `.svg` file, first rename it to `.txt`
- Make the necessary edits while it has the `.txt` extension
- Rename back to `.svg` after edits are complete