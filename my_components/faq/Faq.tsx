import Image from "next/image";
import { ShinyWord } from "../navbar/ShinyWord";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { CircleQuestionMark, Mail, Phone } from "lucide-react";
function Faq() {
  return (
    <section className="bg-white " aria-labelledby="faq">
      <div className="container  p-5 mx-auto ">
        <h2 className="text-center text-3xl font-semibold lg:text-4xl xl:text-5xl">
          Najczęściej zadawane <ShinyWord>pytania</ShinyWord>
        </h2>
        <p className="text-center text-black/70 mt-5 xl:text-xl max-w-[70%] mx-auto">
          Nie jesteś pewien, czy druk UV to rozwiązanie dla Ciebie? Zebraliśmy
          odpowiedzi na najczęstsze pytania klientów, aby rozwiać Twoje
          wątpliwości.
        </p>
        <div className="grid grid-cols-2   gap-16">
          <div className="">
            <div className="relative max-w-[500px]  aspect-square rounded-md overflow-hidden ">
              <Image
                src="/assets/images/faq/faq.png"
                alt="faq"
                fill
                className="object-cover"
                sizes="(max-width: 120px) 70vw, (max-width: 1400px) 70vw, 70vw"
                priority={false}
              />
            </div>
            <div className="w-fit ">
              <p className="my-8 text-xl text-black/80">
                Skontaktuj się z nami bezpośrednio
              </p>
              <div className=" text-black/70 space-x-8">
                <p className="inline-flex items-center gap-2 px-6 py-2 border-2 rounded-md">
                  <Mail /> example@mail.com
                </p>
                <p className="inline-flex items-center gap-2 px-6 py-2 border-2 rounded-md">
                  <Phone /> 123 456 789
                </p>
              </div>
            </div>
          </div>
          <div className="w-full border-2 h-fit">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className=" w-full border-2"
            >
              <AccordionItem value="item-1" className=" rounded-md p-3">
                <AccordionTrigger className="text-2xl  w-full">
                  <p className="inline-flex items-center gap-4 ">
                    <CircleQuestionMark className="mt-0.5" />
                    Is it accessible?
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className=" rounded-md p-3">
                <AccordionTrigger className="text-2xl  w-full">
                  <p className="inline-flex items-center gap-4 ">
                    <CircleQuestionMark className="mt-0.5" />
                    Is it accessible?
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className=" rounded-md p-3">
                <AccordionTrigger className="text-2xl  w-full">
                  <p className="inline-flex items-center gap-4 ">
                    <CircleQuestionMark className="mt-0.5" />
                    Is it accessible?
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className=" rounded-md p-3">
                <AccordionTrigger className="text-2xl  w-full">
                  <p className="inline-flex items-center gap-4 ">
                    <CircleQuestionMark className="mt-0.5" />
                    Is it accessible?
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className=" rounded-md p-3">
                <AccordionTrigger className="text-2xl  w-full">
                  <p className="inline-flex items-center gap-4 ">
                    <CircleQuestionMark className="mt-0.5" />
                    Is it accessible?
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
