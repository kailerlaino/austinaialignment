import { TimeHorizonChart } from "./TimeHorizonChart";

export function CapabilityChart() {
  return (
    <div className="-mx-2 rounded-lg bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)] sm:p-6 lg:mx-0">
      <TimeHorizonChart />
      <p className="font-newsreader mt-4 text-[16px] leading-[1.5] text-body-soft">
        Since 2023, the length of tasks AI agents can finish on their own
        has doubled about every 4 months, according to{" "}
        <a
          href="https://metr.org/time-horizons/"
          className="border-b border-tint-underline text-burnt"
        >
          METR
        </a>
        .
      </p>
    </div>
  );
}
