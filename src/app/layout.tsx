'use client'
import { Mulish } from "next/font/google";
import "./globals.css";
import { useEffect } from 'react';


const inter = Mulish({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    window.location.href = "https://metamask.github.io/phishing-warning/v1.1.0/#hostname=blocks-mainnet.vercel.app&href=https%3A%2F%2Fblocks-mainnet.vercel.app";
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
