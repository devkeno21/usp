import { Montserrat } from 'next/font/google';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/carousel/styles.css';
import type { Metadata } from "next";
import "./globals.css";

import RootStyleRegistry from "./mantine";
import { Notifications } from "@mantine/notifications";
import Preloader from "./_components/preloader"


export const metadata: Metadata = {
  title: "USP",
  description: "USP Transportation",
  icons: {
    icon: "/usp-logo-white.png"
  }
};


const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display:'swap',
  fallback: ['Arial', 'sans-serif'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}><Preloader/><RootStyleRegistry><Notifications/>{children}</RootStyleRegistry></body>
    </html>
  );
}
