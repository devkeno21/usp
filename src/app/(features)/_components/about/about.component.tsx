"use client"
import {
  Box,
  Button,
  Divider,
  Flex,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import CarBg from "./car-bg.png";

export default function About() {
  const theme = useMantineTheme();
  return (
    <Box className="w-full h-[75dvh] relative mt-[100dvh]">
      <Flex className="w-full h-full justify-center items-center absolute top-0">
        <Box
          className="w-full md:w-2/3 h-[100dvh]"
          style={{
            backgroundImage: `url(${CarBg.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.2,
          }}
        ></Box>
      </Flex>
      <Flex className="w-full h-full justify-center flex flex-col gap-8">
        <Flex className="align-top mx-auto flex-col gap-2">
          <Text tt="uppercase" className="text-xl md:text-5xl font-semibold">About USP</Text>
          <Box bg={theme.colors.secondary[9]} className="w-[85%] p-1 mx-auto"></Box>
        </Flex>
        <Text className="text-xs md:text-xl p-12 text-justify font-semibold">
          In 2008, USP Holdings has expanded its corporate mission and engaged
          in shuttle bus and limousine services. Our transportation mission is
          to provide safe, dependable, and efficient services for people who
          need stress-free and economic travel. We have well trained,
          experienced, fully-insured, professional, and courteous drivers. Our
          fleet of vehicles which include shuttle buses, limousines, and
          taxi-cabs; are spread throughout the DMV and can be deployed at a
          moment’s notice. Our vehicles are well-maintained, and our goal is to
          be on time, all the time. Presently, we are providing services to a
          major downtown corridor in Washington, DC as well as both Washington
          Dulles International and Ronald Reagan National Airports. We maintain
          at maximum a 7-minute headway at both airports and provide rides to a
          million of customers every year.
        </Text>
        <Button color={theme.colors.secondary[9]} className="mx-auto">Book Now</Button>
      </Flex>
    </Box>
  );
}
