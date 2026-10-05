# Project page authoring guide

This folder uses a deliberately small, dependency-light project-page system.

## Equations

MathJax 3.2.2 is already loaded by each project page. Use TeX only after notation and derivations are frozen.

Inline:
```html
<p>The residual is \(r_i(\theta)\).</p>
```

Display:
```html
<div class="math-block">
\[
E(\theta) = \sum_i \rho\!\left(r_i(\theta)\right)
\]
</div>
```

Do not paste screenshots of equations when TeX is available. If an equation must match a paper exactly and MathJax is unsuitable, export a vector SVG and provide descriptive alt text.

## Static figures

Use semantic figure markup:

```html
<figure class="project-media">
  <img src="assets/method.svg" alt="Describe what the figure shows">
  <figcaption>Figure 1. Explain the scientific point, not the decoration.</figcaption>
</figure>
```

Prefer SVG for method diagrams, PNG/WebP for raster visualisations, and avoid decorative illustrations that do not carry technical information.

## Videos and animations

For experiment outputs:

```html
<figure class="project-media">
  <video autoplay muted loop playsinline controls preload="metadata" poster="assets/result-poster.webp">
    <source src="assets/result.webm" type="video/webm">
    <source src="assets/result.mp4" type="video/mp4">
  </video>
  <figcaption>Same input and frame range; baseline versus proposed method.</figcaption>
</figure>
```

Use video only when motion is scientifically relevant. For deterministic method explanations, prefer SVG/CSS or small vanilla-JS canvas interactions. Avoid autoplay audio, fake controls, and interaction that does not change meaningful information.

## Interactive plots

Prefer precomputed JSON exported from the same frozen experiment artefacts used for the report. The browser should render results, not run the research model.

Recommended metadata:
- experiment_id
- code_commit
- dataset_split
- seed
- generated_at
- metric definition/version

## Resource buttons

Research-index and project-page placeholders are intentionally disabled until the artefact exists. When a PDF, video, code repository, or result dataset becomes public:
1. add the URL/path to `_data/research.yml`;
2. replace the disabled span in the relevant project page with an anchor;
3. verify the URL in a clean browser session;
4. only then publish the resource label as active.

## Result-page order after a project is complete

Keep the page linear:
1. Title / authors / resources
2. Abstract
3. Problem / motivation
4. Method and equations
5. Experimental protocol
6. Main results
7. Ablation / robustness
8. Qualitative evidence or video
9. Failure analysis
10. Reproducibility
11. Citation (only if a public report/preprint exists)

Do not add bento grids, decorative gradients, social-proof logos, fake statistics, or a generic marketing hero.
