import {
  AlarmClockCheck,
  BadgeCheck,
  BriefcaseBusiness,
  ThumbsUp,
  UserCheck,
} from "lucide-react";
import React from "react";

export default function List() {
  return (
    <ul className="border-2 bg-emerald-500/5 border-emerald-700/20 rounded-md p-5 space-y-4">
      <p className="text-xl xl:text-2xl">
        Dlaczego powinieneś wybrać{" "}
        <span className="text-emerald-500">iWallDesign</span>?
      </p>
      <li className="flex">
        <BriefcaseBusiness className="mr-2 h-6 place-self-center shrink-0 aspect-square  xl:h-8" />{" "}
        <p className="">
          <span className="font-semibold">
            Doświadczenie i setki realizacji
          </span>{" "}
          - Ponad 500 ukończonych projektów w domach, biurach, hotelach i
          przestrzeniach publicznych.
        </p>
      </li>
      <li className="flex">
        <BadgeCheck className="mr-2 h-6 place-self-center shrink-0 aspect-square  xl:h-8" />
        <p className="">
          <span className="font-semibold">Najwyższa jakość druku UV</span> -
          Kolory odporne na blaknięcie, perfekcyjna ostrość i trwałość przez
          lata.
        </p>
      </li>
      <li className="flex">
        <AlarmClockCheck className="mr-2 h-6 place-self-center shrink-0 aspect-square  xl:h-8" />
        <p className="">
          <span className="font-semibold">Szybka realizacja</span> - Wiemy, że
          czas to pieniądz – druk wykonujemy ekspresowo, bez kompromisów
          jakościowych.
        </p>
      </li>
      <li className="flex">
        <UserCheck className="mr-2 h-6 place-self-center shrink-0 aspect-square  xl:h-8" />
        <p className="">
          <span className="font-semibold">Indywidualne podejście</span> - Każdy
          projekt dopasowujemy do stylu wnętrza i potrzeb klienta.
        </p>
      </li>
      <li className="flex">
        <ThumbsUp className="mr-2 h-6 place-self-center shrink-0 aspect-square  xl:h-8" />
        <p className="">
          <span className="font-semibold">Gwarancja satysfakcji</span> - Efekt
          końcowy zawsze zgodny z wizją klienta – albo poprawiamy, aż będzie
          perfekcyjnie.
        </p>
      </li>
    </ul>
  );
}
