"use client";

import Image from "next/image";
import {
  motion,
  useAnimationControls,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const DROP_DELAY = 0.5;
const dropIn = {
  hidden: { y: -300, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 140,
      damping: 18,
      delay: i * DROP_DELAY,
    },
  }),
};

export default function FaqAnimateImage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end start"],
  });

  // Parallax
  const yChair = useTransform(scrollYProgress, [0, 1], [-6, 6]);
  const yPerson = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  const yDesk = useTransform(scrollYProgress, [0, 1], [-4, 4]);
  const yQ = useTransform(scrollYProgress, [0, 1], [-14, 14]);

  const qControls = useAnimationControls();

  return (
    <motion.div
      ref={ref}
      className="relative w-full  mx-auto aspect-square overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-4/5 aspect-square rounded-full bg-gradient-to-t from-blue-200 via-emerald-100 to-transparent blur-3xl" />
      </motion.div>

      {/* krzesło */}
      <motion.div className="absolute inset-0" style={{ y: yChair }}>
        <motion.div className="absolute inset-0" variants={dropIn} custom={0}>
          <Image
            src="/assets/images/faq/chair.png"
            alt="faq-chair"
            fill
            className="object-cover"
            sizes="(max-width: 120px) 70vw, (max-width: 1400px) 70vw, 70vw"
          />
        </motion.div>
      </motion.div>

      {/* ludek */}
      <motion.div className="absolute inset-0" style={{ y: yPerson }}>
        <motion.div className="absolute inset-0" variants={dropIn} custom={1}>
          <Image
            src="/assets/images/faq/person.png"
            alt="faq-person"
            fill
            className="object-cover"
            sizes="(max-width: 120px) 70vw, (max-width: 1400px) 70vw, 70vw"
          />
        </motion.div>
      </motion.div>

      {/* biurko */}
      <motion.div className="absolute inset-0" style={{ y: yDesk }}>
        <motion.div className="absolute inset-0" variants={dropIn} custom={2}>
          <Image
            src="/assets/images/faq/desk.png"
            alt="faq-desk"
            fill
            className="object-cover"
            sizes="(max-width: 120px) 70vw, (max-width: 1400px) 70vw, 70vw"
          />
        </motion.div>
      </motion.div>

      {/* question mark — drop-in + bounce */}
      <motion.div className="absolute inset-0" style={{ y: yQ }}>
        {/* drop-in sterowany wariantem */}
        <motion.div
          className="absolute inset-0"
          variants={dropIn}
          custom={3}
          // koniec wariantu visible odpala bounce
          onAnimationComplete={(def) => {
            if (def === "visible") {
              qControls.start({
                y: [0, -6, 0],
                transition: {
                  delay: 0.5,
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                },
              });
            }
          }}
        >
          {/* osobny wrapper do bounce */}
          <motion.div
            animate={qControls}
            className="absolute inset-0 will-change-transform"
          >
            <Image
              src="/assets/images/faq/questionMark.png"
              alt="faq-question"
              fill
              className="object-cover"
              sizes="(max-width: 120px) 70vw, (max-width: 1400px) 70vw, 70vw"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
