"use client";

import { useEffect, useState } from "react";

const WORDS = ["control", "align", "interpret", "evaluate", "govern"];
const INTERVAL_MS = 2200;
const LONGEST_WORD = WORDS.reduce((a, b) => (b.length > a.length ? b : a));

export function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* readable single word for assistive tech; the cycling display below is aria-hidden */}
      <span className="sr-only">{WORDS[0]}</span>
      <span aria-hidden="true" className="relative inline-grid text-tint-eyebrow">
        <span className="invisible col-start-1 row-start-1">{LONGEST_WORD}</span>
        {WORDS.map((word, i) => (
          <span
            key={word}
            className="col-start-1 row-start-1 transition-opacity duration-500 ease-in-out motion-reduce:transition-none"
            style={{ opacity: i === index ? 1 : 0 }}
          >
            {word}
          </span>
        ))}
      </span>
    </>
  );
}
