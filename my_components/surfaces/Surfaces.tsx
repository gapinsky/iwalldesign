// my_components/MaterialsSection.tsx
"use client";
import Image from "next/image";
import { ShinyWord } from "../navbar/ShinyWord";
import { Tabs } from "@/components/ui/tabs";
import { motion } from "motion/react";

type Material = { label: string; img: string };
type Category = {
  ściany: Material[];
  podłogi: Material[];
  tekstylia: Material[];
};

const categories: Category = {
  ściany: [
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
  podłogi: [
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
  tekstylia: [
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
};

const surfaces = [
  {
    title: "Ściany",
    value: "walls",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-md  text-xl border-2  md:text-4xl font-bold bg-white shadow-lg">
        <div className="flex flex-col h-full  bg-black/30">
          {categories["ściany"].map((item) => (
            <motion.div
              initial={{ height: "100%" }}
              whileHover={{ height: "700%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              key={item.label}
              className="relative   w-full h-full  overflow-hidden "
            >
              <div className="w-full h-full absolute left-0 top-0 bg-gradient-to-tr from-black/40 via-black/20 to-transparent  z-10 "></div>
              <Image
                src={item.img}
                alt={item.label}
                fill
                className="object-cover"
                sizes="(max-width: 120px) 70vw, (max-width: 1400px) 70vw, 70vw"
                priority={false}
              />
              <p className="absolute left-4 bottom-2 text-lg   md:text-3xl md:left-10 md:bottom-10  text-white/90 z-20  text-shadow-md ">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Podłogi",
    value: "floors",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-md  text-xl border-2  md:text-4xl font-bold bg-white shadow-lg">
        <div className="flex flex-col h-full  bg-black/30">
          {categories["podłogi"].map((item) => (
            <motion.div
              initial={{ height: "100%" }}
              whileHover={{ height: "700%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              key={item.label}
              className="relative   w-full h-full  overflow-hidden "
            >
              <div className="w-full h-full absolute left-0 top-0 bg-gradient-to-tr from-black/40 via-black/20 to-transparent  z-10 "></div>
              <Image
                src={item.img}
                alt={item.label}
                fill
                className="object-cover"
                sizes="(max-width: 120px) 70vw, (max-width: 1400px) 70vw, 70vw"
                priority={false}
              />
              <p className="absolute left-4 bottom-2 text-lg   md:text-3xl md:left-10 md:bottom-10  text-white/90 z-20  text-shadow-md ">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Tekstylia",
    value: "textile",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-md  text-xl border-2  md:text-4xl font-bold bg-white shadow-lg">
        <div className="flex flex-col h-full  bg-black/30">
          {categories["tekstylia"].map((item) => (
            <motion.div
              initial={{ height: "100%" }}
              whileHover={{ height: "700%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              key={item.label}
              className="relative   w-full h-full  overflow-hidden "
            >
              <div className="w-full h-full absolute left-0 top-0 bg-gradient-to-tr from-black/40 via-black/20 to-transparent  z-10 "></div>
              <Image
                src={item.img}
                alt={item.label}
                fill
                className="object-cover"
                sizes="(max-width: 120px) 70vw, (max-width: 1400px) 70vw, 70vw"
                priority={false}
              />
              <p className="absolute left-4 bottom-2 text-lg   md:text-3xl md:left-10 md:bottom-10  text-white/90 z-20  text-shadow-md ">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function Surfaces() {
  return (
    <section aria-labelledby="materials-heading">
      <div className="container mx-auto px-5 py-5 overflow-hidden md:px-10">
        <header className=" mx-auto  ">
          <h2
            id="materials-heading"
            className="text-3xl font-semibold lg:text-4xl xl:text-5xl"
          >
            Drukujemy na każdej <ShinyWord>powierzchni</ShinyWord>
          </h2>
          <p className="text-black/70 mt-5 text-start xl:text-xl mb-10">
            Poznaj szeroką gamę materiałów do druku UV – od ścian i podłóg po
            tekstylia. Oferujemy nadruki na betonie, cegle, parkiecie, panelach
            winylowych, bawełnie, poliestrze i wielu innych powierzchniach.
          </p>
        </header>

        <div className="space-y-12   ">
          <div className="h-[20rem] md:h-[40rem] [perspective:400px] md:[perspective:1000px]  relative  flex flex-col  mx-auto w-full  items-start justify-start mb-40">
            <Tabs tabs={surfaces} />
          </div>
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
