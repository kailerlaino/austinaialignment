import { generalMeetings } from "@/lib/data";

export function GeneralMeetings() {
  return (
    <section className="bg-burnt pt-14 sm:pt-[72px]">
      <div className="mx-auto w-full max-w-[1180px] px-6 sm:px-14">
        <h2 className="font-newsreader text-[36px] leading-[1.15] font-normal text-white sm:text-[48px]">
          General meetings
        </h2>
        <p className="font-newsreader mt-3 mb-10 max-w-[52ch] text-[19px] leading-[1.5] text-tint-body sm:text-[22px]">
          Weekly and open to everyone. No dues, no application.
        </p>
        <div className="flex flex-col">
          {generalMeetings.map((gm) => (
            <div key={gm.title} className="border-t border-white/20 py-8">
              <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-newsreader text-[21px] leading-[1.3] font-medium text-white">
                  {gm.title}
                </h3>
                <div className="font-newsreader text-[15px] leading-[1.4] text-tint-body">
                  {gm.date}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
                <div className="aspect-video w-full overflow-hidden rounded-[2px] bg-ink">
                  <iframe
                    src={gm.videoEmbedUrl}
                    title={`${gm.title} recording`}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                {gm.slidesUrl && (
                  <div className="flex flex-col">
                    <div className="aspect-video w-full overflow-hidden rounded-[2px] bg-white">
                      <iframe
                        src={gm.slidesUrl}
                        title={`${gm.title} slides`}
                        className="h-full w-full"
                      />
                    </div>
                    <a
                      href={gm.slidesUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-newsreader mt-3 inline-block self-start border-b border-white/50 pb-[3px] text-[14.5px] leading-none text-white"
                    >
                      View slides (PDF)
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
