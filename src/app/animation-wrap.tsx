"use client"
import { Box, Loader } from "@mantine/core";
import Head from "next/head";
import React from "react";
import { Partytown } from '@builder.io/partytown/react';


export default function AnimationWrap({
  children,
}: {
  children: React.ReactNode;
}) {
  if (typeof window === "undefined")
    return (
      <Box className="min-h-[100dvh] flex items-center justify-center bg-black"/>
        
    );

    return <>
     <Head>
        <Partytown debug={true} forward={['dataLayer.push']} />
      </Head>
    {children}
    </>
}
