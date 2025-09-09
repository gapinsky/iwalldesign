"use client";

import { motion } from "framer-motion";

export function ShinyWord({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative w-fit bg-gradient-to-tr from-[#41dfa9] via-[#16b1c2] to-[#05282c] text-transparent bg-clip-text overflow-hidden">
      {/* Tekst (gradient) */}
      {children}

      {/* Błysk – jednorazowa animacja od lewej do prawej */}
      <motion.span
        initial={{ x: "-100%" }}
        animate={{ x: "500%" }}
        transition={{ duration: 3, ease: "easeOut", repeat: Infinity }}
        aria-hidden="true"
        className="absolute top-0 bottom-0 skew-x-12 left-0 w-[20%] pointer-events-none z-20 bg-gradient-to-r from-transparent via-white/60 to-transparent"
      />
    </span>
  );
}
