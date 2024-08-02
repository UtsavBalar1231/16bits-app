import Logo from "./Logo";
import Section from "./Section";
import NavFooter from "./NavFooter";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from "react";
import CopyrightSvg from "./CopyrightSvg";

const Footer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-225, 0]);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <Section className="flex flex-col items-center justify-center bg-black-absolute dark:bg-white-absolute p-4">
        <motion.div
          style={{ y }}
          className="flex flex-col items-center gap-4 md:gap-10 p-10"
        >
          <NavFooter />
          <div className="flex flex-row items-center justify-center gap-2">
            <Logo className="w-[3rem] md:w-[4rem] fill-white-absolute dark:fill-black-absolute mb-[0.30rem]" />
            <div className="flex items-center gap-2 mb-1">
              <CopyrightSvg className="w-[1rem] md:w-[1.5rem] fill-white-absolute dark:fill-black-absolute mr-[0.35rem]" />
              <p className="text-[0.5rem] md:text-[0.70rem] dark:text-black-absolute text-white-absolute">
                {new Date().getFullYear()}. All rights reserved.
              </p>
            </div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default Footer;
