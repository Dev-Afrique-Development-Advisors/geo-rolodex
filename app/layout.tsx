import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Geo-Rolodex - Connecting The Geospatial Ecosystem",
  description: "Geo-Rolodex is a centralized platform to map, connect, and highlight organisations advancing geospatial work across sectors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter`}>{children}</body>
    </html>
  );
}

