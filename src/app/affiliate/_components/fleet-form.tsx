"use client";
import { Button, Flex, Group, rem, Text, TextInput } from "@mantine/core";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';

const fleetInfoSchema = z.object({
    fleetAge: z.string().min(1, "This field is required"),
    turnoverFrequency: z.string().min(1, "This field is required"),
    serviceFrequency: z.string().min(1, "This field is required"),
    spotTime: z.string().min(1, "This field is required"),
});

export const FleetInformationForm = ({
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
  } = useForm({
    resolver: zodResolver(fleetInfoSchema),
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
      <p className="text-2xl">Fleet Information</p>
      <Flex gap={10} className="mt-5">
        <TextInput
          label="Average Fleet Age"
          withAsterisk
          {...register("fleetAge")}
          error={errors.fleetAge?.message?.toString()}
          className="w-full"
          type="number"
        />
        <TextInput
          label="Company Vehicle Turnover Frequency"
          withAsterisk
          {...register("turnoverFrequency")}
          error={errors.turnoverFrequency?.message?.toString()}
          className="w-full"
        />
      </Flex>

      
      <Flex gap={10} className="mt-5">
        <TextInput
          label="Vehicle Service Frequency"
          withAsterisk
          {...register("serviceFrequency")}
          error={errors.serviceFrequency?.message?.toString()}
          className="w-full"
          type="number"
        />
        <TextInput
          label="Standard Complimentary Spot Time"
          withAsterisk
          {...register("spotTime")}
          error={errors.spotTime?.message?.toString()}
          className="w-full"
        />
      </Flex>

      {/* drop zone */}
      <Dropzone
      onDrop={(files) => console.log('accepted files', files)}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={5 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      className="mt-5 bg-secondary-900 bg-opacity-15 hover:bg-secondary-900 hover:bg-opacity-20 border-secondary-900 border-solid"
     
    >
      <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
       

        <div>
          <Text size="xl" inline color="white">
            Drag and Drop file here or click here
          </Text>
         
        </div>
      </Group>
    </Dropzone>

      {/* fleet spec */}
      <Flex gap={10} className="mt-5">
        <TextInput
          label="Fleet 1 Manufactured Year"
          withAsterisk
          {...register("serviceFrequency")}
          error={errors.serviceFrequency?.message?.toString()}
          className="w-full"
          type="number"
        />
        <TextInput
          label="Fleet 1 Manufacturer"
          withAsterisk
          {...register("spotTime")}
          error={errors.spotTime?.message?.toString()}
          className="w-full"
        />
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput
          label="Fleet 1 Model"
          withAsterisk
          {...register("serviceFrequency")}
          error={errors.serviceFrequency?.message?.toString()}
          className="w-full"
          type="number"
        />
        <TextInput
          label="Fleet 1 Color"
          withAsterisk
          {...register("spotTime")}
          error={errors.spotTime?.message?.toString()}
          className="w-full"
        />
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput
          label="Fleet 1 Seating (Separate With Commas For More)"
          withAsterisk
          {...register("serviceFrequency")}
          error={errors.serviceFrequency?.message?.toString()}
          className="w-full"
          type="number"
        />
        <TextInput
          label="Fleet 1 Total In Fleet"
          withAsterisk
          {...register("spotTime")}
          error={errors.spotTime?.message?.toString()}
          className="w-full"
        />
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
