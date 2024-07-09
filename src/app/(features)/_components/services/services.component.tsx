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
      "USP Transportation offers transfers and pickups to and from airports across Washington DC and the DMV area. Our client's flights are monitored, tracked, and updated in real-time using state-of-the-art monitoring software.",
    icon: IconPlaneDeparture,
  },
  {
    title: "Roadshows",
    description:
      "We can handle the logistics of getting you and your colleagues to and from your roadshow with Sedans, MPVs, and luxury minibus vehicles available; let us focus on your daily transport so you can concentrate on your business.",
    icon: IconRoad,
  },
  {
    title: "Weddings",
    description:
      "We're committed to providing you with the most luxurious chauffeur services for your wedding. Our prestigious fleet of high-end vehicles is available to add that extra element of style to your big day.",
    icon: IconDiamond,
  },
  {
    title: "Corporate",
    description:
      "Our clients have highly demanding schedules, so here at USP Transportation, we always strive to be punctual, assisting you with route planning, vehicle choice, and scheduling. Offers an array of corporate chauffeur service options.",
    icon: IconBuilding,
  },
  {
    title: "Diplomatic",
    description:
      "USP Transportation is highly experienced in providing diplomatic chauffeur services to diplomatic personnel who desire discreet and comfortable transportation while on the go. Paired with our extensive road, terrain, and parking knowledge",
    icon: IconCalendar,
  },
  {
    title: "Vip",
    description:
      "Our chauffeurs are always impeccably presented and multilingual, speaking languages such as English, French, Arabic and Amharic. We are committed to providing DMV's best high-class, reliable, stress-free executive car hire services.",
    icon: IconVip,
  },
];

export default function Services() {
  const theme = useMantineTheme();

  return (
    <Stack id="services" className="min-h-[100dvh] justify-evenly items-center">
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
