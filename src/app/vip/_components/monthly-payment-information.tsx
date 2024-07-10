"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Flex, Group, TextInput } from "@mantine/core";
import { useForm } from "react-hook-form";
import { z } from "zod";

const paymentInfoSchema = z.object({
  name: z.string().min(1, "Contact name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),

});

export const MonthlyPaymentInformationForm = ({onNext,onPrev}:{  onNext: (data: any) => void;
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
        <TextInput className="w-full" label="Accounts/Invoice Contact Name" withAsterisk  {...register("name")}
          error={errors.name?.message?.toString()}/>
        <TextInput className="w-full" label="Phone Number" type="number" withAsterisk  {...register("phoneNumber")}
          error={errors.phoneNumber?.message?.toString()}/>
      </Flex>
   
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Email" withAsterisk  {...register("email")}
          error={errors.email?.message?.toString()}/>
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
