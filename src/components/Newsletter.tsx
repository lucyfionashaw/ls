"use client";

import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="p-2 w-full">
      <div className="bg-[var(--color-card-bg)] rounded-2xl p-10 w-full">
        <div className="flex gap-16">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between flex-1"
          >
            <div className="flex flex-col gap-6">
              <span className="font-mono-main text-lg font-normal tracking-[-0.36px] leading-none text-[var(--color-dark)]">
                Slow Burn
              </span>
              <h2 className="text-[56px] font-semibold leading-[1.1] tracking-[-1.12px] text-[var(--color-body)]">
                Subscribe to my newsletter
              </h2>
              <p className="font-mono-main text-xl font-normal leading-[1.4] tracking-[-0.2px] text-[var(--color-black)]">
                Unpacking the progress and pitfalls of the energy transition -
                investment, politics, and power in the UK and globally.
              </p>
            </div>

            {/* Subscription form */}
            <div className="flex flex-col gap-8 mt-12 max-w-[680px]">
              <div className="flex gap-2">
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white rounded-lg px-6 py-3.5 border border-[var(--color-border)] font-mono-main text-base outline-none focus:border-[var(--color-accent)] transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-[var(--color-accent)] text-white font-mono-main text-xl font-semibold tracking-[-0.4px] rounded-lg px-5 py-3"
                >
                  Subscribe
                </motion.button>
              </div>
              <p className="text-base font-normal leading-[1.25] tracking-[-0.16px] text-[var(--color-black)]/50">
                By subscribing you agree to Substack&apos;s Terms of Use, our
                Privacy Policy and our Information collection notice
              </p>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-[300px] h-[400px] rounded-xl bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-card-bg)] shrink-0"
          />
        </div>
      </div>
    </section>
  );
}
