"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="p-2 w-full">
      <div className="relative w-full h-[718px] rounded-2xl overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/hero-bg.png"
          alt="Lucy Shaw"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Large name text */}
        <motion.span
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute left-6 bottom-[180px] text-[200px] font-semibold leading-none tracking-[-4px] text-white"
        >
          Lucy
        </motion.span>
        <motion.span
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute left-[166px] bottom-0 text-[200px] font-semibold leading-none tracking-[-4px] text-white"
        >
          Shaw
        </motion.span>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute right-10 bottom-[85px] text-2xl font-normal tracking-[-0.48px] text-[#d2d2d2] text-right whitespace-pre-line"
        >
          {"Entrepreneur,\nAdvisor & Investor"}
        </motion.p>
      </div>
    </section>
  );
}
