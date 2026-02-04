"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroV2() {
  return (
    <section className="flex flex-col gap-10 pt-10 px-6 pb-6 w-full">
      {/* Top row: name + subtitle — constrained for readability */}
      <div className="flex items-end justify-between w-full">
        <div className="flex items-center gap-10">
          <motion.span
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-plantin text-[200px] font-normal leading-none tracking-[-4px] text-[var(--color-body)]"
          >
            Lucy
          </motion.span>
          <motion.span
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-plantin text-[200px] font-normal leading-none tracking-[-4px] text-[var(--color-body)]"
          >
            Shaw
          </motion.span>
        </div>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-plantin text-2xl font-normal tracking-[-0.48px] text-[var(--color-dark)] text-right whitespace-pre-line pb-2"
        >
          {"Entrepreneur,\nAdvisor & Investor"}
        </motion.p>
      </div>

      {/* Hero image — full width */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative w-full h-[696px] overflow-hidden"
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
