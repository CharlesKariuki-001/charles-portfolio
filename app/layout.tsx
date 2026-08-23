import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Charles Kariuki — AI Security Engineer",
  description:
    "Charles Kariuki builds secure AI systems, fraud detection infrastructure, and resilient software for real-world problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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