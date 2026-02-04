"use client";

import Image from "next/image";

const logos = [
  { name: "Harvard Business School", src: "/logos/edu-1.svg" },
  { name: "IFC", src: "/logos/edu-2.svg" },
  { name: "BCG", src: "/logos/edu-3.svg" },
  { name: "Blackstone", src: "/logos/work-1.svg" },
  { name: "United Nations", src: "/logos/work-2.svg" },
  { name: "McKinsey", src: "/logos/work-3.svg" },
];

export default function LogoBarV2() {
  return (
    <section className="w-full overflow-hidden">
      <div className="flex animate-scroll w-max">
        {/* First set */}
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="flex items-center justify-center h-40 px-16 shrink-0"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={148}
              height={64}
              className="h-16 w-auto object-contain opacity-70"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo) => (
          <div
            key={`dup-${logo.name}`}
            className="flex items-center justify-center h-40 px-16 shrink-0"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={148}
              height={64}
              className="h-16 w-auto object-contain opacity-70"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
