---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* **B.Eng. in Electrical Engineering**, Universitas Lampung, 2026
  * GPA: **3.87 / 4.00**, Cum Laude
  * Ranked **2nd in the Electrical Engineering graduating cohort**, Graduation Period 8, Batch 1, 2026
  * Top 5% of the Electrical Engineering Cohort 2022

Research interests
======
* Computer Vision
* Visual-centric Robotics Perception
* 3D Object Detection and Tracking
* Visual Ego-Motion and State Estimation
* Visual Navigation

Research projects
======
{% for post in site.portfolio %}
* **[{{ post.title }}]({{ post.url }})**
  * {{ post.excerpt | strip_html }}
{% endfor %}

Experience
======
* **Fixed-Wing Division, Unila Robotics and Automation**
  * Hardware integration, flight-system preparation, and system testing for a national student UAV competition.

* **Undergraduate Research, Universitas Lampung**
  * Spatio-temporal deep learning, benchmarking, robustness analysis, cross-domain evaluation, and quantitative model evaluation.

Skills
======
* **Programming:** Python, C++
* **Computer Vision / Machine Learning:** PyTorch, OpenCV
* **Research tooling:** Git, reproducible experiment configuration, quantitative evaluation
