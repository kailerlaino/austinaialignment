import { blogUrl, slackInviteUrl } from "@/lib/data";
import { CapabilityChart } from "./CapabilityChart";
import { RotatingWord } from "./RotatingWord";

export function Hero() {
  return (
    <section
      id="mission"
      className="flex min-h-[calc(100svh-var(--nav-h,73px))] items-center pt-14 pb-8 sm:pt-[76px] sm:pb-12 lg:py-10 xl:py-16"
      style={{ background: "linear-gradient(180deg, #bf5700 0%, #a84c00 100%)" }}
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 2xl:max-w-[1600px] items-center px-6 sm:px-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10 xl:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] xl:gap-14">
        <div className="max-w-[52ch]">
          <h1
            className="font-newsreader mb-6 text-[clamp(32px,1.4rem+1.6vw,58px)] leading-[1.28] font-normal text-white"
            style={{ textWrap: "pretty" }}
          >
            Capabilities are growing faster than our ability to <RotatingWord /> them.
          </h1>
          <p className="font-newsreader mb-3 text-[clamp(17px,0.9rem+0.35vw,22px)] leading-[1.65] text-tint-body">
            Austin AI Alignment is a community of students focused on making
            sure AI development goes well for humanity.
          </p>
          <p className="font-newsreader mb-3 text-[clamp(17px,0.9rem+0.35vw,22px)] leading-[1.65] text-tint-body">
            We have general meetings, technical and governance fellowships,
            and research.
          </p>
          <p className="font-newsreader mb-[34px] text-[clamp(17px,0.9rem+0.35vw,22px)] leading-[1.65] text-white">
            Open to all majors; no experience required.
          </p>
          <div className="mb-14 flex flex-wrap items-center gap-5 sm:mb-[56px] lg:mb-0">
            <a
              href={slackInviteUrl}
              className="font-newsreader rounded-[2px] bg-white px-[22px] py-[16px] text-[17px] leading-none [text-box:trim-both_cap_alphabetic] font-medium text-burnt transition-colors hover:bg-tint-body"
            >
              Join our Slack
            </a>
            <a
              href={blogUrl}
              className="font-newsreader rounded-[2px] border border-white px-[22px] py-[15px] text-[17px] leading-none [text-box:trim-both_cap_alphabetic] font-medium text-white transition-colors hover:bg-white/10"
            >
              Read our blog
            </a>
            {/* <a
              href="/fellowships"
              className="font-newsreader border-b border-white/50 pb-[3px] text-[16px] leading-none text-white"
            >
              Read the curriculum
            </a> */}
          </div>
        </div>
        <CapabilityChart />
      </div>
    </section>
  );
}
