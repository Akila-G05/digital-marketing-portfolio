import type { Metadata } from "next";
import { Inter, Oswald, Caveat, Reenie_Beanie } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  weight: ["500", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["400", "600"],
});

const reenieBeanie = Reenie_Beanie({
  subsets: ["latin"],
  variable: "--font-reenie",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Shehan Maduharshana — Digital Marketer & Growth Strategist",
  description:
    "Data-driven digital marketing, performance ads, SEO, and conversion rate optimization campaigns that scale brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${caveat.variable} ${reenieBeanie.variable} antialiased`}
    >
      <body className="bg-[#070708] text-white font-sans selection:bg-[#D91B24] selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
