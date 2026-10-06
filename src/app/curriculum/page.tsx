import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { curriculum } from "@/lib/data";

export const metadata: Metadata = {
  title: "Open Curriculum · Austin AI Alignment",
  description:
    "The full Austin AI Alignment Technical AI Safety curriculum, open source and free for anyone to use.",
};

export default function CurriculumPage() {
  return (
    <div className="flex flex-1 flex-col">
      <NavBar />
      <main className="mx-auto w-full max-w-[1180px] flex-1 px-6 py-14 sm:px-14">
        <div className="font-chivo-mono mb-5 text-[10.5px] leading-none font-medium tracking-[.14em] text-label-muted">
          OPEN CURRICULUM
        </div>
        <h1 className="font-newsreader mb-5 text-[38px] leading-[1.15] font-medium text-ink">
          Technical AI Safety Curriculum
        </h1>
        <p className="font-newsreader mb-12 max-w-[640px] text-[17px] leading-[1.7] text-body">
          Our intro fellowship curriculum is open source. Every week&apos;s
          materials are posted here so anyone can read along, or run their own
          group.
        </p>
        <div className="flex flex-col">
          {curriculum.map((week) => (
            <div
              key={week.title}
              className="grid grid-cols-1 gap-4 border-t border-hairline py-8 sm:grid-cols-[260px_1fr] sm:gap-10"
            >
              <h2 className="font-newsreader text-[22px] leading-[1.25] font-medium text-ink">
                {week.title}
              </h2>
              <div>
                <p className="font-newsreader mb-3 text-[16.5px] leading-[1.7] text-body">
                  {week.summary}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {week.materials.map((m) => (
                    <li key={m.url}>
                      <a
                        href={m.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-newsreader border-b border-tint-underline text-[15px] text-burnt"
                      >
                        {m.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
