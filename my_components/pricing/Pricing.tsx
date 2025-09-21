import React from "react";
import { ShinyWord } from "../navbar/ShinyWord";
import PriceCard from "./PriceCard";
import { Send } from "lucide-react";
import Title from "../assets/Title";
import Container from "../assets/Container";

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

const content = {
  titleId: "cennik",
  leadId: "lead-cennik",
  description:
    "Znudziły Cię puste ściany? Zmieńmy to! Druk UV pozwala Ci stworzyć przestrzeń, która inspiruje, zachwyca i zostaje w głowie na długo. To inwestycja w design, który naprawdę robi różnicę.",
};

function Pricing() {
  return (
    <section
      className="bg-white "
      aria-labelledby="cennik"
      aria-describedby="lead-cennik"
    >
      <Container>
        <Title
          titleId={content.titleId}
          lead={content.leadId}
          description={content.description}
        >
          Inwestycja w design która się opłaca! Sprawdź{" "}
          <ShinyWord>ile kosztuje druk UV.</ShinyWord>
        </Title>
        <div className="mt-10 grid grid-cols-1 gap-12 xl:gap-36 lg:grid-cols-3  border-2">
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
      </Container>
    </section>
  );
}

export default Pricing;
