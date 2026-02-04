"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroV2() {
  return (
    <section className="flex flex-col pt-6 md:pt-10 px-4 md:px-6 pb-4 md:pb-6 w-full">
      {/* Top row: name + subtitle */}
      <div className="flex flex-col md:flex-row md:items-end justify-between w-full mb-4">
        <div className="flex items-center gap-4 md:gap-10 -mb-[0.15em]">
          <motion.span
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-plantin text-[72px] sm:text-[120px] md:text-[160px] lg:text-[200px] font-normal leading-[0.85] tracking-[-2px] md:tracking-[-4px] text-[var(--color-body)]"
          >
            Lucy
          </motion.span>
          <motion.span
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-plantin text-[72px] sm:text-[120px] md:text-[160px] lg:text-[200px] font-normal leading-[0.85] tracking-[-2px] md:tracking-[-4px] text-[var(--color-body)]"
          >
            Shaw
          </motion.span>
        </div>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-plantin text-lg md:text-2xl font-normal tracking-[-0.48px] text-[var(--color-dark)] text-left md:text-right whitespace-pre-line pb-2 mt-4 md:mt-0"
        >
          {"Entrepreneur,\nAdvisor & Investor"}
        </motion.p>
      </div>

      {/* Hero image — full width */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative w-full h-[300px] sm:h-[400px] md:h-[550px] lg:h-[696px] overflow-hidden"
      >
        <Image
          src="/images/cover-v2.png"
          alt="Lucy Shaw"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>
    </section>
  );
}
