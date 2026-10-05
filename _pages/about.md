---
permalink: /
title: ""
excerpt: "Independent Computer Vision and Robotics Perception research portfolio"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<div class="research-home-hero">
  <div class="research-home-hero__kicker">Computer Vision · Robotics Perception · 3D Vision</div>
  <h1>Robust Object-Centric 3D Perception for Visual Navigation</h1>
  <p class="research-home-hero__lead">
    I am an Electrical Engineering graduate from Universitas Lampung building an independent research programme in tracking, visual ego-motion, learned 3D perception, and robust 3D multi-object tracking. My emphasis is on algorithmic ownership, reproducible experiments, controlled robustness analysis, and clear failure diagnosis.
  </p>
  <ul class="research-home-hero__facts">
    <li><strong>B.Eng. Electrical Engineering</strong> · Universitas Lampung · 2026</li>
    <li><strong>GPA 3.87/4.00</strong> · Cum Laude</li>
    <li><strong>2nd</strong> in the EE graduating cohort, Graduation Period 8 Batch 1</li>
  </ul>
  <div class="research-home-hero__actions">
    <a class="btn btn--primary" href="/portfolio/">Research programme</a>
    <a class="btn" href="https://github.com/rafiridho-r">GitHub</a>
    <a class="btn" href="https://www.linkedin.com/in/rafi-ridho-ramadhan-/">LinkedIn</a>
  </div>
</div>

## Research programme

The portfolio is intentionally cumulative rather than a collection of unrelated demos. Each project is designed to establish a capability required by the next one.

{% include research/progression.html %}

<div class="research-project-card-grid">
{% for project in site.data.research_portfolio.projects %}
  <article class="research-project-card">
    <div class="research-project-card__code">{{ project.code }} · {{ project.capability }}</div>
    <h3>{{ project.title }}</h3>
    <p class="research-project-card__question">{{ project.question }}</p>
    <p><strong>Status:</strong> {{ project.status }}</p>
    {% if project.url %}<p><a href="{{ project.url | relative_url }}">Open research page →</a></p>{% endif %}
  </article>
{% endfor %}
</div>

## Research & engineering profile

<div class="research-profile-grid">
  <div class="research-profile-card"><strong>Tracking & optimisation</strong><span>State estimation, association, correlation filters, controlled optimisation experiments.</span></div>
  <div class="research-profile-card"><strong>Geometry & ego-motion</strong><span>Camera models, RGB-D geometry, SE(3), robust correspondence and trajectory evaluation.</span></div>
  <div class="research-profile-card"><strong>Learned 3D perception</strong><span>PyTorch-based 3D detection, point-cloud representations, robustness and compute-aware evaluation.</span></div>
  <div class="research-profile-card"><strong>Research engineering</strong><span>Reproducible experiments, deterministic tests, Git-based provenance, failure analysis and technical writing.</span></div>
</div>

## How I work

My project pages distinguish clearly between **reproduced components**, **candidate-owned implementation**, **original extensions or robustness studies**, and **limitations**. Experimental claims are only promoted to the public portfolio after they are supported by fixed protocols, quantitative evaluation, ablations where appropriate, and failure analysis.

## Selected prior experience

* **Spatio-temporal deep-learning research:** temporal-attention modelling, controlled benchmarking, robustness analysis, cross-domain evaluation, and quantitative failure diagnosis.
* **Fixed-wing robotics team:** hardware integration, flight-system preparation, and system testing for a national student UAV competition.

These are supporting experiences rather than the forward research identity; the P1–P4 programme above is the primary evidence trail for computer vision and robotics perception.

## Research notes and provenance

A small number of technical notes may be published to document derivations, implementation decisions, debugging hypotheses, and lessons from failed experiments. These notes are supporting evidence of sustained work; they are not substitutes for completed research projects.

## Background

My undergraduate work gave me experience with spatio-temporal deep learning, benchmarking, model evaluation, and experimental analysis. My forward research direction is computer vision and visual-centric robotics perception, with the portfolio above serving as the main evidence of that transition.
