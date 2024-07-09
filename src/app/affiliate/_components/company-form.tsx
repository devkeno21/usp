"use client";
import { Button, Flex, Group, TextInput } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import dayjs from "dayjs";
import { useState } from "react";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const companyInfoSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  businessAddress: z.string().min(1, "Business address is required"),
  mailingAddress: z.string().min(1, "Mailing address is required"),
  webAddress: z.string().min(1, "Web address is required"),
  dba: z.string().optional(),
  primaryEmail: z.string().min(1, "Email is required").email("Invalid email address"),
  primaryPhoneNumber: z.string().min(1, "Phone number is required"),
  primaryFax: z.string().min(1, "Fax number is required"),
  hoursOfOperation: z.string().min(1, "Hours of operation is required"),
  numberOfLocation: z.string().min(1, "Number of location is required"),
  contactName: z.string().min(1, "Contact name is required"),
  contactPhoneNumber: z.string().min(1, "Phone number is required"),
  title: z.string().min(1, "Title is required"),
  singleLineText: z.string().min(1, "This field is required"),

  contactName2: z.string().min(1, "Contact name is required"),
  contactPhoneNumber2: z.string().min(1, "Phone number is required"),
  title2: z.string().min(1, "Title is required"),
  singleLineText2: z.string().min(1, "This field is required"),
});

export const CompanyInformationForm = ({

  onNext,
  onPrev,
}: {
  onNext: (data: any) => void;
  onPrev: () => void;
}) => {
    const [businessType, setBusinessType] = useState<"owner"|"employee" >("owner")
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
      <p className="text-2xl">Company Information</p>

      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Company Name" withAsterisk  {...register("companyName")}
          error={errors.companyName?.message?.toString()}/>
        <TextInput className="w-full" label="Business Address" withAsterisk  {...register("businessAddress")}
          error={errors.businessAddress?.message?.toString()}/>
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Mailing Address" withAsterisk  {...register("mailingAddress")}
          error={errors.mailingAddress?.message?.toString()}/>
        <TextInput className="w-full" label="Web Address" withAsterisk  {...register("webAddress")}
          error={errors.webAddress?.message?.toString()}/>
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput
          className="w-full"
          label="DBA(optional)"
          {...register("dba")}
          error={errors.dba?.message?.toString()}
        />
        <TextInput className="w-full" label="Primary Email" withAsterisk  {...register("primaryEmail")}
          error={errors.primaryEmail?.message?.toString()}/>
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Primary Phone Number" withAsterisk type="number"  {...register("primaryPhoneNumber")}
          error={errors.primaryPhoneNumber?.message?.toString()}/>
        <TextInput className="w-full" label="Primary Fax Number" withAsterisk type="number"  {...register("primaryFax")}
          error={errors.primaryFax?.message?.toString()}/>
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Number of Locations" withAsterisk type="number"  {...register("numberOfLocation")}
          error={errors.numberOfLocation?.message?.toString()}/>
        <TextInput className="w-full" label="Hours of Operation" withAsterisk type="number"  {...register("hoursOfOperation")}
          error={errors.hoursOfOperation?.message?.toString()}/>
      </Flex>
      
      <p className="mt-14 font-normal">
        Business Type <span className="text-red-500">*</span>
      </p>
      <Flex gap={10} className="mt-2 ">
        <Button
          className={
            businessType === "owner"
              ? "bg-secondary-900 bg-opacity-25 border-secondary-900 hover:bg-secondary-700 hover:bg-opacity-20 w-full"
              : "bg-white bg-opacity-20  border-gray-500 hover:bg-white hover:bg-opacity-15 w-full"
          }
          onClick={() => setBusinessType("owner")}
        >
          Owner/Operator
        </Button>
        <Button
          className={
            businessType === "employee"
              ? "bg-secondary-900 bg-opacity-25 border-secondary-900 hover:bg-secondary-700 hover:bg-opacity-20 w-full"
              : "bg-white bg-opacity-20  border-gray-500 hover:bg-white hover:bg-opacity-15 w-full"
          }
          onClick={() => setBusinessType("employee")}
        >
          Employee Based
        </Button>
      </Flex>


      <Flex gap={10} className="mt-5">
        <TextInput
          className="w-full"
          label="Contact Full Name"
          withAsterisk
          {...register("contactName")}
          error={errors.contactName?.message?.toString()}
        />
        <TextInput className="w-full" label="Title" withAsterisk  {...register("title")}
          error={errors.title?.message?.toString()}/>
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Contact Phone Number" withAsterisk  {...register("contactPhoneNumber")}
          error={errors.contactPhoneNumber?.message?.toString()} type="number"/>
        <TextInput className="w-full" label="Single Line Text" withAsterisk  {...register("singleLineText")}
          error={errors.singleLineText?.message?.toString()}/>
      </Flex>


      <Flex gap={10} className="mt-14">
        <TextInput
          className="w-full"
          label="Contact Full Name"
          withAsterisk
          {...register("contactName2")}
          error={errors.contactName2?.message?.toString()}
        />
        <TextInput className="w-full" label="Title" withAsterisk  {...register("title2")}
          error={errors.title2?.message?.toString()}/>
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Contact Phone Number" withAsterisk  {...register("contactPhoneNumber2")}
          error={errors.contactPhoneNumber2?.message?.toString()} type="number"/>
        <TextInput className="w-full" label="Single Line Text" withAsterisk  {...register("singleLineText2")}
          error={errors.singleLineText2?.message?.toString()}/>
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
