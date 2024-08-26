import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import FloatingContactButton from "@/components/FloatingContact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sajid Al-Qari - Professional Quran Reciter",
  description: "Learn Quran online with expert teachers",
  icons: {
    icon: ["/fav.ico"],
    shortcut: ["/fav.ico"],
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
      <meta name='theme-color' content="#f7bf45" />
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
