import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Join Our Affiliate Program | Partnership Opportunities",
  description:
    "Sign up for our affiliate program. Earn rewards by promoting our products/services. Easy registration process.",
    keywords: ['USP', 'transportation', 'luxury', 'car', 'service',"usptransportation","usp transportation","Usp Transportation"],
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
