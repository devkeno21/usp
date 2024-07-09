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
import Car3 from "./car-3.png";
import Car4 from "./car-4.png";
import Car5 from "./car-5.png";
import Car6 from "./car-6.png";
import Car7 from "./car-7.png";
import Car8 from "./car-8.png";
import Car9 from "./car-9.png";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { IconArrowLeft, IconArrowRight, IconPoint } from "@tabler/icons-react";
import { useHover, useMediaQuery } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import Wave from "../services/Vector.svg"

export const fleet = [
  {
    id: 1,
    title: "Mercedes E Class",
    titleDesc: "Luxury Seating for up to 6",
    fleetType: "Executive Sedan",
    price: "$81,895",
    imageUrl: Car3.src,
    features: [
      "Exceptional design and innovative technology ",
      "Perfect for any executive",
    ],
  },
  {
    id: 2,
    title: "Mercedes Benz S-Class",
    titleDesc: "Luxury Seating for up to 6",
    fleetType: "Luxury Sedan",
    price: "$81,895",
    imageUrl: Car4.src,
    features: [
      "Ultimate comfort, elegantly designed, and exceptional",
      "Luxuriously equipped with exquisite, comfortable leather massage seats",
    ],
  },
  {
    id: 3,
    title: "Escalade ESV Luxury SUV",
    titleDesc: "Luxury Seating for up to 6",
    fleetType: "Luxury Sedan",
    price: "$81,895",
    imageUrl: Car4.src,
    features: [
      "Full-size SUV that offers high-end features",
      "Semi-aniline leather seats",
    ],
  },
  {
    id: 4,
    title: "Range Rover Vogue",
    titleDesc: "Luxury Seating for up to 6",
    fleetType: "LUXURY",
    price: "$81,895",
    imageUrl: Car5.src,
    features: [
      "Providing immense space with a power recline",
      "heated leather rear seats",
    ],
  },
  {
    id: 5,
    title: "Executive Eco Sedan (Tesla Models)",
    titleDesc: "Luxury Seating for up to 6",
    fleetType: "LUXURY",
    price: "$81,895",
    imageUrl: Car6.src,
    features: [
      "Zero-emission electric",
      "Unparalleled execution in all weather conditions",
    ],
  },
  {
    id: 6,
    title: "Executive Eco SUV (Tesla Model X)",
    titleDesc: "Luxury Seating for up to 6",
    fleetType: "LUXURY",
    price: "$81,895",
    imageUrl: Car7.src,
    features: [
      "One of the safest SUV's ever",
      "Zero-emission, all-electric vehicle ",
    ],
  },
  {
    id: 7,
    title: "Executive Minibus (Mercedes Sprinter)",
    titleDesc: "Luxury Seating for up to 6",
    fleetType: "LUXURY",
    price: "$81,895",
    imageUrl: Car8.src,
    features: [
      "Transporting more prominent groups",
      "Executive-style leather seating, ample space",
    ],
  },
  {
    id: 7,
    title: "Executive Coach",
    titleDesc: "33/43/53/70 Passenger Coaches",
    fleetType: "LUXURY",
    price: "$81,895",
    imageUrl: Car9.src,
    features: [
      "Travel in luxury and arrive in style",
      "Available in varying passenger sizes",
      "Travel in luxury and arrive in style",
      "Available in varying passenger sizes",
    ],
  },
];

export default function Fleet() {
  const autoplay1 = useRef(Autoplay({ delay: 2000 }));
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const autoplay2 = useRef(Autoplay({ delay: isMobile ? 3000 : 1500 }));
  const router = useRouter();

  return (
    <Stack
      className="min-h-[100dvh] justify-around"
      id="fleets"
      style={{
        backgroundImage: `url(${Wave.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Flex className="justify-center mx-auto flex-col gap-2">
        <Text tt="uppercase" className="text-xl md:text-5xl font-semibold">
          OUR FLEET
        </Text>
        <Box
          bg={theme.colors.secondary[9]}
          className="w-[45%] p-1 mx-auto"
        ></Box>
      </Flex>
      {/* <Carousel
        slideSize={isMobile ? "80%" : "30%"}
        height={300}
        // withIndicators
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
                <Stack className="h-full items-center gap-2 bg-red-800  hover:opacity-0">
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
                      onClick={() => router.push(car.id.toString())}
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
                          onClick={() => router.push(car.id.toString())}
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
      </Carousel> */}
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
                <Stack className="h-full items-center gap-2 bg-red-800  hover:opacity-0">
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
                      onClick={() => router.push(car.id.toString())}
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
                          onClick={() => router.push(car.id.toString())}
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
        onClick={() => router.push("/browse")}
      >
        BROWSE THROUGH ALL FLEETS
      </Button>
    </Stack>
  );
}
