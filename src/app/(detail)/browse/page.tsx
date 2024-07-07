"use client";

import {
  Box,
  Button,
  Checkbox,
  Flex,
  Group,
  Slider,
  Stack,
  Text,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import { Breadcrumb } from "../_components/breadcrumb/breadcrumb.component";
import Car1 from "../../(features)/_components/fleet/car-1.png";
import Car2 from "../../(features)/_components/fleet/car-2.png";
import {
  IconArrowRight,
  IconPoint,
  IconSearch,
  IconX,
} from "@tabler/icons-react";
import { Accordion } from "@mantine/core";

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
];

export default function Browse() {
  const theme = useMantineTheme();
  return (
    <>
      <Breadcrumb
        links={[
          { title: "Home", href: "/" },
          { title: "Browse Fleet", href: "#" },
        ]}
      />

      <Flex gap={10} className="p-5">
        <Box className="w-1/3 px-10">
          <Box className="shadow-xl p-5">
            <Flex justify="space-between">
              <p className="font-semibold text-xl">Filter By</p>
              <p className="text-sm text-slate-500 flex gap-2 items-center">
                Reset All <IconX size={14} />
              </p>
            </Flex>

            <TextInput
              placeholder="Search"
              rightSection={<IconSearch size={14} />}
              className="my-2 border rounded"
              styles={{
                input: {
                  color: "black",
                },
              }}
            />

            <Accordion>
              <Accordion.Item value="rentalType" className="mt-5">
                <Accordion.Control className="text-semibold">
                  Rental Type
                </Accordion.Control>
                <Accordion.Panel>
                  <Group justify="space-between">
                    <Button color="black" variant="outline" size="xs" px={25}>
                      Any
                    </Button>
                    <Button color="black" variant="outline" size="xs" px={25}>
                      Instant
                    </Button>
                    <Button color="black" variant="outline" size="xs" px={25}>
                      Hourly
                    </Button>
                  </Group>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="price" className="mt-5">
                <Accordion.Control className="text-semibold">
                  Price Per Hour
                </Accordion.Control>
                <Accordion.Panel>
                  <Slider color={theme.colors.secondary[9]} />
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="brand" className="mt-5">
                <Accordion.Control className="text-semibold">
                  Car Brand
                </Accordion.Control>
                <Accordion.Panel >
                  <Box className="grid grid-cols-3 ">
                  <Checkbox label="Mercedes Benz" color={theme.colors.secondary[9]} size="xs"/>
                  <Checkbox label="Sedan" color={theme.colors.secondary[9]} size="xs"/>
                  <Checkbox label="Cadilac" color={theme.colors.secondary[9]} size="xs"/>

                  </Box>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="style" className="mt-5">
                <Accordion.Control className="text-semibold">
                  Body Style
                </Accordion.Control>
                <Accordion.Panel>
                <Box className="grid grid-cols-3 gap-5">
                  <Checkbox label="Sedan" color={theme.colors.secondary[9]} size="xs"/>
                  <Checkbox label="SUV" color={theme.colors.secondary[9]} size="xs"/>
                  <Checkbox label="Crossover" color={theme.colors.secondary[9]} size="xs"/>
                  <Checkbox label="Wagon" color={theme.colors.secondary[9]} size="xs"/>

                  </Box>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="seats" className="mt-5">
                <Accordion.Control className="text-semibold">
                  Seats
                </Accordion.Control>
                <Accordion.Panel>
                <Box className="grid grid-cols-3 ">
                  <Checkbox label="4 Seats" color={theme.colors.secondary[9]} size="xs"/>
                  <Checkbox label="2 Seats" color={theme.colors.secondary[9]} size="xs"/>
                  <Checkbox label="6 Seats" color={theme.colors.secondary[9]} size="xs"/>

                  </Box>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>

            <Button className="mt-10" color={theme.colors.secondary[9]} fullWidth size="xl">Filter</Button>
          </Box>
        </Box>
        <Box className="w-2/3 grid grid-cols-2 gap-5">
          {fleet.map((car, index) => (
            <Box className="relative w-full" key={index} h={300}>
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
          ))}
        </Box>
      </Flex>
    </>
  );
}
