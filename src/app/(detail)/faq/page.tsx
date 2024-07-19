"use client";

import {
  Accordion,
  Box,
  Button,
  Flex,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { Breadcrumb } from "../_components/breadcrumb/breadcrumb.component";
import { Footer } from "@/app/(features)/_components/footer/footer.component";
import Bg from "./bg.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
    description: "",
    detailUrl: "account",
    icon: IconUserCircle,
  },
  {
    title: "Special Assistance",
    description: "",
    detailUrl: "special",
    icon: IconDisabled,
  },
  {
    title: "Policies",
    description: "",
    detailUrl: "policies",
    icon: IconFileCheck,
  },
  {
    title: "Reservation",
    description: "",
    detailUrl: "reservation",
    icon: IconBookmarkFilled,
  },
];

export default function TermsAndConditions() {
  
  return (
    <>
      
      <Flex className="items-center gap-2 md:h-[30dvh] bg-black p-4 flex-wrap justify-center">
        {faqGroups.map((group) => (
          <Flex
            key={group.title}
            className="w-[calc(50%-1rem)] md:w-[calc(25%-0.5rem)] h-[80%] flex-col gap-2 bg-primary-900 text-white p-4 justify-center"
          >
            <group.icon size={28} />
            <Text tt="capitalize" className="font-semibold text-xl">
              {group.title}
            </Text>
            <Text tt="capitalize" className="">
              {group.title}
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
