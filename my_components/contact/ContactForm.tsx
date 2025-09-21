import React from "react";

export default function Contact() {
  return (
    <section
      id="kontakt"
      aria-labelledby="contact-title"
      className="mx-auto max-w-7xl px-4 py-12"
    >
      <header className="mb-8">
        <h2 id="contact-title" className="text-2xl font-semibold leading-tight">
          Wypełnij formularz, aby otrzymać spersonalizowaną wycenę druku UV
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          Przygotujemy dla Ciebie indywidualną ofertę – szybko, rzetelnie i bez
          ukrytych kosztów.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {/* LEWA KOLUMNA */}
        <aside className="space-y-6">
          <section
            aria-labelledby="reach-us"
            className="rounded-lg border bg-white p-6 shadow-sm"
          >
            <h3 id="reach-us" className="mb-4 text-lg font-medium">
              Bądźmy w kontakcie!
            </h3>

            <address className="not-italic">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-0.5">
                    ✉️
                  </span>
                  <a
                    href="mailto:example@mail.com"
                    className="underline-offset-2 hover:underline"
                  >
                    example@mail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-0.5">
                    📞
                  </span>
                  <a
                    href="tel:+48123456789"
                    className="underline-offset-2 hover:underline"
                  >
                    +48 123 456 789
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-0.5">
                    📍
                  </span>
                  <span>Ul. Drukarek 5, 75-344 Koszalin</span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-0.5">
                    ⏱️
                  </span>
                  <span>Odpowiadamy tego samego dnia</span>
                </li>
              </ul>
            </address>
          </section>

          <section
            aria-labelledby="why-us"
            className="rounded-lg border bg-white p-6 shadow-sm"
          >
            <h3 id="why-us" className="mb-3 text-lg font-medium">
              Dlaczego warto nas wybrać?
            </h3>
            <ul className="list-disc pl-5 text-sm leading-6 text-neutral-700">
              <li>Doświadczenie w druku UV i na tekstyliach</li>
              <li>Wycena bez ukrytych kosztów</li>
              <li>Indywidualne podejście do projektu</li>
              <li>Szybka realizacja i wsparcie posprzedażowe</li>
            </ul>
          </section>
        </aside>

        {/* PRAWA KOLUMNA (FORMULARZ) */}
        <div>
          <form className="rounded-lg border bg-white p-6 shadow-sm" noValidate>
            <fieldset className="grid gap-4 md:grid-cols-2">
              <legend className="sr-only">Dane kontaktowe</legend>

              <div className="flex flex-col">
                <label htmlFor="name" className="mb-1 text-sm font-medium">
                  Imię i nazwisko{" "}
                  <span aria-hidden className="text-emerald-600">
                    *
                  </span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 text-sm font-medium">
                  E-mail{" "}
                  <span aria-hidden className="text-emerald-600">
                    *
                  </span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="mb-1 text-sm font-medium">
                  Numer telefonu
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="city" className="mb-1 text-sm font-medium">
                  Miasto
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  className="rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </fieldset>

            <fieldset className="mt-5">
              <legend className="mb-2 text-sm font-medium">
                Dodaj zdjęcia powierzchni lub projektu (max 3)
              </legend>

              {/* UI strefy wgrywania – bez logiki */}
              <div className="flex flex-col items-center justify-center rounded-md border border-dashed bg-neutral-50 px-4 py-8 text-center">
                <p className="text-sm text-neutral-600">
                  Przeciągnij i upuść pliki tutaj lub
                </p>
                <label
                  htmlFor="files"
                  className="mt-2 inline-block cursor-pointer rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white"
                >
                  Przeglądaj
                </label>
                <input
                  id="files"
                  name="files"
                  type="file"
                  multiple
                  className="sr-only"
                />
                <p className="mt-2 text-xs text-neutral-500">
                  Obsługiwane: JPG, PNG, PDF (do 10 MB każdy)
                </p>
              </div>

              {/* Placeholder listy plików (UI) */}
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-center justify-between rounded-md border px-3 py-2 text-neutral-600">
                  <span className="truncate">plik-przykladowy-1.jpg</span>
                  <button
                    type="button"
                    className="text-red-600 hover:underline"
                  >
                    Usuń
                  </button>
                </li>
              </ul>
            </fieldset>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium"
              >
                Dodatkowe informacje (opcjonalnie)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <fieldset className="mt-5">
              <legend className="sr-only">Zgody</legend>
              <label className="inline-flex items-start gap-2 text-sm">
                <input
                  type="checkbox"
                  name="consent"
                  className="mt-1"
                  required
                />
                <span>
                  Zapoznałem(am) się i akceptuję{" "}
                  <a
                    href="/polityka-prywatnosci"
                    className="text-emerald-700 underline-offset-2 hover:underline"
                  >
                    Politykę Prywatności
                  </a>
                  .
                </span>
              </label>
            </fieldset>

            <div className="mt-6">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-emerald-600 to-cyan-600 px-4 py-2.5 text-white transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                Wyślij zapytanie
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
