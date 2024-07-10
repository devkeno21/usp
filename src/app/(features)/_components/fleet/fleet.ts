import Car1 from "./car-1.png";
import Car2 from "./car-2.png";
import Car3Bg from "./e-bg.png";
import Car4 from "./car-4.png";
import Car5 from "./car-5.png";
import Car5Bg from "./rover-bg.png";
import Car6 from "./car-6.png";
import Car6Bg from "./s-bg.png";
import Car7 from "./car-7.png";
import Car7Bg from "./x-bg.png";
import Car8 from "./sprinter.png";
import Car9 from "./car-9.png";

import Modelx1 from "./gallery/model-x/model-x1.jpg";
import Modelx2 from "./gallery/model-x/model-x2.jpg";
// import Modelx3 from './gallery/model-x/model-x3.mp4'
import Modelx4 from "./gallery/model-x/model-x4.jpg";
import Modelx5 from "./gallery/model-x/model-x5.jpg";
import Modelx6 from "./gallery/model-x/model-x6.jpg";
import Modelx7 from "./gallery/model-x/model-x7.jpg";

import Models1 from "./gallery/model-s/model-s1.jpg";
import Models2 from "./gallery/model-s/model-s2.jpg";
import Models3 from "./gallery/model-s/model-s3.jpg";
import Models4 from "./gallery/model-s/model-s4.jpg";
import Models5 from "./gallery/model-s/model-s5.jpg";
import Models6 from "./gallery/model-s/model-s6.jpeg";

import RangeRover1 from "./gallery/range-rover/range-rover1.jpeg";
import RangeRover2 from "./gallery/range-rover/range-rover2.jpeg";
import RangeRover3 from "./gallery/range-rover/range-rover3.jpg";
import RangeRover4 from "./gallery/range-rover/range-rover4.jpeg";
import RangeRover5 from "./gallery/range-rover/range-rover5.jpeg";
import RangeRover6 from "./gallery/range-rover/range-rover6.png";
import RangeRover7 from "./gallery/range-rover/range-rover7.png";

import Escalade1 from "./gallery/escalade/escalade-1.jpeg";
import Escalade2 from "./gallery/escalade/escalade-2.jpeg";
import Escalade3 from "./gallery/escalade/escalade-3.jpeg";
import Escalade4 from "./gallery/escalade/escalade-4.jpeg";
import Escalade5 from "./gallery/escalade/escalade-5.png";
import Escalade6 from "./gallery/escalade/escalade-6.png";

import Sprinter1 from "./gallery/sprinter/sprinter-1.jpg";
import Sprinter2 from "./gallery/sprinter/sprinter-2.jpeg";
import Sprinter4 from "./gallery/sprinter/sprinter-4.jpg";
import Sprinter5 from "./gallery/sprinter/sprinter-5.jpg";
import Sprinter6 from "./gallery/sprinter/sprinter-6.png";
import Sprinter7 from "./gallery/sprinter/sprinter-7.jpg";

import Eclass1 from "./gallery/e-class/eclass1.jpeg";
import Eclass2 from "./gallery/e-class/eclass2.jpeg";
import Eclass3 from "./gallery/e-class/eclass3.jpeg";
import Eclass4 from "./gallery/e-class/eclass4.jpeg";

export const fleet = [
  {
    id: 1,
    title: "Mercedes E Class",
    brand: "Mercedes",
    description:
      "Indulge in the epitome of luxury with the Maybach Executive Sedan. Designed for the discerning traveler, this vehicle offers opulent interiors, state-of-the-art technology, and a whisper-quiet ride. Whether for business or pleasure, the Maybach ensures an extraordinary travel experience.",
    titleDesc: "Luxury Seating for up to 6",
    seats: 6,
    fleetType: "Executive Sedan",
    price: "$150",
    imageUrl: Car4.src,
    bgUrl: Car3Bg.src,
    gallery: [Eclass1.src, Eclass2.src, Eclass3.src, Eclass4.src],
    features: [
      "Exceptional design and innovative technology ",
      "Perfect for any executive",
    ],
  },
  {
    id: 3,
    title: "Escalade ESV Luxury SUV",
    brand: "Cadilac",
    description:
      "The Escalade ESV Luxury SUV combines bold design with exceptional comfort and performance. With its spacious interior, premium materials, and advanced technology, the Escalade offers a commanding presence on the road, perfect for family trips, business travel, and special occasions.",
    titleDesc: "Luxury Seating for up to 6",
    seats: 6,
    fleetType: "Luxury Sedan",
    price: "$125",
    imageUrl: Car1.src,
    bgUrl: Car2.src,
    gallery: [
      Escalade1.src,
      Escalade2.src,
      Escalade3.src,
      Escalade4.src,
      Escalade5.src,
      Escalade6.src,
    ],
    features: [
      "Full-size SUV that offers high-end features",
      "Semi-aniline leather seats",
    ],
  },
  {
    id: 4,
    title: "Range Rover Vogue",
    brand: "Range Rover",
    description:
      "The Range Rover Vogue combines luxury with rugged capability, making it the perfect choice for both city driving and off-road adventures. With its plush interiors, advanced features, and powerful performance, the Vogue offers a refined and versatile driving experience.",
    titleDesc: "Luxury Seating for up to 6",
    seats: 6,
    fleetType: "LUXURY",
    price: "$150",
    imageUrl: Car5.src,
    bgUrl: Car5Bg.src,
    gallery: [
      RangeRover1.src,
      RangeRover2.src,
      RangeRover3.src,
      RangeRover4.src,
      RangeRover5.src,
      RangeRover6.src,
      RangeRover7.src,
    ],
    features: [
      "Providing immense space with a power recline",
      "heated leather rear seats",
    ],
  },
  {
    id: 5,
    title: "Executive Eco Sedan (Tesla Model S)",
    brand: "Tesla",
    description:
      "Experience the future of driving with the Tesla Model S. This electric sedan offers exceptional performance, cutting-edge technology, and a sleek design. Enjoy the benefits of zero emissions, impressive acceleration, and an unparalleled driving experience with the Model S.",
    titleDesc: "Luxury Seating for up to 6",
    seats: 6,
    fleetType: "LUXURY",
    price: "$28.45",
    imageUrl: Car6.src,
    bgUrl: Car6Bg.src,
    gallery: [
      Models1.src,
      Models2.src,
      Models3.src,
      Models4.src,
      Models5.src,
      Models6.src,
    ],
    features: [
      "Zero-emission electric",
      "Unparalleled execution in all weather conditions",
    ],
  },
  {
    id: 6,
    title: "Executive Eco SUV (Tesla Model X)",
    brand: "Tesla",
    description:
      "The Tesla Model X is the ultimate electric SUV, offering remarkable performance, innovative technology, and striking design. With its falcon-wing doors, spacious interior, and advanced safety features, the Model X is perfect for families and tech enthusiasts alike.",
    titleDesc: "Luxury Seating for up to 6",
    seats: 6,
    fleetType: "LUXURY",
    price: "$28.45",
    imageUrl: Car7.src,
    bgUrl: Car7Bg.src,
    gallery: [
      //   Modelx3.src,
      Modelx1.src,
      Modelx2.src,
      Modelx4.src,
      Modelx5.src,
      Modelx6.src,
      Modelx7.src,
    ],
    features: [
      "One of the safest SUV's ever",
      "Zero-emission, all-electric vehicle ",
    ],
  },
  {
    id: 7,
    title: "Executive Minibus (Mercedes Sprinter)",
    brand: "Marcedes",
    description:
      "The Mercedes Sprinter is the ideal vehicle for group travel and transport, offering ample space and comfort. With its flexible seating arrangements, advanced safety features, and reliable performance, the Sprinter is perfect for corporate outings, airport transfers, and road trips.",
    titleDesc: "Luxury Seating for up to 6",
    seats: 6,
    fleetType: "LUXURY",
    price: "$28.45",
    imageUrl: Car8.src,
    bgUrl: Car8.src,
    gallery: [
      Sprinter1.src,
      Sprinter2.src,
      Sprinter4.src,
      Sprinter5.src,
      Sprinter6.src,
      Sprinter7.src,
    ],
    features: [
      "Transporting more prominent groups",
      "Executive-style leather seating, ample space",
    ],
  },
  {
    id: 8,
    title: "Executive Coach",
    brand: "Executive Coach",
    description:
      "Our passenger coaches, available in various sizes to accommodate 33/43/52/70 passengers, provide the ultimate group travel experience. Each coach is equipped with spacious seating, climate control, and modern amenities to ensure a comfortable and enjoyable ride for all passengers, ideal for corporate events, tours, and large gatherings.",
    titleDesc: "33/43/53/70 Passenger Coaches",
    seats: 70,
    fleetType: "LUXURY",
    price: "$345",
    imageUrl: Car9.src,
    bgUrl: Car9.src,
    gallery: [Car9.src],
    features: [
      "Travel in luxury and arrive in style",
      "Available in varying passenger sizes",
    ],
  },
];
