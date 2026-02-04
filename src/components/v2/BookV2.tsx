"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BookV2() {
  return (
    <section className="flex flex-col items-center gap-16 pb-52 px-6 w-full">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-10"
      >
        <span className="font-helvetica text-lg font-normal tracking-[-0.36px] leading-none text-[var(--color-dark)]">
          The book
        </span>
        <h2 className="font-plantin text-[80px] font-normal leading-none tracking-[-1.6px] text-[var(--color-body)]">
          Slow Burn: how to quit coal
        </h2>
      </motion.div>

      {/* Book content: image + text */}
      <div className="flex gap-[60px] max-w-[1024px]">
        {/* Book cover with shadow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-[465px] h-[661px] shrink-0 relative"
        >
          <Image
            src="/images/book-cover.png"
            alt="Slow Burn: How to quit coal by Lucy Shaw"
            fill
            className="object-contain"
            sizes="465px"
          />
        </motion.div>

        {/* Book description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-helvetica text-2xl font-normal leading-[1.4] tracking-[-0.24px] text-[var(--color-black)] flex-1 whitespace-pre-line"
        >
          {`While some regard coal as a relic of the industrial revolution, it has never been more important to powering our modern economy. Coal powers 34% of the world's electricity, more than any other fuel, and global demand keeps breaking new records. Despite the break-neck pace of renewable energy installations, coal remains the bedrock of energy systems from Asia to North America to Africa.

Coal is also controversial because of its climate and health impacts. It has the highest climate impact of any fossil fuel, producing 37% of annual global emissions, and is one of the most harmful energy sources to human health.

Please get in touch with my agent, Adrian, if you are interested in learning more: adrian@krugercowne.com`}
        </motion.p>
      </div>
    </section>
  );
}
