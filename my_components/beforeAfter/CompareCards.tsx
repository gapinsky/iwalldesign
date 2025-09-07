import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Layers } from "lucide-react";
export function CompareCards() {
  return (
    <div className="max-w-5xl">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Druk na każdej powierzchni",
    description:
      "Ściany, podłogi, ubrania – zamień wszystko w swoje płótno. Twój pomysł, nasza technologia.",
    image: "Layers",
  },
  {
    title: "Najwyższa jakość",
    description:
      "Perfekcyjne detale, głębia barw i profesjonalne wykończenie – design, który wygląda lepiej niż w wyobraźni.",
  },
  {
    title: "Profesjonalne wykończenie",
    description:
      "Kolory, które nie blakną i nadruki, które się nie ścierają – efekt, który zostaje z Tobą na długo.",
  },
  {
    title: "Ekspresowa realizacja",
    description:
      "Nie czekasz tygodniami. Projekt dziś – efekt, który zachwyca, szybciej niż myślisz.",
  },
];
