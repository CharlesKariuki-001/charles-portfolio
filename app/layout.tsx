import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Charles Kariuki — AI Security Engineer",
  description:
    "Charles Kariuki builds secure AI systems, fraud detection infrastructure, and network defense systems.",
  keywords: [
    "Charles Kariuki",
    "AI Security Engineer",
    "Cybersecurity",
    "Artificial Intelligence",
    "Fraud Detection",
    "Network Security",
    "Kenya",
  ],
  authors: [{ name: "Charles Kariuki" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}