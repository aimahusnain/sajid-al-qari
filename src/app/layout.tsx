import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import FloatingContactButton from "@/components/FloatingContact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sajid Quran Academy - Professional Quran Reciter",
  description: "Learn Quran online with expert teachers",
  icons: {
    icon: ["/favicon.ico"],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name='theme-color' content="#fff" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <FloatingContactButton />
        {children}
        <Footer />
        </body>
    </html>
  );
}
