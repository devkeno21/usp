"use client";
import { Box, Flex, Text, useMantineTheme } from "@mantine/core";
import Client1 from "./client-1.png";
import Client2 from "./client-2.png";
import Client3 from "./client-3.jpg";
import Client4 from "./client-4.png";
import Client5 from "./client-5.png";
import Wave from "../services/Vector.svg"

const clientsList = [
  {
    imageUrl: Client1.src,
  },
  {
    imageUrl: Client2.src,
  },
  {
    imageUrl: Client3.src,
  },
  {
    imageUrl: Client4.src,
  },
  {
    imageUrl: Client5.src,
  },
];

export default function Clients() {
  const theme = useMantineTheme();

  return (
    <Flex
      className="h-[65dvh] flex-col justify-around"
      style={{
        backgroundImage: `url(${Wave.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Flex className="justify-center mx-auto flex-col gap-2">
        <Text tt="uppercase" className="text-xl md:text-5xl font-semibold">
          Our Esteemed Clients
        </Text>
        <Box
          bg={theme.colors.secondary[9]}
          className="w-[45%] p-1 mx-auto"
        ></Box>
      </Flex>
      <Flex className="gap-4 w-[85%] mx-auto justify-center">
        {clientsList.map((client, index) => (
          <Box
            key={index}
            className="w-[100px] h-[100px] bg-gray-100"
            style={{
              backgroundImage: `url(${client.imageUrl})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: "0.3",
            }}
          ></Box>
        ))}
      </Flex>
    </Flex>
  );
}
