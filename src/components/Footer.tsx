export function Footer() {
  return (
    <footer className="border-t border-hairline bg-footer">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-3 px-6 py-9 sm:flex-row sm:items-center sm:justify-between sm:px-14">
        <div className="font-newsreader text-[14.5px] leading-[1.6] text-body-soft">
          Austin AI Alignment · The University of Texas at Austin ·
          contact@a3.org
        </div>
        <div className="font-chivo-mono text-[12px] leading-none tracking-[.06em] text-label-muted">
          <a href="#" className="hover:text-burnt">
            SLACK
          </a>
          {" · "}
          <a href="#" className="hover:text-burnt">
            MAILING LIST
          </a>
          {" · "}
          <a href="#" className="hover:text-burnt">
            READING LIST
          </a>
        </div>
      </div>
    </footer>
  );
}
