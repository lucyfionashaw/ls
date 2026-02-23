"use client";

import { motion } from "framer-motion";

export default function BookV2() {
  return (
    <section id="book" className="py-20 md:py-40 w-full px-4 md:px-10">
      <div className="flex flex-col items-center gap-10 md:gap-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <span className="font-sans-main text-lg font-normal tracking-[-0.36px] leading-none text-[var(--color-dark)]">
            The book
          </span>
          <h2 className="font-sans-main text-[36px] md:text-[72px] font-semibold leading-[1.1] tracking-[-0.72px] md:tracking-[-1.44px] text-[var(--color-body)] max-w-[836px]">
            Slow Burn: why we can&apos;t quit coal
          </h2>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-[60px] max-w-[1024px]">
          {/* Book cover */}
          <motion.img
            src="/images/book-cover.png"
            alt="Slow Burn: Why we can't quit coal by Lucy Shaw"
            width={423}
            height={601}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[320px] md:w-[423px] md:max-w-none h-auto md:h-[601px] object-cover shrink-0 rounded-xl md:rounded-2xl"
          />

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-start"
          >
            <p className="font-sans-main text-lg md:text-[22px] font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-text-primary)]">
              How do you break addiction? The first step is admitting you have a problem. The world&apos;s coal addiction costs 2.5 million lives each year from disease, adds billions of dollars to energy bills, and is the single largest contributor to climate change. From the pit worker at the coal face, to the person ordering cheap Chinese products on Amazon, we are all complicit in this health and environmental disaster. Many believe coal is a relic of a bygone era, yet in 2025 the world burned more than ever before. The question is, can we stop?
            </p>
            <p className="font-sans-main text-lg md:text-[22px] font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-text-primary)] mt-4 md:mt-6">
              In &ldquo;Slow Burn: why we can&apos;t quit coal&rdquo;, I take readers on an exhilarating journey to the frontlines of the energy industry, as you&apos;ve never seen it before. What started as a curiosity to explain how coal makes energy cheap and reliable morphed into a political education on what the industry really offers: jobs, taxes, foreign exchange, geopolitical security, political donations, and community. The benefits of coal are ultimately a nationalist story, made all the more important in a world on the brink of conflict.
            </p>
            <p className="font-sans-main text-lg md:text-[22px] font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-text-primary)] mt-4 md:mt-6">
              This book explains the reality of the energy transition: it cannot be achieved with cheap technology alone. Understanding why we depend on coal is essential for breaking the cycle, and avoiding a long and painful rehab. In my book, I articulate how we can power our modern lives without costing us the earth.
            </p>
            <p className="font-sans-main text-lg md:text-[22px] font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-text-primary)] mt-4 md:mt-6">
              Please get in touch with my agent, Adrian, if you are interested in learning more:{" "}
              <a href="mailto:adrian@krugercowne.com" className="underline">adrian@krugercowne.com</a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
