"use client";
import { Box, Button, Flex, Stack, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import HeroCar from "./hero-car.jpg";
import Wave from "../services/Vector.svg";

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
        className="w-full h-[100dvh] relative z-10"
        style={{
          backgroundImage: `url(${HeroCar.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box className="w-full h-[100dvh] bg-black bg-opacity-35 top-0 relative z-3">
          <Stack className="w-3/5 justify-between h-full mx-auto">
            <Text
              tt="uppercase"
              className="text-white text-xl md:text-6xl text-center mt-24"
              fw={"bold"}
            >
              Discover the World of Ultimate Comfort and Style
            </Text>
            <Flex className="mb-8 items-center flex-col gap-4">
              <Text
                tt="uppercase"
                className="text-white text-xs md:text-xl text-center"
              >
                Embark on unforgettable journeys where luxury and elegance
                accompany every step of your adventure.
              </Text>
              
              <Button
                color={theme.colors.secondary[9]}
                className="md:absolute md:right-2"
              >
                <a
                  href="https://book.mylimobiz.com/v4/uspholdings"
                  target="_blank"
                >
                  Get Instant Quote
                </a>
              </Button>
            </Flex>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
