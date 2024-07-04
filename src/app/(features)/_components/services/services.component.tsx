"use client";
import { Box, Flex, Paper, Stack, Text, useMantineTheme } from "@mantine/core";
import {
  IconBuilding,
  IconCalendar,
  IconDiamond,
  IconPlaneDeparture,
  IconRoad,
  IconVip,
} from "@tabler/icons-react";
import classes from "./service.module.css";
import React from "react";

const services = [
  {
    title: "Airport Transfers",
    description:
      "USP offer transfers and pickups to and from airports across London, If you're beginning or ending your journey at London Heathrow. Stansted, Gatwick. Luton and others. you should start or finish in comfort and style",
    icon: IconPlaneDeparture,
  },
  {
    title: "Roadshows",
    description:
      "We can take care of the logistics of getting you and your colleagues to and from your roadshow, with sedans, MPV and luxury Minibus vehicles available, let us focus on your transport for the day, so you can concentrate on your business.",
    icon: IconRoad,
  },
  {
    title: "Weddings",
    description:
      "We&apos;re committed to providing you with the most luxurious chauffeur services for your wedding which you can entirely rely on, Our prestigious fleet of high-end vehicles are available to add that extra element Of style to your big day.",
    icon: IconDiamond,
  },
  {
    title: "Corporate",
    description:
      "USP offer transfers and pickups to and from airports across London, If you're beginning or ending your journey at London Heathrow. Stansted, Gatwick. Luton and others. you should start or finish in comfort and style",
    icon: IconBuilding,
  },
  {
    title: "Events",
    description:
      "Available for both, private and public events. our team of experienced chauffeurs are always prepared for any event. Trained to deal with the fast moving nature of these specialised events, our chauffeurs Will ensure your day is stress and hassle free,",
    icon: IconCalendar,
  },
  {
    title: "Vip",
    description:
      "USP offer transfers and pickups to and from airports across London, If you're beginning or ending your journey at London Heathrow. Stansted, Gatwick. Luton and others. you should start or finish in comfort and style",
    icon: IconVip,
  },
];

export default function Services() {
  const theme = useMantineTheme();

  return (
    <Stack className="min-h-[100dvh] justify-evenly items-center">
      <Flex className="justify-center mx-auto flex-col gap-2">
        <Text tt="uppercase" className="text-xl md:text-5xl font-semibold">
          OUR SERVICES
        </Text>
        <Box
          bg={theme.colors.secondary[9]}
          className="w-[45%] p-1 mx-auto"
        ></Box>
      </Flex>
      <Flex wrap={"wrap"} className="gap-4 p-6 mx-auto hidden md:flex">
        {services.map((service, index) => (
          <Paper
            key={index}
            withBorder
            className="rounded-md w-[calc(33.33%-1rem)] h-[180px] p-4 bg-primary-900"
          >
            <Flex key={index} className="flex-col gap-2 my">
              <Flex className="gap-4">
                <service.icon size={25} color="white" />
                <Text
                  tt="uppercase"
                  className="text-xl font-semibold text-white"
                >
                  {service.title}
                </Text>
              </Flex>
              <Text className="text-sm text-white text-justify">
                {service.description}
              </Text>
            </Flex>
          </Paper>
        ))}
      </Flex>
      <div className={`${classes.container} md:hidden text-white`}>
        <ul className={classes.cards}>
          {services.map((service, index) => (
            <li key={index} className={`${classes.card} ${classes.card1}`}>
              <div
                className={`${classes.card_body} bg-primary-900 flex flex-col`}
              >
                <Flex className="gap-4">
                  <service.icon size={25} color="white" />
                  <Text tt="uppercase" className="text-xl font-semibold">
                    {service.title}
                  </Text>
                </Flex>
                <Text className="text-sm text-white text-justify">
                  {service.description}
                </Text>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Stack>
  );
}
