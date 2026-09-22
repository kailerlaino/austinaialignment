import { generalMeetings } from "@/lib/data";

export function GeneralMeetings() {
  return (
    <section className="mt-14 border-t border-hairline bg-offwhite pt-14 sm:mt-[56px] sm:pt-[56px]">
      <div className="mx-auto w-full max-w-[1180px] px-6 sm:px-14">
        <div className="font-chivo-mono mb-7 text-[10.5px] leading-none font-medium tracking-[.14em] text-label-muted">
          GENERAL MEETINGS
        </div>
        <div className="flex flex-col">
          {generalMeetings.map((gm) => (
            <div key={gm.title} className="border-t border-hairline py-8 first:border-t-0 first:pt-0">
              <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-newsreader text-[21px] leading-[1.3] font-medium text-ink">
                  {gm.title}
                </h3>
                <div className="font-chivo-mono text-[12px] leading-[1.4] text-label-muted">
                  {gm.date}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
                <div className="aspect-video w-full overflow-hidden rounded-[2px] border border-hairline bg-ink">
                  <iframe
                    src={gm.videoEmbedUrl}
                    title={`${gm.title} — recording`}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="flex flex-col">
                  <div className="aspect-video w-full overflow-hidden rounded-[2px] border border-hairline">
                    <iframe
                      src={gm.slidesUrl}
                      title={`${gm.title} — slides`}
                      className="h-full w-full"
                    />
                  </div>
                  <a
                    href={gm.slidesUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-newsreader mt-3 inline-block self-start border-b border-tint-underline pb-[3px] text-[14.5px] leading-none text-burnt"
                  >
                    View slides (PDF) →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
