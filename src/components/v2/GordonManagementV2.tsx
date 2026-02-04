"use client";

import { motion } from "framer-motion";

function FundraisingIcon() {
  const t = { repeat: Infinity, repeatType: "loop" as const, repeatDelay: 3, ease: "easeInOut" as const };
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <motion.path d="M20 100 L20 75 L40 75 L40 60 L60 60 L60 42 L80 42 L80 28 L100 28 L100 20"
        stroke="var(--color-ellipse)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.3, ...t }} />
      <motion.path d="M100 20 L94 28 M100 20 L106 28"
        stroke="var(--color-ellipse)" strokeWidth="1.5" strokeLinecap="round" fill="none"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 1.4, ...t }} />
      <motion.line x1="28" y1="88" x2="48" y2="88" stroke="var(--color-ellipse)" strokeWidth="1" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.5, ...t }} />
      <motion.line x1="42" y1="70" x2="68" y2="70" stroke="var(--color-ellipse)" strokeWidth="1" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.7, ...t }} />
      <motion.line x1="58" y1="52" x2="82" y2="52" stroke="var(--color-ellipse)" strokeWidth="1" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.9, ...t }} />
      <motion.circle cx="40" cy="75" r="2.5" stroke="var(--color-ellipse)" strokeWidth="1" fill="none"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: 0.6, ...t }} />
      <motion.circle cx="60" cy="60" r="2.5" stroke="var(--color-ellipse)" strokeWidth="1" fill="none"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: 0.8, ...t }} />
      <motion.circle cx="80" cy="42" r="2.5" stroke="var(--color-ellipse)" strokeWidth="1" fill="none"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: 1.0, ...t }} />
    </svg>
  );
}

function DueDiligenceIcon() {
  const t = { repeat: Infinity, repeatType: "loop" as const, repeatDelay: 3, ease: "easeInOut" as const };
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <motion.circle cx="50" cy="50" r="28" stroke="var(--color-ellipse)" strokeWidth="1.5" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3, ...t }} />
      <motion.line x1="70" y1="70" x2="100" y2="100" stroke="var(--color-ellipse)" strokeWidth="1.5" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 1.2, ...t }} />
      <motion.line x1="35" y1="40" x2="55" y2="40" stroke="var(--color-ellipse)" strokeWidth="1" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 0.8, ...t }} />
      <motion.line x1="35" y1="48" x2="65" y2="48" stroke="var(--color-ellipse)" strokeWidth="1" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 0.9, ...t }} />
      <motion.line x1="35" y1="56" x2="50" y2="56" stroke="var(--color-ellipse)" strokeWidth="1" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 1.0, ...t }} />
      <motion.path d="M56 54 L60 58 L68 46" stroke="var(--color-ellipse)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1.3, ...t }} />
    </svg>
  );
}

function MarketAnalysisIcon() {
  const t = { repeat: Infinity, repeatType: "loop" as const, repeatDelay: 3, ease: "easeInOut" as const };
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <motion.polygon points="60,15 95,32 95,68 60,85 25,68 25,32"
        stroke="var(--color-ellipse)" strokeWidth="1.5" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3, ...t }} />
      <motion.polygon points="60,28 82,40 82,62 60,74 38,62 38,40"
        stroke="var(--color-ellipse)" strokeWidth="1" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.6, ...t }} />
      <motion.polygon points="60,40 70,46 70,58 60,64 50,58 50,46"
        stroke="var(--color-ellipse)" strokeWidth="1" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.9, ...t }} />
      <motion.line x1="60" y1="15" x2="60" y2="40" stroke="var(--color-ellipse)" strokeWidth="0.75" strokeDasharray="3 3"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 1.1, ...t }} />
      <motion.line x1="95" y1="68" x2="70" y2="58" stroke="var(--color-ellipse)" strokeWidth="0.75" strokeDasharray="3 3"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 1.2, ...t }} />
      <motion.line x1="25" y1="68" x2="50" y2="58" stroke="var(--color-ellipse)" strokeWidth="0.75" strokeDasharray="3 3"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 1.3, ...t }} />
      {[
        [60, 15], [95, 32], [95, 68], [60, 85], [25, 68], [25, 32],
      ].map(([cx, cy], i) => (
        <motion.circle key={i} cx={cx} cy={cy} r="2" stroke="var(--color-ellipse)" strokeWidth="1" fill="none"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: 0.4 + i * 0.1, ...t }} />
      ))}
    </svg>
  );
}

function InvestorConveningIcon() {
  const t = { repeat: Infinity, repeatType: "loop" as const, repeatDelay: 3, ease: "easeInOut" as const };
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <motion.circle cx="60" cy="60" r="8" stroke="var(--color-ellipse)" strokeWidth="1.5" fill="none"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.3, ...t }} />
      {[
        [60, 20], [95, 38], [95, 82], [60, 100], [25, 82], [25, 38],
      ].map(([cx, cy], i) => (
        <motion.circle key={i} cx={cx} cy={cy} r="5" stroke="var(--color-ellipse)" strokeWidth="1" fill="none"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.4, delay: 0.5 + i * 0.1, ...t }} />
      ))}
      {[
        [60, 20], [95, 38], [95, 82], [60, 100], [25, 82], [25, 38],
      ].map(([x2, y2], i) => (
        <motion.line key={i} x1="60" y1="60" x2={x2} y2={y2} stroke="var(--color-ellipse)" strokeWidth="0.75"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.6 + i * 0.08, ...t }} />
      ))}
      <motion.circle cx="60" cy="60" r="40" stroke="var(--color-ellipse)" strokeWidth="0.75" strokeDasharray="4 4" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1, ...t }} />
    </svg>
  );
}

function PolicyAdvisoryIcon() {
  const t = { repeat: Infinity, repeatType: "loop" as const, repeatDelay: 3, ease: "easeInOut" as const };
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <motion.line x1="60" y1="20" x2="60" y2="95" stroke="var(--color-ellipse)" strokeWidth="1.5" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.3, ...t }} />
      <motion.line x1="22" y1="42" x2="98" y2="42" stroke="var(--color-ellipse)" strokeWidth="1.5" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.6, ...t }} />
      <motion.path d="M22 42 L18 58 Q35 72 52 58 L48 42" stroke="var(--color-ellipse)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.8, ...t }} />
      <motion.path d="M72 42 L68 58 Q85 72 102 58 L98 42" stroke="var(--color-ellipse)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 1.0, ...t }} />
      <motion.path d="M45 95 L60 85 L75 95 Z" stroke="var(--color-ellipse)" strokeWidth="1" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1.3, ...t }} />
      <motion.path d="M60 20 L55 26 L60 32 L65 26 Z" stroke="var(--color-ellipse)" strokeWidth="1" strokeLinejoin="round" fill="none"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.4, delay: 1.5, ...t }} />
    </svg>
  );
}

const serviceIcons = [
  <FundraisingIcon key="fundraising" />,
  <DueDiligenceIcon key="diligence" />,
  <MarketAnalysisIcon key="market" />,
  <InvestorConveningIcon key="convening" />,
  <PolicyAdvisoryIcon key="policy" />,
];

const services = [
  {
    title: "Fundraising\nSupport",
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
    title: "Investor\nConvening",
    description:
      "Curated introductions connecting capital allocators with best-in-class energy transition opportunities.",
  },
  {
    title: "Policy Advisory",
    description:
      "Government advisory on energy investment frameworks and strategies to attract private capital.",
  },
];

export default function GordonManagementV2() {
  return (
    <section className="w-full px-4 md:px-6">
      <div className="bg-[var(--color-body)] px-4 md:px-6 pt-16 md:pt-28 pb-12 md:pb-24 w-full">
        {/* Heading */}
        <div className="px-4 md:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-plantin text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-normal leading-none tracking-[-0.8px] md:tracking-[-1.6px] text-[var(--color-card-bg)]"
          >
            How I help clients win
          </motion.h2>
        </div>

        {/* Service cards - grid on mobile, row on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 pb-4 mt-10 md:mt-16">
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
              className="flex flex-col justify-between h-[320px] md:h-[440px] p-4 md:p-8 cursor-pointer"
            >
              <div className="flex flex-col gap-2 md:gap-3">
                <h3 className="font-plantin text-xl md:text-[28px] font-normal leading-[1.25] tracking-[-0.56px] text-[var(--color-card-bg)] whitespace-pre-line">
                  {service.title}
                </h3>
                <p className="font-helvetica text-sm md:text-lg font-normal leading-[1.25] tracking-[-0.36px] text-[var(--color-card-bg)]/50">
                  {service.description}
                </p>
              </div>
              {serviceIcons[i]}
            </motion.div>
          ))}
        </div>

        {/* Learn more link */}
        <div className="flex items-center justify-center px-4 md:px-8 pt-8 md:pt-12 pb-4 md:pb-8">
          <motion.a
            href="#"
            whileHover={{ x: 4 }}
            className="flex items-center gap-3 font-plantin text-lg md:text-2xl font-normal tracking-[-0.48px] text-[var(--color-card-bg)]"
          >
            Learn more at Gordon Management
            <span className="text-lg">→</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
