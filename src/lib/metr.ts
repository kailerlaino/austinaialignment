// METR Time Horizon 1.1 (benchmark METR-Horizon-v1.1, last updated 2026-09-08).
// Source: https://metr.org/assets/benchmark_results_1_1.yaml, names as shown on
// https://metr.org/time-horizons/. Minutes; low/high are METR's CI bounds.
export interface TimeHorizonPoint {
  model: string;
  // ISO date, YYYY-MM-DD
  release: string;
  p50: number;
  low?: number;
  high?: number;
}

export const timeHorizons: TimeHorizonPoint[] = [
  { model: "GPT-4", release: "2023-03-14", p50: 3.99, low: 1.93, high: 8.0 },
  { model: "GPT-4 Nov '23", release: "2023-11-06", p50: 4.04, low: 1.87, high: 8.44 },
  { model: "Claude 3 Opus", release: "2024-03-04", p50: 3.95, low: 1.71, high: 8.76 },
  { model: "GPT-4 Turbo", release: "2024-04-09", p50: 3.73, low: 1.98, high: 6.74 },
  { model: "GPT-4o", release: "2024-05-13", p50: 6.99, low: 4.0, high: 12.91 },
  { model: "Claude 3.5 Sonnet (Old)", release: "2024-06-20", p50: 11.4, low: 5.49, high: 22.38 },
  { model: "o1-preview", release: "2024-09-12", p50: 20.33, low: 11.72, high: 33.38 },
  { model: "Claude 3.5 Sonnet (New)", release: "2024-10-22", p50: 20.52, low: 10.14, high: 40.82 },
  { model: "o1", release: "2024-12-05", p50: 38.83, low: 21.16, high: 64.95 },
  { model: "Claude 3.7 Sonnet", release: "2025-02-24", p50: 60.39, low: 33.01, high: 104.23 },
  { model: "o3", release: "2025-04-16", p50: 119.73, low: 74.62, high: 190.94 },
  { model: "Claude Opus 4", release: "2025-05-22", p50: 100.37, low: 59.99, high: 163.45 },
  { model: "Claude Opus 4.1", release: "2025-08-05", p50: 100.47, low: 59.27, high: 159.45 },
  { model: "GPT-5", release: "2025-08-07", p50: 203.01, low: 112.64, high: 405.55 },
  { model: "Gemini 3 Pro", release: "2025-11-18", p50: 224.33, low: 139.57, high: 379.24 },
  { model: "GPT-5.1-Codex-Max", release: "2025-11-19", p50: 223.71, low: 134.31, high: 396.21 },
  { model: "Claude Opus 4.5", release: "2025-11-24", p50: 292.99, low: 161.72, high: 623.7 },
  { model: "GPT-5.2 (high)", release: "2025-12-11", p50: 352.25, low: 198.07, high: 815.18 },
  { model: "Claude Opus 4.6", release: "2026-02-05", p50: 718.81, low: 316.69, high: 3633.79 },
  { model: "GPT-5.3-Codex (high)", release: "2026-02-05", p50: 349.53, low: 194.91, high: 816.35 },
  { model: "Gemini 3.1 Pro", release: "2026-02-19", p50: 384.15, low: 233.5, high: 694.75 },
  { model: "GPT-5.4 (xhigh)", release: "2026-03-05", p50: 341.74, low: 186.58, high: 768.78 },
  { model: "Claude Mythos Preview (early)", release: "2026-04-07", p50: 1044.78, low: 508.88, high: 3304.26 },
];
