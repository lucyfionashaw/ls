"use client";

import { motion } from "framer-motion";

export default function Book() {
  return (
    <section className="py-40 w-full px-10">
      <div className="flex flex-col items-center gap-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <span className="font-mono-main text-lg font-normal tracking-[-0.36px] leading-none text-[var(--color-dark)]">
            The book
          </span>
          <h2 className="text-[72px] font-semibold leading-[1.1] tracking-[-1.44px] text-[var(--color-body)] max-w-[836px]">
            Slow Burn: how to quit coal
          </h2>
        </motion.div>

        {/* Content */}
        <div className="flex items-center gap-[60px] max-w-[1024px]">
          {/* Book cover */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ rotate: -2, scale: 1.02 }}
            className="shrink-0"
          >
            <div className="w-[423px] h-[601px] rounded-xl bg-gradient-to-br from-[var(--color-card-bg)] to-[var(--color-accent)]/10 shadow-[0_2px_4.375px_rgba(0,0,0,0.1),0_9px_7.875px_rgba(0,0,0,0.09),0_20px_10.5px_rgba(0,0,0,0.05),0_35px_12.25px_rgba(0,0,0,0.01)]" />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-end"
          >
            <p className="font-mono-main text-xl font-normal leading-[1.4] tracking-[-0.2px] text-[var(--color-black)]">
              While some regard coal as a relic of the industrial revolution, it
              has never been more important to powering our modern economy. Coal
              powers 34% of the world&apos;s electricity, more than any other fuel,
              and global demand keeps breaking new records. Despite the
              break-neck pace of renewable energy installations, coal remains the
              bedrock of energy systems from Asia to North America to Africa.
            </p>
            <p className="font-mono-main text-xl font-normal leading-[1.4] tracking-[-0.2px] text-[var(--color-black)] mt-6">
              Coal is also controversial because of its climate and health
              impacts. It has the highest climate impact of any fossil fuel,
              producing 37% of annual global emissions, and is one of the most
              harmful energy sources to human health.
            </p>
            <p className="font-mono-main text-xl font-normal leading-[1.4] tracking-[-0.2px] text-[var(--color-black)] mt-6">
              Please get in touch with my agent, Adrian, if you are interested
              in learning more: adrian@krugercowne.com
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
