"use client";
import {
  Box,
  Button,
  Flex,
  Paper,
  Stack,
  Text,
  TextInput,
  Textarea,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconArrowRight } from "@tabler/icons-react";

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

type FormSchema = z.infer<typeof schema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormSchema>({ resolver: zodResolver(schema) });

  const theme = useMantineTheme();

  const onSubmit = (data: FormSchema) => {
    console.log(data);
  };

  return (
    <Box className="p-8 relative">
      <Paper withBorder className="rounded-md -mb-20 relative z-10" shadow="md">
        <Flex className="md:min-h-[60dvh] flex-col md:flex-row">
          <Stack className="md:w-1/2 p-6 justify-center">
            <Flex className="justify-center mx-auto flex-col gap-2">
              <Text
                tt="uppercase"
                className="text-xl md:text-5xl font-semibold"
              >
                Contact Us
              </Text>
              <Box
                bg={theme.colors.secondary[9]}
                className="w-[45%] p-1 mx-auto"
              ></Box>
            </Flex>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack>
                <TextInput
                  label="Name"
                  styles={{
                    input:{
                      color:"black",
                      border:"1px solid rgba(28, 25, 23, 0.25)"
                    }
                  }}
                  withAsterisk
                  {...register("name")}
                  error={errors?.name?.message}
                />
                <TextInput
                  label="Email"
                  styles={{
                    input:{
                      color:"black",
                      border:"1px solid rgba(28, 25, 23, 0.25)"
                    }
                  }}
                  withAsterisk
                  {...register("email")}
                  error={errors?.email?.message}
                />
                <Textarea
                  label="Subject"
                  withAsterisk
                  {...register("message")}
                  error={errors?.message?.message}
                  minRows={4}
                  autosize
                />
                <Button rightSection={<IconArrowRight/>} color={theme.colors.secondary[9]} className="w-fit mx-auto">Submit</Button>
              </Stack>
            </form>
          </Stack>
          <Box className="md:w-1/2">
            <iframe
              width={"100%"}
              height={"100%"}
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Maryland+(Washington)&amp;t=&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </Box>
        </Flex>
      </Paper>
    </Box>
  );
}
