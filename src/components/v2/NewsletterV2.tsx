"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function NewsletterV2() {
  return (
    <section className="p-2 pb-12 md:pb-20 w-full">
      <div className="bg-[var(--color-body)] overflow-hidden w-full rounded-2xl">
        <div className="flex flex-col md:flex-row min-h-[400px] md:min-h-[520px]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between flex-1 px-6 md:px-12 pt-10 md:pt-14 pb-8 md:pb-10"
          >
            {/* Title + subtitle at top */}
            <div className="flex flex-col gap-3 md:gap-4">
              <h2 className="font-sans-main text-[32px] sm:text-[48px] md:text-[64px] font-semibold leading-none tracking-[-0.64px] md:tracking-[-1.28px] text-[var(--color-card-bg)]">
                Slow Burn newsletter
              </h2>
              <p className="font-sans-main text-base md:text-[18px] font-normal leading-[1.5] tracking-[-0.18px] text-[var(--color-card-bg)]/70 max-w-[540px]">
                Unpacking the progress and pitfalls of the energy transition -
                investment, politics, and power in the UK and globally.
              </p>
            </div>

            {/* CTA button */}
            <div className="mt-10 md:mt-16">
              <a
                href="https://esgstuff.substack.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative inline-block font-sans-main text-base md:text-lg font-medium tracking-[-0.36px] px-6 md:px-8 py-3 md:py-4 bg-[var(--color-card-bg)] text-[var(--color-body)] hover:bg-transparent hover:text-[var(--color-card-bg)] transition-colors duration-300 ease-in-out overflow-hidden"
              >
                {/* Animated border that draws on hover */}
                <span className="absolute inset-0 pointer-events-none">
                  <span className="absolute top-0 left-0 h-[2px] w-0 bg-[var(--color-card-bg)] transition-all duration-300 ease-in-out group-hover/btn:w-full" />
                  <span className="absolute top-0 right-0 w-[2px] h-0 bg-[var(--color-card-bg)] transition-all duration-300 ease-in-out delay-150 group-hover/btn:h-full" />
                  <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[var(--color-card-bg)] transition-all duration-300 ease-in-out delay-300 group-hover/btn:w-full" style={{ direction: "rtl" }} />
                  <span className="absolute bottom-0 left-0 w-[2px] h-0 bg-[var(--color-card-bg)] transition-all duration-300 ease-in-out delay-[450ms] group-hover/btn:h-full" style={{ bottom: 0, top: "auto", transformOrigin: "bottom" }} />
                </span>
                Subscribe
              </a>
            </div>
          </motion.div>

          {/* Right portrait image with spacing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-[320px] h-[300px] md:h-auto shrink-0 p-4 pt-0 md:pt-4 md:pl-0"
          >
            <div className="relative w-full h-full overflow-hidden rounded-xl">
              <Image
                src="/images/newsletter-portrait.jpg"
                alt="Lucy Shaw"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
