// Safety: Stephen McAleese, "AI Safety Field Growth Analysis 2025" (Sep 2025).
// Capabilities: "100,000+" estimate from 2022-23, cited by McAleese (2022) and
// Leopold Aschenbrenner (2023). No 2025 update of the capabilities figure exists.
const CAPABILITIES = 100_000;
const SAFETY = 1_100;

const BARS = [
  {
    label: "Capabilities research",
    detail: "making AI more powerful",
    value: "100,000+",
    share: 1,
    color: "#6b655b",
  },
  {
    label: "Safety research",
    detail: "~600 technical, 500 governance",
    value: "~1,100",
    share: SAFETY / CAPABILITIES,
    color: "#bf5700",
  },
];

export function ResearcherGap() {
  return (
    <figure>
      <div className="flex h-[280px] gap-6 border-b border-dash-border pt-10 sm:h-[360px] sm:gap-10">
        {BARS.map((bar) => (
          <div key={bar.label} className="flex h-full flex-1 items-end justify-center">
            <div
              className="relative min-h-[3px] w-full max-w-[140px] rounded-t-[4px]"
              style={{ height: `${bar.share * 100}%`, background: bar.color }}
            >
              <span className="font-newsreader absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap text-[18px] leading-none font-medium text-ink sm:text-[22px]">
                {bar.value}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-6 sm:gap-10">
        {BARS.map((bar) => (
          <div key={bar.label} className="font-newsreader flex-1 text-center">
            <div className="text-[16px] leading-snug text-ink sm:text-[18px]">{bar.label}</div>
            <div className="text-[14px] leading-snug text-body-muted sm:text-[15px]">{bar.detail}</div>
          </div>
        ))}
      </div>

      <figcaption className="font-newsreader mt-6 text-[14px] leading-[1.6] text-body-muted">
        Rough estimates of FTEs from 2025. Safety estimate from{" "}
        <a
          href="https://forum.effectivealtruism.org/posts/7YDyziQxkWxbGmF3u/ai-safety-field-growth-analysis-2025"
          className="border-b border-tint-underline text-burnt"
        >
          Stephen McAleese (2025)
        </a>
        , capabilities from 2023 cited by{" "}
        <a
          href="https://forum.effectivealtruism.org/posts/3gmkrj3khJHndYGNe/estimating-the-current-and-future-number-of-ai-safety"
          className="border-b border-tint-underline text-burnt"
        >
          McAleese
        </a>{" "}
        and{" "}
        <a
          href="https://www.forourposterity.com/nobodys-on-the-ball-on-agi-alignment/"
          className="border-b border-tint-underline text-burnt"
        >
          Aschenbrenner
        </a>
        . Both fields have grown since then.
      </figcaption>
    </figure>
  );
}
