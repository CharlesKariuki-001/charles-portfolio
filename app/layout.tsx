import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://charles-portfolio.vercel.app"),

  title: {
    default: "Charles Kariuki — AI Security Engineer",
    template: "%s — Charles Kariuki",
  },

  description:
    "AI security engineer building fraud detection, AI security, and network defense systems with a focus on practical infrastructure for Africa.",

  keywords: [
    "AI security engineer",
    "AI security",
    "fraud detection",
    "mobile money fraud",
    "M-Pesa fraud detection",
    "network defense",
    "cybersecurity",
    "Kenya software engineer",
    "Kenya AI engineer",
    "Vigilant AI",
    "AfricaNDR",
  ],

  authors: [
    {
      name: "Charles Kariuki",
    },
  ],

  creator: "Charles Kariuki",

  openGraph: {
    title: "Charles Kariuki — AI Security Engineer",
    description:
      "AI security engineer building fraud detection, AI security, and network defense systems with a focus on practical infrastructure for Africa.",
    url: "https://charles-portfolio.vercel.app",
    siteName: "Charles Kariuki",
    type: "website",
    locale: "en_KE",
  },

  twitter: {
    card: "summary_large_image",
    title: "Charles Kariuki — AI Security Engineer",
    description:
      "AI security engineer building fraud detection, AI security, and network defense systems with a focus on practical infrastructure for Africa.",
    creator: "@KariukiBuilds__",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ScrollProgress />

        <CustomCursor />

        <Navbar />

        <PageTransition>
          <main>{children}</main>
        </PageTransition>
      </body>
    </html>
  );
}