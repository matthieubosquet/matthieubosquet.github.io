---
permalink: /code/structure-of-a-project/
title: Structure of a project
category:
- programming
tags:
- template
---

## Project files

**CHANGELOG**  
Contains the release notes of each version.  
Format could be:

```markdown
## v0.1.1
**2012-12-03** - [Docs](https://link-to-new-commit-readme.md)
* Optimized `my-library.function`
* Added tests for `my-library.function2`

## v0.1.0
**2016-12-01** - [Docs](https://link-to-commit-0.1.0-readme.md)
* Initial release
```

**LICENSE**  
Contains license of choice with appropriate copyright notice.

## Project dotfiles

**.editorconfig**

```yaml
# Editor configuration for consistent coding styles

# Top-most EditorConfig file
root = true

# Apply to all files
[*]
indent_style = space
indent_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

# Apply to markdown files
[*.md]
trim_trailing_whitespace = false
```

