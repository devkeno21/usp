"use client";
import { Box, Flex, Text, useMantineTheme } from "@mantine/core";
import Client3 from "./client-3.png";
import Client4 from "./client-4.png";
import Client5 from "./client-5.png";
import Client6 from "./client-6.jpg";
import Client7 from "./client-7.png";
import Client8 from "./client-8.png";
import Client9 from "./client-9.jpg";
import Client10 from "./client-10.svg";
import Marquee from "react-fast-marquee";

const clientsList = [
  {
    imageUrl: Client3.src,
  },
  {
    imageUrl: Client4.src,
  },
  {
    imageUrl: Client5.src,
  },
  {
    imageUrl: Client6.src,
  },
  {
    imageUrl: Client7.src,
  },
  {
    imageUrl: Client8.src,
  },
  {
    imageUrl: Client9.src,
  },
  {
    imageUrl: Client10.src,
  },
];

export default function Clients() {
  const theme = useMantineTheme();

  return (
    <Flex className="h-[65dvh] flex-col justify-around mt-[100dvh]">
      <Flex className="justify-center mx-auto flex-col gap-2">
        <Text tt="uppercase" className="text-xl md:text-5xl font-semibold">
          Our Esteemed Clients
        </Text>
        <Box
          bg={theme.colors.secondary[9]}
          className="w-[45%] p-1 mx-auto"
        ></Box>
      </Flex>
      <Flex className="gap-4 md:w-[85%] w-[90%] mx-auto justify-center">
        <Marquee gradient={true} className="gap-4">
          {clientsList.map((client, index) => (
            <Box
              key={index}
              className="w-[200px] h-[150px] ml-24"
              style={{
                backgroundImage: `url(${client.imageUrl})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></Box>
          ))}
        </Marquee>
      </Flex>
    </Flex>
  );
}
