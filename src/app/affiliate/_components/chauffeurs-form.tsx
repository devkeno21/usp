"use client";
import { Button, Flex, Group, Textarea, TextInput } from "@mantine/core";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { getActiveBtnColor } from "@/utils/utils";

const chauffeursInfoSchema = z.object({
  dressCode: z.string().min(1, "This field is required"),
  numberOfEmployees: z.string().min(1, "This field is required"),
  securityTrainedDriversAndLevel: z.string().min(1, "This field is required"),
  dispatchCommunicateWithChauffeurs: z
    .string()
    .min(1, "This field is required"),
  driverTrainingProgram: z.string().min(1, "This field is required"),
});

export const ChauffeursInformationForm = ({
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
    resolver: zodResolver(chauffeursInfoSchema),
  });
  const [screeningMethod, setScreeningMethod] = useState<
    "criminal" | "vehicle" | "dmv"
  >("criminal");

  const onError = (err: any) => {
    console.log({ err });
  };

  const onSubmit = (data: any) => {
    const temp = { ...data, methodOfScreening: screeningMethod };
    onNext(temp);
  };
  return (
    <div className=" text-white font-semibold">
      <p className="md:text-2xl text-lg">Chauffeurs Information</p>

      <Flex gap={10} className="mt-5" align={"end"}>
        <TextInput
          label="Number of Employees (Do Not Include Subcontractors)"
          withAsterisk
          {...register("numberOfEmployees")}
          error={errors.numberOfEmployees?.message?.toString()}
          className="w-full"
          type="number"
        />
        <TextInput
          label="Number of Security Trained Drivers & Level of Security Trainings"
          withAsterisk
          {...register("securityTrainedDriversAndLevel")}
          error={errors.securityTrainedDriversAndLevel?.message?.toString()}
          className="w-full"
        />
      </Flex>

      <Textarea
        label="What is the Dress Code For Chauffeurs?"
        withAsterisk
        {...register("dressCode")}
        error={errors.dressCode?.message?.toString()}
        className="mt-5"
      />

      <p className="text-xs font-medium mb-1 mt-5">
        Preferred Reservation Method <span className="text-red-500">*</span>
      </p>
      <Flex gap={10}>
        <Button
          className={getActiveBtnColor(screeningMethod === "criminal")}
          onClick={() => setScreeningMethod("criminal")}
        >
          Criminal History
        </Button>
        <Button
          className={getActiveBtnColor(screeningMethod === "vehicle")}
          onClick={() => setScreeningMethod("vehicle")}
        >
          Moto Vehicle History
        </Button>
        <Button
          className={getActiveBtnColor(screeningMethod === "dmv")}
          onClick={() => setScreeningMethod("dmv")}
        >
          DMV History
        </Button>
      </Flex>

      <Textarea
        label="Describe Your Driver Training Program"
        withAsterisk
        {...register("driverTrainingProgram")}
        error={errors.driverTrainingProgram?.message?.toString()}
        className="mt-5"
      />
      <Textarea
        label="How Does Dispatch Communicate With Your Chauffeurs?"
        withAsterisk
        {...register("dispatchCommunicateWithChauffeurs")}
        error={errors.dispatchCommunicateWithChauffeurs?.message?.toString()}
        className="mt-5"
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
          Next
        </Button>
      </Group>
    </div>
  );
};
