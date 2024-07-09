"use client";
import {
  ActionIcon,
  Box,
  Button,
  em,
  Flex,
  Group,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { Breadcrumb } from "../_components/breadcrumb/breadcrumb.component";
import {
  IconArrowLeft,
  IconArrowRight,
  IconPoint,
  IconStar,
} from "@tabler/icons-react";
import { SUV } from "./_components/suv";
import { Seats } from "./_components/seats";
import { Carousel } from "@mantine/carousel";
import Car1 from "../../(features)/_components/fleet/car-1.png";
import Car2 from "../../(features)/_components/fleet/car-2.png";
import Car3 from "../../(features)/_components/fleet/car-3.png";
import Car4 from "../../(features)/_components/fleet/car-4.png";
import Car5 from "../../(features)/_components/fleet/car-5.png";
import Car6 from "../../(features)/_components/fleet/car-6.png";
import Car7 from "../../(features)/_components/fleet/car-7.png";
import Car8 from "../../(features)/_components/fleet/car-8.png";
import Car9 from "../../(features)/_components/fleet/car-9.png";
// import CarVid from "./escalade-vid.mp4"

import { useMediaQuery } from "@mantine/hooks";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";
import whiteCar from "./white-car.png";

const fleet = [
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
    fleetType: "LUXURY",
    price: "$81,895",
    imageUrl: Car1.src,
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
    ],
  },
];

export default function DetailFleet() {
  const theme = useMantineTheme();
  const autoplay1 = useRef(Autoplay({ delay: 2000 }));
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const router = useRouter();
  return (
    <div>
      <Breadcrumb
        links={[
          { title: "Home", href: "/" },
          { title: "All Fleets", href: "/browse" },
          { title: "Escalade ESV Luxury SUV", href: "#" },
        ]}
      />

      <Box className="p-5">
        <Flex gap={10}>
          <Box className="w-full">
            <Stack className="h-full">
              {/* <Box
                className="h-[80%]"
                style={{
                  backgroundImage: `url(${whiteCar.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              /> */}
              <video
                // width="320"
                height="240"
                controls
                preload="none"
                className="h-[80%]"
              >
                <source src="/videos/escalade-vid.mp4" type="video/mp4" />
               
                Your browser does not support the video tag.
              </video>
              <Box className="h-[20%]">
                <Flex className="gap-4 h-[100%]">
                  {[1, 2, 3, 4].map((_, index) => (
                    <Box
                      key={index}
                      className="w-1/4 cursor-pointer"
                      style={{
                        backgroundImage: `url(${whiteCar.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        opacity: index === 0 ? 1 : 0.4,
                      }}
                    />
                  ))}
                </Flex>
              </Box>
            </Stack>
          </Box>
          <Box className="w-full px-10">
            <p className="font-semibold text-xl text-slate-500">Cadilac</p>
            <Flex justify="space-between" align="center">
              <p className="font-semibold text-2xl">Escalade ESV Luxury SUV</p>
              <p className="font-semibold text-secondary-900">
                $28.45 <span className="font-normal">/hr</span>
              </p>
            </Flex>

            <Flex my={10} gap={20} className="color-secondary-900">
              <Group gap={4}>
                <IconStar className="text-secondary-900" />
                <p className="font-semibold">4.7</p>
              </Group>
              <Group gap={4}>
                <SUV />

                <p className="font-semibold">SUV</p>
              </Group>
              <Group gap={4}>
                <Seats />
                <p className="font-semibold">6 Seats</p>
              </Group>
            </Flex>

            <p className="my-5 text-justify text-slate-500">
              The Escalade is a luxury full-size SUV that offers high-end
              features, a plush ride, and powerful engine options. The
              Escalade’s interior boasts luxury amenities such as semi-aniline
              leather seats, aluminum speaker grilles, adjustable interior
              ambient lighting, and a curved OLED digital dashboard that houses
              both the driver’s gauge cluster and infotainment system. The SUV
              also offers advanced technology features like Super Cruise
              adaptive cruise control, which enables hands-free driving, and an
              augmented reality navigation system. Apple CarPlay/Android Auto
              integration and a Wi-Fi hotspot are also standard.
            </p>
            <Button fullWidth color={theme.colors.secondary[9]} size="xl">
              Book
            </Button>
          </Box>
        </Flex>

        <Box className="mt-5">
          <p className="font-semibold text-3xl my-10">Similar Cars</p>
          <Carousel
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
                            <Text
                              tt="capitalize"
                              c="white"
                              className="text-center"
                            >
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
                                        <Text
                                          className="font-semibold"
                                          c="white"
                                        >
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
        </Box>
      </Box>
    </div>
  );
}
