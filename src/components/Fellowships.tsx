import { fellowships } from "@/lib/data";

export function Fellowships() {
  return (
    <section className="mt-14 border-t border-hairline bg-offwhite pt-14 sm:mt-[56px] sm:pt-[56px]">
      <div className="mx-auto w-full max-w-[1180px] px-6 sm:px-14">
        <div className="font-chivo-mono mb-7 text-[10.5px] leading-none font-medium tracking-[.14em] text-label-muted">
          FELLOWSHIPS
        </div>
        <div className="flex flex-col">
          {fellowships.map((fellowship) => (
            <div
              key={fellowship.title}
              className="grid grid-cols-1 gap-6 border-t border-hairline py-8 sm:grid-cols-[210px_1fr_190px] sm:gap-10"
            >
              <div>
                <h3 className="font-newsreader mb-2 text-[23px] leading-[1.25] font-medium text-ink">
                  {fellowship.title}
                </h3>
                <div className="font-chivo-mono text-[12.5px] leading-[1.4] text-burnt">
                  {fellowship.tag}
                </div>
              </div>
              <div>
                <p className="font-newsreader mb-3.5 text-[16.5px] leading-[1.7] text-body">
                  {fellowship.description}
                </p>
                <div className="font-newsreader text-[14.5px] leading-[1.6] text-body-muted">
                  {fellowship.note}
                </div>
              </div>
              <div className="flex flex-col items-start gap-2">
                {fellowship.meta.map((line) => (
                  <div
                    key={line}
                    className="font-chivo-mono text-[12px] leading-[1.5] text-label-muted"
                  >
                    {line}
                  </div>
                ))}
                {/* <a
                  href={fellowship.syllabusUrl}
                  className="font-newsreader mt-1.5 border-b border-tint-underline pb-[3px] text-[15px] leading-none text-burnt"
                >
                  Syllabus →
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
