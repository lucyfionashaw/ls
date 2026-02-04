"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Fundraising Support",
    description:
      "Strategic fundraising advisory for energy and infrastructure companies seeking institutional capital.",
  },
  {
    title: "Investment Due Diligence",
    description:
      "Deep-dive analysis for investors evaluating energy transition assets across UK and African markets.",
  },
  {
    title: "Strategic Market Analysis",
    description:
      "Bespoke research on energy policy, regulatory shifts, and market dynamics for investment committees.",
  },
  {
    title: "Investor Convening",
    description:
      "Curated introductions connecting capital allocators with best-in-class energy transition opportunities.",
  },
];

const clients = [
  "Octopus Investments",
  "Globeleq",
  "Actis",
  "IFC",
  "British International Investment",
];

export default function GordonManagement() {
  return (
    <section className="p-2 w-full">
      <div className="bg-[var(--color-section-bg)] rounded-2xl px-10 py-16 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 mb-16"
        >
          <span className="font-mono-main text-lg font-normal tracking-[-0.36px] leading-none text-[var(--color-dark)]">
            Investment Advisory
          </span>
          <h2 className="text-[72px] font-semibold leading-[1.1] tracking-[-1.44px] text-[var(--color-body)]">
            Gordon Management
          </h2>
          <p className="font-mono-main text-xl font-normal leading-[1.4] tracking-[-0.2px] text-[var(--color-black)]">
            Through Gordon Management, I advise investors, companies, and
            governments on investments in energy and infrastructure. With over a
            decade of experience across six continents, I bring unique
            perspective to complex transactions.
          </p>
          <motion.a
            href="#"
            whileHover={{ x: 4 }}
            className="font-mono-main text-xl font-semibold tracking-[-0.4px] text-[var(--color-accent)] py-1.5"
          >
            Learn more →
          </motion.a>
        </motion.div>

        {/* Service cards */}
        <div className="flex gap-3 overflow-x-auto pb-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="flex flex-col justify-between bg-white rounded-lg border border-[var(--color-dark)]/10 p-7 min-w-[388px] h-[517px] cursor-pointer"
            >
              <div className="flex flex-col gap-6">
                <h3 className="text-[28px] font-semibold leading-[1.25] tracking-[-0.56px] text-[var(--color-dark)]">
                  {service.title}
                </h3>
                <p className="font-mono-main text-lg font-normal leading-[1.25] tracking-[-0.18px] text-[var(--color-dark)] max-w-[324px]">
                  {service.description}
                </p>
              </div>
              <div className="w-[120px] h-[120px] rounded-full border border-[var(--color-ellipse)]" />
            </motion.div>
          ))}
        </div>

        {/* Clients */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-24 mt-16"
        >
          <h3 className="text-[28px] font-semibold leading-[1.25] tracking-[-0.56px] text-[var(--color-dark)]">
            Clients
          </h3>
          <div className="flex items-center gap-12 flex-wrap">
            {clients.map((client) => (
              <span
                key={client}
                className="font-mono-main text-base tracking-[-0.32px] text-[var(--color-dark)]/60"
              >
                {client}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
