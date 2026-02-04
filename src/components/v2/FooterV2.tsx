"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Newsletter", href: "#newsletter" },
  { label: "LinkedIn", href: "#" },
  { label: "X.com", href: "#" },
  { label: "Instagram", href: "#" },
];

export default function FooterV2() {
  return (
    <section className="w-full px-6">
      {/* Top section: links + name */}
      <div className="flex justify-between items-start p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              whileHover={{ x: 4 }}
              className="font-plantin text-xl font-normal tracking-[-0.4px] text-[var(--color-dark)] hover:text-[var(--color-accent)] transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-meritocracy text-[72px] font-normal leading-none tracking-[-1.44px] text-right text-[var(--color-dark)]"
        >
          Lucy Shaw
        </motion.span>
      </div>

      {/* Bottom section: large name + subtitle */}
      <div className="flex justify-between items-end p-6 pt-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-end justify-between w-full"
        >
          <span className="font-plantin text-[240px] font-normal leading-none tracking-[-4.8px] text-[var(--color-body)]">
            Lucy Shaw
          </span>
          <p className="font-plantin text-2xl font-normal tracking-[-0.48px] text-[var(--color-dark)] text-right whitespace-pre-line pb-6">
            {"Entrepreneur,\nAdvisor & Investor"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
