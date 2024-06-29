import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UI Backend",
  description:
    "Reusable UI components and functions stored here to when needed",
};

/**
 * - Navbar
 * - Authentication using Redux-Toolkit
 * - Hero section [Full Screen MUI]
 * - Slider (Carousel, testimonials)
 * - Image Gallery
 * - Steps
 * - Accordion
 * - Table
 */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme={"dark"}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
