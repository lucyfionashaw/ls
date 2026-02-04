"use client";

import Image from "next/image";

const clients = [
  { name: "Client 1", src: "/logos/client-1.svg" },
  { name: "Client 2", src: "/logos/client-2.svg" },
  { name: "Client 3", src: "/logos/client-3.svg" },
  { name: "Client 4", src: "/logos/client-4.svg" },
];

export default function ClientsV2() {
  return (
    <section className="w-full overflow-hidden pb-52">
      <div className="flex animate-scroll w-max">
        {/* First set */}
        {clients.map((client) => (
          <div
            key={client.name}
            className="flex items-center justify-center h-40 px-16 shrink-0"
          >
            <Image
              src={client.src}
              alt={client.name}
              width={148}
              height={64}
              className="h-16 w-auto object-contain opacity-70"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {clients.map((client) => (
          <div
            key={`dup-${client.name}`}
            className="flex items-center justify-center h-40 px-16 shrink-0"
          >
            <Image
              src={client.src}
              alt={client.name}
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
