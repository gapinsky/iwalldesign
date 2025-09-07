// my_components/MaterialsSection.tsx
import Image from "next/image";
import { ShinyWord } from "../navbar/ShinyWord";

type Material = { label: string; img: string };
type Category = { name: string; items: Material[] };

const CATEGORIES: Category[] = [
  {
    name: "Ściany",
    items: [
      {
        label: "Gładka ściana",
        img: "/assets/images/surfaces/gladka_sciana.png",
      },
      {
        label: "Elewacja zewnętrzna",
        img: "/assets/images/surfaces/elewacja.png",
      },
      { label: "Tynk", img: "/assets/images/surfaces/tynk.png" },
      { label: "Cegła", img: "/assets/images/surfaces/cegla.png" },
      { label: "Beton", img: "/assets/images/surfaces/beton.png" },
    ],
  },
  {
    name: "Podłogi",
    items: [
      {
        label: "Parkiet drewniany",
        img: "/assets/images/surfaces/parkiet.png",
      },
      { label: "Panele winylowe", img: "/assets/images/surfaces/panele.png" },
      {
        label: "Beton przemysłowy",
        img: "/assets/images/surfaces/beton_przemyslowy.png",
      },
      { label: "Płytki ceramiczne", img: "/assets/images/surfaces/plytki.png" },
    ],
  },
  {
    name: "Tekstylia",
    items: [
      { label: "Bawełna", img: "/assets/images/surfaces/bawelna.png" },
      { label: "Poliester", img: "/assets/images/surfaces/poliester.png" },
      {
        label: "Mieszanki tkanin",
        img: "/assets/images/surfaces/mieszanki.png",
      },
      {
        label: "Tkaniny techniczne",
        img: "/assets/images/surfaces/techniczne.png",
      },
    ],
  },
];

export default function Surfaces({
  title = "Drukujemy na każdej powierzchni.",
  intro = "Poznaj szeroką gamę materiałów do druku UV – od ścian i podłóg po tekstylia.",
  categories = CATEGORIES,
}: {
  title?: string;
  intro?: string;
  categories?: Category[];
}) {
  return (
    <section aria-labelledby="materials-heading">
      <div className="container mx-auto px-5 py-5 overflow-hidden">
        <header className="max-w-3xl mx-auto  mb-10">
          <h2
            id="materials-heading"
            className="text-3xl font-semibold lg:text-4xl xl:text-5xl"
          >
            Drukujemy na każdej <ShinyWord>powierzchni</ShinyWord>
          </h2>
          <p className="text-black/70 mt-5 text-start xl:text-xl">
            Poznaj szeroką gamę materiałów do druku UV – od ścian i podłóg po
            tekstylia. Oferujemy nadruki na betonie, cegle, parkiecie, panelach
            winylowych, bawełnie, poliestrze i wielu innych powierzchniach.
          </p>
        </header>

        <div className="space-y-12 md:px-8 lg:px-12">
          {categories.map((cat) => (
            <section
              key={cat.name}
              aria-labelledby={`cat-${slugify(cat.name)}`}
              className=" lg:w-[95%] mx-auto xl:w-[80%]"
            >
              <h3
                id={`cat-${slugify(cat.name)}`}
                className="text-2xl text-start font-semibold mb-6 text-black/80"
              >
                {cat.name}
              </h3>

              <div className=" flex flex-wrap items-start justify-evenly gap-4 ">
                {cat.items.map((item) => (
                  <figure key={`${cat.name}-${item.label}`} className="group  ">
                    <div className="relative mx-auto  w-24 h-24 sm:w-24 rounded-sm shadow-sm overflow-hidden  transition-transform duration-200 group-hover:scale-[1.03] ">
                      <Image
                        src={item.img}
                        alt={item.label}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 25vw, (max-width: 1024px) 15vw, 10vw"
                        priority={false}
                      />
                    </div>
                    <figcaption className="mt-2  text-md text-center font-medium mx-auto text-black/80 w-24">
                      {item.label}
                    </figcaption>
                    {/* focus ring dla dostępności gdy figura jest fokusowalna (np. jeśli zrobisz z niej Link) */}
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}
