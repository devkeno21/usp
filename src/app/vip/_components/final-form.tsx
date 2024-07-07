'use client'
import { Flex, TextInput } from "@mantine/core"

export const FinalForm = () => {
    return <div className=" text-white font-semibold">
        <p className="text-2xl">FINAL STEPS</p>

        <Flex gap={10} className="mt-5">
            <TextInput className="w-full" label="Name" withAsterisk/>
            <TextInput className="w-full" label="Role" withAsterisk/>
        </Flex>
        <Flex gap={10} className="mt-5">
            <TextInput className="w-full" label="Signature" withAsterisk/>
            <TextInput className="w-full" label="Date" withAsterisk/>
        </Flex>
     
    </div>
}