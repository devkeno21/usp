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
  keywords:[
    "DMV luxury car service",
    "DC area luxury car service",
    "chauffeur service DMV",
    "executive transportation DC",
    "premium car service Virginia",
    "Maryland black car service",
    "airport limo service DMV",
    "corporate car service DC",
    "luxury airport transfers DMV",
    "upscale transportation DC",
    "luxury SUV service DMV",
    "private car service Washington DC",
    "high-end transportation Virginia",
    "VIP car service Maryland",
    "luxury sedan service DMV",
    "professional chauffeur DMV",
    "luxury car rental DMV",
    "elite car service DC",
    "private limousine service Virginia",
    "wedding car service DC",
    "luxury ride service Maryland",
    "executive limo service DMV",
    "corporate event transportation DC",
    "luxury transportation Washington DC",
    "upscale chauffeur Virginia",
    "luxury car hire Maryland",
    "business travel car service DMV",
    "premium limousine DMV",
    "high-end car hire DC",
    "black car airport transfer DMV",
    "luxury travel service DMV "
  ]
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
