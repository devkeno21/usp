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

const faq = [
  {
    id: "1",
    question:
      "Can I book by phone and view the status of my reservation on the web?",
    answer:
      "Yes, our clients will have the capability of booking by phone and viewing the status of the reservation via our website.",
  },
  {
    id: "2",
    question: "How do I get a receipt for my trip?",
    answer:
      "To get a receipt for your trip, there are several options: You may request a receipt to be faxed or emailed upon completion of the trip. Please call our reservation number at 202 265 0010 ",
  },
  {
    id: "3",
    question:
      "How do I make a change or cancel the service? What is your cancellation policy?",
    answer:
      "USP Transportation requires a 2-hour notice for cancellation to avoid charges. Please feel free to contact our office for special events and specialty vehicles. Don’t hesitate to reach out to 202 265 0010 . Our reservation specialist will assist you with changes and cancellations.",
  },
  {
    id: "4",
    question: "How will I find the driver?",
    answer:
      "Different locations are specified for airports and train stations, and our reservation specialist will let you know about the place when booking. If you cannot locate your professional chauffeur, call 202 265 0010 ask for “Dispatch,” and you will be directed to the appropriate person to assist you.",
  },
  {
    id: "5",
    question: "How do I set up an account?",
    answer:
      "Setting up an account with USP Transportation is quick and easy. You can contact our office at 202 265 0010, and a representative will gladly assist you. ",
  },
  {
    id: "6",
    question: "What if I require special assistance?",
    answer:
      "USP Transportation offers various services to accommodate requests ranging from child car seats to specialized security transportation services. Please see our services page on this website for details. If you have further questions, please call 202 265 0010.",
  },
  {
    id: "7",
    question: "How do I get driver information?",
    answer:
      "To obtain the requested driver information for your upcoming reservation, please call 202 265 0010 to speak to one of our reservations or dispatch team members. We are happy to assist you.",
  },
  {
    id: "8",
    question: "What are your rates?",
    answer:
      "Rates vary according to location and type of service requested. Our reservation specialists are available 24 hours a day, seven days a week, to provide customers with vehicles, choices, and rate information.",
  },
  {
    id: "9",
    question:
      "Do you have a discount rate for military, AAA, and AARP specialty groups?",
    answer:
      "USP Transportation does not currently offer discounts for any specialty groups.",
  },
  {
    id: "10",
    question: "What cities do you service?",
    answer:
      "USP Transportation has an office in the Washington, DC, metropolitan area. We can service our customers nationally through our carefully vetted network of affiliate partners across the globe.",
  },
  {
    id: "11",
    question: "Do you have handicap-accessible vehicles?",
    answer:
      "We can make a vehicle available for you to meet the client’s needs. If you would like more details, please call 202 265 0010. You may request a receipt to be faxed or emailed upon completing the trip. Please call our reservation number at 202 265 0010.",
  },
  {
    id: "12",
    question: "What type of vehicles do you provide?",
    answer:
      "We can provide transportation for any size groups, from a solo passenger in one of our executive sedans up to 55 passengers in our motorcoaches.",
  },
  {
    id: "13",
    question: "Are your vehicles Smoking or Non Smoking?",
    answer:
      "We do not allow smoking inside any of our vehicles due to state law compliance, and the safety and comfort of our team members. All of our vehicles are non-smoking.",
  },
  {
    id: "14",
    question:
      "Can I make a reservation online? Is the booking process online easy to use?",
    answer:
      "Yes, you can access our reservations portal by clicking here to . Our easy-to-use user interface is tailored for easy use, and every feature is designed to guide the customer through the booking process.",
  },
];

export default function TermsAndConditions() {
  const router = useRouter()
  const theme = useMantineTheme();
  return (
    <>
      <Breadcrumb
        links={[
          { title: "Home", href: "/" },
          { title: "FAQ", href: "#" },
        ]}
      />

      <Stack
        className="min-h-[65dvh] md:min-h-[200dvh] gap-4 relative pt-16"
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
              "linear-gradient(90deg, rgba(0,0,0,1) 30%, rgba(0,0,0,0.3254551820728291) 93%)",
          }}
        />
        <Flex className="justify-center  flex-col gap-2 text-white ml-12 z-10">
          <Text tt="uppercase" className="text-xl md:text-5xl font-semibold">
            FAQ
          </Text>
          <Box
            bg={theme.colors.secondary[9]}
            className="w-[15%] md:w-[5%] p-1"
          ></Box>
        </Flex>
        <Flex className="md:flex-row flex-col md:gap-12 relative p-4 z-90">
          <Stack className="md:w-2/5 md:p-6 pr-4 p-2">
            <Accordion>
              {/* <Stack gap={3}> */}
              {faq.slice(0, 8).map((faq) => (
                <Accordion.Item
                  value={faq.question}
                  key={faq.id}
                  className="font-semibold text-md md:text-lg text-white"
                  bg={"transparent"}
                >
                  <Accordion.Control className="text-white bg-transparent ">
                    {faq.question}
                  </Accordion.Control>
                  <Accordion.Panel>{faq.answer}</Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </Stack>
          <Stack className="md:w-2/5 p-2 pr-4 md:p-6">
            <Accordion>
              {faq.slice(8).map((faq) => (
                <Accordion.Item
                  value={faq.question}
                  key={faq.id}
                  className="font-semibold text-md md:text-lg text-white"
                  bg={"transparent"}
                >
                  <Accordion.Control className="text-white bg-transparent ">
                    {faq.question}
                  </Accordion.Control>
                  <Accordion.Panel>{faq.answer}</Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </Stack>
        </Flex>
        <Flex className="flex-col gap-2 mr-auto relative z-20 pl-12 pb-4">
          <Title className="text-white">GOT MORE QUESTIONS?</Title>
          <Button className="mr-auto" color={theme.colors.secondary[9]} onClick={() => router.push("/#contact")}>Contact Us</Button>
        </Flex>
      </Stack>
      <Footer />
    </>
  );
}
