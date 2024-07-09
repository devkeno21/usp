"use client";
import { Button, Flex, Group, rem, Text, TextInput } from "@mantine/core";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';

const fleetInfoSchema = z.object({
    averageFleetAge: z.string().min(1, "This field is required"),
    companyVehicleTurnOverFrequency: z.string().min(1, "This field is required"),
    vehicleServiceFrequency: z.string().min(1, "This field is required"),
    standardComplimentarySpotTime: z.string().min(1, "This field is required"),
    fleetYear:z.string().min(1, "This field is required"),
    fleetManufacturer:z.string().min(1, "This field is required"),
    fleetModel:z.string().min(1, "This field is required"),
    fleetColor:z.string().min(1, "This field is required"),
    fleetSeating:z.string().min(1, "This field is required"),
    fleetTotal:z.string().min(1, "This field is required"),
});

export const FleetInformationForm = ({
  onNext,
  onPrev,
  setFile
}: {
  onNext: (data: any) => void;
  setFile: (data: any) => void;
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
    const temp = {...data,fleets:[
    ]}
    onNext(temp);
  };
  return (
    <div className=" text-white font-semibold">
      <p className="text-2xl">Fleet Information</p>
      <Flex gap={10} className="mt-5">
        <TextInput
          label="Average Fleet Age"
          withAsterisk
          {...register("averageFleetAge")}
          error={errors.averageFleetAge?.message?.toString()}
          className="w-full"
          type="number"
        />
        <TextInput
          label="Company Vehicle Turnover Frequency"
          withAsterisk
          {...register("companyVehicleTurnOverFrequency")}
          error={errors.companyVehicleTurnOverFrequency?.message?.toString()}
          className="w-full"
        />
      </Flex>

      
      <Flex gap={10} className="mt-5">
        <TextInput
          label="Vehicle Service Frequency"
          withAsterisk
          {...register("vehicleServiceFrequency")}
          error={errors.vehicleServiceFrequency?.message?.toString()}
          className="w-full"
          type="number"
        />
        <TextInput
          label="Standard Complimentary Spot Time"
          withAsterisk
          {...register("standardComplimentarySpotTime")}
          error={errors.standardComplimentarySpotTime?.message?.toString()}
          className="w-full"
        />
      </Flex>

      {/* drop zone */}
      <Dropzone
      onDrop={(file)=>setFile(file)}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={5 * 1024 ** 2}
      // accept={IMAGE_MIME_TYPE}
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
          {...register("fleetYear")}
          error={errors.fleetYear?.message?.toString()}
          className="w-full"
          type="number"
        />
        <TextInput
          label="Fleet 1 Manufacturer"
          withAsterisk
          {...register("fleetManufacturer")}
          error={errors.fleetManufacturer?.message?.toString()}
          className="w-full"
        />
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput
          label="Fleet 1 Model"
          withAsterisk
          {...register("fleetModel")}
          error={errors.fleetModel?.message?.toString()}
          className="w-full"
          type="number"
        />
        <TextInput
          label="Fleet 1 Color"
          withAsterisk
          {...register("fleetColor")}
          error={errors.fleetColor?.message?.toString()}
          className="w-full"
        />
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput
          label="Fleet 1 Seating (Separate With Commas For More)"
          withAsterisk
          {...register("fleetSeating")}
          error={errors.fleetSeating?.message?.toString()}
          className="w-full"
          type="number"
        />
        <TextInput
          label="Fleet 1 Total In Fleet"
          withAsterisk
          {...register("fleetTotal")}
          error={errors.fleetTotal?.message?.toString()}
          className="w-full"
        />
      </Flex>

      <Button color="white" fullWidth size="xl" className="mt-5 text-black">Add Fleet +</Button>
 

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
