---
layout: index
permalink: /old2
subtitle: Creative Web Developer passionate about Art, Tech, UX, Data
tags: ["programming", "music", "experiments"]
title: Matthieu Bosquet
type: index
---

<ul>
  {% assign pages = site.pages | sort: 'date' | reverse %}
  {% for page in pages %}
    {% if page.date %}
    <li><a href="{{ page.url }}">{{ page.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
