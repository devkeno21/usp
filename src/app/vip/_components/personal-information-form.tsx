"use client";
import { Button, Flex, Group, TextInput } from "@mantine/core";
import { PaymentMethods } from "./payment-methods";
import { DateInput, DateTimePicker } from "@mantine/dates";
import dayjs from "dayjs";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const personalInfoSchema = z.object({
  businessName: z.string().min(1, "Business name is required"),
  businessAddress: z.string().min(1, "Business address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(1, "Zip Code is required"),
  primaryEmail: z.string().min(1, "Email is required").email("Invalid Email Address"),
  primaryPhoneNumber: z.string().min(1, "Phone number is required"),
  manager: z.string().min(1, "Manager is required"),
  managerEmail: z
    .string()
    .min(1, "Email is required")
    .email("Invalid Email Address"),
  managerPhoneNumber: z.string().min(1, "Phone number is required"),
  reservationContact: z.string().min(1, "Reservation contact is required"),
  reservationPhoneNumber: z.string().min(1, "Phone number is required"),
  reservationEmail: z.string().min(1, "Email is required"),
  openingHours: z.date({ required_error: "Opening hours is required" }),
  dispatchContact: z.string().min(1, "Dispatch contact is required"),
  dispatchPhoneNumber: z.string().min(1, "Phone number is required"),
  dispatchEmail: z.string().min(1, "Email number is required"),
  accountingContact: z.string().min(1, "Accounting contact is required"),
  accountingPhoneNumber: z.string().min(1, "Phone number is required"),
  accountingEmail: z.string().min(1, "Email number is required"),
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
    onNext(data);
  };
  return (
    <div className=" text-white font-semibold">
      <p className="text-2xl">PERSONAL INFORMATION</p>

      <Flex gap={10} className="mt-5">
        <TextInput
          className="w-full"
          label="Business Name"
          withAsterisk
          {...register("businessName")}
          error={errors.businessName?.message?.toString()}
        />
        <TextInput
          className="w-full"
          label="Business Address"
          withAsterisk
          {...register("businessAddress")}
          error={errors.businessAddress?.message?.toString()}
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
      <Flex gap={10} className="mt-5">
        <TextInput
          className="w-full"
          label="Manager"
          withAsterisk
          {...register("manager")}
          error={errors.manager?.message?.toString()}
        />
        <TextInput
          className="w-full"
          label="Email"
          withAsterisk
          {...register("managerEmail")}
          error={errors.managerEmail?.message?.toString()}
        />
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput
          className="w-full"
          label="Phone Number"
          type="number"
          withAsterisk
          {...register("managerPhoneNumber")}
          error={errors.managerPhoneNumber?.message?.toString()}
        />
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
          {...register("reservationContact")}
          error={errors.reservationContact?.message?.toString()}
        />
        <TextInput
          className="w-full"
          label="Phone Number"
          withAsterisk
          type="number"
          {...register("reservationPhoneNumber")}
          error={errors.reservationPhoneNumber?.message?.toString()}
        />
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput
          className="w-full"
          label="Email"
          withAsterisk
          {...register("reservationEmail")}
          error={errors.reservationEmail?.message?.toString()}
        />
        <div className="w-full"></div>
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput
          className="w-full"
          label="Dispatch Contact"
          withAsterisk
          {...register("dispatchContact")}
          error={errors.dispatchContact?.message?.toString()}
        />
        <Controller
          name="openingHours"
          control={control}
          render={({ field: { value, name, onChange } }) => (
            <DateTimePicker
              name={name}
              value={value}
              onChange={onChange}
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
              error={errors.openingHours?.message?.toString()}
            />
          )}
        />
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput
          className="w-full"
          label="Phone Number"
          withAsterisk
          type="number"
          {...register("dispatchPhoneNumber")}
          error={errors.dispatchPhoneNumber?.message?.toString()}
        />
        <TextInput
          className="w-full"
          label="Email"
          withAsterisk
          {...register("dispatchEmail")}
          error={errors.dispatchEmail?.message?.toString()}
        />
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput
          className="w-full"
          label="Accounting Contact"
          withAsterisk
          {...register("accountingContact")}
          error={errors.accountingContact?.message?.toString()}
        />
        <div className="w-full"></div>
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput
          className="w-full"
          label="Phone Number"
          withAsterisk
          type="number"
          {...register("accountingPhoneNumber")}
          error={errors.accountingPhoneNumber?.message?.toString()}
        />
        <TextInput
          className="w-full"
          label="Email"
          withAsterisk
          {...register("accountingEmail")}
          error={errors.accountingEmail?.message?.toString()}
        />
      </Flex>

      <Group justify="flex-end" gap={10} className="mt-10">
        <Button color="white" className="text-black" onClick={onPrev} disabled>
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
