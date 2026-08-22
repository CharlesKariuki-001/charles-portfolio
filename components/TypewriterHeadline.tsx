"use client";

import { useEffect, useState } from "react";

const taglines = [
  "I build fraud defense systems for African mobile money.",
  "I break AI models on purpose, so nobody else has to.",
  "Founder, Vigilant AI.",
];

export default function TypewriterHeadline() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = taglines[taglineIndex];

    const typingSpeed = isDeleting ? 30 : 55;
    const pauseAtFull = 1800;
    const pauseAtEmpty = 400;

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseAtFull);
    } else if (isDeleting && displayText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTaglineIndex((previous) => (previous + 1) % taglines.length);
      }, pauseAtEmpty);
    } else {
      timeout = setTimeout(() => {
        const nextLength =
          displayText.length + (isDeleting ? -1 : 1);

        setDisplayText(current.slice(0, nextLength));
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, taglineIndex]);

  return (
    <h1 className="min-h-18 font-mono text-2xl text-foreground sm:text-4xl">
      {displayText}
      <span className="ml-1 inline-block h-[1em] w-0.5 align-middle bg-cyan animate-pulse-dot" />
    </h1>
  );
}