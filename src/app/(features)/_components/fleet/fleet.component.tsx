"use client";
import {
  ActionIcon,
  Box,
  Button,
  Flex,
  Stack,
  Text,
  em,
  useMantineTheme,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Car1 from "./car-1.png";
import Car2 from "./car-2.png";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { IconArrowLeft, IconArrowRight, IconPoint } from "@tabler/icons-react";
import { useHover, useMediaQuery } from "@mantine/hooks";

const fleet = [
  {
    title: "Escalade ESV Luxury SUV",
    titleDesc: "Luxury Seating for up to 6",
    fleetType: "LUXURY",
    price: "$81,895",
    imageUrl: Car1.src,
    features: [
      "22inch 14-Spoke alloy wheels with Bright Silver finish",
      "6.2L V8 engine with Dynamic Fuel Management",
    ],
  },
  {
    title: "Escalade ESV Luxury SUV",
    titleDesc: "Luxury Seating for up to 6",
    fleetType: "LUXURY",
    price: "$81,895",
    imageUrl: Car1.src,
    features: [
      "22inch 14-Spoke alloy wheels with Bright Silver finish",
      "6.2L V8 engine with Dynamic Fuel Management",
    ],
  },
  {
    title: "Escalade ESV Luxury SUV",
    titleDesc: "Luxury Seating for up to 6",
    fleetType: "LUXURY",
    price: "$81,895",
    imageUrl: Car1.src,
    features: [
      "22inch 14-Spoke alloy wheels with Bright Silver finish",
      "6.2L V8 engine with Dynamic Fuel Management",
    ],
  },
  {
    title: "Escalade ESV Luxury SUV",
    titleDesc: "Luxury Seating for up to 6",
    fleetType: "LUXURY",
    price: "$81,895",
    imageUrl: Car2.src,
    features: [
      "22inch 14-Spoke alloy wheels with Bright Silver finish",
      "6.2L V8 engine with Dynamic Fuel Management",
    ],
  },
  {
    title: "Escalade ESV Luxury SUV",
    titleDesc: "Luxury Seating for up to 6",
    fleetType: "LUXURY",
    price: "$81,895",
    imageUrl: Car1.src,
    features: [
      "22inch 14-Spoke alloy wheels with Bright Silver finish",
      "6.2L V8 engine with Dynamic Fuel Management",
    ],
  },
  {
    title: "Escalade ESV Luxury SUV",
    titleDesc: "Luxury Seating for up to 6",
    fleetType: "LUXURY",
    price: "$81,895",
    imageUrl: Car2.src,
    features: [
      "22inch 14-Spoke alloy wheels with Bright Silver finish",
      "6.2L V8 engine with Dynamic Fuel Management",
    ],
  },
  {
    title: "Escalade ESV Luxury SUV",
    titleDesc: "Luxury Seating for up to 6",
    fleetType: "LUXURY",
    price: "$81,895",
    imageUrl: Car1.src,
    features: [
      "22inch 14-Spoke alloy wheels with Bright Silver finish",
      "6.2L V8 engine with Dynamic Fuel Management",
    ],
  },
];

export default function Fleet() {
  const autoplay1 = useRef(Autoplay({ delay: 2000 }));
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const autoplay2 = useRef(Autoplay({ delay: isMobile ? 3000 : 1500 }));

  return (
    <Stack className="min-h-[100dvh] justify-around" id="fleets">
      <Flex className="justify-center mx-auto flex-col gap-2">
        <Text tt="uppercase" className="text-xl md:text-5xl font-semibold">
          OUR FLEET
        </Text>
        <Box
          bg={theme.colors.secondary[9]}
          className="w-[45%] p-1 mx-auto"
        ></Box>
      </Flex>
      <Carousel
        slideSize={isMobile ? "80%" : "30%"}
        height={300}
        withIndicators
        slideGap="xl"
        controlsOffset="xs"
        controlSize={27}
        loop
        plugins={[autoplay1?.current]}
        onMouseEnter={autoplay1.current.stop}
        onMouseLeave={autoplay1.current.reset}
        nextControlIcon={
          <ActionIcon>
            <IconArrowRight />
          </ActionIcon>
        }
        previousControlIcon={
          <ActionIcon>
            <IconArrowLeft />
          </ActionIcon>
        }
      >
        {fleet.map((car, index) => (
          <Carousel.Slide key={index}>
            <Box className="relative h-full w-full">
              <Box className="h-full w-full absolute top-0">
                <Stack
                  className="h-full items-center gap-2 bg-red-800  hover:opacity-0"
                >
                  <Box
                    className="w-[100%] h-[100%]"
                    style={{
                      backgroundImage: `url(${car.imageUrl})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />

                  <Flex className="flex-col gap-1">
                    <Text fz="xl" tt="capitalize" c="white">
                      {car.title}
                    </Text>
                    <Text c="white" className="text-center">
                      {car.titleDesc}
                    </Text>
                  </Flex>

                  <Box>
                    <Button
                      size="xs"
                      color={theme.colors.primary[9]}
                      className="m-4"
                      rightSection={<IconArrowRight />}
                    >
                      View Details
                    </Button>
                  </Box>
                </Stack>
              </Box>
              <Box className="h-full w-full absolute top-0">
                <Stack className="h-full items-center gap-2 bg-primary-900 opacity-0 hover:opacity-100">
                  <Box
                    className="w-[100%] h-[100%] absolute top-0"
                    style={{
                      backgroundImage: `url(${Car2.src})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      opacity: 0.2,
                    }}
                  />
                  <Box className="h-full absolute top-0">
                    <Stack className="h-full items-center justify-evenly">
                      <Flex className="flex-col gap-1">
                        <Text
                          fz="xl"
                          tt="capitalize"
                          c="white"
                          className="text-center"
                        >
                          {car.title}
                        </Text>
                        <Text c="white" className="text-center">
                          {car.titleDesc}
                        </Text>
                        <Text tt="capitalize" c="white" className="text-center">
                          {car.fleetType}
                        </Text>
                        <Text c="white" className="text-center">
                          Starting from: {car?.price}
                        </Text>
                        <Flex className="flex-col gap-2  p-4">
                          <Text tt="capitalize" c="white">
                            Key features
                          </Text>
                          <Box size={300}>
                            <ol className="text-white">
                              {car.features.map((feature, index) => (
                                <Flex
                                  key={index}
                                  className="items-center gap-2"
                                >
                                  <IconPoint color="white" fill="white" />
                                  <li key={index}>
                                    <Text className="font-semibold" c="white">
                                      {feature}
                                    </Text>
                                  </li>
                                </Flex>
                              ))}
                            </ol>
                          </Box>
                        </Flex>
                      </Flex>
                      <Box>
                        <Button
                          size="xs"
                          color={theme.colors.secondary[9]}
                          rightSection={<IconArrowRight />}
                        >
                          View Details
                        </Button>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Carousel.Slide>
        ))}
      </Carousel>
      <Carousel
        slideSize={isMobile ? "80%" : "30%"}
        initialSlide={6}
        height={300}
        slideGap="xl"
        controlsOffset="xs"
        controlSize={27}
        loop
        plugins={[autoplay2?.current]}
        onMouseEnter={autoplay2.current.stop}
        onMouseLeave={autoplay2.current.reset}
        nextControlIcon={
          <ActionIcon>
            <IconArrowRight />
          </ActionIcon>
        }
        previousControlIcon={
          <ActionIcon>
            <IconArrowLeft />
          </ActionIcon>
        }
      >
        {fleet.map((car, index) => (
          <Carousel.Slide key={index}>
            <Box className="relative h-full w-full">
              <Box className="h-full w-full absolute top-0">
                <Stack
                  className="h-full items-center gap-2 bg-red-800  hover:opacity-0"
                >
                  <Box
                    className="w-[100%] h-[100%]"
                    style={{
                      backgroundImage: `url(${car.imageUrl})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />

                  <Flex className="flex-col gap-1">
                    <Text fz="xl" tt="capitalize" c="white">
                      {car.title}
                    </Text>
                    <Text c="white" className="text-center">
                      {car.titleDesc}
                    </Text>
                  </Flex>

                  <Box>
                    <Button
                      size="xs"
                      color={theme.colors.primary[9]}
                      className="m-4"
                      rightSection={<IconArrowRight />}
                    >
                      View Details
                    </Button>
                  </Box>
                </Stack>
              </Box>
              <Box className="h-full w-full absolute top-0">
                <Stack className="h-full items-center gap-2 bg-primary-900 opacity-0 hover:opacity-100">
                  <Box
                    className="w-[100%] h-[100%] absolute top-0"
                    style={{
                      backgroundImage: `url(${Car2.src})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      opacity: 0.2,
                    }}
                  />
                  <Box className="h-full absolute top-0">
                    <Stack className="h-full items-center justify-evenly">
                      <Flex className="flex-col gap-1">
                        <Text
                          fz="xl"
                          tt="capitalize"
                          c="white"
                          className="text-center"
                        >
                          {car.title}
                        </Text>
                        <Text c="white" className="text-center">
                          {car.titleDesc}
                        </Text>
                        <Text tt="capitalize" c="white" className="text-center">
                          {car.fleetType}
                        </Text>
                        <Text c="white" className="text-center">
                          Starting from: {car?.price}
                        </Text>
                        <Flex className="flex-col gap-2  p-4">
                          <Text tt="capitalize" c="white">
                            Key features
                          </Text>
                          <Box size={300}>
                            <ol className="text-white">
                              {car.features.map((feature, index) => (
                                <Flex
                                  key={index}
                                  className="items-center gap-2"
                                >
                                  <IconPoint color="white" fill="white" />
                                  <li key={index}>
                                    <Text className="font-semibold" c="white">
                                      {feature}
                                    </Text>
                                  </li>
                                </Flex>
                              ))}
                            </ol>
                          </Box>
                        </Flex>
                      </Flex>
                      <Box>
                        <Button
                          size="xs"
                          color={theme.colors.secondary[9]}
                          rightSection={<IconArrowRight />}
                        >
                          View Details
                        </Button>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Carousel.Slide>
        ))}
      </Carousel>
      <Button
        size="md"
        rightSection={<IconArrowRight />}
        className="w-fit mx-auto"
        color={theme.colors.secondary[9]}
      >
        BROWSE THROUGH ALL FLEETS
      </Button>
    </Stack>
  );
}
