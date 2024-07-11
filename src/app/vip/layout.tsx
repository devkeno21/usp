import { Metadata } from "next";
import React from "react";

export const metadata:Metadata ={
    title:"VIP Transportation Program | Exclusive Luxury Services",
    description:"Join USP Transportation's VIP Program for premium benefits, priority booking, and personalised luxury transportation services. Elevate your travel experience today.",
    keywords: ['USP', 'transportation', 'luxury', 'car', 'service',"vip"],
  }
  

export default function VipLayout({children}:{children:React.ReactElement}){
    return <>
    {children}
    </>
}