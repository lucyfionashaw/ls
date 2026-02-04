"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const events = [
  {
    title: "SALT London 2025 - AI panel",
    venue: "London, UK",
    image: "/images/talk-1.png",
  },
  {
    title: "Earth Set 2026 - the coal",
    venue: "The Fabian Society · 29 October 2025",
    image: "/images/talk-2.png",
  },
  {
    title: "Woodmac 2025 Power Investment",
    venue: "The Financial Times · 29 October 2025",
    image: "/images/talk-3.png",
  },
  {
    title: "The Energy Revolution",
    venue: "Podcast · 2025",
    image: "/images/talk-4.png",
  },
  {
    title: "FT Sustainable Views Interview 2025",
    venue: "Oxford, UK",
    image: "/images/talk-5.png",
  },
];

export default function SpeakingV2() {
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
            On Stage &<br />On Air
          </motion.h2>
        </div>
      </div>

      {/* Events list */}
      <div className="flex flex-col w-full lg:w-[900px] lg:shrink-0">
        {events.map((event, i) => (
          <motion.article
            key={event.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ x: 8, transition: { duration: 0.2 } }}
            className="flex items-center gap-4 md:gap-10 py-6 md:py-9 border-b border-[var(--color-dark)] last:border-b-0 cursor-pointer"
          >
            <div className="w-32 h-24 md:w-64 md:h-40 shrink-0 relative overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 128px, 256px"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-3 flex-1">
              <h3 className="font-plantin text-xl md:text-[28px] font-normal leading-[1.25] tracking-[-0.56px] text-[var(--color-dark)]">
                {event.title}
              </h3>
              <span className="font-helvetica text-sm md:text-lg font-normal tracking-[-0.36px] leading-[1.4] text-[var(--color-dark)]">
                {event.venue}
              </span>
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
