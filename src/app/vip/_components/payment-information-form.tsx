"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Flex, Group, TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { VisaLogo } from "./visa-svg";
import { MasterCardLogo } from "./master-card-svg";
import { AmericaExpress } from "./america-express-svg";
import { useState } from "react";

const paymentInfoSchema = z.object({
  cardName: z.string().min(1, "Card name is required"),
  businessName: z.string().min(1, "Business name is required"),
  billingAddress: z.string().min(1, "Billing address is required"),
  zipCode: z.string().min(1, "Zip code is required"),
  cardNumber: z.string().min(1, "Card number name is required"),
  expiryDate: z.date({
    required_error:"Expiry date is required"
  }),
  securityCode: z.string().min(3, "Card number name is required").max(3),

  name: z.string().min(1, "Name is required"),
  role: z.string().min(1, "Role is required"),
  signature: z.string().min(1, "Signature is required"),
  date: z.date({
    required_error:"Date is required"
  }),
});

export const PaymentInformationForm = ({
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
    resolver: zodResolver(paymentInfoSchema),
  });
  const [paymentMethod,setPaymentMethod] = useState<"Visa"|"Master Card" | "America Express">("Visa")

  const onError = (err: any) => {
    console.log({ err });
  };

  const onSubmit = (data: any) => {
    console.log({ data });
    onNext(data);
  };
  return (
    <div className=" text-white font-semibold">
      <p className="md:text-2xl text-lg">PAYMENT INFORMATION</p>
      <p className="text-xs font-normal text-gray-400 mt-5">
        Select Your Payment Method:
        <span className="text-white font-semibold">
          {" "}
          Currently Selected VISA
        </span>

      </p>
        <Flex className="mt-5" gap={20} align="center">
          <div className={paymentMethod == "Visa" ? "border border-dashed border-secondary-900 p-2 border-2" : ""} onClick={()=>setPaymentMethod("Visa")}>
          <VisaLogo/>
          </div>
          <div className={paymentMethod == "Master Card" ? "border border-dashed border-secondary-900 p-2 border-2 " : ""} onClick={()=>setPaymentMethod("Master Card")}>

          <MasterCardLogo/>
          </div>
          <div className={paymentMethod == "America Express" ? "border border-dashed border-secondary-900 p-2 border-2" : ""} onClick={()=>setPaymentMethod("America Express")}>
          <AmericaExpress/>

          </div>
        </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Name on Card" withAsterisk {...register("cardName")}
          error={errors.cardName?.message?.toString()}/>
        <TextInput className="w-full" label="Business Name" withAsterisk {...register("businessName")}
          error={errors.businessName?.message?.toString()}/>
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Billing Address" withAsterisk {...register("billingAddress")}
          error={errors.billingAddress?.message?.toString()}/>
        <TextInput className="w-full" label="Zip/Postal code" withAsterisk {...register("zipCode")}
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
        <TextInput className="w-full" label="Card Number" withAsterisk type="number" {...register("cardNumber")}
          error={errors.cardNumber?.message?.toString()}/>
          <Controller
          name="expiryDate"
          control={control}
          render={({field:{name,value,onChange}})=>(
            <DateInput
            value={value}
            name={name}
            onChange={onChange}
            label="Expiry Date"
            withAsterisk
            className="w-full"
            error={errors.expiryDate?.message?.toString()}
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
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Security Code" withAsterisk {...register("securityCode")}
          error={errors.securityCode?.message?.toString()} type="number"/>
        <div className="w-full"></div>
      </Flex>

      <p className="text-sm font-normal mt-5">
        Lorem ipsum dolor sit amet consectetur. In at odio a ut amet. Sodales at
        in egestas velit in adipiscing. Tellus odio suspendisse eros vitae. Enim
        vel viverra volutpat massa cursus dui neque risus quis. Ornare nulla
        malesuada scelerisque cursus. Dui sollicitudin aliquam dignissim
        ultrices facilisi dolor eu neque orci. In cursus amet dictumst vel
        turpis convallis viverra amet.
      </p>
      <p className="text-sm font-normal mt-5">
        Integer egestas et vitae mauris fringilla aliquet. Dui aliquam viverra
        potenti varius. Proin vestibulum pretium elit nec ante non enim at hac.
        Aliquam ut ullamcorper tincidunt tellus ante amet in. Senectus eget
        tempus in morbi dolor erat sem. Vulputate consequat magna egestas
        placerat odio risus. Dui blandit consectetur viverra lectus. Consequat
        congue condimentum nulla imperdiet in. Vel est a et in est iaculis
        turpis.{" "}
      </p>
      <p className="text-sm font-normal mt-5">
        Urna gravida magna elementum phasellus vestibulum pellentesque sit at
        donec. Egestas interdum non pretium arcu felis tellus pellentesque vitae
        viverra. Adipiscing sed pellentesque elementum vitae. Eget felis tellus
        risus vestibulum aliquam mauris fermentum nunc. In diam sem in vulputate
        purus congue tempus pretium. Netus enim elementum ipsum facilisis in
        turpis lacus vestibulum fermentum. Vestibulum duis vehicula cursus duis
        accumsan libero sagittis ultricies. Montes in leo sed urna in turpis ac
        arcu. Lorem convallis arcu ut risus. Quis velit praesent sapien maecenas
        volutpat venenatis. Tellus velit sit erat diam cursus justo pellentesque
        elit commodo. Dignissim dignissim ut phasellus sagittis et id commodo
        iaculis et.
      </p>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Name" withAsterisk {...register("name")}
          error={errors.name?.message?.toString()}/>
        <TextInput className="w-full" label="Role" withAsterisk {...register("role")}
          error={errors.role?.message?.toString()}/>
      </Flex>
      <Flex gap={10} className="mt-5">
      <Controller
          name="date"
          control={control}
          render={({field:{name,value,onChange}})=>(
            <DateInput
            error={errors.date?.message?.toString()}
            value={value}
            name={name}
            onChange={onChange}
            label="Date"
            withAsterisk
            className="w-full"
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
        <TextInput className="w-full" label="Signature" withAsterisk {...register("signature")}
          error={errors.signature?.message?.toString()}/>
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
          Next
        </Button>
      </Group>
    </div>
  );
};
