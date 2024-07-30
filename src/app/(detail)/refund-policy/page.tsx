"use client";

import { Box, Flex, Stack, Text, useMantineTheme } from "@mantine/core";
import { Breadcrumb } from "../_components/breadcrumb/breadcrumb.component";
import { Footer } from "@/app/(features)/_components/footer/footer.component";
import Bg from "./bg.png";
import Image from "next/image";
import CarBg from "./bg.svg";

export default function RefundPolicy() {
  const theme = useMantineTheme();
  return (
    <>
      <Breadcrumb
        links={[
          { title: "Home", href: "/" },
          { title: "Refund Policy", href: "#" },
        ]}
      />

      <Stack
        className="min-h-[75dvh] md:min-h-[90dvh] gap-4 relative md:p-8 pt-16 justify-center"
        id="about"
        style={{
          backgroundImage: `url(${CarBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          className="md:hidden w-full h-[100%] absolute bottom-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,1) 45%, rgba(0,0,0,0.3254551820728291) 93%)",
          }}
        />
        <Flex className="justify-center flex-col gap-2 text-white md:ml-6 ml-4 relative z-8">
          <Text tt="uppercase" className="text-xl md:text-5xl font-semibold">
            Cancellations
          </Text>
          <Box
            bg={theme.colors.secondary[9]}
            className="w-[15%] md:w-[5%] p-1"
          ></Box>
        </Flex>
        <Stack className="md:w-2/5 pt-4 p-4 md:p-6 relative z-8">
          {/* <Text className="text-justify font-semibold text-md md:text-lg text-white"> */}
          <Text className="font-semibold text-md md:text-lg text-white">
            Cancellations for airport/train station transfers or minimum charge
            bookings made within two hours of the collection time will be
            subject to the minimum charge. There is no charge for cancellations
            for airport/train station transfers or minimum charge for bookings
            made outside this time. Cancellations for any booking other than an
            airport/train station transfer or minimum charge booking will incur
            a full charge cancellation fee if canceled within 4 hours.
            <br /> <br/> All cancellations between 22:00 pm and 06:00 am will only be
            effective from 06:00 am.
          </Text>
        </Stack>
      </Stack>
      <Footer />
    </>
  );
}
