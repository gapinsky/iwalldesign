"use client";
import { ShinyWord } from "../navbar/ShinyWord";
import { CompareBlock } from "./CompareBlock";
import { CompareCards } from "./CompareCards";

function BeforeAfter() {
  return (
    <section className="bg-white " aria-labelledby="hero-heading">
      <div className="container  p-5 mx-auto  flex flex-col-reverse items-center justify-center gap-10 md:gap-5  md:px-10 lg:flex-row lg:items-start lg:gap-10 xl:justify-evenly xl:gap-50">
        <CompareBlock />
        <div className="w-full ">
          <h2 className=" text-3xl font-semibold lg:text-4xl xl:text-5xl">
            Nowoczesny <ShinyWord>druk UV</ShinyWord> bez ograniczeń
          </h2>
          <p className="  text-black/70 mt-5 xl:text-xl">
            Znudziły Cię puste ściany? Zmieńmy to! Druk UV pozwala Ci stworzyć
            przestrzeń, która inspiruje, zachwyca i zostaje w głowie na długo.
            To inwestycja w design, który naprawdę robi różnicę.
          </p>
          <CompareCards />
        </div>
      </div>
    </section>
  );
}

export default BeforeAfter;
