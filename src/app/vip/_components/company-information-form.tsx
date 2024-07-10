"use client";
import { Button, Flex, Group, TextInput } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import dayjs from "dayjs";
import { PaymentMethods } from "./payment-methods";
import { useState } from "react";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const companyInfoSchema = z.object({
  name: z.string().min(1, "Business name is required"),
  businessAddress: z.string().min(1, "Business address is required"),
  address: z.string().min(1, "Address is required"),
  zipCode: z.string().min(1, "Zip Code is required"),
  companyRegistrationNumber: z.string().min(1, "Company registration number is required"),
  vatNumber: z.string().min(1, "Vat number is required"),
  yearsOfTrading: z.string().min(1, "Years of trading is required"),
  bookingContactName: z.string().min(1, "Booking contact name is required"),
  email: z.string().min(1, "Email is required").email("Invalid Email Address"),
  phoneNumber: z.string().min(1, "Phone number is required"),
 
  reservationContact: z.string().min(1, "Reservation contact is required"),
  reservationPhoneNumber: z.string().min(1, "Phone number is required"),
  reservationEmail: z.string().min(1, "Email is required"),
});

export const CompanyInformationForm = ({
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
    const [businessType, setBusinessType] = useState<"ltd"|"plc" | "sole">("ltd")
    const {
      handleSubmit,
      register,
      formState: { errors },
      control,
    } = useForm({
      resolver: zodResolver(companyInfoSchema),
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
      <p className="md:text-2xl text-lg">COMPANY INFORMATION</p>

      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Business Name" withAsterisk  {...register("name")}
          error={errors.name?.message?.toString()}/>
        <TextInput className="w-full" label="Business Address" withAsterisk  {...register("businessAddress")}
          error={errors.businessAddress?.message?.toString()}/>
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Address" withAsterisk  {...register("address")}
          error={errors.address?.message?.toString()}/>
        <TextInput className="w-full" label="Zip/Post Code" withAsterisk  {...register("zipCode")}
          error={errors.zipCode?.message?.toString()}/>
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full"  withAsterisk />
        <div className="w-full"></div>
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full"  withAsterisk />
        <div className="w-full"></div>
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput
          className="w-full"
          label="Company Registration Number"
          withAsterisk
          {...register("companyRegistrationNumber")}
          error={errors.companyRegistrationNumber?.message?.toString()}
        />
        <TextInput className="w-full" label="VAT Number" withAsterisk  {...register("vatNumber")}
          error={errors.vatNumber?.message?.toString()}/>
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Years of Trading" withAsterisk type="number"  {...register("yearsOfTrading")}
          error={errors.yearsOfTrading?.message?.toString()}/>
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
          {...register("bookingContactName")}
          error={errors.bookingContactName?.message?.toString()}
        />
        <TextInput className="w-full" label="Phone Number" withAsterisk  {...register("phoneNumber")}
          error={errors.phoneNumber?.message?.toString()}/>
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Email" withAsterisk  {...register("email")}
          error={errors.email?.message?.toString()}/>
        <div className="w-full"></div>
      </Flex>

      <p className="md:text-2xl text-lg mt-10">RESERVATION INFORMATION</p>
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
      {/* <Flex gap={10} className="mt-5">
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
      </Flex> */}

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
