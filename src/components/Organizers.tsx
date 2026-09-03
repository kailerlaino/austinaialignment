import { organizers } from "@/lib/data";

export function Organizers() {
  const maxRoleLines = Math.max(
    ...organizers.map((organizer) => organizer.role.split("\n").length),
  );

  return (
    <section className="bg-offwhite px-6 py-16 sm:px-14 sm:py-16">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="border-t border-ink pt-[34px]">
          <div className="mb-2 flex flex-col items-baseline gap-2 sm:flex-row sm:gap-5">
            <h2 className="font-newsreader text-[27px] leading-[1.3] font-normal text-ink">
              Talk to an organizer
            </h2>
            <div className="font-newsreader text-[15px] leading-[1.5] text-body-muted">
              Fifteen minutes, no application required.
            </div>
          </div>
          <div className="mt-7 flex flex-wrap gap-10">
            {organizers.map((organizer) => {
              const lines = organizer.role.split("\n");
              const roleLines = [
                ...lines,
                ...Array(maxRoleLines - lines.length).fill(""),
              ];

              return (
                <div
                  key={`${organizer.name}-${organizer.role}`}
                  className="flex w-[200px] flex-col"
                >
                  <img
                    src={organizer.photoUrl}
                    alt={organizer.name}
                    className="h-28 w-28 rounded-full object-cover"
                  />
                  <div className="font-newsreader mt-4 text-[15.5px] leading-[1.3] font-medium text-ink">
                    {organizer.name}
                  </div>
                  <div className="font-chivo-mono mt-[3px] text-[12px] leading-[1.4] text-label-muted">
                    {roleLines.map((line, index) => (
                      <div key={index} className={line === "" ? "min-h-[1.4em]" : undefined}>
                        {line}
                      </div>
                    ))}
                  </div>
                  <a
                    href={organizer.bookingUrl}
                    className="font-newsreader mt-3 inline-block border-b border-tint-underline pb-[3px] text-[15px] leading-none text-burnt"
                  >
                    Book a time
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
