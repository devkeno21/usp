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
import { useMediaQuery } from "@mantine/hooks";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";

const fleet = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
          <Box className="w-full"></Box>
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
              Lorem ipsum dolor sit amet consectetur. Fermentum ut cursus
              molestie mollis purus. Nunc augue nullam proin mauris quis quis
              volutpat ut platea. Quam vulputate ultricies eu neque tellus sed
              praesent. Risus dolor consectetur pellentesque et integer id at.
              Eu ultrices magnis commodo ut duis proin vulputate augue vitae. Ut
              dictum sed turpis tincidunt amet. Venenatis fusce ipsum neque sed.
              Sit turpis condimentum purus potenti vestibulum. Posuere dolor sem
              aenean semper tempus. Venenatis fusce ipsum neque sed. Sit turpis
              condimentum purus potenti vestibulum. Posuere dolor sem aenean
              semper tempus.
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
