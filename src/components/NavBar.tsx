"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { slackInviteUrl } from "@/lib/data";

export function NavBar() {
  const headerRef = useRef<HTMLElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    // the hero fills the screen minus this bar
    const observer = new ResizeObserver(() => {
      document.documentElement.style.setProperty("--nav-h", `${header.offsetHeight}px`);
    });
    observer.observe(header);

    // hide while scrolling down, come back as soon as the reader scrolls up
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY) < 4) return;
      setHidden(y > lastY && y > header.offsetHeight);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-40 border-b border-hairline bg-offwhite transition-transform duration-300 ease-out focus-within:translate-y-0 motion-reduce:transition-none ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-4 px-6 py-5 sm:px-14">
        <Link href="/" className="flex shrink-0 items-center gap-2 sm:gap-[11px]">
          <Image src="/a3-logo.png" alt="Austin AI Alignment" width={26} height={26} />
          <span className="font-newsreader hidden whitespace-nowrap text-[15px] leading-none font-medium text-ink min-[390px]:inline sm:text-[17px]">
            Austin AI Alignment
          </span>
        </Link>
        <nav className="flex items-center gap-3 sm:gap-[26px]">
          <Link href="/#mission" className="font-newsreader hidden whitespace-nowrap text-[14.5px] leading-none text-nav-link lg:inline">
            Mission
          </Link>
          <Link href="/#fellowships" className="font-newsreader hidden whitespace-nowrap text-[14.5px] leading-none text-nav-link lg:inline">
            Fellowships
          </Link>
          <Link href="/#members" className="font-newsreader hidden whitespace-nowrap text-[14.5px] leading-none text-nav-link lg:inline">
            Members
          </Link>
          <Link href="/curriculum" className="font-newsreader whitespace-nowrap text-[14px] leading-none text-nav-link sm:text-[14.5px]">
            Curriculum
          </Link>
          <a
            href={slackInviteUrl}
            className="font-newsreader whitespace-nowrap rounded-[2px] bg-burnt px-3 py-[12px] text-[15px] leading-none [text-box:trim-both_cap_alphabetic] font-medium text-white transition-colors hover:bg-burnt-dark sm:px-4 sm:text-[15.5px]"
          >
            Join Slack
          </a>
        </nav>
      </div>
    </header>
  );
}
