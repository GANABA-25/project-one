import React from "react";

import Facilities from "./Facilities";
import ServiceCard from "./ServiceCard";
import TraningCard from "./TrainingCard";
import CoursesCard from "./CoursesCard";

const facilitiesData = [
  {
    id: "1",
    image: "/images/service/trainingRoom.jpg",
    title: "Training Rooms and Lecture Blocks",
    description:
      "Our training rooms and lecture blocks are designed for impactful learning and collaboration. Each space is:",
    space1: "Spacious, well-lit, and ventilated.",
    space2: "Air-conditioned for maximum comfort.",
    space3: "Equipped with comfortable seating arrangements.",
    space4:
      "Fitted with smart screens for immersive digital and interactive presentations.",
    space5: "Enhanced with clear audio systems for seamless communication.",
    space6: "Capacity ranges 30-50",
    rate: "Hourly Rate: GHS 250",
  },
  {
    id: "2",
    image: "/images/landingImages/land5.jpg",
    title: "Conference Room",
    description:
      "Perfect for large-scale events, seminars, and workshops, our conference room provides:",
    space1: "Modern decor with customizable seating arrangements.",
    space2: "High-quality projection and audio systems.",
    space3: "Well-ventilated and spacious hall with good lighting.",
    space4: "A professional atmosphere for impactful engagements.",
    space5: "Capacity ranges 100-200.",
    rate: "Hourly Rate: GHS 400",
  },
  {
    id: "3",
    image: "/images/service/bedRoom.jpg",
    title: "Executive Boardroom",
    description:
      "For high-level meetings and strategic discussions, our executive boardroom offers:",
    space1: "An elegant and professional ambiance.",
    space2: "Premium leather chairs and a polished boardroom table.",
    space3: "Smart screen technology for presentations.",
    space4: "Air-conditioned comfort.",
    space5: "Refreshments available upon request.",
    space6: "Capacity ranges 10-20.",
    rate: "Hourly Rate: GHS 350",
  },
  {
    id: "4",
    image: "/images/service/library.jpg",
    title: "World Class Library",
    description:
      "Our library is a quiet and resourceful space for research, study, or private meetings, featuring:",
    space1: "Extensive resources and digital access.",
    space2: "Comfortable reading areas.",
    space3: "Access to high-speed Wi-Fi.",
    space4: "Air-conditioned comfort.",
    space5: "Capacity ranges 10-20.",
    rate: "Hourly Rate: GHS 150",
  },
  {
    id: "5",
    image: "/images/service/ICTLab.jpg",
    title: "ICT Lab",
    description:
      "Our ICT lab is ideal for tech training, workshops, and coding sessions, equipped with:",
    space1: "Modern computers and high-speed internet.",
    space2: "Interactive software tools and smart screens.",
    space3: "Comfortable workstations.",
    space4: "Capacity ranges 10-15.",
    rate: "Hourly Rate: GHS 300",
  },
  {
    id: "6",
    image: "/images/service/Lounge.jpg",
    title: "Lounge",
    description:
      "Relax and network in our stylish lounge, perfect for informal gatherings or breakout sessions. Amenities include:",
    space1: "Comfortable seating.",
    space2: "Refreshments and snacks available upon request.",
    space3: "A serene environment for casual conversations.",
    space4: "Capacity ranges 15-20.",
    rate: "Hourly Rate: GHS 200",
  },
  {
    id: "7",
    image: "/images/landingImages/park.jpg",
    title: "Well-Lawned Park with Summer Huts",
    description:
      "Host outdoor events, picnics, or team-building activities in our picturesque park featuring:",
    space1: "Manicured lawns.",
    space2: "Cozy summer huts for shade.",
    space3: "Ample space for creative setups.",
    space4: "Capacity ranges 100-200.",
    rate: "Hourly Rate: GHS 500",
  },
  {
    id: "8",
    image: "/images/landingImages/cafeteria.png",
    title: "Cafeteria",
    description:
      "Our cafeteria is available for dining and small group gatherings, offering:",
    space1: "A variety of delicious meals and beverages.",
    space2: "Flexible seating arrangements.",
    space3: "A clean and welcoming environment.",
    space4: "Capacity ranges 10-20.",
    rate: "Hourly Rate: GHS 150",
  },
  {
    id: "9",
    image: "/images/service/CoWorkSpace.jpg",
    title: "Co-Work Space",
    description:
      "For freelancers, entrepreneurs, and remote teams, our co-work space provides:",
    space1: "A productive and inspiring environment.",
    space2: "High-speed Wi-Fi and charging stations.",
    space3: "Flexible seating options.",
    space4: "Capacity ranges 15-20.",
    rate: "Hourly Rate: GHS 200",
  },
  {
    id: "10",
    image: "/images/landingImages/fishSmoking.jpg",
    title: "Fish Smoking Centre",
    description:
      "A specialized facility for fish processing and smoking, featuring:",
    space1: "Modern smoking equipment.",
    space2: "Hygienic workspaces.",
    rate: "Hourly Rate: GHS 300",
  },
  {
    id: "11",
    image: "/images/landingImages/coldRoom.jpg",
    title: "Cold Room with Refrigerators",
    description:
      "Ideal for storing perishables during events or business operations:",
    space1: "Spacious cold storage.",
    space2: "Reliable refrigeration systems.",
    rate: "Hourly Rate: GHS 250",
  },
  {
    id: "12",
    image: "/images/landingImages/fishAndMeet.jpg",
    title: "Fish and Meat Packaging Room",
    description: "Designed for hygienic and efficient packaging processes:",
    space1: "State-of-the-art equipment.",
    space2: "Clean and organized layout.",
    rate: "Hourly Rate: GHS 200",
  },
  {
    id: "13",
    image: "/images/landingImages/hostelRoom.jpg",
    title: "Hostel Accommodation",
    description: "For multi-day events or retreats, our hostel offers:",
    space1: "Comfortable and secure rooms.",
    space2: "Access to shared amenities such as kitchens and lounges.",
    rate: "Hourly Rate: GHS 100 per room",
  },
  {
    id: "14",
    image: "/images/landingImages/land6.jpg",
    title: "Makerspace",
    description:
      "Unleash creativity in our makerspace, ideal for prototyping, hands-on workshops, and innovation labs:",
    space1: "Equipped with 3D printers, crafting tools, and more.",
    space2: "A collaborative environment for innovators.",
    rate: "Hourly Rate: GHS 300",
  },
];

const serviceCardData = [
  {
    id: "1",
    title: "Agriculture and Agribusiness Education",
    description:
      "Providing essential knowledge and skills to enhance agricultural practices and support agribusiness growth.",
  },
  {
    id: "2",
    title: "Training and Capacity Building and Skills Development",
    description:
      "Offering training programs to empower individuals with practical skills and enhance their professional capabilities.",
  },
  {
    id: "3",
    title: "Crop Production and Horticulture",
    description:
      "Focusing on efficient crop cultivation methods and horticultural practices to improve food production and sustainability.",
  },
  {
    id: "4",
    title: "Animal Husbandry",
    description:
      "Specialized services in managing livestock for improved productivity, health, and welfare.",
  },
  {
    id: "5",
    title: "Agricultural Mechanization Services",
    description:
      "Providing mechanized solutions to enhance farm productivity through modern agricultural equipment and technology.",
  },
  {
    id: "6",
    title: "Seed and Seedlings Production",
    description:
      "Producing high-quality seeds and seedlings to ensure successful crop growth and improve agricultural yields.",
  },
  {
    id: "7",
    title: "Irrigation Services",
    description:
      "Offering efficient irrigation systems to ensure optimal water use and improve crop yields in various climates.",
  },
  {
    id: "8",
    title: "Agricultural Extension Services",
    description:
      "Providing expert advice and guidance to farmers, helping them adopt innovative practices to enhance their agricultural output.",
  },
];

const trainingData = [
  {
    id: "1",
    header: "Events Hosting",
    title: "Take the first steps",
    description:
      "Access improved institute’s state-of-the-art digital blocks and Hub’s well-furnished facilities to host agribusiness-related events, conferences, workshops, and seminars. Get farm and food process equipment and facilities like kitchen space, storage space, warehouse, production and processing units as your makerspace.  Our services include Developed activities, such as farm stays, educational tours, and hands-on workshops, for visitors, cooperate, educational institutes and industry field trips.",
    color: "green",
  },
  {
    id: "2",
    header: "Incubation Services ",
    title: "Take the first steps",
    description:
      "Offer mentorship, funding, and support services to agri-startups in exchange for equity or a share of future profits.The SIASD Innovation Hub is a state-of-the-art ecosystem that operates a vibrant facility and robust incubation program including capacity building education, training and development, mentorship and coaching, networking to foster creativity, innovation and entrepreneurship.",
    color: "blue",
  },
  {
    id: "3",
    header: "Makerspace Lab",
    title: "Take the first steps",
    description:
      "Provide services with equipment and space to startups and researchers for product development in agriculture technology; lab resources, prototyping tools, and technical support services. ",
    color: "yellow",
  },
];
// const trainingData2 = [
//   {
//     id: "3",
//     header: "Farmers Market",
//     title: "Take the first steps",
//     description:
//       "Establish a weekly farmers market where local producers can sell their goods directly to consumers. The hub can earn revenue through stall rentals and a percentage of sales. ",
//     color: "blue",
//   },
//   {
//     id: "4",
//     header: "Consultation ",
//     title: "Take the first steps",
//     description:
//       "Provide expert advisory services to farms and agribusinesses; developing business plans, optimizing supply chains, or implementing new technologies. ",
//     color: "green",
//   },
//   {
//     id: "5",
//     header: "Online Marketplace",
//     title: "Take the first steps",
//     description:
//       "Create an online platform for buying and selling agricultural products and services. The hub can take a commission from each transaction. ",
//     color: "blue",
//   },
// ];

const courseData = [
  {
    id: "1",
    image: "/images/landingImages/Mushroom.jpg",
    header: "Mushroom Production",
    content: "  Introduction to mushroom farming ",
    strategy: "Hands-on workshops at the institute's demonstration farm",
    outcome:
      " Participants will learn how to cultivate mushrooms with low capital and earn immediate returns.",
    duration: "2 weeks",
  },
  {
    id: "2",
    image: "/images/landingImages/poultry-farm.jpeg",
    header: "Poultry Production (Broilers and Layers)",
    content: "Basics of poultry farming",
    strategy: "Practical sessions with live demonstrations",
    outcome:
      "Ability to set up and manage poultry operations with a small initial investment.",
    duration: "2 weeks",
  },
  {
    id: "3",
    image: "/images/landingImages/beeKeeping.jpg",
    header: "Bee Keeping/Honey",
    content: "Introduction to beekeeping",
    strategy: "Practical beekeeping sessions",
    outcome:
      " Participants will learn how to cultivate mushrooms with low capital and earn immediate returns.",
    duration: "1 weeks",
  },
  {
    id: "4",
    image: "/images/landingImages/green-vegetable.jpg",
    header: "Production (Apiculture)",
    content: "Setting up and managing beehives",
    strategy: "Collaboration with local beekeepers for field experience",
    outcome: "Establish small honey-producing units",
    duration: "2 weeks",
  },
];

const Service = () => {
  return (
    <>
      <section className="relative h-[35rem] w-screen mb-16 lg:h-[45rem] montserrat-regular">
        <img
          width={500}
          height={500}
          className="absolute object-cover h-[35rem] w-full lg:h-[45rem]"
          src="/images/landingImages/farmer.jpg"
          alt="farmBackground"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 space-y-4 z-10">
          <h1 className="text-4xl md:text-5xl montserrat-bold">
            Siriboe Services
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl">
            Siriboe Farms believes in giving farmers and entrepreneurs authentic
            conditions to grow their trades and manufacture{" "}
            <strong className="bg-green-800 p-1 rounded-lg">
              {" "}
              nutritious food items on a worldwide scale.
            </strong>{" "}
            We are a group of people who pride ourselves on being{" "}
            <strong className="text-red-600 p-1 rounded-lg">unique</strong> and
            on having the desire to create.
          </p>
        </div>
      </section>

      {/*--------------------- SERVICES ---------------------*/}
      <section className="max-[767px]:w-[90%] w-[98%] m-auto grid gap-4 mb-16 montserrat-regular">
        <div className="text-center grid gap-4">
          <h1 className="text-3xl uppercase md:text-4xl lg:text3xl montserrat-bold">
            SERVICES
          </h1>
          <p className="text-sm md:text-xl">
            SIASD specialized areas span across
          </p>
        </div>
        <div className="grid max-[767px]:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {serviceCardData.map((data) => (
            <ServiceCard
              key={data.id}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </section>

      {/*------------------- TRAINING ------------------- */}
      <section className="mb-[100rem] md:mb-[70rem] lg:mb-52 montserrat-regular">
        <div className="relative w-screen h-[40rem] md:w-full md:h-full text-white mb-32 shadow-xl lg:h-[48rem]">
          <div>
            <img
              width={500}
              height={500}
              className="object-cover w-screen h-[40rem] md:h-[200%] absolute lg:h-[48rem]"
              src="/images/service/training.jpg"
              alt="farmBackground"
            />
            <div className="absolute md:h-[200%] inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90 lg:h-full" />
            <div className="max-[767px]:top-5 relative px-6 max-w-2xl md:top-8 lg:top-32 lg:left-64">
              <h1 className="text-5xl montserrat-bold">Training Programmes</h1>
              <p className="mt-4 text-lg font">
                Specialized courses in agribusiness and agricultural technology.
                Courses on sustainable farming practices or precision
                agriculture for students, professionals, farmers, individuals,
                and corporates. SIASD partners with experts, organizations, and
                businesses to coordinate business and technical workshops, food
                and farm training, and SME business courses.
              </p>
            </div>
          </div>
          <div className="grid gap-4 max-[767px]:grid-cols-1 max-[767px]:top-[29rem] max-[767px]:left-4 w-[90%] m-auto md:grid-cols-1 md:gap-8 md:top-72 md:left-10 lg:grid-cols-3 lg:gap-3 lg:top-[29rem] lg:left-14 absolute">
            {trainingData.map((data) => (
              <TraningCard
                key={data.id}
                header={data.header}
                title={data.title}
                description={data.description}
                color={data.color}
              />
            ))}
          </div>
        </div>

        {/* <div className="w-[90%] m-auto grid grid-cols-3 gap-3">
          {trainingData2.map((data) => (
            <TraningCard
              key={data.id}
              header={data.header}
              title={data.title}
              description={data.description}
              color={data.color}
            />
          ))}
        </div> */}
      </section>
      {/*-------------------------- Short Courses in Agriculture and Agribusiness ----------------------------*/}
      <section className="montserrat-regular flex flex-col md:flex-row items-center gap-10 p-8 bg-gradient-to-r from-green-700 to-green-500 mb-14 shadow-xl md:grid lg:flex">
        <div className="w-full md:w-full">
          <img
            className="w-full h-auto rounded-lg shadow-xl"
            src="/images/contactTalk.jpg"
            alt="Agribusiness Training"
          />
        </div>

        <div className="w-full md:w-full  space-y-6 text-white">
          <h1 className="text-3xl montserrat-bold">
            Short Courses in Agriculture and Agribusiness
          </h1>
          <div className="flex justify-center items-center gap-0.5">
            <div className="bg-white w-[20%] md:w-[10%] lg:w-[10%] h-2" />
            <div className="bg-black w-[40%] md:w-[20%] lg:w-[10%] h-2" />
          </div>
          <h2 className="text-xl montserrat-semibold">
            Comprehensive short courses for the Siriboe Institute of
            Agribusiness and Skills Development
          </h2>
          <p className="text-justify leading-relaxed">
            These practical courses equip participants with the skills to start
            and operate their own farms. Areas of focus include mushroom,
            poultry, honey, fish production (tilapia and catfish), pig, goat,
            and sheep, as well as vegetable crop production. The courses cover
            the entire agricultural value chain, targeting local farmers,
            students interested in Agripreneurship, professionals seeking
            additional income streams, and individuals exploring side hustle
            opportunities.
          </p>
          <p className="text-justify leading-relaxed">
            Designed to be practical and hands-on, these courses consider
            participants' resource constraints, ensuring affordability and
            feasibility. The training emphasizes skills that are easy to
            implement, enabling participants to start and manage their own farms
            successfully.
          </p>
        </div>
      </section>

      {/*---------------- Course Structure Overview ----------------*/}
      <section className="shadow-2xl py-8 mb-16 montserrat-regular">
        <section className="grid gap-8 montserrat-regular">
          <div
            className="relative bg-cover bg-center py-12 px-6"
            style={{
              backgroundImage: "url('/images/landing.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="relative z-10">
              <h1 className="text-4xl uppercase montserrat-bold text-white mb-8 text-center tracking-wide">
                Course Structure Overview
              </h1>
              <p className="text-lg text-gray-200 mb-12 text-center leading-relaxed">
                Target Audience: Local farmers, agripreneurs, professionals
                seeking extra income, and individuals looking for side hustle
                opportunities.
              </p>

              <div className="flex flex-col md:flex-row justify-center items-center mb-16">
                <div className="bg-gradient-to-r from-green-700 to-green-500 grid gap-2 text-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h2 className="text-3xl montserrat-bold">Course Duration</h2>
                  <p className="text-lg text-center">1-4 weeks per course</p>
                  <div className="flex justify-center items-center gap-2">
                    <div className="bg-white w-1/5 h-2 rounded-md" />
                    <div className="bg-black w-2/5 h-2 rounded-md" />
                  </div>
                </div>
              </div>

              <div className="text-left max-w-4xl mx-auto space-y-8 text-gray-200 mb-16">
                <p className="text-lg leading-relaxed">
                  <span className="montserrat-bold text-green-300">
                    Delivery Mode:{" "}
                  </span>
                  Combination of on-site practicals, field visits, and online
                  modules (where applicable).
                </p>
                <p className="text-lg leading-relaxed">
                  <span className="montserrat-bold text-green-300">
                    Cost Structure:{" "}
                  </span>
                  Affordable fees, with options for installment payments,
                  partial scholarships, or government support to make the
                  courses accessible.
                </p>
              </div>
            </div>
          </div>

          <div className="w-[95%] m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {courseData.map((data) => (
              <CoursesCard
                key={data.id}
                image={data.image}
                header={data.header}
                content={data.content}
                strategy={data.strategy}
                outcome={data.outcome}
                duration={data.duration}
              />
            ))}
          </div>
        </section>

        <div className=" flex justify-center items-center my-4">
          <button className="bg-black p-2 rounded-lg text-white hover:bg-green-700 transition montserrat-bold">
            More Information
          </button>
        </div>
      </section>

      {/*----------------- FACILITIES -----------------*/}
      <section className="grid gap-5 w-[90%] m-auto mb-16 montserrat-regular">
        <div className="grid max-[767px]:gap-4 text-center md:gap-4 lg:gap-5">
          <h1 className="text-3xl uppercase montserrat-bold md:text-4xl lg:text3xl">
            Our Facilities
          </h1>
          <p className="text-sm md:text-xl">
            SIASD offers a wide range of versatile and modern facilities
            designed to meet your event, meeting, and training needs. Whether
            you’re hosting a corporate conference, a team brainstorming session,
            or a private gathering, our state-of-the-art amenities ensure a
            seamless and comfortable experience. Below are our facilities, their
            features, and competitive hourly rates:
          </p>
        </div>

        <div className="grid max-[767px]:grid-cols-1 lg:grid-cols-2 gap-4">
          {facilitiesData.map((data) => (
            <Facilities
              key={data.id}
              image={data.image}
              title={data.title}
              description={data.description}
              space1={data.space1}
              space2={data.space2}
              space3={data.space3}
              space4={data.space4}
              space5={data.space5}
              space6={data.space6}
              rate={data.rate}
            />
          ))}
        </div>
      </section>

      <section className="relative h-[30rem] w-screen mb-16 montserrat-regular">
        <img
          className="absolute object-cover w-full h-full"
          src="/images/landingImages/land6.jpg"
          alt="farmBackground"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black/90" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-8 space-y-6 z-10">
          <h1 className="montserrat-bold text-3xl md:text-5xl text-center">
            Why Choose SIASD Facilities?
          </h1>
          <ul className="text-sm md:text-lg list-disc list-inside space-y-2">
            <li>Convenient location and ample parking.</li>
            <li>
              Professional on-site support to ensure your event’s success.
            </li>
            <li>Affordable rates without compromising quality.</li>
            <li>Flexible booking options tailored to your needs.</li>
          </ul>
          <p className="text-center md:text-lg">
            Book your space today and experience unmatched excellence at SIASD!
            For inquiries or reservations, contact us at:
          </p>
          <div className="text-center grid gap-4">
            <h2 className="text-xl montserrat-bold">Facility Manager</h2>
            <ul className="text-sm md:text-base space-y-1">
              <li>Tel: 0557260049</li>
              <li>Email: atopare.siasd@gmail.com</li>
            </ul>
          </div>
        </div>
      </section>

      {/*--------------------- TRAINING FEES ---------------------*/}
      <section className="py-8 bg-gray-100 montserrat-regular">
        <div className="grid gap-2 mb-8">
          <h1 className="text-4xl text-center montserrat-bold">
            Training Fees
          </h1>
          <div className="flex justify-center items-center gap-0.5">
            <div className="bg-green-800 w-[20%] md:w-[10%] lg:w-[10%] h-2" />
            <div className="bg-black w-[40%] md:w-[20%] lg:w-[10%] h-2" />
          </div>
        </div>

        <div className="mx-auto px-4 max-[767px]:text-sm">
          <table className="w-full table-auto border-collapse border border-gray-300 bg-white shadow-md">
            <thead>
              <tr className="bg-green-600 text-white montserrat-bold">
                <th className="border border-gray-300 px-4 py-2">SN</th>
                <th className="border border-gray-300 px-4 py-2">
                  Course Module
                </th>
                <th className="border border-gray-300 px-4 py-2">Duration</th>
                <th className="border border-gray-300 px-4 py-2">Fees</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  sn: 1,
                  course: "Mushroom Production",
                  duration: "2 weeks",
                  fees: "GHC 1500",
                },
                {
                  sn: 2,
                  course: "Poultry (Broilers & Layers) Production",
                  duration: "2 weeks",
                  fees: "GHC 1000",
                },
                {
                  sn: 3,
                  course: "Bee Keeping/Honey Production (Apiculture)",
                  duration: "1 week",
                  fees: "GHC 600",
                },
                {
                  sn: 4,
                  course: "Fish (Tilapia & Catfish) Farming",
                  duration: "2 weeks",
                  fees: "GHC 1000",
                },
                {
                  sn: 5,
                  course: "Pig Farming",
                  duration: "2 weeks",
                  fees: "GHC 1000",
                },
                {
                  sn: 6,
                  course: "Goat and Sheep Farming",
                  duration: "2 weeks",
                  fees: "GHC 1000",
                },
                {
                  sn: 7,
                  course: "Vegetable Crops Production",
                  duration: "2 weeks",
                  fees: "GHC 1500",
                },
                {
                  sn: 8,
                  course: "Maize Production",
                  duration: "1 week",
                  fees: "GHC 600",
                },
                {
                  sn: 9,
                  course: "Cassava Production",
                  duration: "1 week",
                  fees: "GHC 600",
                },
                {
                  sn: 10,
                  course: "Rabbit Farming",
                  duration: "1 week",
                  fees: "GHC 500",
                },
                {
                  sn: 11,
                  course:
                    "Black Soldier & Fly Larvae Meal (Akokono farming) Production",
                  duration: "1 week",
                  fees: "GHC 800",
                },
                {
                  sn: 12,
                  course: "Grasscutter, Guinea pig",
                  duration: "1 week",
                  fees: "GHC 500",
                },
              ].map(({ sn, course, duration, fees }) => (
                <tr key={sn} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {sn}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{course}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {duration}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {fees}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Service;
