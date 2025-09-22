import Link from "next/link";
import React from "react";
import Container from "../assets/Container";

export default function Footer() {
  return (
    <footer role="contentinfo" className="border-t">
      <Container>
        <div className="grid gap-10 md:grid-cols-2">
          {/* LEWA KOLUMNA */}
          <div>
            <div className="flex items-center gap-3">
              {/* podmień na <Image /> jeśli chcesz */}
              <img
                src="/assets/images/hero/logo.png"
                alt="iWallDesign"
                className="h-30 w-auto"
              />
            </div>

            <p className="mt-4 max-w-prose text-sm text-neutral-600">
              Specjalizujemy się w druku UV w Koszalinie i na terenie całego
              województwa zachodniopomorskiego. Oferujemy nadruki na ścianach,
              podłogach i tekstyliach, które zachwycają trwałością, estetyką i
              nowoczesnym designem.
            </p>

            {/* Social */}
            <ul className="mt-5 flex items-center gap-4">
              <li>
                <a
                  href="https://instagram.com/"
                  aria-label="Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border text-neutral-600 hover:bg-neutral-50"
                >
                  {/* Instagram icon */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5-3.25a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17 6.25z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/"
                  aria-label="Facebook"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border text-neutral-600 hover:bg-neutral-50"
                >
                  {/* Facebook icon */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M13.5 9H16l.5-3h-3V4.5c0-.8.2-1.3 1.4-1.3H16V.1C15.5 0 14.6 0 13.6 0 11.6 0 10 1.3 10 3.8V6H7v3h3v9h3.5V9z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* PRAWA KOLUMNA */}
          <nav
            aria-labelledby="footer-nav-title"
            className="md:justify-self-end"
          >
            <h2 id="footer-nav-title" className="mb-4 text-base font-medium">
              Przejdź do
            </h2>
            <ul className="space-y-3 text-sm text-neutral-700">
              <li>
                <Link href="/" className="hover:underline">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link href="/o-nas" className="hover:underline">
                  O nas – druk UV Koszalin
                </Link>
              </li>
              <li>
                <Link href="/realizacje" className="hover:underline">
                  Realizacje nadruków UV
                </Link>
              </li>
              <li>
                <Link href="/cennik" className="hover:underline">
                  Cennik druku UV
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:underline">
                  Kontakt – zamów nadruk UV
                </Link>
              </li>
              <li>
                <Link href="/wizualizator" className="hover:underline">
                  Wizualizator projektu
                </Link>
              </li>
              <li>
                <Link href="/polityka-prywatnosci" className="hover:underline">
                  Polityka prywatności
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 border-t pt-6 text-center text-xs text-neutral-500">
          © iWallDesign 2025
        </div>
      </Container>
    </footer>
  );
}
