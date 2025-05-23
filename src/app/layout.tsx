import { centuryFont } from "../utils/century";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/carousel/styles.css";
import type { Metadata } from "next";
import "./globals.css";

import RootStyleRegistry from "./mantine";
import { Notifications } from "@mantine/notifications";
import Preloader from "./_components/preloader";
import { Providers } from "@/state/provider";
import AnimationWrap from "./animation-wrap";

export const metadata: Metadata = {
  title: "USP",
  description: "USP Transportation",
  icons: {
    icon: "/usp-logo-white.png",
  },
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={centuryFont.className}>
        <Providers>
          <RootStyleRegistry>
            <Notifications />
             <Preloader/>
             <AnimationWrap>{children}</AnimationWrap> 
          </RootStyleRegistry>
        </Providers>
      </body>
    </html>
  );
}
