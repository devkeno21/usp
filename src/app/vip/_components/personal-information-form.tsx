"use client";
import { Button, Flex, Group, TextInput } from "@mantine/core";
import { PaymentMethods } from "./payment-methods";
import { DateInput, DateTimePicker } from "@mantine/dates";
import dayjs from "dayjs";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const personalInfoSchema = z.object({
  businessName: z.string().min(1,"Business name is required"),
  businessAddress: z.string().min(1,"Business address is required"),
  city: z.string().min(1,"City is required"),
  state: z.string().min(1,"State is required"),
  zipCode: z.string().min(1,"Zip Code is required"),
  email: z.string().min(1,"Email is required").email("Invalid Email Address"),
  phoneNumber: z.string().min(1,"Phone Number is required"),
  manager: z.string().min(1,"Manager is required"),
  managerEmail: z.string().min(1,"Email is required").email("Invalid Email Address"),
  managerPhoneNumber: z.string().min(1,"Phone Number is required"),
})

export const PersonalInformationForm = ({
  paymentMethod,
  setPaymentMethod,
}: {
  paymentMethod: "credit" | "monthly" | "debit";
  setPaymentMethod: (data: "credit" | "monthly" | "debit") => void;
}) => {
  const {handleSubmit,register,formState:{errors}} = useForm({
    resolver: zodResolver(personalInfoSchema),
  })

  const onError = (err: any) => {
    console.log({err});
  }
  return (
    <div className=" text-white font-semibold">
      <p className="text-2xl">PERSONAL INFORMATION</p>

      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Business Name" withAsterisk {...register("businessName")} error={errors.businessName?.message?.toString()}/>
        <TextInput className="w-full" label="Business Address" withAsterisk {...register("businessAddress")} error={errors.businessAddress?.message?.toString()} />
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="City" withAsterisk  {...register("city")} error={errors.city?.message?.toString()}/>
        <TextInput className="w-full" label="State" withAsterisk {...register("state")} error={errors.state?.message?.toString()}/>
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Zip/Post Code" withAsterisk {...register("zipCode")} error={errors.zipCode?.message?.toString()}/>
        <TextInput className="w-full" label="Primary Email" withAsterisk {...register("email")} error={errors.email?.message?.toString()}/>
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput
          className="w-full"
          label="Primary Phone Number"
          withAsterisk
          {...register("phoneNumber")} error={errors.phoneNumber?.message?.toString()}
        />
        <div className="w-full"></div>
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Manager" withAsterisk {...register("manager")} error={errors.manager?.message?.toString()}/>
        <TextInput className="w-full" label="Email" withAsterisk {...register("managerEmail")} error={errors.managerEmail?.message?.toString()}/>
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Phone Number" withAsterisk {...register("managerPhoneNumber")} error={errors.managerPhoneNumber?.message?.toString()}/>
        <div className="w-full"></div>
      </Flex>

      <PaymentMethods
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />

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
            input:{
              backgroundColor:"rgba(250, 250, 249, 0.1)",
              color:"white",
              borderColor:"rgba(250, 250, 249, 0.1)"
            }
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

      <Group justify="flex-end" gap={10} className="mt-10">
              <Button
                color="white"
                className="text-black"
              >
                Prev
              </Button>
              <Button
                color="white"
                className="text-black"
                onClick={handleSubmit(onError,onError)}
              >
                 Next
              </Button>
            </Group>
    </div>
  );
};
