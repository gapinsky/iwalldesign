import React from "react";
import { ShinyWord } from "../navbar/ShinyWord";

const StatCard = () => {
  return (
    <dl className="grid grid-cols-2 gap-4">
      <div className="rounded-lg border bg-white p-4 shadow-sm flex flex-col items-center text-center">
        <dd className="text-2xl font-semibold ">
          <ShinyWord>500+</ShinyWord>
        </dd>
        <dt className="mt-1 text-sm text-neutral-600">
          Zrealizowanych projektów
        </dt>
      </div>
      <div className="rounded-lg border bg-white p-4 shadow-sm flex flex-col items-center text-center">
        <dd className="text-2xl font-semibold ">
          <ShinyWord>100%</ShinyWord>
        </dd>
        <dt className="mt-1 text-sm text-neutral-600">Zadowolonych klientów</dt>
      </div>
      <div className="rounded-lg border bg-white p-4 shadow-sm flex flex-col items-center text-center">
        <dd className="text-2xl font-semibold ">
          <ShinyWord>8/10</ShinyWord>
        </dd>
        <dt className="mt-1 text-sm text-neutral-600">
          Klientów wraca po więcej
        </dt>
      </div>
      <div className="rounded-lg border bg-white p-4 shadow-sm flex flex-col items-center text-center">
        <dd className="text-2xl font-semibold ">
          <ShinyWord>101%</ShinyWord>
        </dd>
        <dt className="mt-1 text-sm text-neutral-600">Kreatywności i pasji</dt>
      </div>
    </dl>
  );
};

export default StatCard;
