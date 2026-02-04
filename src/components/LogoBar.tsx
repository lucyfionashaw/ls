"use client";

import { motion } from "framer-motion";

const logos = [
  "Blackstone",
  "IFC",
  "BCG",
  "United Nations",
  "Harvard",
  "Octopus",
];

export default function LogoBar() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-between gap-20 px-10 pt-20"
    >
      {logos.map((logo, i) => (
        <motion.div
          key={logo}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="flex items-center justify-center h-14"
        >
          <span className="font-mono-main text-lg font-medium tracking-[-0.36px] text-[var(--color-muted)]">
            {logo}
          </span>
        </motion.div>
      ))}
    </motion.section>
  );
}
