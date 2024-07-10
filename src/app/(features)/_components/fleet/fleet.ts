import Car1 from "./car-1.png";
import Car2 from "./car-2.png";
import Car3 from "./car-3.png";
import Car3Bg from "./e-bg.png";
import Car4 from "./car-4.png";
import Car5 from "./car-5.png";
import Car5Bg from "./rover-bg.png";
import Car6 from "./car-6.png";
import Car6Bg from "./s-bg.png";
import Car7 from "./car-7.png";
import Car7Bg from "./x-bg.png";
import Car8 from "./car-8.png";
import Car9 from "./car-9.png";

export const fleet = [
    {
      id: 1,
      title: "Mercedes E Class",
      titleDesc: "Luxury Seating for up to 6",
      fleetType: "Executive Sedan",
      price: "$150",
      imageUrl: Car4.src,
      bgUrl: Car3Bg.src,
      features: [
        "Exceptional design and innovative technology ",
        "Perfect for any executive",
      ],
    },
    {
      id: 3,
      title: "Escalade ESV Luxury SUV",
      titleDesc: "Luxury Seating for up to 6",
      fleetType: "Luxury Sedan",
      price: "$125",
      imageUrl: Car1.src,
      bgUrl: Car2.src,
      features: [
        "Full-size SUV that offers high-end features",
        "Semi-aniline leather seats",
      ],
    },
    {
      id: 4,
      title: "Range Rover Vogue",
      titleDesc: "Luxury Seating for up to 6",
      fleetType: "LUXURY",
      price: "$150",
      imageUrl: Car5.src,
      bgUrl: Car5Bg.src,
      features: [
        "Providing immense space with a power recline",
        "heated leather rear seats",
      ],
    },
    {
      id: 5,
      title: "Executive Eco Sedan (Tesla Model S)",
      titleDesc: "Luxury Seating for up to 6",
      fleetType: "LUXURY",
      price: "$28.45",
      imageUrl: Car6.src,
      bgUrl: Car6Bg.src,
      features: [
        "Zero-emission electric",
        "Unparalleled execution in all weather conditions",
      ],
    },
    {
      id: 6,
      title: "Executive Eco SUV (Tesla Model X)",
      titleDesc: "Luxury Seating for up to 6",
      fleetType: "LUXURY",
      price: "$28.45",
      imageUrl: Car7.src,
      bgUrl: Car7Bg.src,
      features: [
        "One of the safest SUV's ever",
        "Zero-emission, all-electric vehicle ",
      ],
    },
    {
      id: 7,
      title: "Executive Minibus (Mercedes Sprinter)",
      titleDesc: "Luxury Seating for up to 6",
      fleetType: "LUXURY",
      price: "$28.45",
      imageUrl: Car8.src,
      bgUrl: Car8.src,
      features: [
        "Transporting more prominent groups",
        "Executive-style leather seating, ample space",
      ],
    },
    {
      id: 7,
      title: "Executive Coach",
      titleDesc: "33/43/53/70 Passenger Coaches",
      fleetType: "LUXURY",
      price: "$345",
      imageUrl: Car9.src,
      bgUrl: Car9.src,
      features: [
        "Travel in luxury and arrive in style",
        "Available in varying passenger sizes",
      ],
    },
  ];