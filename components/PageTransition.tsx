"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type PageTransitionProps = {
  children: ReactNode;
};

export default function PageTransition({
  children,
}: PageTransitionProps) {
  return (
    <>
      <motion.div
        aria-hidden="true"
        initial={{
          scaleX: 1,
        }}
        animate={{
          scaleX: 0,
        }}
        transition={{
          duration: 0.7,
          ease: [0.76, 0, 0.24, 1],
        }}
        style={{
          originX: 1,
        }}
        className="pointer-events-none fixed inset-0 z-200 bg-background"
      />

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 0.25,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </>
  );
}