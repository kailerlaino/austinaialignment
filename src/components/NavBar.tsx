import Image from "next/image";
import Link from "next/link";
import { slackInviteUrl } from "@/lib/data";

export function NavBar() {
  return (
    <header className="border-b border-hairline bg-offwhite">
      <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between px-6 py-5 sm:px-14">
        <Link href="/" className="flex items-center gap-[11px]">
          <Image src="/a3-logo.png" alt="Austin AI Alignment" width={26} height={26} />
          <span className="font-newsreader text-[17px] leading-none font-medium text-ink">
            Austin AI Alignment
          </span>
        </Link>
        <nav className="hidden items-center sm:flex" style={{ gap: "26px" }}>
          <Link href="/mission" className="font-newsreader text-[14.5px] leading-none text-nav-link">
            Mission
          </Link>
          <Link href="/fellowships" className="font-newsreader text-[14.5px] leading-none text-nav-link">
            Fellowships
          </Link>
          <Link href="/members" className="font-newsreader text-[14.5px] leading-none text-nav-link">
            Members
          </Link>
          <a
            href={slackInviteUrl}
            className="font-chivo-mono rounded-[2px] bg-burnt px-4 py-[10px] text-[13px] leading-none font-medium tracking-[.02em] text-white transition-colors hover:bg-burnt-dark"
          >
            JOIN SLACK
          </a>
        </nav>
        <a
          href={slackInviteUrl}
          className="font-chivo-mono rounded-[2px] bg-burnt px-4 py-[10px] text-[13px] leading-none font-medium tracking-[.02em] text-white transition-colors hover:bg-burnt-dark sm:hidden"
        >
          JOIN SLACK
        </a>
      </div>
    </header>
  );
}
