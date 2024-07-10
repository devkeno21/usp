"use client";
import { Button, Flex, Group, TextInput } from "@mantine/core";
import { PaymentMethods } from "./payment-methods";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const personalInfoSchema = z.object({
  name: z.string().min(1, "Business name is required"),
  address: z.string().min(1, "Business address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(1, "Zip Code is required"),
  primaryEmail: z.string().min(1, "Email is required").email("Invalid Email Address"),
  primaryPhoneNumber: z.string().min(1, "Phone number is required"),
});

export const PersonalInformationForm = ({
  paymentMethod,
  setPaymentMethod,
  onNext,
  onPrev,
}: {
  paymentMethod: "credit" | "monthly" | "debit";
  setPaymentMethod: (data: "credit" | "monthly" | "debit") => void;
  onNext: (data: any) => void;
  onPrev: () => void;
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(personalInfoSchema),
  });

  const onError = (err: any) => {
    console.log({ err });
  };

  const onSubmit = (data: any) => {
    console.log({ data });
    const temp = {...data,paymentMethod}
    onNext(temp);
  };
  return (
    <div className=" text-white font-semibold">
      <p className="md:text-2xl text-lg">PERSONAL INFORMATION</p>

      <Flex gap={10} className="mt-5">
        <TextInput
          className="w-full"
          label="Name"
          withAsterisk
          {...register("name")}
          error={errors.name?.message?.toString()}
        />
        <TextInput
          className="w-full"
          label="Address"
          withAsterisk
          {...register("address")}
          error={errors.address?.message?.toString()}
        />
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput
          className="w-full"
          label="City"
          withAsterisk
          {...register("city")}
          error={errors.city?.message?.toString()}
        />
        <TextInput
          className="w-full"
          label="State"
          withAsterisk
          {...register("state")}
          error={errors.state?.message?.toString()}
        />
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput
          className="w-full"
          label="Zip/Post Code"
          withAsterisk
          {...register("zipCode")}
          error={errors.zipCode?.message?.toString()}
        />
        <TextInput
          className="w-full"
          label="Primary Email"
          withAsterisk
          {...register("primaryEmail")}
          error={errors.primaryEmail?.message?.toString()}
        />
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput
          className="w-full"
          label="Primary Phone Number"
          withAsterisk
          {...register("primaryPhoneNumber")}
          error={errors.primaryPhoneNumber?.message?.toString()}
          type="number"
        />
        <div className="w-full"></div>
      </Flex>

      <PaymentMethods
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        hideDirect
      />
      <Group justify="flex-end" gap={10} className="mt-10">
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
