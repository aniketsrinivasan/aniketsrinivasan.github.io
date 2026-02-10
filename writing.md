---
layout: page
title: Writing
permalink: /writing/
---

{% if site.posts.size > 0 %}
<ul class="post-list">
  {% for post in site.posts %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="post-date">{{ post.date | date: "%B %-d, %Y" }}</span>
  </li>
  {% endfor %}
</ul>
{% else %}
Nothing here yet — check back soon.
{% endif %}

