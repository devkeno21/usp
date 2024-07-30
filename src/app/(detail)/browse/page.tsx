"use client";

import {
  Box,
  Button,
  Checkbox,
  Flex,
  Group,
  RangeSlider,
  Slider,
  Stack,
  Text,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import { Breadcrumb } from "../_components/breadcrumb/breadcrumb.component";
import {
  IconArrowRight,
  IconPoint,
  IconSearch,
  IconX,
} from "@tabler/icons-react";
import { Accordion } from "@mantine/core";
import { useRouter } from "next/navigation";
import { fleet } from "@/app/(features)/_components/fleet/fleet";
import { useState } from "react";

export default function Browse() {
  const theme = useMantineTheme();
  const router = useRouter();
  const [carBrand, setCarBrand] = useState<string[]>([]);
  const [filteredFleets,setFilteredFleets] = useState(fleet)
  const [priceRange, setPriceRange] = useState<[number,number]>([95, 345]);
  const [seats,setSeats] = useState<number[]>([]);
  const [bodyStyle,setBodyStyle] = useState<string[]>([]);

  const onCarBrandChange = (brand: string) => {
    if (carBrand.includes(brand)) {
      setCarBrand(carBrand.filter((b) => b !== brand));
    } else {
      setCarBrand([...carBrand, brand]);
    }
  };

  const onBodyStyleChange = (style: string) => {
    if (bodyStyle.includes(style)) {
      setBodyStyle(bodyStyle.filter((b) => b !== style));
    } else {
      setBodyStyle([...bodyStyle, style]);
    }
  };
  const onCarSeatChange = (seat: number) => {
    if (seats.includes(seat)) {
      setSeats(seats.filter((s) => s !== seat));
    } else {
      setSeats([...seats, seat]);
    }
  };

  const onFilter =()=>{
    let temp =[...fleet];
    // filter by brand
    if(carBrand.length>0){
      temp = temp.filter(f=>carBrand.includes(f.brand));
    }

    // filter by seats
    if(seats.length>0){
      temp = temp.filter(f=>seats.includes(f.seats))
    }

    //filter by body style
    if(bodyStyle.length>0){
      temp = temp.filter(f=>bodyStyle.includes(f.type))
    }

    //filter by price
    temp= temp.filter(f=>{
      const price = parseFloat(f.price.replace(/[^0-9.]/g, ''))
      return price>=priceRange[0] && price<=priceRange[1]})

    

    setFilteredFleets(temp)
  }

  const onReset = ()=>{
    setCarBrand([])
    setSeats([])
    setPriceRange([95, 345])
    setFilteredFleets(fleet)
  }

  const onSearch=(query:string)=>{
    setFilteredFleets(fleet.filter(f=>f.title.toLowerCase().includes(query.toLowerCase())))
  }
  return (
    <>
      <Breadcrumb
        links={[
          { title: "Home", href: "/" },
          { title: "Browse Fleet", href: "#" },
        ]}
      />

      <Box className="p-5 flex flex-col md:flex-row gap-10">
        <Box className="w-full md:w-1/3 px-10 bg-white">
          <Flex justify="space-between">
            <p className="font-semibold text-xl">Filter By</p>
            <p className="text-sm text-slate-500 flex gap-2 items-center cursor-pointer" onClick={onReset}>
              Reset All <IconX size={14} />
            </p>
          </Flex>

          <TextInput
            placeholder="Search"
            rightSection={<IconSearch size={14} />}
            className="my-2 border rounded"
            styles={{
              input: {
                color: "black",
              },
            }}
            onChange={e=>onSearch(e.target.value)}
          />

          <Accordion>
            

            <Accordion.Item value="price" className="mt-5">
              <Accordion.Control className="text-semibold">
                Price Per Hour
              </Accordion.Control>
              <Accordion.Panel>
                <RangeSlider color={theme.colors.secondary[9]} min={95} max={345} value={priceRange} onChange={setPriceRange}/>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="brand" className="mt-5">
              <Accordion.Control className="text-semibold">
                Car Brand
              </Accordion.Control>
              <Accordion.Panel>
                <Box className="grid grid-cols-3 gap-y-5">
                  <Checkbox
                    label="Mercedes Benz"
                    color={theme.colors.secondary[9]}
                    size="xs"
                    checked={carBrand.includes("Mercedes")}
                    onChange={() => onCarBrandChange("Mercedes")}
                  />
                  <Checkbox
                    label="Tesla"
                    color={theme.colors.secondary[9]}
                    size="xs"
                    checked={carBrand.includes("Tesla")}
                    onChange={() => onCarBrandChange("Tesla")}
                  />
                  <Checkbox
                    label="Cadilac"
                    color={theme.colors.secondary[9]}
                    size="xs"
                    checked={carBrand.includes("Cadilac")}
                    onChange={() => onCarBrandChange("Cadilac")}
                  />
                  <Checkbox
                    label="Range Rover"
                    color={theme.colors.secondary[9]}
                    size="xs"
                    checked={carBrand.includes("RangeRover")}
                    onChange={() => onCarBrandChange("RangeRover")}
                  />
                </Box>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="style" className="mt-5">
              <Accordion.Control className="text-semibold">
                Body Style
              </Accordion.Control>
              <Accordion.Panel>
                <Box className="grid grid-cols-3 gap-5">
                  <Checkbox
                    label="Sedan"
                    color={theme.colors.secondary[9]}
                    size="xs"
                    onChange={()=>onBodyStyleChange("Sedan")}
                    checked={bodyStyle.includes("Sedan")}
                  />
                  <Checkbox
                    label="Suv"
                    color={theme.colors.secondary[9]}
                    size="xs"
                    onChange={()=>onBodyStyleChange("Suv")}
                    checked={bodyStyle.includes("Suv")}
                  />
                  <Checkbox
                    label="Van"
                    color={theme.colors.secondary[9]}
                    size="xs"
                    onChange={()=>onBodyStyleChange("Van")}
                    checked={bodyStyle.includes("Van")}
                  />
                  <Checkbox
                    label="Bus"
                    color={theme.colors.secondary[9]}
                    size="xs"
                    onChange={()=>onBodyStyleChange("Bus")}
                    checked={bodyStyle.includes("Bus")}
                  />
                </Box>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="seats" className="mt-5">
              <Accordion.Control className="text-semibold">
                Seats
              </Accordion.Control>
              <Accordion.Panel>
                <Box className="grid grid-cols-3 gap-10">
                  
                  <Checkbox
                    label="3 Seats"
                    color={theme.colors.secondary[9]}
                    size="xs"
                    onChange={() => onCarSeatChange(3)}
                    checked={seats.includes(3)}
                  />
                  <Checkbox
                    label="4 Seats"
                    color={theme.colors.secondary[9]}
                    size="xs"
                    onChange={() => onCarSeatChange(4)}
                    checked={seats.includes(4)}
                  />
                  <Checkbox
                    label="6 Seats"
                    color={theme.colors.secondary[9]}
                    size="xs"
                    onChange={() => onCarSeatChange(6)}
                    checked={seats.includes(6)}
                  />
                  <Checkbox
                    label="14 Seats"
                    color={theme.colors.secondary[9]}
                    size="xs"
                    onChange={() => onCarSeatChange(14)}
                    checked={seats.includes(14)}
                  />
                  <Checkbox
                    label="72 Seats"
                    color={theme.colors.secondary[9]}
                    size="xs"
                    onChange={() => onCarSeatChange(72)}
                    checked={seats.includes(72)}
                  />
                </Box>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>

          <Button
            className="mt-10"
            color={theme.colors.secondary[9]}
            fullWidth
            size="xl"
            onClick={onFilter}
          >
            Filter
          </Button>
        </Box>
        <Box className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredFleets.map((car, index) => (
            <Box className="relative w-full" key={index} h={300}>
              <Box className="h-full w-full absolute top-0">
                <Stack className="h-full items-center gap-2 bg-red-800  hover:opacity-0">
                  <Box
                    className="w-[100%] h-[100%]"
                    style={{
                      backgroundImage: `url(${car.imageUrl})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />

                  <Flex className="flex-col gap-1">
                    <Text fz="xl" tt="capitalize" c="white">
                      {car.title}
                    </Text>
                    <Text c="white" className="text-center">
                      {/* {car.titleDesc} */}
                      Luxury Seating for up to {car.seats}
                    </Text>
                  </Flex>

                  <Box>
                    <Button
                      size="xs"
                      color={theme.colors.primary[9]}
                      className="m-4"
                      rightSection={<IconArrowRight />}
                      onClick={() => router.push(car.id.toString())}
                    >
                      View Details
                    </Button>
                  </Box>
                </Stack>
              </Box>
              <Box className="h-full w-full absolute top-0">
                <Stack className="h-full items-center gap-2 bg-primary-900 opacity-0 hover:opacity-100">
                  <Box
                    className="w-[100%] h-[100%] absolute top-0"
                    style={{
                      backgroundImage: `url(${car.bgUrl})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      opacity: 0.2,
                    }}
                  />
                  <Box className="h-full absolute top-0">
                    <Stack className="h-full items-center justify-evenly">
                      <Flex className="flex-col gap-1">
                        <Text
                          fz="xl"
                          tt="capitalize"
                          c="white"
                          className="text-center"
                        >
                          {car.title}
                        </Text>
                        <Text c="white" className="text-center">
                          {/* {car.titleDesc} */}
                          Luxury Seating for up to {car.seats}
                        </Text>
                        <Text tt="capitalize" c="white" className="text-center">
                          {car.fleetType}
                        </Text>
                        <Text c="white" className="text-center">
                          Starting from: {car?.price}
                        </Text>
                        <Flex className="flex-col gap-2  p-4">
                          <Text tt="capitalize" c="white">
                            Key features
                          </Text>
                          <Box size={300}>
                            <ol className="text-white">
                              {car.features.map((feature, index) => (
                                <Flex
                                  key={index}
                                  className="items-center gap-2"
                                >
                                  <IconPoint color="white" fill="white" />
                                  <li key={index}>
                                    <Text className="font-semibold" c="white">
                                      {feature}
                                    </Text>
                                  </li>
                                </Flex>
                              ))}
                            </ol>
                          </Box>
                        </Flex>
                      </Flex>
                      <Box>
                        <Button
                          size="xs"
                          color={theme.colors.secondary[9]}
                          rightSection={<IconArrowRight />}
                          onClick={() => router.push(car.id.toString())}
                        >
                          View Details
                        </Button>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
