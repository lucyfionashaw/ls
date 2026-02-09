"use client";

import Image from "next/image";

const logos = [
  { name: "Blackstone", src: "/logos/work-1.svg" },
  { name: "IFC", src: "/logos/edu-2.svg" },
  { name: "Actis", src: "/images/logos/actis.png" },
  { name: "Harvard Business School", src: "/logos/edu-1.svg" },
  { name: "BCG", src: "/logos/edu-3.svg" },
  { name: "Harvard Kennedy School", src: "/logos/hks.svg" },
  { name: "CrossBoundary", src: "/logos/crossboundary.svg" },
  { name: "Agricultural Transformation Agency", src: "/logos/ata.svg" },
  { name: "UN WFP", src: "/logos/unwfp.svg" },
  { name: "Vena Energy", src: "/logos/vena-energy.svg" },
  { name: "Harvard Center for International Development", src: "/logos/harvard-cid.svg" },
];

export default function LogoBarV2() {
  return (
    <section className="w-full overflow-hidden">
      <div className="flex animate-scroll w-max">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="flex items-center justify-center h-24 md:h-40 px-8 md:px-16 shrink-0"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={148}
              height={64}
              className="h-10 md:h-16 w-auto object-contain opacity-100"
            />
          </div>
        ))}
        {logos.map((logo) => (
          <div
            key={`dup-${logo.name}`}
            className="flex items-center justify-center h-24 md:h-40 px-8 md:px-16 shrink-0"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={148}
              height={64}
              className="h-10 md:h-16 w-auto object-contain opacity-100"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
