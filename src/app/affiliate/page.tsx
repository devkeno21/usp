"use client";

import { Button, ButtonGroup, Flex, Group, Stepper } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CompanyInformationForm } from "./_components/company-form";
import { GeneralInformationForm } from "./_components/general-form";
import { OperationInformationForm } from "./_components/operation-form";
import { ChauffeursInformationForm } from "./_components/chauffeurs-form";

export default function Affiliate() {
  const router = useRouter();
  const [active, setActive] = useState(0);

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
          Join our Affiliate Program
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
                label="Company Information"
                description="Enter information about your company to get started"
              />
              <Stepper.Step
                label="General Information"
                description="Enter general information about your services"
              />
              <Stepper.Step
                label="Operation Information"
                description="Enter detailed information about your company information"
              />
              <Stepper.Step
                label="Chauffeurs Information"
                description="Enter detailed information about your chauffeurs."
              />
              <Stepper.Step
                label="Fleet Information"
                description="Enter detailing information about  your fleets"
              />
              <Stepper.Step
                label="Billing Information"
                description="Enter detailing information about  your billing process"
              />
            </Stepper>
          </div>
          <div className="w-3/4 overflow-y-auto h-[84vh] py-5 px-14">
            {active == 0 && (
              <div>
                <CompanyInformationForm
                  onNext={onNext}
                  onPrev={() => setActive(active - 1)}
                />
              </div>
            )}
            {active == 1 && (
              <div>
                <GeneralInformationForm
                  onNext={onNext}
                  onPrev={() => setActive(active - 1)}
                />
              </div>
            )}
            {active == 2 && (
              <div>
                <OperationInformationForm
                  onNext={onNext}
                  onPrev={() => setActive(active - 1)}
                />
              </div>
            )}

            {active == 3 && <div>
              <ChauffeursInformationForm onNext={onNext}
                  onPrev={() => setActive(active - 1)}/>
              </div>}
            {active == 4 && <div>5</div>}
            {active == 5 && <div>6</div>}
          </div>
        </Flex>
      </div>
    </div>
  );
}
