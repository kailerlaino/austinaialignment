"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { timeHorizons, type TimeHorizonPoint } from "@/lib/metr";

type Scale = "linear" | "log";

const YEAR_MS = 365.25 * 24 * 60 * 60 * 1000;
const FRONTIER = "#bf5700";
const OTHER = "#d9c4ad";

// log-axis ticks in minutes: each one 4x the last
const LOG_TICKS = [1, 4, 15, 60, 240, 960, 3840];

export function formatMinutes(minutes: number) {
  if (minutes < 1) return `${Math.round(minutes * 60)} sec`;
  if (minutes < 60) return `${minutes < 10 ? minutes.toFixed(1).replace(/\.0$/, "") : Math.round(minutes)} min`;
  const hours = (minutes / 60).toFixed(1);
  return `${hours} ${hours === "1.0" ? "hr" : "hrs"}`;
}

const dateFormat = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

interface Prepared extends TimeHorizonPoint {
  t: number;
  frontier: boolean;
}

function prepare(points: TimeHorizonPoint[]): Prepared[] {
  let best = 0;
  return [...points]
    .map((p) => ({ ...p, t: Date.parse(p.release) }))
    .sort((a, b) => a.t - b.t)
    .map((p) => {
      const frontier = p.p50 > best;
      if (frontier) best = p.p50;
      return { ...p, frontier };
    });
}

// least-squares fit of log2(minutes) against years, over the frontier points
function fitTrend(points: Prepared[]) {
  const xs = points.map((p) => p.t / YEAR_MS);
  const ys = points.map((p) => Math.log2(p.p50));
  const n = xs.length;
  const mx = xs.reduce((a, b) => a + b, 0) / n;
  const my = ys.reduce((a, b) => a + b, 0) / n;
  let num = 0;
  let den = 0;
  for (let i = 0; i < n; i++) {
    num += (xs[i] - mx) * (ys[i] - my);
    den += (xs[i] - mx) ** 2;
  }
  const slope = num / den;
  const intercept = my - slope * mx;
  return (t: number) => 2 ** (intercept + slope * (t / YEAR_MS));
}

function niceHourStep(maxHours: number) {
  for (const step of [1, 2, 5, 10, 20, 50]) {
    if (maxHours / step <= 5) return step;
  }
  return 100;
}

export function TimeHorizonChart() {
  const boxRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [scale, setScale] = useState<Scale>("linear");
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width: Math.round(width), height: Math.round(height) });
    });
    observer.observe(box);
    return () => observer.disconnect();
  }, []);

  const points = useMemo(() => prepare(timeHorizons), []);
  const trend = useMemo(() => fitTrend(points.filter((p) => p.frontier)), [points]);

  const { width, height } = size;
  // text and margins grow with the chart: 12px on phones up to 16px on wide screens
  const font = Math.round(Math.min(16, Math.max(12, width / 52)));
  const MARGIN = { top: 20, right: 20, bottom: font * 2.8, left: font * 4.9 };
  const plotW = Math.max(0, width - MARGIN.left - MARGIN.right);
  const plotH = Math.max(0, height - MARGIN.top - MARGIN.bottom);

  const tMin = points[0].t - 0.15 * YEAR_MS;
  const tMax = points[points.length - 1].t + 0.35 * YEAR_MS;
  const maxP50 = Math.max(...points.map((p) => p.p50));
  const minP50 = Math.min(...points.map((p) => p.p50));

  const x = (t: number) => MARGIN.left + ((t - tMin) / (tMax - tMin)) * plotW;

  const hourStep = niceHourStep((maxP50 / 60) * 1.1);
  const linearTop = Math.ceil(((maxP50 / 60) * 1.1) / hourStep) * hourStep * 60;
  const logLo = Math.min(minP50 / 2, 1);
  const logHi = maxP50 * 3;

  const y = (minutes: number) => {
    if (scale === "linear") return MARGIN.top + plotH - (minutes / linearTop) * plotH;
    const v = Math.log(Math.max(minutes, logLo)) - Math.log(logLo);
    return MARGIN.top + plotH - (v / (Math.log(logHi) - Math.log(logLo))) * plotH;
  };

  const yTicks =
    scale === "linear"
      ? Array.from({ length: Math.round(linearTop / 60 / hourStep) + 1 }, (_, i) => i * hourStep * 60)
      : LOG_TICKS.filter((m) => m >= logLo && m <= logHi);

  const yearTicks: number[] = [];
  for (let yr = new Date(tMin).getUTCFullYear() + 1; Date.UTC(yr, 0, 1) <= tMax; yr++) {
    yearTicks.push(Date.UTC(yr, 0, 1));
  }

  // trend curve, clipped to the plot area by the svg clipPath
  const trendPath = useMemo(() => {
    if (!plotW) return "";
    const steps = 160;
    let d = "";
    for (let i = 0; i <= steps; i++) {
      const t = tMin + ((tMax - tMin) * i) / steps;
      d += `${i ? "L" : "M"}${x(t).toFixed(1)},${y(trend(t)).toFixed(1)}`;
    }
    return d;
    // x and y change with size and scale
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plotW, plotH, scale, trend, tMin, tMax]);

  // direct labels: newest frontier models first, skipping any that would collide
  const labels = useMemo(() => {
    if (!plotW) return [];
    const placed: { i: number; x: number; y: number; anchor: "start" | "end"; box: [number, number, number, number] }[] = [];
    const dots = points.map((p) => [x(p.t), y(p.p50)] as const);
    const candidates = points
      .map((p, i) => ({ p, i }))
      .filter(({ p }) => p.frontier)
      .reverse();
    for (const { p, i } of candidates) {
      const text = `${p.model}  ${formatMinutes(p.p50)}`;
      const w = text.length * font * 0.5;
      const [px, py] = dots[i];
      let anchor: "start" | "end" = "end";
      let lx = px - 10;
      if (lx - w < MARGIN.left) {
        anchor = "start";
        lx = px + 10;
      }
      const ly = py - 10;
      const box: [number, number, number, number] =
        anchor === "end" ? [lx - w, ly - font, lx, ly + 3] : [lx, ly - font, lx + w, ly + 3];
      if (box[1] < 0 || box[2] > width) continue;
      const hitsLabel = placed.some(
        (l) => box[0] < l.box[2] && l.box[0] < box[2] && box[1] < l.box[3] && l.box[1] < box[3],
      );
      const hitsDot = dots.some(
        ([dx, dy]) => dx > box[0] - 4 && dx < box[2] + 4 && dy > box[1] - 4 && dy < box[3] + 4,
      );
      if (hitsLabel || hitsDot) continue;
      placed.push({ i, x: lx, y: ly, anchor, box });
    }
    return placed;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [points, plotW, plotH, scale, width]);

  const pickNearest = (clientX: number, clientY: number) => {
    const rect = boxRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = clientX - rect.left;
    const py = clientY - rect.top;
    let best: number | null = null;
    let bestDist = 40;
    points.forEach((p, i) => {
      const d = Math.hypot(x(p.t) - px, y(p.p50) - py);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActive(best);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const last = points.length - 1;
    setActive((i) => {
      if (i === null) return e.key === "ArrowRight" ? 0 : last;
      return Math.min(last, Math.max(0, i + (e.key === "ArrowRight" ? 1 : -1)));
    });
  };

  const activePoint = active === null ? null : points[active];
  const tipLeft = activePoint ? x(activePoint.t) : 0;
  const tipTop = activePoint ? y(activePoint.p50) : 0;

  const toggleClass = (on: boolean) =>
    `font-newsreader px-3 py-2 text-[15px] leading-none [text-box:trim-both_cap_alphabetic] transition-colors ${
      on ? "bg-ink text-white" : "text-body hover:bg-hairline"
    }`;

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <ul className="font-newsreader flex flex-wrap gap-x-5 gap-y-1 text-[14.5px] leading-none text-body">
          <li className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: FRONTIER }} />
            Best model so far
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: OTHER }} />
            Other models
          </li>
          <li className="flex items-center gap-2">
            <span className="h-[2px] w-4" style={{ background: FRONTIER }} />
            Trend
          </li>
        </ul>
        <div role="group" aria-label="Y-axis scale" className="flex overflow-hidden rounded-[2px] border border-hairline">
          <button type="button" aria-pressed={scale === "linear"} onClick={() => setScale("linear")} className={toggleClass(scale === "linear")}>
            Linear
          </button>
          <button type="button" aria-pressed={scale === "log"} onClick={() => setScale("log")} className={toggleClass(scale === "log")}>
            Log
          </button>
        </div>
      </div>

      <div
        ref={boxRef}
        className="relative h-[320px] rounded-[2px] border border-[#e9e4d9] bg-offwhite sm:h-[400px] lg:h-[clamp(300px,calc(100svh-360px),720px)]"
      >
        {width > 0 && (
          <svg
            width={width}
            height={height}
            tabIndex={0}
            role="img"
            aria-label="Length of tasks AI agents can complete at 50% reliability, by model release date. Use left and right arrow keys to step through models."
            className="block touch-none outline-none focus-visible:ring-2 focus-visible:ring-burnt"
            fontFamily="var(--font-newsreader), serif"
            onPointerMove={(e) => pickNearest(e.clientX, e.clientY)}
            onPointerDown={(e) => pickNearest(e.clientX, e.clientY)}
            onPointerLeave={(e) => e.pointerType === "mouse" && setActive(null)}
            onKeyDown={onKeyDown}
            onBlur={() => setActive(null)}
          >
            <defs>
              <clipPath id="th-plot">
                <rect x={MARGIN.left} y={MARGIN.top} width={plotW} height={plotH} />
              </clipPath>
            </defs>

            {/* grid + y-axis */}
            {yTicks.map((m) => (
              <g key={m}>
                <line x1={MARGIN.left} x2={MARGIN.left + plotW} y1={y(m)} y2={y(m)} stroke={m === 0 ? "#d5cec2" : "#eee9de"} />
                <text x={MARGIN.left - 10} y={y(m) + font * 0.35} textAnchor="end" fontSize={font} fill="#6b655b">
                  {m === 0 ? "0" : formatMinutes(m).replace(".0 ", " ")}
                </text>
              </g>
            ))}

            {/* x-axis years */}
            {yearTicks.map((t) => (
              <g key={t}>
                <line x1={x(t)} x2={x(t)} y1={MARGIN.top + plotH} y2={MARGIN.top + plotH + 5} stroke="#d5cec2" />
                <text x={x(t)} y={MARGIN.top + plotH + font * 1.7} textAnchor="middle" fontSize={font} fill="#6b655b">
                  {new Date(t).getUTCFullYear()}
                </text>
              </g>
            ))}

            <g clipPath="url(#th-plot)">
              <path d={trendPath} fill="none" stroke={FRONTIER} strokeWidth={2} strokeOpacity={0.55} strokeDasharray="6 5" />

              {/* confidence interval for the hovered model */}
              {activePoint?.low !== undefined && activePoint.high !== undefined && (
                <line
                  x1={x(activePoint.t)}
                  x2={x(activePoint.t)}
                  y1={y(activePoint.low)}
                  y2={y(activePoint.high)}
                  stroke="#5b564d"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              )}

              {points.map((p, i) => (
                <circle
                  key={p.model}
                  cx={x(p.t)}
                  cy={y(p.p50)}
                  r={i === active ? 7 : p.frontier ? 5 : 4}
                  fill={p.frontier ? FRONTIER : OTHER}
                  stroke="#fdfcfa"
                  strokeWidth={2}
                />
              ))}
            </g>

            {labels.map((l) => (
              <text key={l.i} x={l.x} y={l.y} textAnchor={l.anchor} fontSize={font} fill="#3d3a35">
                {points[l.i].model}
                <tspan dx={6} fill={FRONTIER} fontWeight={500}>
                  {formatMinutes(points[l.i].p50)}
                </tspan>
              </text>
            ))}
          </svg>
        )}

        {activePoint && (
          <div
            role="status"
            className="pointer-events-none absolute z-10 w-max max-w-[240px] rounded-[2px] border border-hairline bg-white px-3.5 py-2.5 shadow-[0_6px_20px_rgba(0,0,0,0.12)]"
            style={{
              left: tipLeft,
              top: tipTop,
              transform: `translate(${tipLeft > width * 0.6 ? "calc(-100% - 14px)" : "14px"}, ${tipTop < 90 ? "8px" : "calc(-100% - 8px)"})`,
            }}
          >
            <div className="font-newsreader text-[20px] leading-tight font-medium text-ink">
              {formatMinutes(activePoint.p50)}
            </div>
            <div className="font-newsreader mt-0.5 text-[15px] leading-snug text-body">{activePoint.model}</div>
            <div className="font-newsreader text-[14px] leading-snug text-body-muted">
              Released {dateFormat.format(new Date(activePoint.t))}
            </div>
            {activePoint.low !== undefined && activePoint.high !== undefined && (
              <div className="font-newsreader text-[14px] leading-snug text-body-muted">
                95% CI: {formatMinutes(activePoint.low)} to {formatMinutes(activePoint.high)}
              </div>
            )}
          </div>
        )}
      </div>

      {/* tables ignore sr-only sizing, so the wrapper does the hiding */}
      <div className="sr-only">
        <table>
          <caption>AI agent time horizons by model</caption>
          <thead>
            <tr>
              <th>Model</th>
              <th>Released</th>
              <th>50% time horizon</th>
            </tr>
          </thead>
          <tbody>
            {points.map((p) => (
              <tr key={p.model}>
                <td>{p.model}</td>
                <td>{p.release}</td>
                <td>{formatMinutes(p.p50)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
