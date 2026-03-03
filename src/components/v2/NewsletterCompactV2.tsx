"use client";

import { motion } from "framer-motion";
import RollText from "./RollText";

export default function NewsletterCompactV2() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 py-8 md:py-10 px-4 md:px-8 bg-white rounded-xl"
    >
      <div className="flex flex-col gap-2">
        <h3 className="font-sans-main text-xl md:text-[28px] font-semibold leading-[1.25] tracking-[-0.56px] text-[var(--color-dark)]">
          Subscribe to Slow Burn
        </h3>
        <p className="font-sans-main text-sm md:text-base font-normal leading-[1.6] tracking-[-0.18px] text-[var(--color-dark)]/60 max-w-[540px]">
          Lucy unpacks the progress and pitfalls of the energy transition - investment, politics, and power in the UK and globally.
        </p>
      </div>
      <a
        href="https://esgstuff.substack.com/subscribe"
        target="_blank"
        rel="noopener noreferrer"
        className="group/link inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full border border-[var(--color-dark)]/30 bg-transparent hover:bg-[var(--color-dark)] transition-colors duration-300 shrink-0 self-start md:self-auto"
      >
        <span className="font-sans-main text-[14px] md:text-[18px] font-medium tracking-[-0.36px] leading-[1.2] text-[var(--color-dark)] group-hover/link:text-[var(--color-card-bg)] transition-colors duration-300">
          <RollText text="Subscribe" />
        </span>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="md:w-4 md:h-4 text-[var(--color-dark)] group-hover/link:text-[var(--color-card-bg)] transition-colors duration-300">
          <path d="M3.33 8H12.67M12.67 8L8.67 4M12.67 8L8.67 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </motion.div>
  );
}
