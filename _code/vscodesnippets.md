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

{% highlight json %}
{% gist matthieubosquet/b2eb55a7965c46bcf9b655aa348056af html.json %}
{% endhighlight %}

### javascript.json

{% highlight json %}
{
	"Service worker": {
		"prefix": "service",
		"body": [
			"if ('serviceWorker' in navigator) {",
			"    navigator.serviceWorker.register('/sw.js', {scope: '/'});",
			"}"
		],
		"description": "Register a service worker 'sw.js' if the browser supports it. This service worker will control everything from the root of the domain (default scope is './')."
	}

}
{% endhighlight %}
