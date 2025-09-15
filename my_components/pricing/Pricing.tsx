import React from "react";
import { ShinyWord } from "../navbar/ShinyWord";
import PriceCard from "./PriceCard";
import { Send } from "lucide-react";

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
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3 items-stretch justify-items-center ">
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
        <div className="space-y-4 text-center mt-16 max-w-3xl mx-auto">
          <p className="text-2xl">Masz nieszablonowy projekt?</p>
          <p className="mb-8">
            Dla nas nie ma rzeczy niemożliwych! Każdy pomysł traktujemy jako
            wyzwanie, które zamieniamy w wyjątkową realizację. Skontatuj się z
            nami i uzyskaj indywidualną ofertę dopasowaną do Twoich potrzeb.
          </p>
          <button className="group inline-flex gap-1 border-2 border-emerald-500 text-emerald-500 px-6 py-3 rounded-sm shadow-md font-semibold hover:cursor-pointer hover:shadow-lg transition-shadow duration-75">
            Napisz wiadomość!{" "}
            <Send className="transition-transform duration-75  group-hover:translate-x-3" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
