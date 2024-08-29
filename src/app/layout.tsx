import FloatingContactButton from "@/components/FloatingContact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <meta name="theme-color" content="#fff" />
      </head>
      <GoogleTagManager gtmId="GTM-5DNKHPQ9" />
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5DNKHPQ9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Navbar />
        <FloatingContactButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
