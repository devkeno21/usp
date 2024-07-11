import { Metadata } from "next";
import React from "react";

export const metadata:Metadata ={
    title:"Join Our Affiliate Program | Partnership Opportunities",
    description:"Sign up for our affiliate program. Earn rewards by promoting our products/services. Easy registration process.",
    keywords: ['USP', 'transportation', 'luxury', 'car', 'service',"affiliate"],
  }
  

export default function AffiliateLayout({children}:{children:React.ReactElement}){
    return <>
    {children}
    </>
}