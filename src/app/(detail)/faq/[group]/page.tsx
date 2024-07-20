"use client";
import {
  Box,
  Flex,
  ScrollArea,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useParams } from "next/navigation";
import Bg1 from "../bg-1.svg";
import Bg2 from "../bg-2.svg";
import Bg3 from "../bg-5.svg";
import Bg4 from "../bg-4.svg";
import Bg5 from "/bg-3.svg";

const faqContent = [
  {
    group: "account",
    title: "Account Information",
    imageUrl: `${Bg1.src}`,
    items: [
      {
        id: "1",
        question: "How do I set up an account?",
        answer:
          "Setting up an account with USP Transportation is quick and easy. You can contact our office at 202 265 0010, and a representative will gladly assist you. ",
      },
      {
        id: "2",
        question: "How do I get driver information?",
        answer:
          "To obtain the requested driver information for your upcoming reservation, please call 202 265 0010 to speak to one of our reservations or dispatch team members. We are happy to assist you.",
      },
      {
        id: "3",
        question: "How do I get a receipt for my trip?",
        answer:
          "To get a receipt for your trip, there are several options: You may request a receipt to be faxed or emailed upon completion of the trip. Please call our reservation number at 202 265 0010 ",
      },
    ],
  },
  {
    group: "special",
    title: "Special Assistance",
    imageUrl: `${Bg2.src}`,
    items: [
      {
        id: "13",
        question: "What if I require special assistance?",
        answer:
          "USP Transportation offers various services to accommodate requests ranging from child car seats to specialized security transportation services. Please see our services page on this website for details. If you have further questions, please call 202 265 0010.",
      },
      {
        id: "14",
        question: "Do you have handicap-accessible vehicles?",
        answer:
          "We can make a vehicle available for you to meet the client’s needs. If you would like more details, please call 202 265 0010. You may request a receipt to be faxed or emailed upon completing the trip. Please call our reservation number at 202 265 0010.",
      },
    ],
  },
  {
    group: "policies",
    title: "Policies",
    imageUrl: `${Bg3.src}`,
    items: [
      {
        id: "4",
        question: "Are your vehicles Smoking or Non Smoking?",
        answer:
          "We do not allow smoking inside any of our vehicles due to state law compliance, and the safety and comfort of our team members. All of our vehicles are non-smoking.",
      },
      {
        id: "5",
        question:
          "How do I make a change or cancel the service? What is your cancellation policy?",
        answer:
          "USP Transportation requires a 2-hour notice for cancellation to avoid charges. Please feel free to contact our office for special events and specialty vehicles. Don’t hesitate to reach out to 202 265 0010 . Our reservation specialist will assist you with changes and cancellations.",
      },
    ],
  },
  {
    group: "reservation",
    title: "Reservation",
    imageUrl: `${Bg4.src}`,
    items: [
      {
        id: "6",
        question:
          "Can I book by phone and view the status of my reservation on the web?",
        answer:
          "Yes, our clients will have the capability of booking by phone and viewing the status of the reservation via our website.",
      },
      {
        id: "7",
        question:
          "Can I make a reservation online? Is the booking process online easy to use?",
        answer:
          "Yes, you can access our reservations portal by clicking here to . Our easy-to-use user interface is tailored for easy use, and every feature is designed to guide the customer through the booking process.",
      },
      {
        id: "8",
        question:
          "Do you have a discount rate for military, AAA, and AARP specialty groups?",
        answer:
          "USP Transportation does not currently offer discounts for any specialty groups.",
      },
      {
        id: "9",
        question: "What are your rates?",
        answer:
          "Rates vary according to location and type of service requested. Our reservation specialists are available 24 hours a day, seven days a week, to provide customers with vehicles, choices, and rate information.",
      },
      {
        id: "10",
        question: "What cities do you service?",
        answer:
          "USP Transportation has an office in the Washington, DC, metropolitan area. We can service our customers nationally through our carefully vetted network of affiliate partners across the globe.",
      },
      {
        id: "11",
        question: "What type of vehicles do you provide?",
        answer:
          "We can provide transportation for any size groups, from a solo passenger in one of our executive sedans up to 55 passengers in our motorcoaches.",
      },
      {
        id: "12",
        question: "How will I find the driver?",
        answer:
          "Different locations are specified for airports and train stations, and our reservation specialist will let you know about the place when booking. If you cannot locate your professional chauffeur, call 202 265 0010 ask for “Dispatch,” and you will be directed to the appropriate person to assist you.",
      },
    ],
  },
];

export default function DetailFaq() {
  const { group } = useParams();
  const theme = useMantineTheme();
  const selectedGroup = faqContent.find((content) => content.group == group);

  return (
    <Stack>
      <Stack
        className="gap-4 relative pt-16 min-h-[90dvh]"
        id="about"
        style={{
          backgroundImage: `url(${selectedGroup?.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Flex className="justify-center  flex-col gap-2 text-white ml-8 md:ml-12 z-10">
          <Text
            tt="uppercase"
            className="text-xl md:text-5xl font-semibold text-white"
          >
            {selectedGroup?.title}
          </Text>
          <Box
            bg={theme.colors.secondary[9]}
            className="w-[20%] md:w-[25%] p-1"
          ></Box>
        </Flex>
        <Box
          className=" w-full h-[100%] absolute bottom-0 z-8"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,1) 10%, rgba(0,0,0,0.3254551820728291) 73%)",
          }}
        />
       
        <Box className="p-8 md:p-6 md:pl-12">
        <ScrollArea h={250} className="min-h-[50dvh] md:w-1/2 text-white" styles={{thumb: { backgroundColor: "white"}}}>
          <Stack className="gap-4 p-4">
            {selectedGroup?.items.map((item) => (
              <Stack key={item.id}>
                <Text  className="font-semibold text-xl" >
                  {item?.question}
                </Text>
                <Text className="text-lg">{item?.answer}</Text>
              </Stack>
            ))}
          </Stack>
        </ScrollArea>
        </Box>
      </Stack>
    </Stack>
  );
}
