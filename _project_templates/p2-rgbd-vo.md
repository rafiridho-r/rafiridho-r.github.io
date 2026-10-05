---
layout: research-project
project_code: "P2"
project_type: "Geometry + robustness study"
title: "Robust RGB-D Visual Odometry in Dynamic Scenes"
subtitle: "Compact RGB-D ego-motion estimation with controlled dynamic-scene failure analysis."
status: "TEMPLATE — replace after evidence gate"
status_class: "planned"
author: "Rafi Ridho Ramadhan"
affiliation_note: "Independent research portfolio"
teaser_video:
teaser_image:
teaser_alt:
teaser_caption:
demo_url:
citation:
template_mode: true
updated: "TODO"
role: "Independent implementation and evaluation"
research_question: "How robustly can camera motion be estimated when parts of the observed scene are independently moving?"
tldr: "TODO — one falsifiable sentence stating the verified effect of robust estimation or dynamic-feature rejection."
key_stats: []
report_url:
code_url:
experiments_url:
preprint_url:
data_url:
---

<section id="walkthrough">
## How the project works

<div class="research-walkthrough" data-stage-walkthrough>
  <div class="research-walkthrough__viewport">
    <div class="research-stage" data-stage><span class="research-stage__index">Stage 1</span><h3>RGB-D frame pair</h3><div class="research-stage__visual">TODO: synchronised RGB + depth example.</div><p>Introduce the camera observations and coordinate-frame convention.</p></div>
    <div class="research-stage" data-stage><span class="research-stage__index">Stage 2</span><h3>Correspondence generation</h3><div class="research-stage__visual">TODO: verified feature matches.</div><p>Show candidate correspondences before robust filtering.</p></div>
    <div class="research-stage" data-stage><span class="research-stage__index">Stage 3</span><h3>Dynamic/outlier rejection</h3><div class="research-stage__visual">TODO: static vs rejected features.</div><p>Explain why rejected observations would corrupt ego-motion.</p></div>
    <div class="research-stage" data-stage><span class="research-stage__index">Stage 4</span><h3>SE(3) pose update</h3><div class="research-stage__visual">TODO: camera transform + residual diagnostic.</div><p>Show the pose-estimation step and acceptance criterion.</p></div>
    <div class="research-stage" data-stage><span class="research-stage__index">Stage 5</span><h3>Trajectory evaluation</h3><div class="research-stage__visual">TODO: GT vs baseline vs robust trajectory.</div><p>Connect local decisions to ATE/RPE.</p></div>
  </div>
  <div class="research-walkthrough__controls"><button type="button" data-stage-prev>← Previous</button><button type="button" data-stage-next>Next →</button><button type="button" data-stage-replay>Replay</button><span class="research-walkthrough__counter" data-stage-counter></span></div>
</div>
</section>

<section id="question">
## 1. Research question and scope

**Scope boundary.** Compact RGB-D visual odometry, not a full general-purpose SLAM claim.

TODO: dynamic-scene assumptions, selected sequence rationale, and falsifiable hypothesis.

<div class="research-mechanism"><div class="research-mechanism__claim">Mechanism to test</div><p>TODO: articulate how independently moving correspondences bias the camera-motion estimate and which robust mechanism should reduce that bias.</p></div>
</section>

<section id="method">
## 2. Method

### 2.1 Geometry and frame conventions
TODO: intrinsics, projection/backprojection, SE(3), transform direction.

### 2.2 Correspondence and pose estimation
TODO: feature/correspondence pipeline, robust loss/RANSAC, optimisation, acceptance criteria.

### 2.3 Dynamic-feature rejection / robust refinement
TODO: candidate-owned mechanism and targeted failure mode.

<div class="research-demo">
  <h3>Trajectory explorer — template preview</h3>
  <div class="research-demo__toolbar"><label>Illustrative disturbance <input type="range" min="0" max="100" value="35"></label><span><span data-range-output>35</span>/100</span></div>
  <div class="research-demo__canvas"><canvas data-research-canvas="trajectory" data-height="320" aria-label="Synthetic trajectory preview"></canvas></div>
  <p class="research-demo__note"><strong>Synthetic template only.</strong> Replace with frozen TUM RGB-D trajectories and ATE/RPE metadata.</p>
</div>
</section>

### Correspondence / dynamic-rejection scrubber
<div class="research-frame-scrubber" data-frame-scrubber data-frame-base="/assets/research/p2/frames/frame_{frame}.jpg" data-frame-count="1" data-frame-pad="6">
  <div class="research-frame-scrubber__stage"><img data-frame-image alt="RGB-D correspondence and dynamic rejection frame"></div>
  <div class="research-frame-scrubber__controls"><input type="range" value="0"><span class="research-frame-scrubber__counter" data-frame-counter></span></div>
</div>
<p class="research-demo__note"><strong>Template.</strong> Export aligned RGB/depth/correspondence/rejection visualisations from the same frozen run.</p>

### Paired failure comparison
<div class="research-pair-gallery" data-pair-gallery="/assets/research/p2/pairs.json"></div>

<section id="experiments">
## 3. Experimental protocol

| Item | Frozen value |
|---|---|
| TUM RGB-D sequences | TODO |
| Alignment convention | TODO |
| ATE / RPE definitions | TODO |
| Dynamic condition | TODO |
| Runtime measurement | TODO |
| Commit / environment | TODO |
</section>

<section id="results">
## 4. Results and ablations

<div class="research-key-numbers">
  <div class="research-key-number"><strong>TODO</strong><span>ATE RMSE</span></div>
  <div class="research-key-number"><strong>TODO</strong><span>RPE translation</span></div>
  <div class="research-key-number"><strong>TODO</strong><span>RPE rotation</span></div>
  <div class="research-key-number"><strong>TODO</strong><span>runtime</span></div>
</div>

TODO: baseline vs robust trajectory/error table + dynamic rejection ablation.

### Evidence gallery
<div class="research-gallery" data-evidence-gallery="/assets/research/p2/gallery.json"><div data-evidence-gallery-content></div></div>
</section>

<section id="failures">
## 5. Failure explorer
Recommended categories only if observed: fast motion, low texture, depth holes, blur, dynamic occlusion.

For every case: **Observation → hypothesis → diagnostic evidence → attempted remedy → residual limitation.**
</section>

<section id="reproducibility">
## 6. Reproducibility and ownership
TODO: geometry unit tests, trajectory evaluator, environment, commit, AI provenance.

## 7. What this enables next
Explain how verified ego-motion reasoning becomes an input capability for P4.
</section>
