import React from "react";
import {
  Home,
  Building2,
  School,
  Utensils,
  Landmark,
  Ruler,
} from "lucide-react";
import CardWhere from "./CardWhere";
import { ShinyWord } from "../navbar/ShinyWord";
import Title from "../assets/Title";
import Container from "../assets/Container";

const CardsInfo = [
  {
    image: "/assets/images/places/private-interior.png",
    title: "Wnętrza prywatne",
    description:
      "Zamień swoje ściany i podłogi w unikalne dzieła sztuki. Tworzymy nadruki, które nadają wnętrzom charakter i sprawiają, że dom staje się naprawdę Twój.",
    icon: Home,
  },
  {
    image: "/assets/images/places/offices.png",
    title: "Biura i przedsiębiorstwa",
    description:
      "Podkreśl profesjonalizm i prestiż swojej firmy dzięki spersonalizowanym nadrukom. Inspirujące wnętrza wspierają kreatywność pracowników i robią wrażenie na klientach.",
    icon: Building2,
  },
  {
    image: "/assets/images/places/schools.png",
    title: "Szkoły i przedszkola",
    description:
      "Ożywiamy przestrzenie edukacyjne kolorami i grafikami, które pobudzają wyobraźnię. Nasze nadruki wspierają naukę i tworzą przyjazne środowisko dla dzieci.",
    icon: School,
  },
  {
    image: "/assets/images/places/hotels.png",
    title: "Hotele i restauracje",
    description:
      "Stwórz atmosferę, do której goście chcą wracać. Stylowe nadruki ścienne i podłogowe budują klimat, wzmacniają markę i pozostawiają niezapomniane wrażenie.",
    icon: Utensils,
  },
  {
    image: "/assets/images/places/public-spaces.png",
    title: "Publicznie przestrzenie",
    description:
      "Nadaj charakter miejscom, które łączą ludzi. Druk UV sprawia, że przestrzenie wspólne stają się atrakcyjne, unikalne i odporne na codzienne użytkowanie.",
    icon: Landmark,
  },
  {
    image: "/assets/images/places/developers.png",
    title: "Deweloperzy i architekci",
    description:
      "Wspieramy Twoją wizję od projektu po realizację. Tworzymy nadruki dopasowane do nowoczesnych koncepcji architektonicznych i budujemy nadzwyczajny unikalny styl.",
    icon: Ruler,
  },
];

function WhereUV() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-white   ">
      <Container>
        <div className=" mb-5 border-2">
          <Title id="gdzie-sprawdza-się-druk-uv-tytuł">
            Gdzie <ShinyWord>druk UV</ShinyWord> sprawdza się najlepiej?
          </Title>
          <p className="  text-black/70 mt-5 xl:text-xl  mb-10">
            Od domowych wnętrz po przestrzenie publiczne – druk UV nadaje
            wyjątkowy charakter każdemu miejscu. Niezależnie, czy chodzi o
            biuro, restaurację, czy projekt architektoniczny, nasze realizacje
            podkreślają design i budują niezapomniane wrażenia.
          </p>
        </div>
        <div className="border-2 grid grid-cols-1 gap-10 justify-items-center  md:grid-cols-2  lg:grid-cols-3 lg:gap-16 ">
          {CardsInfo.map((card) => (
            <CardWhere
              key={card.title}
              image={card.image}
              title={card.title}
              description={card.description}
              Icon={card.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default WhereUV;
