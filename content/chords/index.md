---
description: ...or some tabs I enjoy playing guitar. I love music <3.
layout: index
permalink: /chords
tags: ["music", "guitar", "tablatures", "chords"]
title: Chords
---

<ul>
  {% for page in site.pages %}
    {% if page.layout == "chords" %}
    <li>
        <a href="{{ page.url }}">{{ page.title }}</a>
    </li>
    {% endif %}
  {% endfor %}
</ul>
