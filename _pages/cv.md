---
layout: archive
title: "Academic CV"
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

Research Direction
======
* **Robust Object-Centric 3D Perception for Visual Navigation**
* Computer vision, visual-centric robotics perception, 3D object detection, 3D tracking, visual ego-motion, and navigation-relevant perception

Independent Research Portfolio
======
{% for project in site.data.research_portfolio.projects %}
* **{{ project.code }} — {{ project.title }}**  
  * {{ project.capability }}  
  * Status: {{ project.status }}
{% endfor %}

Prior Research Experience
======
* Undergraduate thesis — spatio-temporal deep learning and temporal attention, with emphasis on benchmarking, robustness analysis, and model evaluation.
  * Keep the full thesis title and application-domain details in the downloadable formal CV if required; the public research site prioritises the forward CV/robotics direction.

Technical Skills
======
<!-- EDIT ONLY WITH SKILLS YOU CAN DEFEND IN AN INTERVIEW OR ORAL TECHNICAL REVIEW. -->
* **Programming:** Python, C++
* **Computer Vision / ML:** PyTorch, OpenCV
* **Research tooling:** Git, reproducible experiment configuration, quantitative evaluation

Selected Research Outputs
======
{% if site.publications.size > 0 %}
<ul>{% for post in site.publications reversed %}{% include archive-single-cv.html %}{% endfor %}</ul>
{% else %}
*No publication or preprint is listed here until it exists and is publicly verifiable.*
{% endif %}

<!--
Before publishing a downloadable PDF CV, replace this page with or link to the
current formally reviewed CV. Do not include aspirational scholarships, target
IELTS scores, hardware access, or technologies you cannot defend.
-->
