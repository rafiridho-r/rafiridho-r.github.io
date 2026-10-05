---
permalink: /
title: ""
excerpt: "Computer Vision and Robotics Perception"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<div class="academic-home-intro">
  <p class="academic-home-intro__meta">Electrical Engineering · Universitas Lampung</p>
  <h1>Computer Vision & Robotics Perception</h1>
  <p class="academic-home-intro__lead">
    I am an Electrical Engineering graduate from Universitas Lampung. My research interests are in computer vision and visual-centric robotics perception, with a current focus on <strong>robust object-centric 3D perception for visual navigation</strong>.
  </p>
  <p class="academic-home-intro__links">
    <a href="/portfolio/">Research</a>
    <span>·</span>
    <a href="/cv/">CV</a>
    <span>·</span>
    <a href="https://github.com/rafiridho-r">GitHub</a>
    <span>·</span>
    <a href="https://www.linkedin.com/in/rafi-ridho-ramadhan-/">LinkedIn</a>
  </p>
</div>

## Research

My current work develops a progression from **tracking and optimisation**, through **visual ego-motion** and **learned 3D perception**, toward **robust 3D multi-object tracking under detection and pose uncertainty**.

<div class="academic-work-list academic-work-list--compact">
{% for project in site.data.research_portfolio.projects %}
  <article class="academic-work-item">
    <div class="academic-work-item__meta">{{ project.code }} · {{ project.capability }} · {{ project.status }}</div>
    <h3>{{ project.title }}</h3>
    <p>{{ project.question }}</p>
    {% if project.url %}<p class="academic-work-item__links"><a href="{{ project.url | relative_url }}">Project page</a></p>{% endif %}
  </article>
{% endfor %}
</div>

<p><a href="/portfolio/">View research programme →</a></p>

## Background

I received my **B.Eng. in Electrical Engineering** from **Universitas Lampung** in 2026 with a **GPA of 3.87/4.00 (Cum Laude)** and ranked **2nd in the Electrical Engineering graduating cohort**.

My undergraduate research involved spatio-temporal deep learning, temporal attention, benchmarking, robustness analysis, and cross-domain evaluation. I also worked with the fixed-wing division of the Unila Robotics and Automation team on hardware integration, flight-system preparation, and system testing.

## Current direction

I am building research depth in classical and learned computer vision, camera geometry, state estimation, 3D perception, tracking, and navigation-relevant perception. Project pages are published only when the corresponding implementation and experimental evidence are ready to support them.
