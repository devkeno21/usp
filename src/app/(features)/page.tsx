import React from "react";
import HeroSection from "./_components/hero/hero.component";
import About from "./_components/about/about.component";
import { Box, Stack } from "@mantine/core";
import Clients from "./_components/clients/clients.component";
import Fleet from "./_components/fleet/fleet.component";
import Services from "./_components/services/services.component";
import Affiliates from "./_components/affiliates/affiliates.component";
import Contact from "./_components/contact/contact.component";
import Subscribe from "./_components/subscribe/subscribe.component";
import { Metadata } from "next";

export const metadata:Metadata ={
  title:"USP Transportation - Luxury Car Service & VIP Transportation",
  description:"Experience ultimate comfort and style with USP Transportation. We offer premium car services, airport transfers, and VIP transportation solutions. Book your luxury ride today!",
  keywords: ['USP', 'transportation', 'luxury', 'car', 'service',"usptransportation","usp transportation","Usp Transportation"],
  openGraph:{
    title: 'USP Transportation - Luxury Car Service & VIP Transportation',
    description: 'Experience ultimate comfort and style with USP Transportation. We offer premium car services, airport transfers, and VIP transportation solutions. Book your luxury ride today!',
    url: 'https://usp-bay.vercel.app',
    type: 'website',
    images:['/blue-usp-logo.png'],
  }
}

export default function Landing() {
  return (
    <Stack>
      <HeroSection />
      <Box className="relative z-0">
        <Clients/>
        <Fleet/>
        <About />
        <Services/>
        <Affiliates/>
        <Contact/>
        <Subscribe/>
      </Box>
    </Stack>
  );
}
