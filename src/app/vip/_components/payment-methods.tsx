"use client";
import { Button, Flex, Group } from "@mantine/core";

export const PaymentMethods = ({ paymentMethod, setPaymentMethod }: any) => {
  return (
    <>
    <p className="mt-5 font-normal">
        Preferred Payment Method <span className="text-red-500">*</span>
      </p>
    <Flex gap={10} className="mt-2 w-5/6">
      <Button
        className={
          paymentMethod === "credit"
            ? "bg-secondary-900 bg-opacity-25 border-secondary-900 hover:bg-secondary-700 hover:bg-opacity-20 w-full"
            : "bg-white bg-opacity-20  border-gray-500 hover:bg-white hover:bg-opacity-15 w-full"
        }
        onClick={()=>setPaymentMethod("credit")}
      >
        Credit/Debit Card
      </Button>
      <Button
        className={
          paymentMethod === "monthly"
            ? "bg-secondary-900 bg-opacity-25 border-secondary-900 hover:bg-secondary-700 hover:bg-opacity-20 w-full"
            : "bg-white bg-opacity-20  border-gray-500 hover:bg-white hover:bg-opacity-15 w-full"
        }
        onClick={()=>setPaymentMethod("monthly")}
      >
        Monthly Invoice
      </Button>
      <Button
        className={
          paymentMethod === "debit"
            ? "bg-secondary-900 bg-opacity-25 border-secondary-900 hover:bg-secondary-700 hover:bg-opacity-20 w-full"
            : "bg-white bg-opacity-20  border-gray-500 hover:bg-white hover:bg-opacity-15 w-full"
        }
        onClick={()=>setPaymentMethod("debit")}
      >
        Direct Debit
      </Button>
    </Flex>
    </>
  );
};
