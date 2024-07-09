"use client";

import { Button, Flex, Stepper } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CompanyInformationForm } from "./_components/company-form";
import { GeneralInformationForm } from "./_components/general-form";
import { OperationInformationForm } from "./_components/operation-form";
import { ChauffeursInformationForm } from "./_components/chauffeurs-form";
import { FleetInformationForm } from "./_components/fleet-form";
import { BillingInformationForm } from "./_components/billing-form";
import { useJoinAffiliateMutation } from "@/state/api/usp.api";
import { notifications } from "@mantine/notifications";

export default function Affiliate() {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [file,setFile] = useState<any>(undefined)
  const [companyInfo,setCompanyInfo] = useState<any>({});
  const [generalInformation,setGeneralInformation] = useState<any>({});
  const [operationInformation,setOperationInformation] = useState<any>({});
  const [chauffeurInformation,setChauffeurInformation] = useState<any>({});
  const [fleetInformation,setFleetInformation] = useState<any>({});
  const [billingInformation,setBillingInformation] = useState<any>({});

  const [joinAffiliate,{isLoading}] = useJoinAffiliateMutation();

  const onNext = (data: any) => {
    if(active === 0 )
      setCompanyInfo(data)
    else if(active === 1 )
      setGeneralInformation(data)
    else if(active === 2 )
      setOperationInformation(data)
    else if(active === 3 )
      setChauffeurInformation(data)
    else if(active === 4 )
      setFleetInformation(data)

    if(active !==5)setActive(active + 1);
    if(active === 5 ){
      setBillingInformation(data)
      onSubmit()
    }
    
  };

  const onSubmit = async()=>{
    const formData = new FormData()
    formData.append('companyInfo', JSON.stringify(companyInfo))
    formData.append('generalInformation', JSON.stringify(generalInformation))
    formData.append('operationInformation', JSON.stringify(operationInformation))
    formData.append('chauffeurInformation', JSON.stringify(chauffeurInformation))
    formData.append('fleetInformation', JSON.stringify(fleetInformation))
    formData.append('billingInformation', JSON.stringify(billingInformation))
    formData.append('file', file)
    console.log({formData})
    try{
      await joinAffiliate(formData).unwrap();
      notifications.show({
        title: "Success",
        message: "Form submitted successfully",
        color: "green",
      })
      router.push('/')
    }catch{
      notifications.show({
        title: "Error",
        message: "An error occurred while joining the affiliate program. Please try again later.",
        color: "red",
      })
    }
  }

  

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
            {active == 4 && <div>
              <FleetInformationForm onNext={onNext}
                  onPrev={() => setActive(active - 1)} setFile={setFile}/></div>}
            {active == 5 && <div>
              <BillingInformationForm onNext={onNext}
                  onPrev={() => setActive(active - 1)} isLoading={isLoading}/>
              </div>}
          </div>
        </Flex>
      </div>
    </div>
  );
}
