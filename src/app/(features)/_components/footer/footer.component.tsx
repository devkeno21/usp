"use client";
import { Text, Container, ActionIcon, Group, rem, Flex, Stack } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import USPLogo from "../nav-bar/usp-logo-white.png";
import classes from "./footer.module.css";
import Image from "next/image";

const data = [
  {
    title: "Explore",
    links: [
      { label: "About", link: "#" },
      { label: "Services", link: "#" },
      { label: "Fleets", link: "#" },
    ],
  },
  {
    title: "Information",
    links: [
      { label: "Terms and Conditions", link: "#" },
      { label: "Refund Policy", link: "#" },
      { label: "Carrers", link: "#" },
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
        onClick={(event) => event.preventDefault()}
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
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image src={USPLogo.src} alt="USP-Logo" width={100} height={100} />
          <Text size="xs" c="dimmed" className={classes.description}>
            Reimaging Excellence
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Flex hiddenFrom="md"  className="flex-col p-6 gap-10">
        {data.map((group, index) => (
          <Flex key={index} gap="md">
            <Stack>
              <Text size="xl" className={classes.title}>
                {group.title}
              </Text>
              <Flex className="gap-6 flex-wrap">
              {group.links.map((link, index) => (
                <Text
                  key={index}
                  component="a"
                  href={link.link}
                  onClick={(event) => event.preventDefault()}
                  className={classes.link}
                >
                  {link.label}
                </Text>
              ))}
              </Flex>
            </Stack>
          </Flex>
        ))}
      </Flex>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © {now.getFullYear()} USP Transportation. All rights reserved.
        </Text>

        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
