"use client";
import {
  Box,
  Button,
  Divider,
  Flex,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import CarBg from "./about-car.png";

export default function About() {
  const theme = useMantineTheme();
  return (
    // <Box id="about" className="w-full h-[75dvh] relative mt-[100dvh]">

    <Stack
      className="min-h-[75dvh] md:min-h-[90dvh] gap-4 relative p-8 pt-16 justify-center"
      id="about"
      style={{
        backgroundImage: `url(${CarBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Flex className="justify-center flex-col gap-2 text-white ml-6">
        <Text tt="uppercase" className="text-xl md:text-5xl font-semibold">
          About USP
        </Text>
        <Box
          bg={theme.colors.secondary[9]}
          className="w-[15%] md:w-[5%] p-1"
        ></Box>
      </Flex>
        <Stack className="md:w-2/5 pt-4 p-6">
          <Text className="text-justify font-semibold text-md md:text-lg text-white">
            In 2008, USP Holdings expanded its corporate mission and engaged in
            shuttle bus and limousine services. Our transportation mission is to
            provide safe, dependable, and efficient services for people who need
            stress-free and economical travel. We have well-trained,
            experienced, fully insured, professional, and courteous drivers. Our
            vehicles, including shuttle buses, limousines, and taxi cabs, are
            spread throughout the DMV and can be deployed immediately. Our
            automobiles are well-maintained, and our staff is always punctual.
            We provide services to a significant downtown corridor in
            Washington, DC, Washington Dulles International, and Ronald Reagan
            National Airports.
          </Text>

          <Button color={theme.colors.secondary[9]} className="mr-auto">
            <a href="https://book.mylimobiz.com/v4/uspholdings" target="_blank">
              Book Now
            </a>
          </Button>
        </Stack>
    </Stack>
    // </Box>
  );
}
