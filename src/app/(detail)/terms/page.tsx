"use client";

import {
  Box,
  Flex,
  ScrollArea,
  Stack,
  Text,
  useMantineTheme
} from "@mantine/core";
import { Breadcrumb } from "../_components/breadcrumb/breadcrumb.component";
import { Footer } from "@/app/(features)/_components/footer/footer.component";
import Bg from "./bg-5.jpg";

const terms = [
  {
    id: "1",
    title: "Excess time will be charged at the prevailing hourly rate.",
  },
  {
    id: "2",
    title:
      "There is a minimum 4 hours on all hires (unless stated otherwise and excluding airport / dock transfers).",
  },
  {
    id: "3",
    title:
      "Our Airport set rates include a 45 minutes waiting time at the airport from the time the plane has landed.  Waiting time charges will be incurred after the 45 minutes has lapsed and will be charged per 15 minutes at the relevant hourly rate.",
  },
  {
    id: "4",
    title: "All vehicles are equipped with cellular phones for client use.",
  },
  {
    id: "5",
    title:
      "Incurred car parking, tolls, airport drop off fee and congestion charge will be charged back at cost.",
  },
  {
    id: "6",
    title: "All hire charges are rounded up to the nearest 30 minutes.",
  },
  {
    id: "7",
    title:
      "Cancellations for airport / train station transfers or minimum charge bookings made within two hours of the collection time will be subject to the minimum charge.  There is no charge for cancellations for airport / train station transfers or minimum charge bookings made outside of this time.  Cancellations for any booking other than an airport / train station transfer or minimum charge booking will incur a full charge cancellation fee if canceled within 4 hours. ",
  },
  {
    id: "8",
    title:
      "All cancellations made between the hours of 22:00pm and 06:00am will only be effective from 06:00am.",
  },
  {
    id: "9",
    title:
      "Any extra stops added to a transfer booking will automatically be switched to an hourly service.",
  },
  {
    id: "10",
    title:
      "Rates are subject to alteration without prior notification. All account holders will be notified at least one month prior to any price increases.",
  },
  {
    id: "11",
    title:
      "If it is necessary for our chauffeurs to have overnight accommodation this will be charged at $150.00 + Tax.",
  },
  {
    id: "12",
    title:
      "A surcharge of 100% will be added to the agreed tariff for services provided on Christmas Day, New Year’s Day and between the hours of 17:00 and 00.00 on New Year’s Eve. A surcharge of 50% is applicable for hires between the hours of 17:00 and 00:00 on Christmas Eve, the Fourth of July and Inauguration Day. There are no surcharges on all other US holidays.",
  },
  {
    id: "13",
    title: "All quoted rates are inclusive of tax.",
  },
  {
    id: "14",
    title:
      "In the event a passenger has an excess of baggage, ‘the Company’ reserve the right to refuse any luggage or property in the car which in our opinion would result in the vehicle being damaged or unsafe to drive on the road.",
  },
  {
    id: "15",
    title:
      "All hires must be fully paid in advance except where the hirer has a credit account wherein payment is due within 14 days from the date of invoice.",
  },
  {
    id: "16",
    title:
      "Account facilities are available for registered US and International companies.",
  },
  {
    id: "17",
    title:
      "All credit or debit cards payments will incur a card processing fee.",
  },
  {
    id: "18",
    title:
      "The Company expressly prohibit any person other than our chauffeurs to drive our vehicles.",
  },
  {
    id: "19",
    title:
      "The Customer agrees and undertakes not to: (i) solicit any existing employee of the Company (ii) solicit or procure the services of any existing sub-contractor of the Company, without the prior written authorization of the Company (iii) make any attempt to interfere with the existing business relations between the Company and any of its existing employees, agents and sub-contractors.",
  },
  {
    id: "20",
    title:
      "USP Transportation maintains a strict non smoking policy on all its vehicles.",
  },
];

export default function TermsAndConditions() {
  const theme = useMantineTheme();
  return (
    <>
      <Breadcrumb
        links={[
          { title: "Home", href: "/" },
          { title: "Terms and conditions", href: "#" },
        ]}
      />

      <Stack
        className="min-h-[65dvh] md:min-h-[80dvh] gap-4 relative pt-16"
        id="about"
        style={{
          backgroundImage: `url(${Bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          className=" w-full h-[100%] absolute bottom-0 z-8"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,1) 40%, rgba(0,0,0,0.3254551820728291) 63%)",
          }}
        />
        <Flex className="justify-center  flex-col gap-2 text-white ml-6 md:ml-10 z-10">
          <Text tt="uppercase" className="text-xl md:text-5xl font-semibold">
            Terms and conditions
          </Text>
          <Box
            bg={theme.colors.secondary[9]}
            className="w-[15%] md:w-[5%] p-1"
          ></Box>
        </Flex>
        <ScrollArea
          h={250}
          className="min-h-[50dvh] md:min-h-[65dvh] items-center relative pt-2 p-4 md:p-8 pl-6 md:pl-10 w-[80%] md:w-[43%]"
          styles={{
            thumb: {
              backgroundColor: "white",
            },
          }}
        >
          <Stack gap={12}>
            {terms.map((term) => (
              <Text
                key={term.id}
                className="text-justify font-semibold text-md md:text-lg text-white"
              >
                {term.id}. {term.title}
              </Text>
            ))}
          </Stack>
        </ScrollArea>
      </Stack>
      <Footer />
    </>
  );
}
