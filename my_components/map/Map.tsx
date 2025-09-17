import { ShinyWord } from "../navbar/ShinyWord";

export default function Map() {
  return (
    <section
      className="bg-gradient-to-b bg-gray-300 to-white"
      aria-labelledby="lokalizacja-heading"
    >
      <div className="container p-5 mx-auto">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div>
            <h2
              id="lokalizacja-heading"
              className="text-3xl font-semibold lg:text-4xl xl:text-5xl"
            >
              Twój partner w druku UV –{" "}
              <ShinyWord>Koszalin i okolice</ShinyWord>
            </h2>

            <p className="text-black/70 mt-5 xl:text-xl">
              Działamy na terenie Koszalina, Kołobrzegu, Białogardu, Darłowa,
              Szczecinka i całego województwa zachodniopomorskiego. Niezależnie,
              czy potrzebujesz nadruku w domu, biurze czy przestrzeni publicznej
              – jesteśmy blisko Ciebie.
            </p>

            <address className="not-italic mt-6 text-black/80 leading-relaxed">
              <div>ul. Drukarek 5</div>
              <div>Koszalin</div>
              <div>75-000</div>
            </address>
          </div>

          <div className="w-full">
            <div className="mb-3">
              <a
                href="https://maps.google.com/?q=Koszalin"
                className="inline-block rounded-md border px-3 py-1 text-sm hover:bg-gray-50 transition"
              >
                Wyświetl większą mapę
              </a>
            </div>
            <div className="relative w-full overflow-hidden rounded-md shadow">
              <div className="pt-[56.25%]" />
              <iframe
                title="Mapa Koszalina"
                aria-label="Mapa Koszalina"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12248.76426043767!2d16.1619351!3d54.1947325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4700f0a4a62d91f3%3A0x84c17ed3d2f1b2d9!2sKoszalin!5e0!3m2!1spl!2spl!4v1694091200000"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
