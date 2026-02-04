"use client";

import { motion } from "framer-motion";

import type { Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export default function About() {
  return (
    <section id="about" className="pt-40 px-2 w-full">
      <div className="flex flex-col w-full">
        {/* Headline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          custom={0}
          className="px-10 py-2"
        >
          <h2 className="text-[72px] font-semibold leading-[1.1] tracking-[-1.44px] text-[var(--color-body)] max-w-[879px]">
            Writer. Investor. Engineer. Economist. Energy specialist.
          </h2>
        </motion.div>

        {/* Bio content */}
        <div className="flex items-end gap-10 px-10 mt-8">
          {/* Photo */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            custom={1}
            className="shrink-0"
          >
            <div className="w-[388px] h-[517px] rounded-xl bg-gradient-to-br from-[var(--color-card-bg)] to-[var(--color-accent)]/20 overflow-hidden">
              <div className="w-full h-full bg-[var(--color-card-bg)]" />
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            custom={2}
            className="max-w-[549px]"
          >
            <p className="font-mono-main text-xl font-normal leading-[1.4] tracking-[-0.2px] text-[var(--color-black)]">
              Lucy Shaw leads Gordon Management, an investment advisory firm
              focused on energy transition in the UK and Africa. She advises
              institutional investors, energy companies, and governments on
              clean energy investments, infrastructure strategy, and economic
              development.
            </p>
            <p className="font-mono-main text-xl font-normal leading-[1.4] tracking-[-0.2px] text-[var(--color-black)] mt-6">
              Before founding Gordon Management, Lucy spent her career at
              Blackstone, the IFC (World Bank Group), BCG, and the United
              Nations.
            </p>
            <p className="font-mono-main text-xl font-normal leading-[1.4] tracking-[-0.2px] text-[var(--color-black)] mt-6">
              She holds an MBA from Harvard Business School — graduating as a
              Baker Scholar — and an MPA/ID from Harvard Kennedy School as a
              Fulbright Scholar.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
