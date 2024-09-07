import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital bulletin board fuas",
  description:
    "Digital Bulletin Board, your central hub for all the latest campus news, events, and opportunities! Designed to keep you informed and engaged.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-200/70 antialiased`}>
        {children}
      </body>
    </html>
  );
}
