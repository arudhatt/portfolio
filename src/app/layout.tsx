import type { Metadata } from "next";
import { Arimo } from 'next/font/google'
import './styles.css'
import "./globals.css"

const arimo = Arimo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-arimo',
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Created by Arminder Chahal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={arimo.className}>{children}</body>
    </html>
  );
}
