"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Flex, Group, TextInput } from "@mantine/core";
import { useForm } from "react-hook-form";
import { z } from "zod";

const paymentInfoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  accountNumber: z.string().min(1, "Account number name is required"),
  sortCode: z.string().min(1, "Sort code is required"),
  billingAddress: z.string().min(1, "Billing address is required"),
  zipCode: z.string().min(1, "Zip code is required"),

});

export const DebitPaymentInformationForm = ({onNext,onPrev}:{  onNext: (data: any) => void;
  onPrev: () => void;}) => {

    const {
      handleSubmit,
      register,
      formState: { errors },
      control,
    } = useForm({
      resolver: zodResolver(paymentInfoSchema),
    });

    const onError = (err: any) => {
      console.log({ err });
    };
  
    const onSubmit = (data: any) => {
      console.log({ data });
      onNext(data);
    };
  return (
    <div className=" text-white font-semibold">
      <p className="md:text-2xl text-lg">PAYMENT INFORMATION</p>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Direct Debit Account Name" withAsterisk {...register("name")}
          error={errors.name?.message?.toString()}/>
        <TextInput className="w-full" label="Account Number" withAsterisk type="number" {...register("accountNumber")}
          error={errors.accountNumber?.message?.toString()}/>
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full"  withAsterisk />
        <div className="w-full"></div>
      </Flex>
   
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Sort Code" withAsterisk {...register("sortCode")}
          error={errors.sortCode?.message?.toString()}/>
        <div className="w-full"></div>
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Billing Address" withAsterisk {...register("billingAddress")}
          error={errors.billingAddress?.message?.toString()}/>
        <TextInput className="w-full" label="Zip/Postal Code" withAsterisk {...register("zipCode")}
          error={errors.zipCode?.message?.toString()}/>
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full"  withAsterisk />
        <div className="w-full"></div>
      </Flex> <Flex gap={10} className="mt-5">
        <TextInput className="w-full"  withAsterisk />
        <div className="w-full"></div>
      </Flex>

      <Group justify="flex-end" gap={10} className="mt-10">
        <Button color="white" className="text-black" onClick={onPrev}>
          Prev
        </Button>
        <Button
          color="white"
          className="text-black"
          onClick={handleSubmit(onSubmit, onError)}
        >
          Next
        </Button>
      </Group>
    </div>
  );
};
