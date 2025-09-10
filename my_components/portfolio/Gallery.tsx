"use client";
import React from "react";
import { ShinyWord } from "../navbar/ShinyWord";
import { LayoutGrid } from "@/components/ui/layout-grid";
const cards = [
  {
    id: 1,
    content: "coś",
    className: "col-span-5  row-span-6 ",
    thumbnail: "/assets/images/gallery/gallery1.png",
  },
  {
    id: 2,
    content: "coś",
    className: "col-span-2 row-span-5",
    thumbnail: "/assets/images/gallery/gallery2.png",
  },
  {
    id: 3,
    content: "coś",
    className: "col-span-2 row-span-5",
    thumbnail: "/assets/images/gallery/gallery3.png",
  },
  {
    id: 4,
    content: "coś",
    className: "col-span-3 row-span-8",
    thumbnail: "/assets/images/gallery/gallery4.png",
  },
  {
    id: 5,
    content: "coś",
    className: "col-span-4 row-span-3",
    thumbnail: "/assets/images/gallery/gallery5.png",
  },
  {
    id: 6,
    content: "coś",
    className: "col-span-2 row-span-6",
    thumbnail: "/assets/images/gallery/gallery6.png",
  },
  {
    id: 7,
    content: "coś",
    className: "col-span-3 row-span-6",
    thumbnail: "/assets/images/gallery/gallery7.png",
  },
  {
    id: 8,
    content: "coś",
    className: "col-span-3 row-span-4",
    thumbnail: "/assets/images/gallery/gallery8.png",
  },
  {
    id: 9,
    content: "coś",
    className: "col-span-4 row-span-4 ",
    thumbnail: "/assets/images/gallery/gallery9.png",
  },
];

function Gallery() {
  return (
    <section className="bg-white " aria-labelledby="hero-heading">
      <div className="container border-2   p-5 mx-auto  flex flex-col items-center justify-center gap-10 md:gap-5  md:px-10  lg:gap-10  ">
        <div className="border-2 ">
          <h2 className=" text-3xl font-semibold lg:text-4xl xl:text-5xl">
            Nasze <ShinyWord>realizacje,</ShinyWord> zobacz, jak druk UV zmienia
            przestrzeń
          </h2>
          <p className="  text-black/70 mt-5 xl:text-xl">
            Każdy projekt to nowa historia – od odważnych nadruków na ścianach,
            przez designerskie podłogi, aż po indywidualne nadruki na odzieży.
            Nasze realizacje pokazują, jak druk UV potrafi zmienić zwykłą
            przestrzeń w coś, co budzi emocje i zostaje w pamięci.
          </p>
        </div>
        <div className="xl:w-full aspect-[2/1] border-2 border-pink-500">
          <LayoutGrid cards={cards} />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
