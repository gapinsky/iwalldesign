"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/#o-nas", label: "O nas" },
  { href: "/#oferta", label: "Oferta" },
  { href: "/#uslugi", label: "Usługi" },
  { href: "/#realizacje", label: "Realizacje" },
  { href: "/prices", label: "Cennik" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // klik poza panelem = zamknij
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!open) return;
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  // blokada scrolla, gdy menu otwarte
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-100 bg-white border-b ">
      {/* Desktop */}
      <nav className="container mx-auto hidden lg:flex items-center justify-between px-2 ">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Strona główna"
        >
          <Image
            src="/assets/images/hero/logo.png"
            alt="iWallDesign"
            width={150}
            height={40}
            priority
          />
        </Link>

        <ul className="flex items-center gap-10 lg:gap-5 xl:gap-10 ">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-medium text-gray-800 block p-4 hover:text-black hover:-translate-y-1 duration-100 ease-in-out"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/wizualizator"
          className="rounded-sm px-4 mx-6 py-2 font-medium shadow-md bg-teal-500 text-white hover:bg-teal-600"
        >
          Wizualizator
        </Link>
      </nav>

      {/* Mobile */}
      <nav className="lg:hidden relative z-50">
        {/* pasek górny */}
        <div className="flex items-center justify-between  px-4 ">
          <Link
            href="/"
            className="flex items-center"
            aria-label="Strona główna"
          >
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

        {/* overlay (klik zamyka) */}
        {open && <div className="fixed inset-0 " aria-hidden="true" />}

        {/* panel: animowany dropdown z góry na dół, pełna szerokość */}
        <div
          ref={panelRef}
          className={[
            "absolute left-0 right-0 top-full bg-white border-t shadow-sm overflow-hidden",
            "transition-[max-height] duration-300 ease-out",
            open ? "max-h-[90vh]" : "max-h-0",
          ].join(" ")}
        >
          <ul className="flex flex-col w-full text-center">
            {LINKS.map((l) => (
              <li key={l.href} className="border-b">
                <Link
                  href={l.href}
                  className="block w-full px-4 py-3 text-gray-900"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
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
      </nav>
    </header>
  );
}
