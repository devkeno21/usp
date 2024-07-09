"use client";
import {
  Box,
  Button,
  Flex,
  Group,
  Select,
  Textarea,
  TextInput,
} from "@mantine/core";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { getActiveBtnColor } from "@/utils/utils";

const operationInfoSchema = z.object({
  lateCancellationFee: z.string().min(1, "This field is required"),
  garageToGarageCharge: z.string().min(1, "This field is required"),
  carType: z.string({
    required_error: "This field is required",
  }),
  airportType: z.string({
    required_error: "This field is required",
  }),
  cancellationPoliciesForCarNotSelected: z
    .string()
    .min(1, "This field is required"),
  complimentaryWaitTime: z.string().min(1, "This field is required"),
  waitTimePolicy: z.string().min(1, "This field is required"),
  extraFee: z.string().min(1, "This field is required"),
});

export const BillingInformationForm = ({
  onNext,
  onPrev,
}: {
  onNext: (data: any) => void;
  onPrev: () => void;
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(operationInfoSchema),
  });
  const [chargeCancelled, setChargeCancelled] = useState<boolean>(true);

  const onError = (err: any) => {
    console.log({ err });
  };

  const onSubmit = (data: any) => {
    const temp = {
      ...data,
      chargeForCancelledOrDelayedFlight: chargeCancelled,
      licenses: "yeah",
    };
    onNext(temp);
  };
  return (
    <div className=" text-white font-semibold">
      <p className="text-2xl">Billing Information</p>

      <Flex gap={10} className="mt-5">
        <Box className="w-full mt-1">
          <p className="text-xs font-medium mb-1">
            Do You Charge For Cancelled/Delayed Flights?
            <span className="text-red-500">*</span>
          </p>
          <Flex gap={10}>
            <Button
              className={getActiveBtnColor(chargeCancelled)}
              onClick={() => setChargeCancelled(true)}
            >
              Yes
            </Button>
            <Button
              className={getActiveBtnColor(!chargeCancelled)}
              onClick={() => setChargeCancelled(false)}
            >
              No
            </Button>
          </Flex>
        </Box>
        <TextInput
          label="Late Cancellation Fee"
          withAsterisk
          {...register("lateCancellationFee")}
          error={errors.lateCancellationFee?.message?.toString()}
          className="w-full"
        />
      </Flex>

      <Textarea
        {...register("garageToGarageCharge")}
        error={errors.garageToGarageCharge?.message?.toString()}
        className="w-full mt-5"
        label="Do You Charge Garage to Garage? If So, What Are Your Portal Charges"
      />

      <Flex gap={10} className="mt-5">
        <Controller
          control={control}
          name="carType"
          render={({ field: { name, value, onChange } }) => (
            <Select
              name={name}
              value={value}
              onChange={onChange}
              data={["Sedan", "SUV", "Crossover", "Wagon"]}
              label="Choose Car Type"
              className="w-full"
              error={errors.carType?.message?.toString()}
            />
          )}
        />
        <div className="w-full"></div>
      </Flex>

      <Textarea
        {...register("cancellationPoliciesForCarNotSelected")}
        error={errors.cancellationPoliciesForCarNotSelected?.message?.toString()}
        className="w-full mt-5"
        label="What Are Your Cancellation Policies For Car Not Selected"
      />

      <Flex gap={10} className="mt-5">
        <Controller
          control={control}
          name="airportType"
          render={({ field: { name, value, onChange } }) => (
            <Select
              name={name}
              value={value}
              onChange={onChange}
              data={["Domestic", "International"]}
              label="Airport Type"
              className="w-full"
              error={errors.carType?.message?.toString()}
            />
          )}
        />
        <div className="w-full"></div>
      </Flex>

      <Textarea
        {...register("complimentaryWaitTime")}
        error={errors.complimentaryWaitTime?.message?.toString()}
        className="w-full mt-5"
        label="How much complimentary wait time do you offer on Pickups For Airport Type Not Selected"
      />

      <Textarea
        {...register("waitTimePolicy")}
        error={errors.waitTimePolicy?.message?.toString()}
        className="w-full mt-5"
        label="What Is Your Wait-Time Policy"
      />

      <Textarea
        {...register("extraFee")}
        error={errors.extraFee?.message?.toString()}
        className="w-full mt-5"
        label="Do You Charge Any Extra Fees"
      />

      <Group justify="flex-end" gap={10} className="mt-10">
        <Button color="white" className="text-black" onClick={onPrev}>
          Prev
        </Button>
        <Button
          color="white"
          className="text-black"
          onClick={handleSubmit(onSubmit, onError)}
        >
          Finish
        </Button>
      </Group>
    </div>
  );
};
