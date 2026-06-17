import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Senior Engineer Journey",
    template: "%s · Senior Engineer Journey",
  },
  description:
    "A practical documentation hub for growing from frontend developer to AI-age senior engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased bg-[#0a0a0f]`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-slate-200">{children}</body>
    </html>
  );
}
