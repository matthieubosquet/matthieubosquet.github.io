---
permalink: /code/
layout: index
title: Code
category: programming
---

## Web development personal reference

<ul>
  {% for page in site.code %}
  <li>
      <a href="{{ page.url }}">{{ page.title }}</a>
  </li>
  {% endfor %}
</ul>

<p>n.b. Shell commands for ubuntu</p>
<p>n.b. Commands like apt-get and docker need sudo, I omitted it for readability</p>
