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
import Car8 from "./car-8.png";
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

import Eclass1 from "./gallery/e-class/eclass1.jpg";
import Eclass2 from "./gallery/e-class/eclass2.jpg";
import Eclass3 from "./gallery/e-class/eclass3.jpg";
import Eclass4 from "./gallery/e-class/eclass4.jpg";
import Eclass5 from "./gallery/e-class/eclass5.jpg";
import Eclass6 from "./gallery/e-class/eclass6.jpg";
import Eclass7 from "./gallery/e-class/eclass7.jpg";

export const fleet = [
  {
    id: 1,
    title: "Mercedes E Class",
    brand: "Mercedes",
    description: `The Mercedes E-Class combines exceptional design and innovative technology to provide a seamless journey. Perfect for any executive, this modern vehicle works with comprehensive and intelligent technology to enhance your trip, whether it be to a business meeting or a sporting event. Get there effortlessly with our Mercedes E-Class sedan.\n\n*Includes 15% discount   \n*All payments made by credit card will incur a 3.5% card processing fee \n*All hourly movements traveling outside of the M25 will also be subject to a mileage charge. \n*All cancellations made between the hours of 22:00 pm and 06:00 am will only be effective from 06:00 am. \n\nPlease get in touch with us for further details.`,
    titleDesc: "Luxury Seating for up to 6",
    seats: 6,
    fleetType: "Executive Sedan",
    price: "$150",
    imageUrl: Car4.src,
    bgUrl: Car3Bg.src,
    videoUrl:"_YZV22g_CZg",
    gallery: [
      Eclass1.src,
      Eclass2.src,
      Eclass3.src,
      Eclass4.src,
      Eclass5.src,
      Eclass6.src,
      Eclass7.src,
    ],
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
      "The Escalade is a luxury full-size SUV that offers high-end features, a plush ride, and powerful engine options.  The Escalade’s interior boasts luxury amenities such as semi-aniline leather seats, aluminum speaker grilles, adjustable interior ambient lighting, and a curved OLED digital dashboard that houses both the driver’s gauge cluster and infotainment system. The SUV also offers advanced technology features like Super Cruise adaptive cruise control, which enables hands-free driving, and an augmented reality navigation system. Apple CarPlay/Android Auto integration and a Wi-Fi hotspot are also standard.",
    titleDesc: "Luxury Seating for up to 6",
    seats: 6,
    fleetType: "Luxury Sedan",
    price: "$125",
    imageUrl: Car1.src,
    bgUrl: Car2.src,
    videoUrl:"lTVEkHfUKLk",
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
      "When you require the ultimate luxury SUV, look no further than our Range Rover Vogue. Providing immense space with a power recline and heated leather rear seats, the panoramic roof delivers excellent natural light to the vehicle. Also available with a long-wheelbase option for extra comfort.\n\n*Includes 15% discount   \n*All payments made by credit card will incur a 3.5% card processing fee \n*All hourly movements traveling outside of the M25 will also be subject to a mileage charge. \n*All cancellations made between the hours of 22:00 pm and 06:00 am will only be effective from 06:00 am. \n\nPlease get in touch with us for further details.",
    titleDesc: "Luxury Seating for up to 6",
    seats: 6,
    fleetType: "LUXURY",
    price: "$150",
    imageUrl: Car5.src,
    bgUrl: Car5Bg.src,
    videoUrl:"SBQlKwZnIFA",
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
      "Enter the eco fleet; the zero-emission electric Tesla Model S sets an industry standard for performance and safety. Tesla's all-electric power train delivers unparalleled execution in all weather conditions. Do your bit for the environment without compromising style by traveling in the world's first-ever premium all-electric sedan.\n\n*Includes 15% discount   \n*All payments made by credit card will incur a 3.5% card processing fee \n*All hourly movements traveling outside of the M25 will also be subject to a mileage charge. \n*All cancellations made between the hours of 22:00 pm and 06:00 am will only be effective from 06:00 am. \n\nPlease get in touch with us for further details.",
    titleDesc: "Luxury Seating for up to 6",
    seats: 6,
    fleetType: "LUXURY",
    price: "$28.45",
    imageUrl: Car6.src,
    bgUrl: Car6Bg.src,
    videoUrl:"-TSRWxqWSkk",
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
      "The Tesla Model X is deemed one of the safest SUV's ever. Built from the ground up as an electric vehicle, the body, chassis, restraints, and battery technology provide a very low probability of occupant injury. The Tesla X is a zero-emission, all-electric vehicle without compromising performance, speed, or comfort.\n\n*Includes 15% discount  \n*All payments made by credit card will incur a 3.5% card processing fee \n*All hourly movements traveling outside of the M25 will also be subject to a mileage charge. \n*All cancellations between 22:00 pm and 06:00 am will only be effective from 06:00 am.\n\nPlease get in touch with us for further details.",
    titleDesc: "Luxury Seating for up to 6",
    seats: 6,
    fleetType: "LUXURY",
    price: "$28.45",
    imageUrl: Car7.src,
    bgUrl: Car7Bg.src,
    videoUrl:"LLZtGpduhas",
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
      "You can maintain comfort and luxury, even when transporting more prominent groups. Our Mercedes Sprinter enables you to travel easily with executive-style leather seating, ample space, and a safe, comfortable ride, providing a pleasant commute for you and your colleagues/friends. Perfect for more significant group events and functions. Get to your destination conveniently and restfully with our Mercedes Sprinter.\n\n*Includes 15% discount   \n*All payments made by credit card will incur a 3.5% card processing fee \n*All hourly movements traveling outside of the M25 will also be subject to a mileage charge. \n*All cancellations made between the hours of 22:00 pm and 06:00 am will only be effective from 06:00 am. \n\nPlease get in touch with us for further details.",
    titleDesc: "Luxury Seating for up to 6",
    seats: 6,
    fleetType: "LUXURY",
    price: "$28.45",
    imageUrl: Car8.src,
    bgUrl: Car8.src,
    videoUrl:"BxAVmcpXIqo",
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
      "Travel in luxury and arrive in style on board one of our executive coaches, available in varying passenger sizes, ranging from 19 to 57 passenger vehicles. With immaculate interior features, including a rear lounge area, kitchen facilities, color lighting, and hostess service available on board (on selected coaches); these coaches are the pinnacle of excellence, sophistication, and the perfect start to your event.\n\n*Includes 15% discount   \n*All payments made by credit card will incur a 3.5% card processing fee \n*All hourly movements traveling outside of the M25 will also be subject to a mileage charge. \n*All cancellations made between the hours of 22:00 pm and 06:00 am will only be effective from 06:00 am.\n \nPlease get in touch with us for further details.",
    titleDesc: "33/43/53/70 Passenger Coaches",
    seats: 70,
    fleetType: "LUXURY",
    price: "$345",
    imageUrl: Car9.src,
    bgUrl: Car9.src,
    videoUrl:"mScks7rqtwM",
    gallery: [Car9.src],
    features: [
      "Travel in luxury and arrive in style",
      "Available in varying passenger sizes",
    ],
  },
];
