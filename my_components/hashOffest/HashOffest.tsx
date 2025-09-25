"use client";
import { useEffect } from "react";

function fixHashOffset() {
  const hash = decodeURIComponent(window.location.hash || "");
  if (!hash) return;
  const id = hash.slice(1);
  const el = document.getElementById(id);
  if (!el) return;

  const header = document.querySelector(
    "[data-sticky-header]"
  ) as HTMLElement | null;
  const offset = header?.offsetHeight ?? 0;
  const top = el.getBoundingClientRect().top + window.scrollY - offset - 8;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function HashOffset() {
  useEffect(() => {
    const run = () =>
      requestAnimationFrame(() => requestAnimationFrame(fixHashOffset));
    run(); // popraw po wejściu z np. /wizualizator
    window.addEventListener("hashchange", run);
    return () => window.removeEventListener("hashchange", run);
  }, []);
  return null;
}
