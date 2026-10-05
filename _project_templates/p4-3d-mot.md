---
layout: research-project
project_code: "P4"
project_type: "Flagship synthesis project"
title: "Robust Ego-Motion-Aware 3D Multi-Object Tracking under Detection and Pose Uncertainty"
subtitle: "Persistent object reasoning under observer motion, imperfect detections, and uncertain pose."
status: "TEMPLATE — replace after evidence gate"
status_class: "flagship"
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
role: "Independent flagship research project"
research_question: "How robust is persistent 3D object tracking when both detections and the observer's own motion are uncertain?"
tldr: "TODO — one falsifiable sentence stating the main verified result, with no novelty inflation."
key_stats: []
report_url:
code_url:
experiments_url:
preprint_url:
data_url:
---

<section id="walkthrough">
## How the tracker works

<div class="research-walkthrough" data-stage-walkthrough>
  <div class="research-walkthrough__viewport">
    <div class="research-stage" data-stage><span class="research-stage__index">Stage 1</span><h3>3D detections at frame t</h3><div class="research-stage__visual">TODO: camera/BEV view with cached 3D detections.</div><p>Define the observations entering the tracker.</p></div>
    <div class="research-stage" data-stage><span class="research-stage__index">Stage 2</span><h3>Ego-motion estimate</h3><div class="research-stage__visual">TODO: T(t→t+1), coordinate frames, pose uncertainty.</div><p>Show how observer motion changes the apparent object state.</p></div>
    <div class="research-stage" data-stage><span class="research-stage__index">Stage 3</span><h3>Ego-motion compensation</h3><div class="research-stage__visual">TODO: uncompensated vs compensated track states.</div><p>Make the coordinate transform visible.</p></div>
    <div class="research-stage" data-stage><span class="research-stage__index">Stage 4</span><h3>State prediction</h3><div class="research-stage__visual">TODO: predicted track state + covariance/uncertainty.</div><p>Explain the motion/state model.</p></div>
    <div class="research-stage" data-stage><span class="research-stage__index">Stage 5</span><h3>Uncertainty-aware association</h3><div class="research-stage__visual">TODO: cost matrix / gating / assignments.</div><p>Expose why one association is accepted and another rejected.</p></div>
    <div class="research-stage" data-stage><span class="research-stage__index">Stage 6</span><h3>Track lifecycle</h3><div class="research-stage__visual">TODO: tentative → confirmed → lost → recovered/deleted.</div><p>Connect frame-level decisions to persistent object identity.</p></div>
  </div>
  <div class="research-walkthrough__controls"><button type="button" data-stage-prev>← Previous</button><button type="button" data-stage-next>Next →</button><button type="button" data-stage-replay>Replay</button><span class="research-walkthrough__counter" data-stage-counter></span></div>
</div>
</section>

<section id="question">
## 1. Research question and synthesis
TODO: precise hypothesis tying ego-motion, detection uncertainty, pose uncertainty and association robustness.

<div class="research-mechanism"><div class="research-mechanism__claim">Core mechanism / finding</div><p>TODO: after experiments, state the diagnostic mechanism you can actually defend—for example a regime where pose error dominates association failure, or where compensation changes ID-switch sensitivity.</p></div>
</section>

<section id="method">
## 2. Method

### 2.1 Coordinate frames
TODO: world/camera/object states and transform conventions.

### 2.2 Ego-motion compensation
TODO: how detections/tracks are transformed and how pose uncertainty is represented.

### 2.3 Persistent object state
TODO: state vector, prediction, update, covariance/uncertainty if used.

### 2.4 Uncertainty-aware association
TODO: gating, cost, matching algorithm and uncertainty terms.

### 2.5 Track lifecycle
TODO: initiation, confirmation, missed detections, recovery/deletion.

### 2.6 Cached detection interface
TODO: deterministic input contract so tracker experiments can be repeated independently of detector training.

<div class="research-demo">
  <h3>Joint uncertainty playground — template preview</h3>
  <div class="research-demo__toolbar"><label>Illustrative severity <input type="range" min="0" max="100" value="25"></label><span><span data-range-output>25</span>/100</span></div>
  <div class="research-demo__canvas"><canvas data-research-canvas="heatmap" data-height="330" aria-label="Synthetic uncertainty heatmap"></canvas></div>
  <p class="research-demo__note"><strong>Synthetic template only.</strong> Replace with a grid exported from frozen detection-noise × pose-noise experiments. Each cell should link to metrics and a representative sequence.</p>
</div>
</section>

### Camera / BEV evidence pairs
<div class="research-pair-gallery" data-pair-gallery="/assets/research/p4/pairs.json"></div>
<p class="research-demo__note"><strong>Template.</strong> Pair baseline and proposed outputs from the same cached detections, pose source, frame range, and perturbation condition.</p>

<section id="experiments">
## 3. Experimental protocol
| Item | Frozen value |
|---|---|
| Dataset / tracking split | TODO |
| Cached detector | TODO |
| Pose source | TODO |
| Detection-noise grid | TODO |
| Pose-noise grid | TODO |
| Tracker seeds | TODO |
| Metrics | TODO |
| Commit / environment | TODO |

### Controlled perturbations
TODO: define distributions, units, invariants, seeds and rationale. Never use arbitrary noise without a scientific reason.
</section>

<section id="results">
## 4. Main results
<div class="research-key-numbers">
  <div class="research-key-number"><strong>TODO</strong><span>HOTA</span></div>
  <div class="research-key-number"><strong>TODO</strong><span>IDF1</span></div>
  <div class="research-key-number"><strong>TODO</strong><span>ID switches</span></div>
  <div class="research-key-number"><strong>TODO</strong><span>CPU latency</span></div>
</div>

### Ablations
TODO: isolate ego-motion compensation, uncertainty term(s), association choices and lifecycle settings.

### Qualitative evidence gallery
<div class="research-gallery" data-evidence-gallery="/assets/research/p4/gallery.json"><div data-evidence-gallery-content></div></div>
</section>

<section id="failures">
## 5. Failure taxonomy
TODO: categories must emerge from observed failures, not from a prewritten marketing taxonomy.

Recommended presentation for each case:
**sequence → frame range → symptom → responsible module → evidence → attempted remedy → unresolved limitation.**
</section>

<section id="reproducibility">
## 6. Reproducibility, tests and ownership
TODO: synthetic/invariance tests, coordinate transform tests, assignment tests, cached-input checksum, perturbation seeds, metric implementation, commit, CPU profile, AI provenance.

## 7. Limitations and next research questions
Separate verified limitations from future hypotheses. Do not describe untested work as a contribution.
</section>
