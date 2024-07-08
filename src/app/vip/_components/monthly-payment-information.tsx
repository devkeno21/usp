"use client";
import { Flex, TextInput } from "@mantine/core";

export const MonthlyPaymentInformationForm = () => {
  return (
    <div className=" text-white font-semibold">
      <p className="text-2xl">PAYMENT INFORMATION</p>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Accounts/Invoice Contact Name" withAsterisk />
        <TextInput className="w-full" label="Phone Number" withAsterisk />
      </Flex>
   
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Email" withAsterisk />
        <div className="w-full"></div>
      </Flex>
    </div>
  );
};
