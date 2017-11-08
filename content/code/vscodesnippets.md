---
permalink: /code/vscode_snippets
title: VSCode snippets
description: Use snippets! DRY!
category: programming
tags:
  - programming
  - vscode
  - snippets
  - productivity
---

## How to edit snippets

- Top menu: "Code > Preferences > User Snippets"
- Choose language
- Edit snippet json file
- Save file
- That's it, the snippet is now available in typehead for the choosen language

## Snippet file format

- **prefix** sequence of characters triggering the snippet in vscode.
- **body** snippet itself.
- **description** shown in the editor when the snippet is active.

## OMG, snippets!!!

### html.json

{% gist matthieubosquet/37f6ce90695e5a6ed62f43a3ee911728 html.json %}


### javascript.json

{% gist matthieubosquet/37f6ce90695e5a6ed62f43a3ee911728 javascript.json %}
