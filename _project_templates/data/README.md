# Interactive data contract

The project pages should eventually render **precomputed, frozen experiment outputs** rather than run heavy models in the browser.

Recommended files after each project passes its evidence gate:
- `p1/sequences.json`: frame/video assets, GT, baseline, extension, response-map assets.
- `p2/trajectories.json`: timestamped GT/baseline/robust poses plus ATE/RPE summaries.
- `p3/robustness.json`: sample point-cloud assets, GT/prediction boxes, corruption severity, metrics.
- `p4/uncertainty_grid.json`: detection/pose perturbation coordinates, metrics, failure-sequence asset IDs.

Every exported JSON should include project, experiment ID, commit hash, dataset/split, generation date, and whether it is synthetic.

Never use a hand-edited chart as the only source of a quantitative claim. Generate public visualisation data from the same frozen result artefacts used for the report.
