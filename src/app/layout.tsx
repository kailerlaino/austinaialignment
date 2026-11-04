import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  title: "Austin AI Alignment",
  description:
    "Austin AI Alignment is a community of UT students focused on making sure AI development goes well for humanity. Open to all majors; no experience required.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-offwhite">{children}</body>
    </html>
  );
}
