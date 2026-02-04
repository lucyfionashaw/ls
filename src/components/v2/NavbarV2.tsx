"use client";

import { motion } from "framer-motion";

export default function NavbarV2() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-between p-4 md:p-5 w-full border-b border-[var(--color-body)]"
    >
      <span className="font-plantin text-lg md:text-xl font-bold leading-none tracking-[-0.4px] text-[var(--color-dark)]">
        Lucy Shaw
      </span>
      <div className="flex items-center gap-4 md:gap-6">
        {["About", "Work", "Contact"].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            whileHover={{ y: -2 }}
            className="font-plantin text-sm md:text-base font-normal leading-none tracking-[-0.32px] text-[var(--color-dark)] hover:text-[var(--color-accent)] transition-colors"
          >
            {item}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}
