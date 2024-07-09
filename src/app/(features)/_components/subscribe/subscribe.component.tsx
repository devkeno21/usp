"use client";
import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import SubscribeCar from "./subscribe-2.jpeg";

export default function Subscribe() {
  const theme = useMantineTheme();
  return (
    <Box className="w-full min-h-[70dvh] relative z-0">
      <Box
        className="w-full h-[70dvh] relative z-0"
        style={{
          backgroundImage: `url(${SubscribeCar.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box className="w-full h-[70dvh] bg-black bg-opacity-50 top-0 relative z-3">
          <Box className="flex min-h-full items-center">
            <Stack className="w-full md:w-1/2 gap-6 p-6 md:ml-24">
              <Text
                tt="uppercase"
                className="text-white text-xl md:text-6xl "
                fw={"bold"}
              >
                Sign up and never miss a deal again
              </Text>
              <Text className="text-white text-xs md:text-xl" fw={"bold"}>
                We present popular vehicles that are rented by customers to
                maximize your comfort on long trips.
              </Text>
              <Flex>
                <TextInput placeholder="Enter Email Address" className="bg-transparent w-1/2" variant="filled"/>
                <Button color={theme.colors.secondary[9]}>SUBSCRIBE</Button>
              </Flex>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
