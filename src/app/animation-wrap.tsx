"use client"
import { Box, Loader } from "@mantine/core";
import React from "react";

export default function AnimationWrap({
  children,
}: {
  children: React.ReactNode;
}) {
  if (typeof window === "undefined")
    return (
      <Box className="min-h-[100dvh] flex items-center justify-center bg-black"/>
        
    );

    return children
}
