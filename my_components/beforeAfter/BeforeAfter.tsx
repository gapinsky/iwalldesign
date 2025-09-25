"use client";
import Container from "../assets/Container";
import Title from "../assets/Title";
import { ShinyWord } from "../navbar/ShinyWord";
import { CompareBlock } from "./CompareBlock";
import { CompareCards } from "./CompareCards";

const content = {
  titleId: "dlaczego-druk-uv",
  leadId: "lead-dlaczego",
  description:
    "Druk UV to technologia, która pozwala nanosić grafikę bezpośrednio na niemal każdą powierzchnię – od szkła i metalu po drewno czy tekstylia. Atrament utwardzany światłem UV daje niezwykłą trwałość i jakość, której nie zapewnią tradycyjne metody. To rozwiązanie, które łączy design, funkcjonalność i nowoczesność.",
};

function BeforeAfter() {
  return (
    <section
      className="scroll-mt-14 lg:scroll-mt-16"
      id="oferta"
      aria-labelledby="dlaczego-druk-uv"
      aria-describedby="lead-dlaczego"
    >
      <Container>
        <div className="  flex flex-col-reverse items-center justify-center gap-10 md:gap-5  lg:flex-row lg:items-start lg:gap-10 xl:justify-evenly xl:gap-50">
          <CompareBlock />
          <div className="w-full ">
            <Title
              titleId={content.titleId}
              lead={content.leadId}
              description={content.description}
            >
              {" "}
              <ShinyWord>Druk UV</ShinyWord> - nowoczesna technologia nadruku
              bez ograniczeń
            </Title>
            <CompareCards />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default BeforeAfter;
