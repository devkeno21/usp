"use client";
import { Box, Button, Flex, Group, Textarea, TextInput } from "@mantine/core";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { getActiveBtnColor } from "@/utils/utils";

const operationInfoSchema = z.object({
  departmentEmail: z.string().min(1, "This field is required").email(),
  domesticAirport: z.string().min(1, "This field is required"),
  internationalAirport: z.string().min(1, "This field is required"),
  provideGreeters: z.string().min(1, "This field is required"),
  trackAllArrivingFlights: z.string().min(1, "This field is required"),
});

export const OperationInformationForm = ({
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
  const [verificationType, setVerificationType] = useState<"email" | "phone">(
    "email"
  );
  const [preferredReservation, setPreferredReservation] = useState<
    "email" | "fax" | "affiliate" | "exchange"
  >("email");
  const [outsource,setOutsource] = useState<boolean>(true);

  const onError = (err: any) => {
    console.log({ err });
  };

  const onSubmit = (data: any) => {
    const temp = {
      ...data,
      verificationVia:verificationType,
      preferredReservationMethod:preferredReservation,
      outsourceLocalAffiliation:outsource
    }
    onNext(temp);
  };
  return (
    <div className=" text-white font-semibold">
      <p className="text-2xl">Operation Information</p>

      <Flex gap={10} className="mt-14">
        <TextInput
          label="Reservation Department Email Address"
          withAsterisk
          {...register("departmentEmail")}
          error={errors.departmentEmail?.message?.toString()}
          className="w-full"
        />
        <Box className="w-full mt-1">
          <p className="text-xs font-medium mb-1">
            Are Verifications Via Email/Phone?{" "}
            <span className="text-red-500">*</span>
          </p>
          <Flex gap={10}>
            <Button
              className={getActiveBtnColor(verificationType === "email")}
              onClick={() => setVerificationType("email")}
            >
              Email
            </Button>
            <Button
              className={getActiveBtnColor(verificationType === "phone")}
              onClick={() => setVerificationType("phone")}
            >
              Phone Number
            </Button>
          </Flex>
        </Box>
      </Flex>

      <p className="text-xs font-medium mb-1 mt-5">
        Preferred Reservation Method <span className="text-red-500">*</span>
      </p>
      <Flex gap={10}>
        <Button
          className={getActiveBtnColor(preferredReservation === "email")}
          onClick={() => setPreferredReservation("email")}
        >
          Email
        </Button>
        <Button
          className={getActiveBtnColor(preferredReservation === "fax")}
          onClick={() => setPreferredReservation("fax")}
        >
          Fax
        </Button>
        <Button
          className={getActiveBtnColor(preferredReservation === "affiliate")}
          onClick={() => setPreferredReservation("affiliate")}
        >
          Affiliate Connect
        </Button>
        <Button
          className={getActiveBtnColor(preferredReservation === "exchange")}
          px={35}
          onClick={() => setPreferredReservation("exchange")}
        >
          Ground Exchange
        </Button>
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput
          label="Domestic Airport Standard Meeting Location"
          withAsterisk
          {...register("domesticAirport")}
          error={errors.domesticAirport?.message?.toString()}
          className="w-full"
        />
        <TextInput
          label="International Airport Standard Meeting Location"
          withAsterisk
          {...register("internationalAirport")}
          error={errors.internationalAirport?.message?.toString()}
          className="w-full"
        />
      </Flex>
      <Textarea
        {...register("provideGreeters")}
        error={errors.provideGreeters?.message?.toString()}
        className="w-full mt-5"
        label="Do You Provide Greeters At The Airport?"
      />
       <p className="text-xs font-medium mb-1 mt-5">
       Does Your Company Outsource Local Affiliate Work <span className="text-red-500">*</span>
      </p>
      <Flex gap={10} className="w-1/2">
        <Button
          className={getActiveBtnColor(outsource)}
          onClick={() => setOutsource(true)}
        >
          Yes
        </Button>
        <Button
          className={getActiveBtnColor(!outsource)}
          onClick={() => setOutsource(false)}
        >
          No
        </Button>
      </Flex>
      <Textarea
        {...register("trackAllArrivingFlights")}
        error={errors.trackAllArrivingFlights?.message?.toString()}
        className="w-full mt-5"
        label="Do You Track All Arriving Flights? If So Please Provide What System You Use"
      />

      <Group justify="flex-end" gap={10} className="mt-10">
        <Button color="white" className="text-black" onClick={onPrev} >
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
