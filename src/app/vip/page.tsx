"use client";

import { Button, ButtonGroup, Flex, Group, Stepper } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PersonalInformationForm } from "./_components/personal-information-form";
import { PaymentInformationForm } from "./_components/payment-information-form";
import { FinalForm } from "./_components/final-form";
import { CompanyInformationForm } from "./_components/company-information-form";
import { MonthlyPaymentInformationForm } from "./_components/monthly-payment-information";
import { DebitPaymentInformationForm } from "./_components/debit-payment-method";

export default function VIP() {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [type, setType] = useState("Individual");
  const [paymentMethod, setPaymentMethod] = useState<
    "credit" | "monthly" | "debit"
  >("credit");

  const onNext = (data: any) => {
    console.log({ upperData: data });
    setActive(active + 1);
  };

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
              <Stepper.Step
                label="Personal Information"
                description="Enter your personal details to get you started"
              />
              <Stepper.Step
                label="Payment Information"
                description="Enter your payment details to process your payment"
              />
              <Stepper.Step
                label="Final Steps"
                description="Finalize your details to complete your order"
              />
            </Stepper>
          </div>
          <div className="w-3/4 overflow-y-auto h-[84vh] py-5 px-14">
            {active == 0 && (
              <div>
                <ButtonGroup className="p-5 bg-secondary-900 bg-opacity-20 border border-secondary-900 w-fit rounded mb-5">
                  <Button
                    className={
                      type === "Individual"
                        ? "bg-secondary-900 hover:bg-secondary-700"
                        : "bg-transparent hover:bg-secondary-900 hover:bg-opacity-40"
                    }
                    onClick={() => setType("Individual")}
                  >
                    Individual
                  </Button>
                  <Button
                    className={
                      type === "Company"
                        ? "bg-secondary-900 hover:bg-secondary-700"
                        : "bg-transparent hover:bg-secondary-900 hover:bg-opacity-40"
                    }
                    onClick={() => setType("Company")}
                  >
                    Company
                  </Button>
                </ButtonGroup>
                {type === "Individual" ? (
                  <PersonalInformationForm
                    paymentMethod={paymentMethod}
                    setPaymentMethod={setPaymentMethod}
                    onPrev={() => setActive(active - 1)}
                    onNext={onNext}
                  />
                ) : (
                  <CompanyInformationForm
                    paymentMethod={paymentMethod}
                    setPaymentMethod={setPaymentMethod}
                    onPrev={() => setActive(active - 1)}
                    onNext={onNext}
                  />
                )}
              </div>
            )}
            {active == 1 && (
              <div>
                {paymentMethod === "credit" && <PaymentInformationForm onPrev={() => setActive(active - 1)}
                    onNext={onNext}/>}
                {paymentMethod === "monthly" && (
                  <MonthlyPaymentInformationForm
                    onPrev={() => setActive(active - 1)}
                    onNext={onNext}
                  />
                )}
                {paymentMethod === "debit" && <DebitPaymentInformationForm onPrev={() => setActive(active - 1)}
                    onNext={onNext}/>}
              </div>
            )}
            {active == 2 && (
              <FinalForm onPrev={() => setActive(active - 1)} onNext={onNext} />
            )}
          </div>
        </Flex>
      </div>
    </div>
  );
}