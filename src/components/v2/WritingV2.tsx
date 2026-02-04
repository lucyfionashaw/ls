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
    <section className="flex justify-center pb-52 px-6 w-full">
      {/* Left heading — sticky */}
      <div className="flex-1 pt-12 pb-[120px]">
        <div className="sticky top-0 pt-10 pb-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-plantin text-[80px] font-normal leading-none tracking-[-1.6px] text-[var(--color-body)]"
          >
            Writing
          </motion.h2>
        </div>
      </div>

      {/* Articles list */}
      <div className="flex flex-col w-[900px] shrink-0">
        {articles.map((article, i) => (
          <motion.article
            key={article.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ x: 8, transition: { duration: 0.2 } }}
            className="flex items-center gap-10 py-9 border-b border-[var(--color-dark)] last:border-b-0 cursor-pointer"
          >
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="font-plantin text-[28px] font-normal leading-[1.25] tracking-[-0.56px] text-[var(--color-dark)]">
                {article.title}
              </h3>
              <span className="font-helvetica text-lg font-normal tracking-[-0.36px] leading-none text-[var(--color-dark)]">
                {article.publication} · {article.date}
              </span>
            </div>
            <div className="w-40 h-[100px] shrink-0 relative overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="160px"
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
            className="font-plantin text-2xl font-medium tracking-[-0.48px] text-[var(--color-accent)]"
          >
            View all →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
