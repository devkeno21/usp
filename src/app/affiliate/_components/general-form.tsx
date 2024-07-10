"use client";
import { Button, Flex, Group, Textarea, TextInput } from "@mantine/core";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DateInput } from "@mantine/dates";

const generalInfoSchema = z.object({
  availability: z.string().min(1, "This field is required"),
  coverage: z.string().min(1, "This field is required"),
  airport: z.string().min(1, "This field is required"),
  software: z.string().min(1, "This field is required"),
  realtimeUpdate: z.string().min(1, "This field is required"),
  insuredName: z.string().min(1, "This field is required"),
  insuredAddress: z.string().min(1, "This field is required"),
  insurerName: z.string().min(1, "This field is required"),
  insurerAddress: z.string().min(1, "This field is required"),
  insurance: z.string().min(1, "This field is required"),
  expirationDate: z.date({
    required_error:"This field is required"
  }),
});

export const GeneralInformationForm = ({
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
    resolver: zodResolver(generalInfoSchema),
  });

  const onError = (err: any) => {
    console.log({ err });
  };

  const onSubmit = (data: any) => {
    onNext(data);
  };
  return (
    <div className=" text-white font-semibold">
      <p className="md:text-2xl text-lg">General Information</p>

      <Textarea
        label="Do You Provide Ground Transportation 24/7. If No Please State Your Availability?"
        withAsterisk
        {...register("availability")}
        error={errors.availability?.message?.toString()}
        className="mt-5"
      />
      <Textarea
        label="Which Areas Do You Provide Coverage?"
        withAsterisk
        {...register("coverage")}
        error={errors.coverage?.message?.toString()}
        className="mt-5"
      />
      <Textarea
        label="What Airport Does Your Company Service?"
        withAsterisk
        {...register("airport")}
        error={errors.airport?.message?.toString()}
        className="mt-5"
      />
      <Textarea
        label="What Transportation Software Does Your Company Use?"
        withAsterisk
        {...register("software")}
        error={errors.software?.message?.toString()}
        className="mt-5"
      />
      <Textarea
        label="Can You Send Real-Time Status Updates"
        withAsterisk
        {...register("realtimeUpdate")}
        error={errors.realtimeUpdate?.message?.toString()}
        className="mt-5"
      />

      <Flex gap={10} className="mt-14">
        <TextInput label="Insured Name" withAsterisk  {...register("insuredName")}
        error={errors.insuredName?.message?.toString()} className="w-full"/>
        <TextInput label="Insured Address" withAsterisk  {...register("insuredAddress")}
        error={errors.insuredAddress?.message?.toString()} className="w-full"/>
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput label="Insurer Name" withAsterisk  {...register("insurerName")}
        error={errors.insurerName?.message?.toString()} className="w-full"/>
        <TextInput label="Insurer Address" withAsterisk  {...register("insurerAddress")}
        error={errors.insurerAddress?.message?.toString()} className="w-full"/>
      </Flex>
      <Flex gap={10} className="mt-5">
      <Controller
          name="expirationDate"
          control={control}
          render={({ field: { value, name, onChange } }) => (
            <DateInput
              name={name}
              value={value}
              onChange={onChange}
              label="Policy Expiration Date"
              className="w-full"
              withAsterisk
              styles={{
                input: {
                  backgroundColor: "rgba(250, 250, 249, 0.1)",
                  color: "white",
                  borderColor: "rgba(250, 250, 249, 0.1)",
                },
              }}
              error={errors.expirationDate?.message?.toString()}
            />
          )}
        />
        <TextInput type="number" label="Amount of Liability Insurance" withAsterisk  {...register("insurance")}
        error={errors.insurance?.message?.toString()} className="w-full"/>
      </Flex>

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
