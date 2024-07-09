"use client";
import {
  Box,
  Button,
  Divider,
  Flex,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import CarBg from "./car-bg.png";

export default function About() {
  const theme = useMantineTheme();
  return (
    <Box id="about" className="w-full h-[75dvh] relative mt-[100dvh]">
      <Flex className="w-full h-full justify-center items-center absolute top-0">
        <Box
          className="w-full md:w-2/3 h-[100dvh]"
          style={{
            backgroundImage: `url(${CarBg.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.2,
          }}
        ></Box>
      </Flex>
      <Flex className="w-full h-full justify-center flex flex-col gap-8">
        <Flex className="align-top mx-auto flex-col gap-2">
          <Text tt="uppercase" className="text-xl md:text-5xl font-semibold">
            About USP
          </Text>
          <Box
            bg={theme.colors.secondary[9]}
            className="w-[85%] p-1 mx-auto"
          ></Box>
        </Flex>
        <Text className="text-xs md:text-xl p-12 text-justify font-semibold">
          In 2008, USP Holdings expanded its corporate mission and engaged in
          shuttle bus and limousine services. Our transportation mission is to
          provide safe, dependable, and efficient services for people who need
          stress-free and economical travel. We have well-trained, experienced,
          fully insured, professional, and courteous drivers. Our vehicles,
          including shuttle buses, limousines, and taxi cabs, are spread
          throughout the DMV and can be deployed immediately. Our automobiles
          are well-maintained, and our staff is always punctual. We provide
          services to a significant downtown corridor in Washington, DC,
          Washington Dulles International, and Ronald Reagan National Airports.
        </Text>
        <Button color={theme.colors.secondary[9]} className="mx-auto">
          <a href="https://book.mylimobiz.com/v4/uspholdings">Book Now</a>
        </Button>
      </Flex>
    </Box>
  );
}
