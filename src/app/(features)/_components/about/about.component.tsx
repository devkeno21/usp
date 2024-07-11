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
     
      <Stack className="min-h-[65dvh] md:min-h-[80dvh] gap-4 relative mt-[100dvh]" id="affiliates">
        <Flex className="justify-center mx-auto flex-col gap-2">
          <Text tt="uppercase" className="text-xl md:text-5xl font-semibold">
            About USP
          </Text>
          <Box
            bg={theme.colors.secondary[9]}
            className="w-[45%] p-1 mx-auto"
          ></Box>
        </Flex>
        <Flex className="min-h-[50dvh] md:min-h-[65dvh] items-center justify-center relative">
        <Stack className="md:w-2/5 md:ml-10 p-6">
            <Text className="text-justify font-semibold text-lg">
              In 2008, USP Holdings expanded its corporate mission and engaged
              in shuttle bus and limousine services. Our transportation mission
              is to provide safe, dependable, and efficient services for people
              who need stress-free and economical travel. We have well-trained,
              experienced, fully insured, professional, and courteous drivers.
              Our vehicles, including shuttle buses, limousines, and taxi cabs,
              are spread throughout the DMV and can be deployed immediately. Our
              automobiles are well-maintained, and our staff is always punctual.
              We provide services to a significant downtown corridor in
              Washington, DC, Washington Dulles International, and Ronald Reagan
              National Airports.
            </Text>

            <Button color={theme.colors.secondary[9]} className="mx-auto">
              <a
                href="https://book.mylimobiz.com/v4/uspholdings"
                target="_blank"
              >
                Book Now
              </a>
            </Button>
          </Stack>
          <Box
            className="w-3/5 hidden md:flex min-h-[50dvh] md:min-h-[65dvh]"
            style={{
              backgroundImage: `url(${CarBg.src})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <Flex className="w-full h-full justify-center items-center absolute top-0">
            <Box
              className="w-full md:hidden h-[70dvh]"
              style={{
                backgroundImage: `url(${CarBg.src})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: 0.2,
              }}
            ></Box>
          </Flex>
         
        </Flex>
      </Stack>
    // </Box>
  );
}
