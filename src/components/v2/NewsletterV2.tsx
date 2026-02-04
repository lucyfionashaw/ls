"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function NewsletterV2() {
  return (
    <section className="px-6 pb-20 w-full">
      <div className="bg-[var(--color-body)] overflow-hidden w-full">
        <div className="flex min-h-[520px]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between flex-1 px-12 pt-14 pb-10"
          >
            {/* Title + subtitle at top */}
            <div className="flex flex-col gap-4">
              <h2 className="font-plantin text-[56px] font-normal leading-none tracking-[-1.12px] text-[var(--color-card-bg)]">
                Subscribe to Slow Burn
              </h2>
              <p className="font-helvetica text-base font-normal leading-[1.5] tracking-[-0.16px] text-[var(--color-card-bg)]/70 max-w-[540px]">
                Unpacking the progress and pitfalls of the energy transition -
                investment, politics, and power in the UK and globally.
              </p>
            </div>

            {/* Form at bottom */}
            <div className="flex flex-col gap-4">
              <div className="flex items-stretch border border-[var(--color-card-bg)] max-w-[560px]">
                <div className="flex items-center flex-1 px-6 py-4">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-transparent font-helvetica text-base font-normal tracking-[-0.16px] text-[var(--color-card-bg)] placeholder:text-[var(--color-card-bg)]/60 outline-none"
                  />
                </div>
                <motion.button
                  whileHover={{ opacity: 0.9 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-[var(--color-card-bg)] font-plantin text-lg font-normal tracking-[-0.36px] text-[var(--color-body)] px-8 py-4 shrink-0"
                >
                  Subscribe
                </motion.button>
              </div>
              <p className="font-helvetica text-sm font-normal leading-[1.4] tracking-[-0.14px] text-[var(--color-card-bg)]/40 max-w-[560px]">
                By subscribing you agree to{" "}
                <span className="underline">Substack&apos;s Terms of Use</span>,{" "}
                <span className="underline">our Privacy Policy</span> and{" "}
                <span className="underline">our Information collection notice</span>
              </p>
            </div>
          </motion.div>

          {/* Right portrait image with spacing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-[300px] shrink-0 p-4 pl-0"
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/images/newsletter-portrait.jpg"
                alt="Lucy Shaw"
                fill
                className="object-cover"
                sizes="300px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
