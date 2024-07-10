"use client";
import { Box, Button, Stack, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import HeroCar from "./hero-car.jpg";
import Wave from "../services/Vector.svg"

export default function HeroSection() {
  const theme = useMantineTheme();

  return (
    <Box
      className="w-full min-h-[100dvh] absolute top-0"
      style={{
        backgroundImage: `url(${Wave.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        className="w-full h-[100dvh] relative z-0"
        style={{
          backgroundImage: `url(${HeroCar.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box className="w-full h-[100dvh] bg-black bg-opacity-35 top-0 relative z-3">
          <Box className="flex min-h-full justify-center items-center ">
            <Stack className="w-3/5 gap-6">
              <Text
                tt="uppercase"
                className="text-white text-xl md:text-6xl text-center"
                fw={"bold"}
              >
                Discover the World of Ultimate Comfort and Style
              </Text>
              <Text
                tt="uppercase"
                className="text-white text-xs md:text-xl text-center"
                fw={"bold"}
              >
                Embark on unforgettable journeys where luxury and elegance
                accompany every step of your adventure.
              </Text>
              <Button
                color={theme.colors.secondary[9]}
                className="w-fit mx-auto"
              >
                View More
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
