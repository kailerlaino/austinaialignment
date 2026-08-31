export function NotesAndSemester() {
  return (
    <section className="bg-offwhite pt-11">
      <div className="mx-auto w-full max-w-[1180px] px-6 sm:px-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-14">
          <div>
            <div className="font-chivo-mono mb-5 text-[10.5px] leading-none font-medium tracking-[.14em] text-burnt">
              NOTES
            </div>
            <div className="font-newsreader text-[13.5px] leading-[1.65] text-body-soft">
              <sup className="text-burnt">1</sup> METR, <i>Measuring AI
              Ability to Complete Long Tasks</i>, 2025. Every model released
              since 2023 is plotted (labeled points trace the state of the
              art; muted points are contemporaries that didn&rsquo;t lead).
              The curve is a single fitted exponential — one growth rate from
              regression, not forced through the points — continued past the
              real data to show where the trend leads if it holds.
              Task-time-horizon is the length of task a model can complete
              with 50% reliability, shown on a linear axis (hours) rather
              than the usual log scale.
            </div>
          </div>
          <div>
            <div className="font-chivo-mono mb-5 text-[10.5px] leading-none font-medium tracking-[.14em] text-burnt">
              THIS SEMESTER
            </div>
            <div className="font-newsreader text-[16px] leading-[1.6] text-body">
              <p>- We believe AI can go very well or very poorly, we want to make sure it goes well.</p>
              <p>- Weekly GMs are open to everyone, no dues or application required.</p>
              <p>- We run two intro fellowships open to all majors, applications open at the start of each semester.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
