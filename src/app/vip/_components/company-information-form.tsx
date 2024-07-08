"use client";
import { Button, Flex, Group, TextInput } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import dayjs from "dayjs";
import { PaymentMethods } from "./payment-methods";
import { useState } from "react";

export const CompanyInformationForm = ({
  paymentMethod,
  setPaymentMethod,
}: {
  paymentMethod: "credit" | "monthly" | "debit";
  setPaymentMethod: (data: "credit" | "monthly" | "debit") => void;
}) => {
    const [businessType, setBusinessType] = useState<"ltd"|"plc" | "sole">("ltd")
  return (
    <div className=" text-white font-semibold">
      <p className="text-2xl">COMPANY INFORMATION</p>

      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Business Name" withAsterisk />
        <TextInput className="w-full" label="Business Address" withAsterisk />
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Address" withAsterisk />
        <TextInput className="w-full" label="Zip/Post Code" withAsterisk />
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput
          className="w-full"
          label="Company Registration Number"
          withAsterisk
        />
        <TextInput className="w-full" label="VAT Number" withAsterisk />
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Years of Trading" withAsterisk />
        <div className="w-full"></div>
      </Flex>
      <PaymentMethods
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />
      <p className="mt-5 font-normal">
        Business Type <span className="text-red-500">*</span>
      </p>
      <Flex gap={10} className="mt-2 w-5/6">
        <Button
          className={
            businessType === "ltd"
              ? "bg-secondary-900 bg-opacity-25 border-secondary-900 hover:bg-secondary-700 hover:bg-opacity-20 w-full"
              : "bg-white bg-opacity-20  border-gray-500 hover:bg-white hover:bg-opacity-15 w-full"
          }
          onClick={() => setBusinessType("ltd")}
        >
          Ltd
        </Button>
        <Button
          className={
            businessType === "plc"
              ? "bg-secondary-900 bg-opacity-25 border-secondary-900 hover:bg-secondary-700 hover:bg-opacity-20 w-full"
              : "bg-white bg-opacity-20  border-gray-500 hover:bg-white hover:bg-opacity-15 w-full"
          }
          onClick={() => setBusinessType("plc")}
        >
          Plc
        </Button>
        <Button
          className={
            businessType === "sole"
              ? "bg-secondary-900 bg-opacity-25 border-secondary-900 hover:bg-secondary-700 hover:bg-opacity-20 w-full"
              : "bg-white bg-opacity-20  border-gray-500 hover:bg-white hover:bg-opacity-15 w-full"
          }
          onClick={() => setBusinessType("sole")}
        >
          Sole Trader
        </Button>
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput
          className="w-full"
          label="Booking Contact Name"
          withAsterisk
        />
        <TextInput className="w-full" label="Phone Number" withAsterisk />
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Email" withAsterisk />
        <div className="w-full"></div>
      </Flex>

      <p className="text-2xl mt-10">RESERVATION INFORMATION</p>
      <Flex gap={10} className="mt-5">
        <TextInput
          className="w-full"
          label="Reservation Contact"
          withAsterisk
        />
        <TextInput className="w-full" label="Phone Number" withAsterisk />
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Email" withAsterisk />
        <div className="w-full"></div>
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Dispatch Contact" withAsterisk />
        <DateTimePicker
          label="Opening Hours"
          className="w-full"
          withAsterisk
          styles={{
            input: {
              backgroundColor: "rgba(250, 250, 249, 0.1)",
              color: "white",
              borderColor: "rgba(250, 250, 249, 0.1)",
            },
          }}
        />
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Phone Number" withAsterisk />
        <TextInput className="w-full" label="Email" withAsterisk />
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Accounting Contact" withAsterisk />
        <div className="w-full"></div>
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Phone Number" withAsterisk />
        <TextInput className="w-full" label="Email" withAsterisk />
      </Flex>
    </div>
  );
};
