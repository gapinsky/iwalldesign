"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export type Card = {
  id: number;
  content: string; // podpis na badge
  thumbnail: string; // src obrazka
  className?: string; // dodatkowe custom klasy (np. xl:col-span-8)
};

type Props = { cards: Card[] };

export default function GalleryGrid({ cards }: Props) {
  const [selected, setSelected] = useState<Card | null>(null);
  const isMdUp = useMediaQuery("(min-width: 768px)");

  // ESC -> zamknij
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // blokowanie scrolla gdy lightbox otwarty
  useLockBodyScroll(Boolean(selected) && isMdUp);

  // click-outside
  const contentRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(contentRef, Boolean(selected) && isMdUp, () =>
    setSelected(null)
  );

  return (
    <div className="w-full mx-auto">
      {/* GRID: mobile 1, md 2, lg/xl 3; na xl używamy 12 kolumn dla wsparcia col-span-* */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-12 xl:grid-flow-dense">
        {cards.map((card) => (
          <div
            key={card.id}
            className={cn(
              "relative rounded-xl overflow-hidden shadow-sm bg-white",
              // bazowe proporcje; możesz dostosować
              "aspect-square md:aspect-[4/2]",
              card.className
            )}
          >
            <motion.img
              src={card.thumbnail}
              alt={card.content}
              className="absolute inset-0 h-full w-full object-cover hover:cursor-pointer"
              whileHover={isMdUp ? { scale: 1.02 } : undefined}
              transition={{ duration: 0.25 }}
              onClick={() => {
                if (!isMdUp) return; // zoom tylko od md↑
                setSelected(card);
              }}
            />

            {/* badge */}
            <div className="absolute left-3 bottom-3">
              <span className="rounded-md px-3 py-1 text-xs font-medium text-white shadow-md bg-gradient-to-r from-blue-500 to-violet-500">
                {card.content}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selected && isMdUp && (
          <>
            {/* backdrop – zamyka po kliknięciu */}
            <motion.button
              aria-label="Zamknij podgląd"
              className="fixed inset-0 bg-black/70 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              {/* klik poza tym kontenerem zamknie podgląd (useOnClickOutside) */}
              <div
                ref={contentRef}
                className="relative max-w-[92vw] max-h-[86vh]"
              >
                <img
                  src={selected.thumbnail}
                  alt={selected.content}
                  className="max-w-full max-h-[86vh] object-contain rounded-lg shadow-2xl"
                />

                {/* X */}
                <button
                  aria-label="Zamknij"
                  onClick={() => setSelected(null)}
                  className="absolute -top-3 -right-3 rounded-full bg-white/90 hover:bg-white shadow-md p-2 hover:cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* podpis w lightboxie */}
                <div className="absolute left-3 bottom-3">
                  <span className="rounded-md px-3 py-1 text-xs font-medium text-white shadow bg-gradient-to-r from-blue-500 to-violet-500">
                    {selected.content}
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

/* -------- helpers -------- */

function useMediaQuery(query: string) {
  const mql = useMemo(
    () => (typeof window !== "undefined" ? window.matchMedia(query) : null),
    [query]
  );
  const [matches, setMatches] = useState<boolean>(!!mql?.matches);

  useEffect(() => {
    if (!mql) return;
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    // kompatybilność starszych przeglądarek
    // @ts-ignore
    mql.addEventListener
      ? mql.addEventListener("change", handler)
      : mql.addListener(handler);
    return () => {
      // @ts-ignore
      mql.removeEventListener
        ? mql.removeEventListener("change", handler)
        : mql.removeListener(handler);
    };
  }, [mql]);

  return matches;
}

function useLockBodyScroll(active: boolean) {
  useEffect(() => {
    if (!active) return;
    const originalHtml = document.documentElement.style.overflow;
    const originalBody = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = originalHtml;
      document.body.style.overflow = originalBody;
    };
  }, [active]);
}

/** zamyka, kiedy klikniesz poza element wskazany refem */
function useOnClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T | null>, // ✅ akceptuje ref z null
  active: boolean,
  onOutside: () => void
) {
  useEffect(() => {
    if (!active) return;

    const handler = (e: MouseEvent | TouchEvent | PointerEvent) => {
      const el = ref.current;
      if (!el) return; // ref jeszcze nie podpięty
      if (el.contains(e.target as Node)) return; // klik wewnątrz — ignoruj
      onOutside();
    };

    // capture -> zadziała nawet gdy ktoś robi stopPropagation niżej
    document.addEventListener("pointerdown", handler, true);
    return () => document.removeEventListener("pointerdown", handler, true);
  }, [ref, active, onOutside]);
}
