"use client";
import { Flex, TextInput } from "@mantine/core";

export const PaymentInformationForm = () => {
  return (
    <div className=" text-white font-semibold">
      <p className="text-2xl">PAYMENT INFORMATION</p>
      <p className="text-xs font-normal text-gray-400 mt-5">Select Your Payment Method:<span className="text-white font-semibold"> Currently Selected VISA</span></p>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Name on Card" withAsterisk />
        <TextInput className="w-full" label="Business Name" withAsterisk />
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Billing Address" withAsterisk />
        <TextInput className="w-full" label="Zip/Postal code" withAsterisk />
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Card Number" withAsterisk />
        <TextInput className="w-full" label="Expiry Date" withAsterisk />
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Security Code" withAsterisk />
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
        <TextInput className="w-full" label="Name" withAsterisk />
        <TextInput className="w-full" label="Role" withAsterisk />
      </Flex>
      <Flex gap={10} className="mt-5">
        <TextInput className="w-full" label="Date" withAsterisk />
        <TextInput className="w-full" label="Signature" withAsterisk />
      </Flex>
    </div>
  );
};
