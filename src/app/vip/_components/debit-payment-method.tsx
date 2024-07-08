"use client";
import { Flex, TextInput } from "@mantine/core";

export const DebitPaymentInformationForm = () => {
  return (
    <div className=" text-white font-semibold">
      <p className="text-2xl">PAYMENT INFORMATION</p>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Direct Debit Account Name" withAsterisk />
        <TextInput className="w-full" label="Account Number" withAsterisk />
      </Flex>
   
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Sort Code" withAsterisk />
        <div className="w-full"></div>
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Billing Address" withAsterisk />
        <TextInput className="w-full" label="Zip/Postal Code" withAsterisk />
      </Flex>
    </div>
  );
};
