---
layout: research-project
project_code: "P3"
project_type: "Scaled reproduction + robustness study"
title: "Scaled PointPillars Reproduction + Point-Cloud Robustness Study"
subtitle: "Compute-aware 3D detection with controlled point-cloud degradation and failure analysis."
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
research_question: "How does a pillar-based 3D detector degrade as point-cloud observations become sparse, noisy, or range-limited?"
tldr: "TODO — one falsifiable sentence describing the verified robustness behaviour."
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
    <div class="research-stage" data-stage><span class="research-stage__index">Stage 1</span><h3>Raw point cloud</h3><div class="research-stage__visual">TODO: KITTI sample and coordinate frame.</div><p>Show the sensor representation entering the pipeline.</p></div>
    <div class="research-stage" data-stage><span class="research-stage__index">Stage 2</span><h3>Pillarisation</h3><div class="research-stage__visual">TODO: XY grid + non-empty pillars.</div><p>Explain the candidate-owned representation logic.</p></div>
    <div class="research-stage" data-stage><span class="research-stage__index">Stage 3</span><h3>Pseudo-image + detector</h3><div class="research-stage__visual">TODO: pillar features → pseudo-image → head.</div><p>Connect the representation to 3D detection.</p></div>
    <div class="research-stage" data-stage><span class="research-stage__index">Stage 4</span><h3>Controlled corruption</h3><div class="research-stage__visual">TODO: clean vs corrupted point cloud.</div><p>Make corruption severity explicit and reproducible.</p></div>
    <div class="research-stage" data-stage><span class="research-stage__index">Stage 5</span><h3>Detection degradation</h3><div class="research-stage__visual">TODO: GT/predicted boxes + metric change.</div><p>Show how sensor degradation maps to model failure.</p></div>
  </div>
  <div class="research-walkthrough__controls"><button type="button" data-stage-prev>← Previous</button><button type="button" data-stage-next>Next →</button><button type="button" data-stage-replay>Replay</button><span class="research-walkthrough__counter" data-stage-counter></span></div>
</div>
</section>

<section id="question">
## 1. Research question and scaled scope
TODO: exact KITTI subset/classes, scaled-training rationale, and claims you are *not* making.

<div class="research-mechanism"><div class="research-mechanism__claim">Robustness question</div><p>TODO: state which representation bottleneck or sensing degradation you expect to dominate failure before running the study.</p></div>
</section>

<section id="method">
## 2. Method

### 2.1 Candidate-owned pillarisation
TODO: voxel/pillar bounds, point features, aggregation and deterministic tests.

### 2.2 Pseudo-image / backbone / head
TODO: scaled architecture and fidelity relative to PointPillars.

### 2.3 Robustness protocol
TODO: corruption types, severity grids and invariants.

<div class="research-demo">
  <h3>Point-cloud corruption — template preview</h3>
  <div class="research-demo__toolbar"><label>Illustrative point dropout <input type="range" min="0" max="100" value="20"></label><span><span data-range-output>20</span>%</span></div>
  <div class="research-demo__canvas"><canvas data-research-canvas="pointcloud" data-height="330" aria-label="Synthetic point-cloud preview"></canvas></div>
  <p class="research-demo__note"><strong>Synthetic template only.</strong> Replace with cached KITTI point clouds, GT boxes, predictions and frozen metrics.</p>
</div>
</section>

### Clean vs corrupted evidence
<div class="research-pair-gallery" data-pair-gallery="/assets/research/p3/pairs.json"></div>
<p class="research-demo__note"><strong>Template.</strong> Use identical KITTI samples and camera/BEV framing across clean and corrupted conditions.</p>

<section id="experiments">
## 3. Experimental protocol
| Item | Frozen value |
|---|---|
| KITTI subset / split | TODO |
| Classes | TODO |
| Backbone / scaling | TODO |
| Corruption grid | TODO |
| Seeds | TODO |
| Hardware / precision | TODO |
| Commit | TODO |
</section>

<section id="results">
## 4. Clean performance, robustness and compute
<div class="research-key-numbers">
  <div class="research-key-number"><strong>TODO</strong><span>clean 3D AP</span></div>
  <div class="research-key-number"><strong>TODO</strong><span>robustness AUC / delta</span></div>
  <div class="research-key-number"><strong>TODO</strong><span>VRAM / memory</span></div>
  <div class="research-key-number"><strong>TODO</strong><span>latency</span></div>
</div>
TODO: clean table + severity curves + representation ablation where justified.

### Evidence gallery
<div class="research-gallery" data-evidence-gallery="/assets/research/p3/gallery.json"><div data-evidence-gallery-content></div></div>
</section>

<section id="failures">
## 5. Failure analysis
TODO: range, sparsity, occlusion-like loss, orientation, small/distant objects—only if supported by observed evidence.
</section>

<section id="reproducibility">
## 6. Reproducibility and ownership
TODO: deterministic preprocessing, tiny-batch overfit test, corruption seeds, evaluation command, commit, environment, AI provenance.

## 7. What this enables next
Explain what frame-wise 3D detection capability P3 supplies to P4, and what temporal reasoning remains unsolved.
</section>
