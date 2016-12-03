---
permalink: /code/
layout: code
title: Code
category:
  - programming
---

## Web development personal reference

<ul>
  {% for page in site.code %}
  <li>
      <a href="{{ page.url }}">{{ page.title }}</a>
  </li>
  {% endfor %}
</ul>
