// components/sections/Visualizer.tsx
import Link from "next/link";
import Container from "../assets/Container";
import Title from "../assets/Title";
import { ShinyWord } from "../navbar/ShinyWord";
import Image from "next/image";

type Step = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

const steps: Step[] = [
  {
    title: "Dodaj tło",
    description:
      "Wgraj zdjęcie powierzchni, na której chcesz nadruk: ściana, podłoga, mebel, tkanina. To będzie Twoje „płótno”.",
    image: {
      src: "/images/steps/step-1.jpg",
      alt: "Przesyłanie 85% na monitorze",
    },
  },
  {
    title: "Umieść i dopasuj",
    description:
      "Przeciągnij swoją grafikę, zmieniaj rozmiar i położenie. Intuicyjne uchwyty pozwolą dopracować detale w sekundę.",
    image: {
      src: "/images/steps/step-2.jpg",
      alt: "Dopasowywanie grafiki na monitorze",
    },
  },
  {
    title: "Zobacz efekt",
    description:
      "Otrzymasz realistyczną wizualizację – dokładnie tak, jak będzie wyglądał nadruk w przestrzeni.",
    image: {
      src: "/images/steps/step-3.jpg",
      alt: "Podgląd końcowy na monitorze",
    },
  },
];

export function VisualizerSection() {
  return (
    <section
      id="wizualizator"
      aria-labelledby="wiz-title"
      aria-describedby="wiz-lead"
      className="scroll-mt-14 lg:scroll-mt-16"
    >
      <Container>
        <div className="flex flex-col gap-12">
          {/* Tytuł + lead */}
          <div className="space-y-6 text-center">
            <Title titleId="wiz-title" lead="wiz-lead" description="wiz-desc">
              Przetestuj <ShinyWord>Wizualizator</ShinyWord>
            </Title>

            <p
              id="wiz-lead"
              className="mx-auto max-w-2xl text-lg md:text-xl xl:text-2xl text-black/60"
            >
              Nie wiesz, jak będzie wyglądał nadruk w realnym miejscu? Nasz
              wizualizator pokaże to <strong>zanim złożysz zamówienie</strong>.
              Dodajesz zdjęcie powierzchni, dopasowujesz grafikę i od razu
              widzisz efekt.
            </p>
          </div>

          {/* Kroki jeden pod drugim */}
          <ol className="flex flex-col items-center ">
            {/* KROK 1 */}
            <li className="relative flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-10 ">
              <div className="relative flex-shrink-0  ">
                <div className="absolute inset-0 rounded-full bg-gray-200 blur-2xl " />
                <Image
                  src={"/assets/images/timeline/uploadStep.png"}
                  alt="Krok 1 — przesyłanie zdjęcia powierzchni"
                  width={260}
                  height={170}
                  className="relative z-10 h-auto w-full max-w-[340px]  md:max-w-[400px] rounded-xl"
                />
              </div>

              <div className="max-w-prose">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full  font-semibold border">
                  1
                </div>
                <h3 className="font-semibold text-xl md:text-2xl">Dodaj tło</h3>
                <p className="mt-2 text-lg md:text-xl text-black/60">
                  Wgraj zdjęcie powierzchni (ściana, podłoga, mebel, tkanina).
                  To będzie Twoje „płótno”.
                </p>
              </div>
              <div className="absolute bottom-0 left-1/2 -rotate-15 -translate-x-1/2 translate-y-2/3 ">
                <Image
                  src={"/assets/images/timeline/arrow-down-first.png"}
                  alt="Krok 2 — dopasowanie grafiki"
                  width={130}
                  height={85}
                  className="h-auto w-full max-w-[340px] md:max-w-[400px] rounded-xl"
                />
              </div>
            </li>

            {/* KROK 2 (zamiana miejsc — tekst po lewej, obraz po prawej) */}
            <li className="relative flex flex-col items-center gap-6 md:flex-row-reverse md:items-center md:gap-10 ">
              <div className="relative flex-shrink-0 rounded-2xl  bg-white ">
                <div className="absolute inset-0 rounded-full bg-gray-200 blur-2xl " />
                <Image
                  src={"/assets/images/timeline/adjustStep.png"}
                  alt="Krok 2 — dopasowanie grafiki"
                  width={260}
                  height={170}
                  className="relative z-10 h-auto w-full max-w-[340px] md:max-w-[400px] rounded-xl"
                />
              </div>

              <div className="max-w-prose">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border font-semibold">
                  2
                </div>
                <h3 className="font-semibold text-xl md:text-2xl">
                  Umieść i dopasuj
                </h3>
                <p className="mt-2 text-lg md:text-xl text-black/60">
                  Przeciągnij swoją grafikę, skaluj i ustaw dokładnie w kadrze.
                  Intuicyjne uchwyty pozwalają dopracować detale w sekundę.
                </p>
              </div>
              <div className="absolute bottom-0 rotate-15 left-1/2 -translate-x-1/2 translate-y-1/2">
                <Image
                  src={"/assets/images/timeline/arrow-down-second.png"}
                  alt="Krok 2 — dopasowanie grafiki"
                  width={130}
                  height={85}
                  className="h-auto w-full max-w-[340px] md:max-w-[400px] rounded-xl"
                />
              </div>
            </li>

            {/* KROK 3 */}
            <li className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-10 ">
              <div className="relative flex-shrink-0 rounded-2xl  bg-white  ">
                <div className="absolute inset-0 rounded-full bg-gray-200 blur-2xl" />
                <Image
                  src={"/assets/images/timeline/finalStep.png"}
                  alt="Krok 3 — realistyczny podgląd i zatwierdzenie"
                  width={260}
                  height={170}
                  className="relative z-10 h-auto w-full max-w-[340px] md:max-w-[400px] rounded-xl"
                />
              </div>

              <div className="max-w-prose">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border font-semibold">
                  3
                </div>
                <h3 className="font-semibold text-xl md:text-2xl">
                  Zobacz efekt
                </h3>
                <p className="mt-2 text-lg md:text-xl text-black/60">
                  Otrzymujesz realistyczną wizualizację — dokładnie tak, jak
                  nadruk będzie wyglądał w Twojej przestrzeni.
                </p>
              </div>
            </li>
          </ol>

          {/* CTA pod timelinem */}
          <div className="pt-2 text-center">
            <Link
              href="/wizualizator"
              className="inline-flex items-center justify-center rounded-xl bg-black px-8 py-3 text-white transition hover:opacity-90"
            >
              Uruchom wizualizator
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
