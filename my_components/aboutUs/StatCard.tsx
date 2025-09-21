import React from "react";
import { ShinyWord } from "../navbar/ShinyWord";

const StatCard = () => {
  return (
    <dl className="grid grid-cols-2 gap-4">
      <div className="rounded-lg border bg-white p-4 shadow-sm">
        <dd className="text-2xl font-semibold text-emerald-600">500+</dd>
        <dt className="mt-1 text-sm text-neutral-600">
          Zrealizowanych projektów
        </dt>
      </div>
      <div className="rounded-lg border bg-white p-4 shadow-sm">
        <dd className="text-2xl font-semibold text-emerald-600">100%</dd>
        <dt className="mt-1 text-sm text-neutral-600">Zadowolonych klientów</dt>
      </div>
      <div className="rounded-lg border bg-white p-4 shadow-sm">
        <dd className="text-2xl font-semibold text-emerald-600">8/10</dd>
        <dt className="mt-1 text-sm text-neutral-600">
          Klientów wraca po więcej
        </dt>
      </div>
      <div className="rounded-lg border bg-white p-4 shadow-sm">
        <dd className="text-2xl font-semibold text-emerald-600">101%</dd>
        <dt className="mt-1 text-sm text-neutral-600">Kreatywności i pasji</dt>
      </div>
    </dl>
  );
};

export default StatCard;
