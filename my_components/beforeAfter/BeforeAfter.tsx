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
    "Znudziły Cię puste ściany? Zmieńmy to! Druk UV pozwala Ci stworzyć przestrzeń, która inspiruje, zachwyca i zostaje w głowie na długo. To inwestycja w design, który naprawdę robi różnicę.",
};

function BeforeAfter() {
  return (
    <section
      className="bg-white "
      id="dlaczego-uv"
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
              Nowoczesny <ShinyWord>druk UV</ShinyWord> bez ograniczeń
            </Title>
            <CompareCards />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default BeforeAfter;
