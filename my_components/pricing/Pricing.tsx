import React from "react";
import { ShinyWord } from "../navbar/ShinyWord";
import PriceCard from "./PriceCard";

const PricingCardsInfo = [
  {
    image: "/assets/images/pricing/wall.png",
    title: "Ściany",
    price: "150",
    unit: "m²",
    pros: [
      "Nadaj ścianom charakter i wyjątkowy design",
      "Żywe kolory odporne na blaknięcie",
      "Szybka i czysta realizacja bez bałaganu",
      "Indywidualne projekty dopasowane do wnętrza",
    ],
  },
  {
    image: "/assets/images/pricing/floor.png",
    title: "Podłogi",
    price: "200",
    unit: "m²",
    pros: [
      "Ekstremalna wytrzymałość – idealne do miejsc o dużym ruchu",
      "Odporność na wilgoć i zabrudzenia",
      "Łatwe w czyszczeniu i utrzymaniu",
    ],
  },
  {
    image: "/assets/images/pricing/textile.png",
    title: "Tekstylia",
    price: "25",
    unit: "sztuka",
    pros: [
      "Elastyczny nadruk odporny na pękanie",
      "Intensywne kolory zachowane nawet po praniu",
      "Nadaje się do codziennego użytku",
      "Zamówienia już od 1 sztuki – brak limitów",
    ],
  },
];

function Pricing() {
  return (
    <section className="bg-white " aria-labelledby="pricing">
      <div className="container  p-5 mx-auto ">
        <h2 className=" text-3xl font-semibold lg:text-4xl xl:text-5xl">
          Inwestycja w design która się opłaca! Sprawdź{" "}
          <ShinyWord>ile kosztuje druk UV.</ShinyWord>
        </h2>
        <p className="  text-black/70 mt-5 xl:text-xl">
          Ceny druku UV różnią się w zależności od rodzaju powierzchni,
          wielkości nadruku i skomplikowania projektu. Koszty każdej realizacji
          ustalamy przed rozpoczęciem pracy. Dbamy o to, by nasze ceny były nie
          tylko uczciwe i przejrzyste, ale też realnie dopasowane do Twoich
          potrzeb.
        </p>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 items-stretch justify-items-center ">
          {PricingCardsInfo.map((card) => (
            <PriceCard
              key={card.title}
              image={card.image}
              title={card.title}
              pros={card.pros}
              price={card.price}
              unit={card.unit}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
