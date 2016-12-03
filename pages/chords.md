---
permalink: /chords/
layout: chords
title: Chords
description: ...or some tabs I enjoy on the guitar. I love music <3.
category:
  - music
tags:
  - guitar
  - tablatures
  - chords
---

## Web development personal reference

<ul>
  {% for page in site.chords %}
  <li>
      <a href="{{ page.url }}">{{ page.title }}</a>
  </li>
  {% endfor %}
</ul>
