import { Metadata } from "next";
import React from "react";

export const metadata:Metadata ={
    title:"Our Luxury Fleet | USP Transportation",
    description:"Explore USP Transportation's premium fleet of luxury vehicles. From Cadillac Escalades to Mercedes-Benz sedans, find the perfect ride for your needs.",
    keywords: ['USP', 'transportation', 'luxury', 'car', 'service'],
    openGraph:{
        type: "website",
        url: "/browse",
        title: "Our Luxury Fleet | USP Transportation",
        description: "Explore USP Transportation's premium fleet of luxury vehicles. From Cadillac Escalades to Mercedes-Benz sedans, find the perfect ride for your needs.",
        images:['/blue-usp-logo.png'],
    }
  }
  

export default function BrowseLayout({children}:{children:React.ReactElement}){
    return <>
    {children}
    </>
}