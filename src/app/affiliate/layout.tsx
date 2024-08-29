import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Join Our Affiliate Program | Partnership Opportunities",
  description:
    "Sign up for our affiliate program. Earn rewards by promoting our products/services. Easy registration process.",
  keywords: [
    "USP",
    "transportation",
    "luxury",
    "car",
    "service",
    "usptransportation",
    "usp transportation",
    "Usp Transportation",
    "luxury chauffeur affiliate program US",
    "partner with luxury car service US",
    "affiliate program for upscale transport US",
    "luxury vehicle service affiliate US",
    "high-end chauffeur affiliate US",
    "luxury travel affiliate partnership US",
    " premium transport affiliate marketing US",
    "exclusive car service affiliate US",
    "affiliate program luxury limousine US",
    "luxury fleet affiliate opportunities US",
    "VIP car service affiliate partnership US",
    "affiliate commission luxury transport US",
    "upscale travel affiliate program US",
    "luxury airport transfer affiliate US",
    "luxury transportation referral program US",
    "luxury transport affiliate program US",
    "high-end transportation affiliate US",
    "luxury car service affiliate US",
    "chauffeur service affiliate program US",
    "affiliate program luxury travel US",
    "premium car service affiliate US",
    "VIP transport affiliate program US",
    "executive transportation affiliate US",
    "earn with luxury car services US",
    "upscale transport affiliate US",
    "luxury limo affiliate program US",
    "affiliate marketing luxury transport US",
    "high-end travel affiliate program US",
    "luxury ride service affiliate US",
    "elite transportation affiliate US"
  ],
  icons: {
    icon: "/usp-logo-white.png",
  },
  openGraph: {
    type: "website",
    url: "/affiliate",
    title: "Join Our Affiliate Program | Partnership Opportunities",
    description:
      "Sign up for our affiliate program. Earn rewards by promoting our products/services. Easy registration process.",
    images: ["/blue-usp-logo.png"],
  },
};

export default function AffiliateLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return <>{children}</>;
}
