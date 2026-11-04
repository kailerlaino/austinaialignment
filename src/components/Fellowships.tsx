import Link from "next/link";
import { fellowships } from "@/lib/data";

export function Fellowships() {
  return (
    <section id="fellowships" className="bg-burnt pt-14 pb-14 sm:pt-[72px] sm:pb-[72px]">
      <div className="mx-auto w-full max-w-[1180px] px-6 sm:px-14">
        <div className="border-t border-white/40 pt-14 sm:pt-[72px]">
          <h2 className="font-newsreader text-[36px] leading-[1.15] font-normal text-white sm:text-[48px]">
            Fellowships
          </h2>
          <p className="font-newsreader mt-3 mb-10 max-w-[52ch] text-[19px] leading-[1.5] text-tint-body sm:text-[22px]">
            Two intro fellowships, open to all majors. Applications open at the
            start of each semester.
          </p>
        </div>
        <div className="flex flex-col">
          {fellowships.map((fellowship) => (
            <div
              key={fellowship.title}
              className="grid grid-cols-1 gap-6 border-t border-white/20 py-8 sm:grid-cols-[210px_1fr_190px] sm:gap-10"
            >
              <div>
                <h3 className="font-newsreader mb-2 text-[23px] leading-[1.25] font-medium text-white">
                  {fellowship.title}
                </h3>
                <div className="font-newsreader text-[15.5px] leading-[1.4] text-tint-body">
                  {fellowship.tag}
                </div>
              </div>
              <div>
                <p className="font-newsreader mb-3.5 text-[16.5px] leading-[1.7] text-white">
                  {fellowship.description}
                </p>
                <div className="font-newsreader text-[14.5px] leading-[1.6] text-tint-body">
                  {fellowship.note}
                </div>
              </div>
              <div className="flex flex-col items-start gap-1">
                {fellowship.meta.map((line) => (
                  <div
                    key={line}
                    className="font-newsreader text-[15px] leading-[1.5] text-tint-body"
                  >
                    {line}
                  </div>
                ))}
                {fellowship.syllabusUrl && (
                  <Link
                    href={fellowship.syllabusUrl}
                    className="font-newsreader mt-3 border-b border-white/50 pb-[3px] text-[15px] leading-none text-white"
                  >
                    Open curriculum
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
