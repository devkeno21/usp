'use client'
import { Flex, TextInput } from "@mantine/core"

export const PersonalInformationForm = () => {
    return <div className=" text-white font-semibold">
        <p className="text-2xl">PERSONAL INFORMATION</p>

        <Flex gap={10} className="mt-5">
            <TextInput className="w-full" label="Business Name" withAsterisk/>
            <TextInput className="w-full" label="Business Address" withAsterisk/>
        </Flex>
        <Flex gap={10} className="mt-5">
            <TextInput className="w-full" label="City" withAsterisk/>
            <TextInput className="w-full" label="State" withAsterisk/>
        </Flex>
        <Flex gap={10} className="mt-5">
            <TextInput className="w-full" label="Zip/Post Code" withAsterisk/>
            <TextInput className="w-full" label="Primary Email" withAsterisk/>
        </Flex>
        <Flex gap={10} className="mt-5">
            <TextInput className="w-full" label="Primary Phone Number" withAsterisk/>
            <div className="w-full"></div>
        </Flex>
        <Flex gap={10} className="mt-5">
            <TextInput className="w-full" label="Manager" withAsterisk/>
            <TextInput className="w-full" label="Email" withAsterisk/>
        </Flex>
        <Flex gap={10} className="mt-5">
            <TextInput className="w-full" label="Phone Number" withAsterisk/>
            <div className="w-full"></div>
        </Flex>

        <p className="text-2xl mt-10">RESERVATION INFORMATION</p>
        <Flex gap={10} className="mt-5">
            <TextInput className="w-full" label="Reservation Contact" withAsterisk/>
            <TextInput className="w-full" label="Phone Number" withAsterisk/>
        </Flex>
        <Flex gap={10} className="mt-5">
            <TextInput className="w-full" label="Email" withAsterisk/>
            <div className="w-full"></div>
        </Flex>
        <Flex gap={10} className="mt-5">
            <TextInput className="w-full" label="Dispatch Contact" withAsterisk/>
            <TextInput className="w-full" label="Opening Hours" withAsterisk/>
        </Flex>
        <Flex gap={10} className="mt-5">
            <TextInput className="w-full" label="Phone Number" withAsterisk/>
            <TextInput className="w-full" label="Email" withAsterisk/>
        </Flex>
        <Flex gap={10} className="mt-5">
            <TextInput className="w-full" label="Accounting Contact" withAsterisk/>
            <div className="w-full"></div>
        </Flex>
        <Flex gap={10} className="mt-5">
            <TextInput className="w-full" label="Phone Number" withAsterisk/>
            <TextInput className="w-full" label="Email" withAsterisk/>
        </Flex>
    </div>
}