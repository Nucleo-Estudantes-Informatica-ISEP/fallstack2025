"use client";

import { FunctionComponent } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

import { ChevronDown } from "@/styles/Icons";

interface HeaderProps {
  logoSrc: StaticImageData;
  logoAlt: string;
  contentRef: React.RefObject<HTMLDivElement>;
}

const Hero: FunctionComponent<HeaderProps> = ({
  logoSrc,
  logoAlt,
  contentRef,
}) => {
  return (
    <section className="relative flex size-full min-h-screen flex-col items-center justify-center">
      <motion.div
        initial={{
          opacity: 0,
          marginTop: 200,
        }}
        whileInView={{
          opacity: 1,
          marginTop: 0,
        }}
        viewport={{
          once: true,
        }}
        className="flex w-full flex-col items-center justify-center gap-28 md:px-14"
      >
        <Image
          className="mt-12 max-h-[420px] w-1/2 object-contain drop-shadow-md md:mt-0 lg:max-h-[620px] lg:w-96"
          src={logoSrc}
          alt={logoAlt}
        />
        <motion.div
          initial={{
            opacity: 0,
            marginTop: 50,
          }}
          whileInView={{
            opacity: 1,
            marginTop: 0,
          }}
          viewport={{
            once: true,
          }}
          className="flex w-full flex-col items-center justify-center gap-10 pb-10 md:px-5"
        >
          <p className="text-center text-4xl font-light md:text-6xl">
            O teu futuro <br />
            <span className="font-bold">começa aqui.</span>
          </p>

          <a
            href="/signup"
            className="rounded-md bg-call-to-action px-5 py-3 font-bold uppercase"
          >
            Inscreve-te no Fallstack
          </a>
        </motion.div>
      </motion.div>
      <a
        className="absolute bottom-6 flex animate-bounce cursor-pointer items-center justify-center text-center transition-all duration-200 hover:scale-105"
        onClick={() => contentRef.current?.scrollIntoView()}
      >
        <ChevronDown className="size-6 fill-white text-white" />
      </a>
    </section>
  );
};

export default Hero;
