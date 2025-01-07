"use client";

import {
  Rocket,
  Brain,
  Network,
  Database,
  TrendingUp,
  UserPlus,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/cards/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/cards/ui/carousel";
import { Button } from "@/cards/ui/button";
import IncubationStages from "./IncubationStages";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Innovation = () => {
  const startups = [
    {
      name: "Snack House",
      description:
        "Food processing innovation focusing on sustainable production of snacks using natural, local ingredients.",
    },
    {
      name: "Only Destiny Farms",
      description:
        "Specializes in the cultivation of high-quality maize, cassava, and mushrooms.",
    },
    {
      name: "Without Grace Farms and Trading",
      description: "Major supplier of gourmet mushrooms and maize.",
    },
    {
      name: "Shaibu 22 Enterprise Ghana",
      description:
        "Produces essential oils from lemongrass and citronella, as well as organic products like black soap and herbal teas",
    },
    {
      name: "Organic Vegetable Crops Production",
      description:
        "Specializes in the production and processing of organic vegetables like tomatoes and lettuce, with plans to export to international markets",
    },
    {
      name: "Teeya’s Fresh Veggies & TFRESHFUSION",
      description:
        "Vertical farming operation producing fresh vegetables and juices, focusing on sustainability.",
    },
    {
      name: "Helicimush",
      description:
        "Cultivates and processes oyster mushrooms into products like mushroom porridge",
    },
    {
      name: "MetaSweet",
      description:
        "Natural alternative to sugar made from Stevia and watermelon plants, targeting health-conscious consumers",
    },
    {
      name: "EnsymeTechgh",
      description:
        "Produces feed enzymes to enhance digestion in poultry and pork, increasing farmer productivity.",
    },
    {
      name: "Agrivest Africa",
      description:
        "A crowdfunding platform that connects investors with smallholder farmers, promoting agricultural investment and rural empowerment",
    },
    {
      name: "Dielle",
      description:
        "Plant-based hair care products made from locally sourced ingredients, promoting sustainable farming partnerships with local farmers",
    },
    {
      name: "Seabrush",
      description:
        "Agro Processing venture focusing on cassava processing into value-added products like gari, kokonte, starch and animal feed.",
    },
  ];

  const IncubationStagesData = [
    {
      step: "1",
      title: "Preincubation program",
      description: (
        <>
          Identifying
          <strong className="text-red-500"> startup/business ideas, </strong>
          team building, market research, beginner{" "}
          <strong className="text-red-500"> pitching/training.</strong>
        </>
      ),
    },
    {
      step: "2",
      title: "Incubation program",
      description: (
        <>
          Building of database, innovative ideas entry, advance
          <strong className="text-red-500"> pitching/training</strong>, network
          and ecosystem, prototyping, market test, Business registration.
        </>
      ),
    },
    {
      step: "3",
      title: "Accelerator program",
      description: (
        <>
          Robust Due diligence process, legalities, intellectual property,
          <strong className="text-red-500"> funding/investment,</strong> scaling
          and growth, mass production, advance exit training.
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-green-800 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
            alt="Innovation Hub"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white p-8">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in">
              SIASD Innovation Hub
            </h1>
            <p className="text-xl max-w-2xl mx-auto animate-fade-in">
              A state-of-the-art ecosystem fostering creativity, innovation, and
              entrepreneurship
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <section className="mb-20">
          <Card className="bg-white/80 backdrop-blur">
            <CardContent className="p-6 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-green-800 mb-4">
                  Join Our Innovation Hub
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our Innovation Hub operates a vibrant facility and robust
                  incubation program including capacity building education,
                  training and development, mentorship and coaching, and
                  networking opportunities.
                </p>
                <Button className="bg-green-600 hover:bg-green-700">
                  <UserPlus className="mr-2" />
                  Subscribe Now to Join
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4 flex-1">
                <Card className="p-4 text-center">
                  <Rocket className="mx-auto mb-2 text-green-600 h-8 w-8" />
                  <h3 className="font-semibold">Innovation</h3>
                </Card>
                <Card className="p-4 text-center">
                  <Brain className="mx-auto mb-2 text-green-600 h-8 w-8" />
                  <h3 className="font-semibold">Mentorship</h3>
                </Card>
                <Card className="p-4 text-center">
                  <Network className="mx-auto mb-2 text-green-600 h-8 w-8" />
                  <h3 className="font-semibold">Networking</h3>
                </Card>
                <Card className="p-4 text-center">
                  <Database className="mx-auto mb-2 text-green-600 h-8 w-8" />
                  <h3 className="font-semibold">Resources</h3>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Incubation Programs Section - Added after Subscribe Now */}
        <section className="max-[767px]:mb-10 mb-20">
          <h2 className="text-3xl font-bold text-green-800 mb-8">
            Incubation Programs
          </h2>

          {/* SIASD Incubation Programme */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800">
                SIASD Incubation Programme (SIP)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                SIP is in partnership with the{" "}
                <span className="font-semibold">
                  World Bank Group, Ministry of Finance and NEIP
                </span>
                , a youth-led initiative, fostering agribusiness in Ghana,
                providing essential skills and resources to support aspiring
                entrepreneurs and promote sustainable farming practices.
              </p>
              <p className="text-gray-700">
                The program is designed to foster innovation, growth in
                Agripreneurship across agriculture sectors.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">
                  Current Cohort Highlights:
                </h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>14 promising agribusinesses</li>
                  <li>9 women-led ventures</li>
                  <li>7 officially registered businesses</li>
                  <li>
                    Operating across various segments of the agribusiness value
                    chain
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* YAI Program */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-800">
                Young Africa Innovates (YAI)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                We are a partner hub with MEST Africa for the UNDP Young Africa
                Innovates (YAI) program, providing programming support to
                innovators based on the environs and capacity of the hub,
                alongside 4 other partner hubs across regions in Ghana.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Program Focus Areas:</h4>
                <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li>Agriculture</li>
                  <li>Agro Processing</li>
                  <li>Food Science & Technology</li>
                  <li>Bio-composites</li>
                  <li>Biotechnology</li>
                  <li>Circular Economy</li>
                  <li>Recycling</li>
                  <li>Engineering</li>
                  <li>Water Sanitation Hygiene (WASH)</li>
                </ul>
              </div>
              <p className="text-gray-700">
                Our Hub is dedicated to provide extensive support to these
                innovators, as we recognise all our partners as stakeholders for
                successful program implementation through partnership, inclusion
                and capacity building.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
      {/*------------------ Startups Showcase ------------------*/}

      <section>
        <div className="relative max-[767px]:mb-10 mb-20 shadow-md p-4 md:p-12 lg:p-32 ">
          <video
            src="/images/innovationHub/backGroundVideo.mp4"
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <Card className="relative p-4 bg-white">
            <div>
              <h1 className="max-[767px]:text-2xl text-3xl lg:text-center my-4 text-green-800">
                Siriboe Agri Incubator
              </h1>
              <p className="opacity-80">
                A one-year in-house incubation program for innovators who have
                innovative ideas and need technical, and other supports online
                and in-person. Offers mentorship, funding opportunities, and
                support services to agribusiness startups.
              </p>
            </div>
            <div>
              <h1 className="text-xl my-4 text-green-800 md:text-2xl lg:text-xl">
                Incubation Stages
              </h1>
              <div className="grid max-[767px]:gap-4 md:gap-6 lg:flex gap-4">
                {IncubationStagesData.map((data) => (
                  <IncubationStages
                    key={data.step}
                    step={data.step}
                    title={data.title}
                    description={data.description}
                  />
                ))}
              </div>
            </div>

            <div>
              <h1 className="text-xl my-4 md:text-2xl text-green-800 lg:text-xl">
                Incubation Program Outline
              </h1>

              <ul className="max-[767px]:text-sm grid gap-2 md:gap-3 lg:grid-cols-2 lg:gap-2">
                <li className="flex items-center gap-2">
                  <IoIosCheckmarkCircleOutline className="text-green-800" />
                  Orientation
                </li>
                <li className="flex items-center gap-2">
                  <IoIosCheckmarkCircleOutline className="text-green-800" />
                  Design Thinking
                </li>
                <li className="flex items-center gap-2">
                  <IoIosCheckmarkCircleOutline className="text-green-800" />
                  initiation and Team presentation
                </li>
                <li className="flex items-center gap-2">
                  <IoIosCheckmarkCircleOutline className="text-green-800" />
                  Strategic Proposition and Value Mapping
                </li>
                <li className="flex items-center gap-2">
                  <IoIosCheckmarkCircleOutline className="text-green-800" />
                  Value Proposition Mapping II
                </li>
                <li className="flex items-center gap-2">
                  <IoIosCheckmarkCircleOutline className="text-green-800" />
                  Business Fundamentals
                </li>
                <li className="flex items-center gap-2">
                  <IoIosCheckmarkCircleOutline className="text-green-800" />
                  Data and Metrics
                </li>
                <li className="flex items-center gap-2">
                  <IoIosCheckmarkCircleOutline className="text-green-800" />
                  Building Powerful Business Relationships
                </li>
                <li className="flex items-center gap-2">
                  <IoIosCheckmarkCircleOutline className="text-green-800" />
                  Pitch DNA and Practice
                </li>
                <li className="flex items-center gap-2">
                  <IoIosCheckmarkCircleOutline className="text-green-800" />
                  Lean Methodology
                </li>
                <li className="flex items-center gap-2">
                  <IoIosCheckmarkCircleOutline className="text-green-800" />
                  Growth and Hacking
                </li>
                <li className="flex items-center gap-2">
                  <IoIosCheckmarkCircleOutline className="text-green-800" />
                  Demystifying the Fundraising Process
                </li>
                <li className="flex items-center gap-2">
                  <IoIosCheckmarkCircleOutline className="text-green-800" />
                  Pitching and Storytelling
                </li>
                <li className="flex items-center gap-2">
                  <IoIosCheckmarkCircleOutline className="text-green-800" />
                  Demo Day & Graduation
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      {/* Startups Showcase */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-10">
          Our Startups
        </h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {startups.map((startup, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full w-[15rem]">
                  <CardContent className="p-6">
                    <TrendingUp className="w-8 h-8 mb-4 text-green-600" />
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {startup.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {startup.description}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className=" flex jusity-between gap-12 w-full bg-red-500">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </section>

      {/*----------------- Impact and Sustainability (% and +figures) ---------------------*/}
      <section className=" w-[80%] m-auto bg-green-700 text-white p-12 grid lg:grid-cols-2 gap-8 items-center">
        {/* Impact and Sustainability */}
        <div className="flex flex-col items-center lg:items-start space-y-6">
          <div className="flex items-center space-x-4">
            <div className="bg-white text-green-700 p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 17l-5-5m0 0l5-5m-5 5h12"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-extrabold tracking-wide">
              Impact and Sustainability
            </h1>
          </div>
          <p className="text-lg text-center lg:text-left">
            Startups, Alumni, Products/Innovations, Funding, Ongoing Projects,
            and Impact: Metrics & Success Stories/Testimonials.
          </p>
          <button className="bg-white text-green-700 px-6 py-2 rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Makerspace Lab */}
        <div className="flex flex-col items-center lg:items-start space-y-6">
          <div className="flex items-center space-x-4">
            <div className="bg-white text-green-700 p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h11M9 21V3m0 0L3 10m6-7l6 7m0 0h11"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-extrabold tracking-wide">
              Makerspace Lab
            </h1>
          </div>
          <p className="text-lg text-center lg:text-left">
            Providing services with equipment and space to startups and
            researchers for product development in agriculture technology,
            processing, lab resources, prototyping tools, and technical support
            services.
          </p>
          <button className="bg-white text-green-700 px-6 py-2 rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300">
            Explore Lab
          </button>
        </div>
      </section>
    </div>
  );
};

export default Innovation;
