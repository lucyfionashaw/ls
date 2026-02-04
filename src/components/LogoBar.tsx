"use client";

import Image from "next/image";

const logos = [
  { name: "Harvard Business School", src: "/images/logos/edu-1.svg" },
  { name: "University of Melbourne", src: "/images/logos/edu-2.svg" },
  { name: "Fulbright Scholar Program", src: "/images/logos/edu-3.svg" },
  { name: "ExxonMobil", src: "/images/logos/work-1.svg" },
  { name: "Blackstone", src: "/images/logos/work-2.svg" },
  { name: "United Nations", src: "/images/logos/work-3.svg" },
];

function LogoSet({ keyPrefix }: { keyPrefix: string }) {
  return (
    <>
      {logos.map((logo) => (
        <div
          key={`${keyPrefix}-${logo.name}`}
          className="flex items-center justify-center h-14 shrink-0"
          style={{ paddingLeft: 48, paddingRight: 48 }}
        >
          <Image
            src={logo.src}
            alt={logo.name}
            width={148}
            height={56}
            className="object-contain h-11 w-auto"
          />
        </div>
      ))}
    </>
  );
}

export default function LogoBar() {
  return (
    <section className="w-full overflow-hidden pt-20">
      <div className="flex animate-scroll" style={{ width: "fit-content" }}>
        <LogoSet keyPrefix="a" />
        <LogoSet keyPrefix="b" />
        <LogoSet keyPrefix="c" />
        <LogoSet keyPrefix="d" />
      </div>
    </section>
  );
}
