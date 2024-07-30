"use client";

import {
  Flex,
  Stack,
  Text
} from "@mantine/core";
import Bg from "./bg.svg";
import {
  IconArrowRight,
  IconBookmarkFilled,
  IconDisabled,
  IconFileCheck,
  IconUserCircle,
} from "@tabler/icons-react";
import Link from "next/link";

const faqGroups = [
  {
    title: "Account Information",
    description: "Learn more about your account & what it entails",
    detailUrl: "account",
    icon: IconUserCircle,
  },
  {
    title: "Special Assistance",
    description: "Learn more about our special need",
    detailUrl: "special",
    icon: IconDisabled,
  },
  {
    title: "Policies",
    description: "Learn more about our policies and procedures",
    detailUrl: "policies",
    icon: IconFileCheck,
  },
  {
    title: "Reservation",
    description: "Learn more on how to book your vehicle ",
    detailUrl: "reservation",
    icon: IconBookmarkFilled,
  },
];

export default function TermsAndConditions() {
  
  return (
    <>
      
      <Flex className="items-center gap-2 md:h-[40dvh] bg-black p-4 flex-wrap justify-center">
        {faqGroups.map((group) => (
          <Flex
            key={group.title}
            className="w-[calc(100%-2rem)] sm:w-[calc(50%-1rem)] md:w-[calc(25%-0.5rem)] h-[80%] flex-col gap-2 bg-primary-900 text-white p-4 justify-center flex-grow"
          >
            <group.icon size={28} />
            <Text tt="capitalize" className="font-semibold text-2xl">
              {group.title}
            </Text>
            <Text tt="capitalize" className="text-xl">
              {group.description}
            </Text>

            <Link href={`/faq/${group.detailUrl}`}>
              <Flex className="items-center gap-2">
                Learn More
                <IconArrowRight stroke={"md"} size={18}/>
              </Flex>
            </Link>
          </Flex>
        ))}
      </Flex>
      <Stack
        className="gap-4 relative pt-16 min-h-[90dvh]"
        id="about"
        style={{
          backgroundImage: `url(${Bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
       
      </Stack>
      
    </>
  );
}
