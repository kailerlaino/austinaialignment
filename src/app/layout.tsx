import type { Metadata } from "next";
import { Newsreader, Chivo_Mono } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

const chivoMono = Chivo_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-chivo-mono",
});

export const metadata: Metadata = {
  title: "Austin AI Alignment",
  description:
    "Austin AI Alignment runs fellowships in technical AI safety and AI governance for UT students — no prior background required.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${chivoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-offwhite">{children}</body>
    </html>
  );
}
