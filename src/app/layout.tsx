import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const saans = localFont({
  src: [
    { path: "../../public/fonts/saans/Saans-TRIAL-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/saans/Saans-TRIAL-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/saans/Saans-TRIAL-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/saans/Saans-TRIAL-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-saans",
  display: "swap",
});

const saansMono = localFont({
  src: [
    { path: "../../public/fonts/saans-mono/SaansMono-TRIAL-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/saans-mono/SaansMono-TRIAL-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/saans-mono/SaansMono-TRIAL-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/saans-mono/SaansMono-TRIAL-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-saans-mono",
  display: "swap",
});

const plantin = localFont({
  src: [
    { path: "../../public/fonts/plantin/PlantinMTProLight.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/plantin/PlantinMTProRg.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/plantin/PlantinMTProSmBd.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/plantin/PlantinMTProSmBd.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/plantin/PlantinMTProBold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-plantin",
  display: "swap",
});

const meritocracy = localFont({
  src: [
    { path: "../../public/fonts/meritocracy/Meritocracy-Regular.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-meritocracy",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lucy Shaw — Energy expert: investor, writer, convenor, speaker",
  description:
    "Lucy Shaw writes and talks about energy transition, climate investing, ESG, infrastructure, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${saans.variable} ${saansMono.variable} ${plantin.variable} ${meritocracy.variable} font-sans-main antialiased bg-[var(--color-bg)] text-[var(--color-dark)]`}
      >
        {children}
      </body>
    </html>
  );
}
