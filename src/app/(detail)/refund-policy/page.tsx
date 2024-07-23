"use client";

import { Box, Flex, Text } from "@mantine/core";
import { Breadcrumb } from "../_components/breadcrumb/breadcrumb.component";
import { Footer } from "@/app/(features)/_components/footer/footer.component";
import Bg from "./bg.png";
import Image from "next/image";

export default function RefundPolicy() {
  return (
    <>
      <Breadcrumb
        links={[
          { title: "Home", href: "/" },
          { title: "Refund Policy", href: "#" },
        ]}
      />

      <Box className="p-5 ">
        <Flex className="justify-center mx-auto flex-col gap-2 mt-8">
          <Text
            tt="uppercase"
            className="text-xl text-center md:text-5xl font-semibold"
          >
            Cancellations
          </Text>
          <Box
            //   bg={theme.colors.secondary[9]}

            className="w-[10%] p-1 mx-auto bg-secondary-900"
          ></Box>
        </Flex>

        <Box className="flex flex-col md:flex-row gap-10 container-lg mx-auto mt-10 mb-20">
          <Box
            className="w-full flex justify-center items-center"
          >
            <Image height={700} width={700} src={Bg.src} alt="car"/>
          </Box>
          <Box className="w-full flex flex-col justify-center font-semibold text-lg">
            <p>
              Cancellations for airport/train station transfers or minimum
              charge bookings made within two hours of the collection time will
              be subject to the minimum charge. There is no charge for
              cancellations for airport/train station transfers or minimum
              charge for bookings made outside this time. Cancellations for any
              booking other than an airport/train station transfer or minimum
              charge booking will incur a full charge cancellation fee if
              canceled within 4 hours.
            </p>
            <p className="mt-5">
              All cancellations between 22:00 pm and 06:00 am will only be
              effective from 06:00 am.
            </p>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
