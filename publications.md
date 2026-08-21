---
layout: default
title: Publications
permalink: /publications/
description: "Selected publications by Junhao Wu in multimodal learning, generative models, and scientific foundation models."
---

<header class="publications-intro">
  <h1 class="page-title">Selected Publications</h1>
  <p>A selected set of papers that best represents my research agenda. A complete publication list is available on <a href="https://scholar.google.com/citations?user=RSDPtpYAAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar</a>.</p>
</header>

<div class="publication-list">
  {% for publication in site.data.publications %}
    {% include publication-card.html publication=publication %}
  {% endfor %}
</div>
