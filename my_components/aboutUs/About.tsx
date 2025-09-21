import Image from "next/image";
import { ShinyWord } from "../navbar/ShinyWord";
import StatCard from "./StatCard";
import Title from "../assets/Title";
import Container from "../assets/Container";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const images = [
  {
    name: "zdjecie",
    src: "/assets/images/about/about.png",
  },
  {
    name: "zdjecie",
    src: "/assets/images/about/about.png",
  },
  {
    name: "zdjecie",
    src: "/assets/images/about/about.png",
  },
  {
    name: "zdjecie",
    src: "/assets/images/about/about.png",
  },
  {
    name: "zdjecie",
    src: "/assets/images/about/about.png",
  },
];

const content = {
  titleId: "o-nas-tytuł",
  leadId: "o-nas-opis",
  description:
    "Specjalizujemy się w druku UV na ścianach, podłogach i odzieży w Koszalinie i okolicy. Łączymy technologię z estetyką, żeby wnętrza i oznakowanie wyglądały świetnie i były trwałe.",
};

export default function AboutSection() {
  return (
    <section
      id="o-nas"
      aria-labelledby={content.titleId}
      aria-describedby={content.leadId}
    >
      <Container>
        {/* <header className="mb-10">
          <h2
            id="o-nas-tytuł"
            className="text-3xl font-semibold leading-tight md:text-4xl"
          >
            Kim jesteśmy? <span className="text-emerald-600">Poznaj nas</span>
          </h2>
          <p className="mt-3 max-w-prose text-neutral-700">
            Specjalizujemy się w druku UV na ścianach, podłogach i odzieży w
            Koszalinie i okolicy. Łączymy technologię z estetyką, żeby wnętrza i
            oznakowanie wyglądały świetnie i były trwałe.
          </p>
        </header> */}
        <div className="grid items-start gap-10 md:grid-cols-2">
          {/* LEWA KOLUMNA – tekst */}
          <div className="space-y-6 border-2">
            <Title
              titleId={content.titleId}
              lead={content.leadId}
              description={content.description}
            >
              Kim jesteśmy? <ShinyWord>Poznaj nas</ShinyWord>
            </Title>
            <p className="max-w-prose text-neutral-800">
              Każdy projekt prowadzimy indywidualnie – od konsultacji i doboru
              materiałów po montaż. Dbamy o kolory, detale i terminowość.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-xs"
                >
                  ✓
                </span>
                <p>
                  Druk bezpośrednio na różnych powierzchniach: ściany, szkło,
                  drewno, metal, tkaniny.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-xs"
                >
                  ✓
                </span>
                <p>
                  Wysoka trwałość i odwzorowanie kolorów dzięki technologii UV.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-xs"
                >
                  ✓
                </span>
                <p>Pełne wsparcie: projekt, produkcja, montaż.</p>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-2.5 text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                Umów bezpłatną konsultację
              </a>
            </div>
          </div>

          {/* PRAWA KOLUMNA – obraz + statystyki */}
          <div className="space-y-6 border-2">
            <div>
              <AnimatedTestimonials testimonials={images} />
            </div>

            {/* Statystyki jako definicje */}
            <StatCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
