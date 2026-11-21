---
layout: page
title: frames
permalink: /frames/
---

places i've been and things i've captured

{% if site.data.frames.size > 0 %}
{% for group in site.data.frames %}
{% if group.place %}<h3 class="frames-place">{{ group.place }}</h3>{% endif %}
<div class="frames-grid">
  {% for photo in group.photos %}
  <figure class="frames-item">
    <img src="{{ photo.src | relative_url }}" alt="{{ photo.caption | default: group.place }}" loading="lazy" data-caption="{{ photo.caption }}">
    {% if photo.caption %}<figcaption>{{ photo.caption }}</figcaption>{% endif %}
  </figure>
  {% endfor %}
</div>
{% endfor %}
{% else %}
nothing here yet. check back soon.
{% endif %}

<div class="lightbox" aria-hidden="true">
  <img class="lightbox-img" alt="">
  <p class="lightbox-caption"></p>
</div>

<script src="{{ '/assets/js/lightbox.js' | relative_url }}"></script>
