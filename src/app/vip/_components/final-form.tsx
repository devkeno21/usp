"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Flex, Group, TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const finalSchema = z.object({
  name: z.string().min(1, "Name is required"),
  role: z.string().min(1, "Role number is required"),
  signature: z.string().min(1, "Signature is required"),
  date: z.date({
    required_error: "Date is required",
  }),
});

export const FinalForm = ({
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
    resolver: zodResolver(finalSchema),
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
      <p className="text-2xl">FINAL STEPS</p>

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
          label="Role"
          withAsterisk
          {...register("role")}
          error={errors.role?.message?.toString()}
        />
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput
          className="w-full"
          label="Signature"
          withAsterisk
          {...register("signature")}
          error={errors.signature?.message?.toString()}
        />

        <Controller
          control={control}
          name="date"
          render={({ field: { name, value, onChange } }) => (
            <DateInput
              value={value}
              name={name}
              onChange={onChange}
              className="w-full"
              label="Date"
              withAsterisk
              error={errors.date?.message?.toString()}
              styles={{
                input: {
                  backgroundColor: "rgba(250, 250, 249, 0.1)",
                  color: "white",
                  borderColor: "rgba(250, 250, 249, 0.1)",
                },
              }}
            />
          )}
        />
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
          Finish
        </Button>
      </Group>
    </div>
  );
};
