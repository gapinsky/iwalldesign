import Image from "next/image";
import { ShinyWord } from "../navbar/ShinyWord";
import StatCard from "./StatCard";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="bg-white  border-2 "
    >
      <div className="container  p-5 mx-auto  grid grid-cols-1 gap-10   md:grid-cols-2 md:px-10 xl:gap-50">
        {/* Image */}
        <div className="space-y-6 order-2  md:order-0 xl:order-1">
          <figure className="relative   overflow-hidden rounded-md">
            <div className="relative aspect-[4/3] w-full ">
              <Image
                src="/assets/about.png"
                alt="Zespół WallDesign obsługuje maszynę do druku UV"
                fill
                priority
                className="object-cover "
                sizes="(min-width: 1024px) 640px, 100vw"
              />
            </div>
            <figcaption className="absolute left-3 top-3 rounded-md bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
              Zespół iWallDesign
            </figcaption>
          </figure>
          <div className="grid grid-cols-2 gap-6 ">
            <StatCard title="500+" description="Zrealizowanych projektów" />
            <StatCard title="100%" description="Zadowolonych klientów" />
            <StatCard title="8/10" description="Klientów wraca po więcej" />
            <StatCard title="101%" description="Kreatywności i pasji" />
          </div>
        </div>

        <div className="space-y-4 text-black/70 xl:text-xl ">
          <h2 className="text-3xl font-semibold lg:text-4xl xl:text-5xl mb-6 xl:mb-12">
            Kim jesteśmy? <ShinyWord>Poznaj nas!</ShinyWord>
          </h2>
          <p className="tracking-wide   xl:pb-6">
            Specjalizujemy się w druku UV na ścianach, podłogach i odzieży w{" "}
            <strong className="text-black">
              Koszalinie, Białogardzie, Kołobrzegu i okolicach
            </strong>
            . Nasza technologia pozwala tworzyć trwałe nadruki bezpośrednio na
            różnych powierzchniach – od gładkich ścian, przez beton i płytki, aż
            po tkaniny i elementy dekoracyjne.
          </p>
          <p className="tracking-wide  xl:pb-6">
            Każdy projekt realizujemy indywidualnie, dbając o najwyższą jakość
            kolorów i detali. Dzięki doświadczeniu i nowoczesnym maszynom
            zamieniamy zwykłe wnętrza w przestrzenie pełne charakteru.
          </p>
          <p className="tracking-wide">
            Zaufało nam już wielu klientów prywatnych i firmowych z regionu.
            Jeśli szukasz profesjonalnego nadruku ściennego w Koszalinie lub
            okolicy – jesteś we właściwym miejscu.
          </p>
        </div>
      </div>
    </section>
  );
}
