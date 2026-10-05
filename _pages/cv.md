---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
**B.Eng. in Electrical Engineering**, Universitas Lampung, 2026  
GPA: **3.87 / 4.00**, Cum Laude  
Ranked **2nd in the Electrical Engineering graduating cohort**, Graduation Period 8, Batch 1, 2026  
Top 5% of the Electrical Engineering Cohort 2022

Research Interests
======
Computer vision, visual-centric robotics perception, 3D object detection, 3D tracking, visual ego-motion, state estimation, and navigation-relevant perception.

Current research direction: **Robust Object-Centric 3D Perception for Visual Navigation**.

Research Projects
======
{% for project in site.data.research_portfolio.projects %}
**{{ project.code }} — {{ project.title }}**  
{{ project.capability }} · {{ project.status }}

{% endfor %}

Research & Engineering Experience
======
**Undergraduate research, Universitas Lampung**  
Spatio-temporal deep learning and temporal attention, with emphasis on controlled benchmarking, robustness analysis, cross-domain evaluation, and quantitative model evaluation.

**Fixed-Wing Division, Unila Robotics and Automation**  
Hardware integration, flight-system preparation, and system testing for a national student UAV competition.

Technical Skills
======
**Programming:** Python, C++  
**Computer Vision / Machine Learning:** PyTorch, OpenCV  
**Research tooling:** Git, reproducible experiment configuration, quantitative evaluation

Research outputs and project links are added when they are publicly available and verifiable.
