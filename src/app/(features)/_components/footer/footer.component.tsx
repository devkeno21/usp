"use client";
import { Text, Container, ActionIcon, Group, rem, Flex, Stack, Divider } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import USPLogo from "../nav-bar/usp-logo-white.png";
import classes from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import Linkedin from './linkedin.svg'
import Instagram from './instagram.svg'

const data = [
  {
    title: "Explore",
    links: [
      { label: "About", link: "/#about" },
      { label: "Services", link: "/#services" },
      { label: "Fleets", link: "/#fleets" },
      { label: "Affiliates", link: "/#affiliates" },
    ],
  },
  {
    title: "Information",
    links: [
      { label: "Terms and Conditions", link: "/terms" },
      { label: "Refund Policy", link: "/refund-policy" },
      { label: "FAQ", link: "/faq" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      {
        label: "info@usptransportation.com",
        link: "mailto:info@usptransportation.com",
      },
      { label: "1208 9th Street, NW Washington DC, 20001", link: "#" },
      { label: "202 265 0010", link: "#" },
    ],
  },
];

export function Footer() {
  const now = new Date();
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        // onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <div className={`${classes.inner} md:px-24`}>
        <div className={classes.logo}>
          <Image src={USPLogo.src} alt="USP-Logo" width={200} height={200} />
        </div>
        <div className={classes.groups}>{groups}</div>
      </div>
      <Flex hiddenFrom="md"  className="flex-col p-6 gap-10">
        {data.map((group, index) => (
          <Flex key={index} gap="md">
            <Stack>
              <Text size="xl" className={classes.title}>
                {group.title}
              </Text>
              <Flex className="gap-6 flex-wrap">
              {group.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.link}
                  className={classes.link}
                >
                  {link.label}
                </Link>
              ))}
              </Flex>
            </Stack>
          </Flex>
        ))}
      </Flex>
      <Flex className={`${classes.afterFooter} md:ml-20`}>
        <Text size="sm">
          © {now.getFullYear()} USP Transportation. All rights reserved.
        </Text>

        <Group
          gap={10}
          className={`ml-auto ${classes.social} mr-10`}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="white" variant="light" className="rounded-md" >
            <a href="https://linkedin.com/usp-transportation" target="_blank">
            {/* <IconBrandLinkedin
              style={{ width: rem(24), height: rem(24) }}
              stroke={1.5}
            /> */}
            <Image height={20} width={20} alt="linkedin" src={Linkedin.src}/>
            </a>
          </ActionIcon>
          <ActionIcon size="lg" color="white" variant="light">
            <a href="https://instagram.com/usp_transportation/" target="_blank">
            {/* <IconBrandInstagram
              style={{ width: rem(24), height: rem(24) }}
              stroke={1.5}
            /> */}
            <Image height={20} width={20} alt="linkedin" src={Instagram.src}/>
            </a>
          </ActionIcon>
        </Group>
      </Flex>
    </footer>
  );
}
