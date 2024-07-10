"use client";
import { Box, Button, Flex, Stack, Text, useMantineTheme } from "@mantine/core";
import BlackCar from "./black-car-4.png";
import { useRouter } from "next/navigation";
import Wave from "../services/Vector.svg"

export default function Affiliates() {
  const theme = useMantineTheme();
  const router = useRouter();

  return (
    <Stack className="min-h-[65dvh] md:min-h-[80dvh] gap-4">
      <Flex className="justify-center mx-auto flex-col gap-2">
        <Text tt="uppercase" className="text-xl md:text-5xl font-semibold">
          OUR AFFILIATES
        </Text>
        <Box
          bg={theme.colors.secondary[9]}
          className="w-[45%] p-1 mx-auto"
        ></Box>
      </Flex>
      <Flex className="min-h-[50dvh] md:min-h-[65dvh] items-center relative">
        <Box
          className="w-3/5 hidden md:flex min-h-[50dvh] md:min-h-[65dvh]"
          style={{
            backgroundImage: `url(${BlackCar.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Flex className="w-full h-full justify-center items-center absolute top-0">
          <Box
            className="w-full md:hidden h-[70dvh]"
            style={{
              backgroundImage: `url(${BlackCar.src})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.2,
            }}
          ></Box>
        </Flex>
        <Stack className="md:w-2/5 md:-ml-8 p-6">
          <Text className="text-justify font-semibold">
            Join our Affiliate Program and become an affiliated driver, gaining
            exclusive access to a network of high-class individuals. By
            partnering with us, you&apos;ll have the opportunity to connect with
            a sophisticated clientele, enhancing your professional reputation
            and earning potential.
          </Text>
          <Text className="text-justify font-semibold">
            Sign up today to embark on your journey as an affiliated driver.
            Experience the benefits of driving for a premium market and elevate
            your career to new heights.
          </Text>
          <Button color={theme.colors.secondary[9]} className="mx-auto md:mx-0 w-fit" onClick={()=>router.push('/affiliate')}>
            Join Now
          </Button>
        </Stack>
      </Flex>
    </Stack>
  );
}
