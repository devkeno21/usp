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
import Wave from "../../(features)/_components/services/Vector.svg";

import { useMediaQuery } from "@mantine/hooks";
import { useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useParams, useRouter } from "next/navigation";
import whiteCar from "./white-car.png";
import { fleet } from "@/app/(features)/_components/fleet/fleet";



export default function DetailFleet() {
  const theme = useMantineTheme();
  const autoplay1 = useRef(Autoplay({ delay: 2000 }));
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const router = useRouter();
  const {id} = useParams();
  const car = fleet.filter((car) => car.id == parseInt(id as string))[0];
  const [selectedImage,setSelectedImage] = useState(car.gallery[0]);
  return (
    <div>
      <Breadcrumb
        links={[
          { title: "Home", href: "/" },
          { title: "All Fleets", href: "/browse" },
          { title: car.title, href: "#" },
        ]}
      />

      <Box
        className="p-5"
        style={{
          backgroundImage: `url(${Wave.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Flex gap={10}>
          <Box className="w-full">
            <Stack className="h-full">
              <Box
                className="h-[80%]"
                style={{
                  backgroundImage: `url(${selectedImage})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              {/* <video
                // width="320"
                height="240"
                controls
                preload="none"
                className="h-[80%]"
              >
                <source src="/videos/escalade-vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <Box className="h-[20%]">
                <Flex className="gap-4 h-[100%]">
                  {car.gallery.map((img, index) => (
                    <Box
                      key={index}
                      className="w-1/4 cursor-pointer"
                      style={{
                        backgroundImage: `url(${img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        opacity: img === selectedImage ? 1 : 0.6,
                      }}
                      onClick={() => setSelectedImage(img)}
                    />
                  ))}
                </Flex>
              </Box>
            </Stack>
          </Box>
          <Box className="w-full px-10">
            <p className="font-semibold text-xl text-slate-500">Cadilac</p>
            <Flex justify="space-between" align="center">
              <p className="font-semibold text-2xl">{car.title}</p>
              <p className="font-semibold text-secondary-900">
                {car.price} <span className="font-normal">/hr</span>
              </p>
            </Flex>

            <Flex my={10} gap={20} className="color-secondary-900">
              <Group gap={4}>
                <IconStar className="text-secondary-900" />
                <p className="font-semibold">4.7</p>
              </Group>
              <Group gap={4}>
                <SUV />

                <p className="font-semibold">{car.fleetType}</p>
              </Group>
              <Group gap={4}>
                <Seats />
                <p className="font-semibold">{car.seats} Seats</p>
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
                          backgroundImage: `url(${car.bgUrl})`,
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
