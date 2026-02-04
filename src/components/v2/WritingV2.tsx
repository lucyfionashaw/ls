"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const articles = [
  {
    title: "Labour must offer pride, not just employment, to former coal communities",
    publication: "LabourList",
    date: "29 October 2025",
    image: "/images/writing-2.png",
  },
  {
    title: "Cut to the quick - the government must invest more in short-term solutions to our energy crisis",
    publication: "The Fabian Society",
    date: "29 October 2025",
    image: "/images/writing-3.png",
  },
  {
    title: "Clouded Thinking on Business Class Passengers",
    publication: "The Financial Times",
    date: "29 October 2025",
    image: "/images/writing-4.png",
  },
  {
    title: "Let Solar Shine",
    publication: "The Economist",
    date: "29 October 2025",
    image: "/images/writing-5.png",
  },
  {
    title: "The Economist Letters: A Strict Immigration Policy",
    publication: "The Economist",
    date: "29 October 2025",
    image: "/images/writing-6.png",
  },
];

export default function WritingV2() {
  return (
    <section className="flex flex-col lg:flex-row lg:justify-center pb-24 md:pb-52 px-4 md:px-6 w-full">
      {/* Left heading — sticky on desktop */}
      <div className="lg:flex-1 pt-8 lg:pt-12 pb-6 lg:pb-[120px]">
        <div className="lg:sticky lg:top-0 lg:pt-10 lg:pb-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-plantin text-[40px] sm:text-[56px] md:text-[68px] lg:text-[80px] font-normal leading-none tracking-[-0.8px] md:tracking-[-1.6px] text-[var(--color-body)]"
          >
            Writing
          </motion.h2>
        </div>
      </div>

      {/* Articles list */}
      <div className="flex flex-col w-full lg:w-[900px] lg:shrink-0">
        {articles.map((article, i) => (
          <motion.article
            key={article.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ x: 8, transition: { duration: 0.2 } }}
            className="flex items-center gap-4 md:gap-10 py-6 md:py-9 border-b border-[var(--color-dark)] last:border-b-0 cursor-pointer"
          >
            <div className="flex flex-col gap-2 md:gap-4 flex-1">
              <h3 className="font-plantin text-xl md:text-[28px] font-normal leading-[1.25] tracking-[-0.56px] text-[var(--color-dark)]">
                {article.title}
              </h3>
              <span className="font-helvetica text-sm md:text-lg font-normal tracking-[-0.36px] leading-none text-[var(--color-dark)]">
                {article.publication} · {article.date}
              </span>
            </div>
            <div className="w-24 h-16 md:w-40 md:h-[100px] shrink-0 relative overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 96px, 160px"
              />
            </div>
          </motion.article>
        ))}

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-end pt-8"
        >
          <motion.a
            href="#"
            whileHover={{ x: 4 }}
            className="font-plantin text-xl md:text-2xl font-medium tracking-[-0.48px] text-[var(--color-accent)]"
          >
            View all →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
