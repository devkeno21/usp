"use client";

import { Button, Flex, Group, Stepper } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PersonalInformationForm } from "./_components/personal-information-form";
import { PaymentInformationForm } from "./_components/payment-information-form";
import { FinalForm } from "./_components/final-form";

export default function VIP() {
  const router = useRouter();
  const [active, setActive] = useState(1);

  return (
    <div className="bg-primary-900 min-h-screen text-white">
      <div className="container mx-auto py-10">
        <Button
          onClick={() => router.back()}
          leftSection={<IconArrowLeft />}
          className="text-2xl text-white hover:text-white"
          variant="subtle"
        >
          VIP Program
        </Button>

        <Flex>
          <div className="w-1/4 mt-24">
            <Stepper
              active={active}
              orientation="vertical"
              color="red"
              iconPosition="right"
            >
              <Stepper.Step label="Personal Information" description="Enter your personal details to get you started"/>
              <Stepper.Step label="Payment Information" description="Enter your payment details to process your payment" />
              <Stepper.Step label="Final Steps" description="Finalize your details to complete your order" />
            </Stepper>
          </div>
          <div className="w-3/4 overflow-y-auto h-[84vh] py-5 px-14">
            {active ==1 &&<PersonalInformationForm/>}
            {active ==2 &&<PaymentInformationForm/>}
            {active ==3 &&<FinalForm/>}

            <Group justify="flex-end" gap={10} className="mt-10">
                <Button color="white" disabled={active ===1} className="text-black" onClick={()=>setActive(active-1)}>Prev</Button>
                <Button color="white" className="text-black" onClick={()=>setActive(active+1)}>{active===3? "Finish":"Next"}</Button>
            </Group>
          </div>
        </Flex>
      </div>
    </div>
  );
}
