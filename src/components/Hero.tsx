import { slackInviteUrl } from "@/lib/data";
import { CapabilityChartPlaceholder } from "./CapabilityChartPlaceholder";

export function Hero() {
  return (
    <section
      className="pt-14 pb-8 sm:pt-[76px] sm:pb-12"
      style={{ background: "linear-gradient(180deg, #bf5700 0%, #a84c00 100%)" }}
    >
      <div className="mx-auto w-full max-w-[1180px] px-6 sm:px-14">
        <div className="max-w-[52ch]">
          <h1
            className="font-newsreader mb-6 text-[32px] leading-[1.28] font-normal text-white sm:text-[42px]"
            style={{ textWrap: "pretty" }}
          >
            Capabilities are growing faster than our ability to control them. 
            <sup className="font-newsreader text-[15px] leading-none font-normal text-tint-eyebrow">
              1
            </sup>
          </h1>
          <p className="font-newsreader mb-[34px] text-[18px] leading-[1.65] text-tint-body">
            Austin AI Alignment runs fellowships in technical AI safety and AI
            governance for UT students — no prior background required.
          </p>
          <div className="mb-14 flex flex-wrap items-center gap-5 sm:mb-[56px]">
            <a
              href={slackInviteUrl}
              className="font-chivo-mono rounded-[2px] bg-white px-[22px] py-[14px] text-[14px] leading-none font-medium tracking-[.02em] text-burnt transition-colors hover:bg-tint-body"
            >
              JOIN OUR SLACK →
            </a>
            {/* <a
              href="/fellowships"
              className="font-newsreader border-b border-white/50 pb-[3px] text-[16px] leading-none text-white"
            >
              Read the curriculum
            </a> */}
          </div>
        </div>
        <CapabilityChartPlaceholder />
      </div>
    </section>
  );
}
