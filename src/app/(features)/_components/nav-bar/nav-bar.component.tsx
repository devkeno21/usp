"use client";
import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  Stack,
  Flex,
} from "@mantine/core";
import USPLogo from "./usp-logo-white.png";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from "@tabler/icons-react";
import classes from "./nav-bar.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const mockdata = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export function NavBar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();
  const router = useRouter();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon
            style={{ width: rem(22), height: rem(22) }}
            color={theme.colors.blue[6]}
          />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box className="bg-transparent z-10 relative">
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Image src={USPLogo.src} alt="USP-Logo" width={150} height={150} />

          <Group h="100%" gap={12} visibleFrom="sm">
            <a href="#about" className={classes.link}>
              About
            </a>
            <a href="#services" className={classes.link}>
              Services
            </a>
            <a href="#fleets" className={classes.link}>
              Fleets
            </a>
            <a href="#affiliates" className={classes.link}>
              Affiliates
            </a>
            <a href="#contact" className={classes.link}>
              Contact
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Button color={theme.colors.secondary[9]}>
              <a href="https://book.mylimobiz.com/v4/uspholdings">Book Now</a>
            </Button>
            <Button onClick={() => router.push("/vip")}>VIP Program</Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
            color="white"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          <Stack>
            <Stack className="mx-auto">
              <a href="#" className={classes.link}>
                Home
              </a>

              <Collapse in={linksOpened}>{links}</Collapse>

              <a href="#about" className={`text-black `}>
                About
              </a>
              <a href="#services" className={`text-black `}>
                Services
              </a>
              <a href="#fleets" className={`text-black `}>
                Fleets
              </a>
              <a href="#affiliates" className={classes.link}>
                Affiliates
              </a>
              <a href="#contact" className={`text-black `}>
                Contact
              </a>
              <Divider my="sm" />
            </Stack>

            <Flex className="mx-auto gap-2 flex-wrap">
              <Button color={theme.colors.secondary[9]}>
                {" "}
                <a href="https://book.mylimobiz.com/v4/uspholdings">Book Now</a>
              </Button>
              <Button onClick={() => router.push("/vip")}>VIP Program</Button>
            </Flex>
          </Stack>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
