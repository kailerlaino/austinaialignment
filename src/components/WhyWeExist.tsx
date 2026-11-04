import { ResearcherGap } from "./ResearcherGap";

const DOT_COUNT = 20;

// side lengths scale by sqrt(5) so each square has 5x the area of the last
const SQUARES = [
  { x: 0, side: 17.9, opacity: 0.3, label: "1×" },
  { x: 34, side: 40, opacity: 0.5, label: "5×" },
  { x: 90, side: 89.4, opacity: 0.75, label: "25×" },
  { x: 196, side: 200, opacity: 1, label: "125×" },
];

export function WhyWeExist() {
  return (
    <section id="why" className="bg-offwhite py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1180px] px-6 sm:px-14">
        <h2 className="font-newsreader text-[40px] leading-[1.1] font-normal text-ink sm:text-[56px] lg:text-[72px]">
          AI is growing fast. <br className="hidden lg:block" />
          We want to make sure it goes well.
        </h2>

        {/* compute growth: each square has 5x the area of the last */}
        <div className="mt-16 grid grid-cols-1 items-end gap-10 border-t border-hairline pt-14 sm:mt-20 sm:grid-cols-2 sm:gap-20">
          <div>
            <div className="font-newsreader whitespace-nowrap text-[72px] leading-none font-normal text-ink sm:text-[96px] lg:text-[120px]">
              5&times; a year
            </div>
            <p className="font-newsreader mt-5 max-w-[34ch] text-[20px] leading-[1.45] text-body sm:text-[24px]">
              How fast the compute used to train frontier models has grown
              every year since 2020, according to{" "}
              <a
                href="https://epoch.ai/trends"
                className="border-b border-tint-underline text-burnt"
              >
                Epoch AI
              </a>
              . Our ability to understand them hasn&rsquo;t kept up.
            </p>
          </div>
          <svg
            viewBox="0 0 400 236"
            role="img"
            aria-label="Four squares, each with five times the area of the one before"
            className="block w-full max-w-[480px] sm:justify-self-end"
            fontFamily="var(--font-newsreader), serif"
          >
            {SQUARES.map((sq) => (
              <g key={sq.label}>
                <rect x={sq.x} y={210 - sq.side} width={sq.side} height={sq.side} fill="#bf5700" fillOpacity={sq.opacity} />
                <text x={sq.x} y="232" fontSize="15" fill="#6b655b">
                  {sq.label}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* expert survey: one dot in twenty */}
        <div className="mt-16 grid grid-cols-1 items-center gap-10 border-t border-hairline pt-14 sm:mt-20 sm:grid-cols-[auto_1fr] sm:gap-20">
          <div
            role="img"
            aria-label="Twenty dots, one highlighted"
            className="grid w-fit grid-cols-5 gap-3 sm:gap-4"
          >
            {Array.from({ length: DOT_COUNT }, (_, i) => (
              <span
                key={i}
                className={
                  i === DOT_COUNT - 1
                    ? "h-9 w-9 rounded-full bg-burnt sm:h-12 sm:w-12"
                    : "h-9 w-9 rounded-full border border-dash-border sm:h-12 sm:w-12"
                }
              />
            ))}
          </div>
          <div>
            <div className="font-newsreader whitespace-nowrap text-[72px] leading-none font-normal text-ink sm:text-[96px] lg:text-[120px]">
              1 in 20
            </div>
            <p className="font-newsreader mt-5 max-w-[34ch] text-[20px] leading-[1.45] text-body sm:text-[24px]">
              The odds the median AI researcher gives that advanced AI leads
              to human extinction or something as bad, in a{" "}
              <a
                href="https://arxiv.org/abs/2401.02843"
                className="border-b border-tint-underline text-burnt"
              >
                2024 survey of 2,778 researchers
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 border-t border-hairline pt-14 sm:mt-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3
              className="font-newsreader max-w-[20ch] text-[36px] leading-[1.15] font-normal text-ink sm:text-[52px]"
              style={{ textWrap: "balance" }}
            >
              Too few people are working on making this go well.
            </h3>
            <p className="font-newsreader mt-6 max-w-[44ch] text-[19px] leading-[1.55] text-body sm:text-[22px]">
              We want more of them to come from UT. Our fellowships are a
              semester-long starting point, open to every major.
            </p>
            <a
              href="#fellowships"
              className="font-newsreader mt-9 inline-block rounded-[2px] bg-burnt px-[22px] py-[16px] text-[17px] leading-none [text-box:trim-both_cap_alphabetic] font-medium text-white transition-colors hover:bg-burnt-dark"
            >
              See the fellowships
            </a>
          </div>
          <ResearcherGap />
        </div>
      </div>
    </section>
  );
}
