"use client";
import { Box, Button, Flex, Stack, Text, useMantineTheme } from "@mantine/core";
import CarBg from "./affiliates-car.webp";
import { useRouter } from "next/navigation";

export default function Affiliates() {
  const theme = useMantineTheme();
  const router = useRouter();

  return (
    <Stack
      className="min-h-[65dvh] md:min-h-[75dvh] gap-4 relative z-0 "
      id="affiliates"
    >
      <Box
        className="md:hidden w-full h-[100%] absolute bottom-0 z-8"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,1) 45%, rgba(0,0,0,0.3254551820728291) 93%)",
        }}
      />
      <Box
        className="w-full h-[100%] absolute bottom-0 right-0 -z-10"
        style={{
          backgroundImage: `url(${CarBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "black",
        }}
      />
      <Stack className="w-full h-full justify-center my-auto relative z-20">
        <Flex className="justify-center flex-col gap-2 px-6 md:px-12 pt-8 relative z-2">
          <Text
            tt="uppercase"
            className="text-xl md:text-5xl font-semibold text-white"
          >
            OUR AFFILIATES
          </Text>
          <Box
            bg={theme.colors.secondary[9]}
            className="w-[15%] md:w-[10%] p-1"
          ></Box>
        </Flex>
        <Stack className="md:w-2/5 md:ml-4 p-6">
          {/* <Text className="text-justify text-white font-semibold md:text-lg"> */}
          <Text className=" text-white font-semibold md:text-lg">
            Join our Affiliate Program and become an affiliated driver, gaining
            exclusive access to a network of high-class individuals. By
            partnering with us, you&apos;ll have the opportunity to connect with
            a sophisticated clientele, enhancing your professional reputation
            and earning potential.
          </Text>
          {/* <Text className="text-justify text-white font-semibold md:text-lg"> */}
          <Text className=" text-white font-semibold md:text-lg">
            Sign up today to embark on your journey as an affiliated driver.
            Experience the benefits of driving for a premium market and elevate
            your career to new heights.
          </Text>
          <Button
            color={theme.colors.secondary[9]}
            className="mx-auto md:mx-0 w-fit"
            onClick={() => router.push("/affiliate")}
          >
            Join Now
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
