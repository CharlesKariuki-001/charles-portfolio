"use client";

import { useEffect, useState } from "react";

type CursorPosition = {
  x: number;
  y: number;
};

export default function CustomCursor() {
  const [position, setPosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });

  const [isPointer, setIsPointer] = useState(false);
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");

    const updateEnabled = () => {
      setEnabled(mediaQuery.matches);
    };

    updateEnabled();

    mediaQuery.addEventListener("change", updateEnabled);

    return () => {
      mediaQuery.removeEventListener("change", updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      setVisible(false);
      return;
    }

    const move = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setVisible(true);

      setIsPointer(
        Boolean(
          target.closest(
            "a, button, [role='button'], input, textarea, select"
          )
        )
      );
    };

    const leave = () => {
      setVisible(false);
    };

    const enter = () => {
      setVisible(true);
    };

    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leave);
    document.documentElement.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.removeEventListener("mouseenter", enter);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-100 hidden rounded-full border border-cyan mix-blend-difference md:block"
      style={{
        width: isPointer ? 36 : 16,
        height: isPointer ? 36 : 16,
        opacity: visible ? 1 : 0,
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        transition:
          "width 150ms ease, height 150ms ease, opacity 150ms ease, transform 40ms linear",
      }}
    />
  );
}