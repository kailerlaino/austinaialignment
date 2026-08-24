import { organizers } from "@/lib/data";

export function Organizers() {
  return (
    <section className="bg-offwhite px-6 py-16 sm:px-14 sm:py-16">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="border-t border-ink pt-[34px]">
          <div className="mb-2 flex flex-col items-baseline gap-2 sm:flex-row sm:gap-5">
            <h2 className="font-newsreader text-[27px] leading-[1.3] font-normal text-ink">
              Talk to an organizer
            </h2>
            <div className="font-newsreader text-[15px] leading-[1.5] text-body-muted">
              Twenty minutes, no commitment, no application required.
            </div>
          </div>
          <div className="mt-7 flex flex-wrap gap-6">
            {organizers.map((organizer) => (
              <a
                key={`${organizer.name}-${organizer.role}`}
                href={organizer.bookingUrl}
                className="flex items-center gap-3.5"
                aria-label={`Chat with ${organizer.name}`}
              >
                <div
                  className="h-14 w-14 flex-none rounded-full"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg, #f0dcc2 0 5px, #f7ece0 5px 10px)",
                  }}
                />
                <div>
                  <div className="font-newsreader text-[15.5px] leading-[1.3] font-medium text-ink">
                    {organizer.name}
                  </div>
                  <div className="font-chivo-mono mt-[3px] text-[12px] leading-[1.4] text-label-muted">
                    {organizer.role}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
