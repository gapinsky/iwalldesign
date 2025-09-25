"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const SECTIONS = [
  { slug: "o-nas", label: "O nas" },
  { slug: "oferta", label: "Oferta" },
  { slug: "wizualizator", label: "Wizualizator" },
  { slug: "realizacje", label: "Realizacje" },
  { slug: "cennik", label: "Cennik" },
  { slug: "kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock scroll + Esc to close
  useEffect(() => {
    const { documentElement, body } = document;
    if (open) {
      documentElement.style.overflow = "hidden";
      body.style.overflow = "hidden";
      body.style.touchAction = "none";
    } else {
      documentElement.style.overflow = "";
      body.style.overflow = "";
      body.style.touchAction = "";
    }
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onEsc);
    return () => {
      documentElement.style.overflow = "";
      body.style.overflow = "";
      body.style.touchAction = "";
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  const linkCls =
    "relative px-2 py-3 font-medium text-gray-800 transition-colors duration-200 hover:text-black " +
    "after:absolute after:content-[''] after:left-0 after:bottom-1 after:h-[2px] after:w-0 after:bg-teal-500 " +
    "after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] bg-white border-b will-change-transform transform-gpu overscroll-contain"
      data-sticky-header
    >
      {/* DESKTOP */}
      <nav className="container mx-auto hidden lg:flex items-center justify-between h-16 px-2">
        <Link
          href="/"
          aria-label="Strona główna"
          className="flex items-center gap-2"
        >
          <Image
            src="/assets/images/hero/logo.png"
            alt="iWallDesign"
            width={150}
            height={40}
            priority
          />
        </Link>

        <ul className="flex items-center gap-8">
          {SECTIONS.map(({ slug, label }) => (
            <li key={slug}>
              <Link href={`/#${slug}`} className={linkCls}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/wizualizator"
          className="rounded-sm px-4 py-2 font-medium shadow-md bg-teal-500 text-white hover:bg-teal-600 focus-visible:outline-none focus-visible:ring-2"
        >
          Wizualizator
        </Link>
      </nav>

      {/* MOBILE – top bar */}
      <div className="lg:hidden container mx-auto h-14 px-4 flex items-center justify-between">
        <Link href="/" aria-label="Strona główna" className="flex items-center">
          <Image
            src="/assets/images/logo.png"
            alt="iWallDesign logo"
            width={120}
            height={60}
            priority
          />
        </Link>
        <button
          aria-expanded={open}
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          onClick={() => setOpen((v) => !v)}
          className="p-2"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* MOBILE – OVERLAY (klik poza panelem zamyka) */}
      {open && (
        <button
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className="lg:hidden fixed top-14 left-0 right-0 bottom-0 z-[80] bg-black/40 backdrop-blur-[1px] transition-opacity"
        />
      )}

      {/* MOBILE – PANEL (fixed pod headerem) */}
      <div
        className={[
          "lg:hidden fixed left-0 right-0 z-[90]",
          "top-14", // 56px (h-14)
          "bg-white border-t shadow-sm",
          "transition-[max-height] duration-300 overflow-hidden",
          open ? "max-h-[calc(100dvh-56px)]" : "max-h-0",
        ].join(" ")}
      >
        <ul className="flex flex-col text-center">
          {SECTIONS.map(({ slug, label }) => (
            <li key={slug} className="border-b">
              <Link
                href={`/#${slug}`}
                onClick={() => setOpen(false)}
                className={linkCls + " block w-full"}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="p-3">
            <Link
              href="/wizualizator"
              className="block w-full text-center rounded-sm px-4 py-2 font-medium bg-teal-500 text-white"
              onClick={() => setOpen(false)}
            >
              Wizualizator
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
