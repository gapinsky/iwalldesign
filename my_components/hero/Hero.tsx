"use client";

import { ImgWithSkeleton } from "./Skeleton";
import {
  MapPin,
  Check,
  Search,
  BrickWall,
  Shirt,
  Columns3,
} from "lucide-react";
import { motion } from "framer-motion";
import { ShinyWord } from "../navbar/ShinyWord";
export default function Hero() {
  return (
    <section className="bg-white " aria-labelledby="hero-heading">
      <div className="p-5  container mx-auto  flex flex-col items-center justify-center  gap-10 md:flex-row md:justify-evenly md:gap-20 md:px-10">
        {/* Text */}
        <div className="w-[95%] space-y-2 lg:max-w-[600px] xl:space-y-4">
          <p className="inline-flex justify-start items-center text-sm text-black/70 bg-[#16B1C2]/30  w-fit px-2 py-1 border-2 border-[#16B1C2]/50 rounded-sm">
            <MapPin className="scale-60" /> Koszalin, Kołobrzeg, Białogard i
            okolice
          </p>
          <h1 className="text-3xl font-bold lg:text-4xl xl:text-6xl">
            Każda <ShinyWord> powierzchnia </ShinyWord>
            może być płótnem
          </h1>
          <h2 className="text-black/70 mb-10 xl:text-2xl xl:mb-20">
            Dzięki technologii druku UV wprowadzamy kolor, design i trwałość w
            każdy detal Twojego otoczenia. Twoje pomysły stają się
            rzeczywistością!
          </h2>
          <div className="flex justify-between text-sm gap-5 mb-5 xl:text-lg xl:font-regular xl:gap-20">
            <button className="text-white/90 gap-1  bg-gradient-to-r from-[#00C9A7] via-[#00C9A7] to-[#16B1C2]  inline-flex items-center justify-center border-2 border-[#05b698] py-2 px-1 w-full  rounded-sm ">
              <Check className="scale-80 xl:scale-100" />
              Zamów nadruk
            </button>
            <button className="text-black/80   inline-flex items-center justify-center gap-1 border-2   py-2 px-1 w-full  rounded-sm ">
              <Search className="scale-80" />
              Nasze realizacje
            </button>
          </div>
          <div className="grid grid-cols-3 place-items-center  border-t-2 border-black/20 pt-5 xl:pt-10">
            <div className="flex flex-col items-center text-black/50 space-y-2">
              <BrickWall />
              <span>Ściany</span>
            </div>
            <div className="flex flex-col items-center text-black/50 space-y-2">
              <Columns3 />
              <span>Podłogi</span>
            </div>
            <div className="flex flex-col items-center text-black/50 space-y-2">
              <Shirt />
              <span>Odzież</span>
            </div>
          </div>
        </div>
        {/* Images */}
        <div className="w-[95%] md:w-[95%] grid grid-cols-12 gap-3  lg:gap-5 lg:max-w-[500px]">
          <figure className="col-span-12 ">
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative aspect-square   overflow-hidden  shadow-xl rounded-sm border-8 border-white hover:-rotate-4 hover:scale-98 duration-75"
            >
              <ImgWithSkeleton
                className="rounded-xs object-cover"
                src="/assets/images/hero/hero_big.png"
                alt="Maszyna drukująca UV w trakcie pracy"
                sizes="(max-width: 1024px) 50vw, 22vw"
                loading="lazy"
              />
            </motion.div>
          </figure>
          <figure className="col-span-5 ">
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative  aspect-square overflow-hidden  shadow-xl rounded-sm border-8 border-white hover:-rotate-5 hover:scale-98 duration-75"
            >
              <ImgWithSkeleton
                className="rounded-xs"
                src="/assets/images/hero/hero_square.png"
                alt="Maszyna drukująca UV w trakcie pracy"
                sizes="(max-width: 1024px) 50vw, 22vw"
                loading="lazy"
              />
            </motion.div>
          </figure>
          <figure className="col-span-7 ">
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative h-full overflow-hidden  shadow-xl rounded-sm border-8 border-white  hover:rotate-5 hover:scale-98 duration-75"
            >
              <ImgWithSkeleton
                className="rounded-xs"
                src="/assets/images/hero/hero_rectangle.png"
                alt="Maszyna drukująca UV w trakcie pracy"
                sizes="(max-width: 1024px) 50vw, 22vw"
                loading="lazy"
              />
            </motion.div>
          </figure>
        </div>
      </div>
    </section>
  );
}
