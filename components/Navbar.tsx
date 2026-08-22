"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#work", label: "Work" },
  { href: "#story", label: "Story" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[var(--nav-height)] max-w-6xl items-center justify-between px-6"
      >
        <a
          href="#"
          className="group flex items-center gap-3"
          aria-label="Charles Kariuki home"
        >
          <span className="font-mono text-sm font-semibold tracking-tight text-[var(--foreground)]">
            CK
          </span>

          <span className="hidden text-sm text-[var(--foreground-soft)] transition-colors group-hover:text-[var(--accent)] sm:block">
            Charles Kariuki
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs text-[var(--foreground-muted)] transition-colors duration-200 hover:text-[var(--foreground)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] px-4 py-2 font-mono text-xs text-[var(--accent)] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[#061014]"
        >
          Available
        </a>
      </nav>
    </header>
  );
}