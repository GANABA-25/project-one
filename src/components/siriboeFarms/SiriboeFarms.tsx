import React from "react";

import Animals from "./Animals";
import PartnersCard from "./PartnersCard";

import { Card, CardContent, CardHeader, CardTitle } from "@/cards/ui/card";
import { BsNewspaper } from "react-icons/bs";
import { SiCoinmarketcap } from "react-icons/si";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const SiriboeFarms = () => {
  const animalFarmData = [
    {
      id: "1",
      image: "/images/landingImages/fish.jpg",
      title: "Fish production (Tilapia and Catfish)",
    },
    {
      id: "2",
      image: "/images/landingImages/poultry-farm.jpeg",
      title: "Poultry production",
    },
    {
      id: "3",
      image: "/images/landingImages/Goat-sheep.jpg",
      title: "Goat and sheep production",
    },
    {
      id: "4",
      image: "/images/landingImages/Mushroom.jpg",
      title: "Mushroom production",
    },
    {
      id: "5",
      image: "/images/landingImages/piggery.jpg",
      title: "Piggery production",
    },
    {
      id: "6",
      image: "/images/landingImages/Guinea-pig-farm.jpg",
      title: "Rabbitry, grasscutter and guinea pig production",
    },
    {
      id: "7",
      image: "/images/landingImages/green-vegetable.jpg",
      title: "Vegetable production",
    },
    {
      id: "8",
      image: "/images/landingImages/snails-farm.jpg",
      title: "Snail Farming",
    },
    {
      id: "9",
      image: "/images/landingImages/ducklings.jpg",
      title: "Ducks",
    },
    {
      id: "10",
      image: "/images/landingImages/Ducks.jpeg",
      title: "Geese and Goose",
    },
    {
      id: "11",
      image: "/images/landingImages/ostriches.jpg",
      title: "Ostriches",
    },
  ];

  const partnersData = [
    {
      id: "1",
      name: "Kwame Nkrumah University of Science and Technology",
      logo: "/images/partners logos/KNUST.png",
    },
    {
      id: "2",
      name: "Centre for Scientific and Industrial Research (CSIR)",
      logo: "/images/partners logos/csir.png",
    },
    {
      id: "3",
      name: "Kwadaso Agric College",
      logo: "/images/partners logos/Kwadaso agric 2.jpg",
    },
    {
      id: "4",
      name: "World Bank Group",
      logo: "/images/partners logos/WorldBank_Logo_optimized-17.png",
    },
    {
      id: "5",
      name: "Ministry of Finance",
      logo: "/images/partners logos/mof 1.jpg",
    },
    { id: "6", name: "NEIP", logo: "/images/partners logos/Neip (1).png" },
    { id: "7", name: "UNDP", logo: "/images/partners logos/UNDP_YAI.png" },
    {
      id: "8",
      name: "MEST Africa",
      logo: "/images/partners logos/MEST.png",
    },
    {
      id: "9",
      name: "Siriboe Farms",
      logo: "/images/partners logos/KNUST.png",
    },
    {
      id: "10",
      name: "Juaben Oil Mill",
      logo: "/images/partners logos/KNUST.png",
    },
  ];
  return (
    <>
      {/*--------------- BACKGROUNG IMAGE ---------------*/}
      <section className="relative h-[45rem] w-screen mb-16">
        <img
          width={500}
          height={500}
          className="absolute object-cover w-full lg:h-[45rem]"
          src="/images/landingImages/farmer.jpg"
          alt="farmBackground"
        />

        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 space-y-4 z-10">
          <h1 className="text-4xl font-bold md:text-5xl">Siriboe Farms</h1>
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

      {/*---------------- FARM ANIMALS ----------------*/}
      <div className="w-[90%] lg:w-[80%] m-auto">
        <section className="grid gap-4 mb-16">
          <div>
            <h1 className="text-3xl text-green-800 md:text-4xl lg:text-3xl">
              Siriboe Farms Animals
            </h1>
            <div className="flex gap-0.5">
              <div className="bg-green-800 w-[20%] md:w-[10%] lg:w-[5%] h-2" />
              <div className="bg-black w-[40%] md:w-[20%] lg:w-[10%] h-2" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-2">
            {animalFarmData.map((animalData) => (
              <Animals
                key={animalData.id}
                image={animalData.image}
                title={animalData.title}
              />
            ))}
          </div>
        </section>

        {/*-------------------- MARKET --------------------*/}
      </div>

      <div className="w-[90%] lg:w-[95%] m-auto mb-16 shadow-md">
        <Card className="p-4">
          <section className="relative bg-white py-10 px-6 md:px-16">
            <div className="grid gap-4 mb-8 text-center">
              <div className=" flex justify-center items-center gap-2">
                <h1 className="text-4xl font-bold text-green-800">
                  Our Market
                </h1>
                <SiCoinmarketcap className=" text-2xl text-green-800" />
              </div>

              <p className="text-lg text-gray-700">
                Establish shops for in-house sales of produce and a weekly
                farmers market where local producers can sell their goods
                directly to consumers.
              </p>
            </div>

            <div className="relative mb-8">
              <img
                width={500}
                height={500}
                className="object-cover w-full h-[20rem] rounded-lg shadow-lg lg:h-[30rem]"
                src="/images/Farms/fishFarming1.jpg"
                alt="Fresh Produce and Market"
              />
              <div className="absolute inset-0 bg-black/60 rounded-lg"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Fresh Produce & Market
                </h2>
                <p className="text-lg mt-2 max-w-xl">
                  A hub for fresh vegetables, meat, mushrooms, and more,
                  supporting local farmers and sustainable practices.
                </p>
              </div>
            </div>

            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm md:text-base text-gray-800">
              <li className="bg-green-600 text-white rounded-lg p-2 text-center">
                Product
              </li>
              <li className="bg-green-600 text-white rounded-lg p-2 text-center">
                Vegetables
              </li>
              <li className="bg-green-600 text-white rounded-lg p-2 text-center">
                Meat
              </li>
              <li className="bg-green-600 text-white rounded-lg p-2 text-center">
                Mushroom
              </li>
              <li className="bg-green-600 text-white rounded-lg p-2 text-center">
                Fish
              </li>
              <li className="bg-green-600 text-white rounded-lg p-2 text-center">
                Machinery
              </li>
              <li className="bg-green-600 text-white rounded-lg p-2 text-center">
                Agric Inputs
              </li>
              <li className="bg-green-600 text-white rounded-lg p-2 text-center">
                Salesperson
              </li>
              <li className="bg-green-600 text-white rounded-lg p-2 text-center">
                Farmers Market/Online Marketplace
              </li>
            </ul>
          </section>
        </Card>
      </div>

      {/*-------------------- RETHINK AND PARTNERS --------------------*/}
      <section className="grid gap-5 mb-12">
        <div className="text-center grid gap-5">
          <h1 className="text-4xl font-bold text-green-800">Rethink</h1>
          <p className="text-gray-700 text-lg">
            Our future starts now. An initiative of the office of the 2022
            National Best Farmer Launch of Rethink.
          </p>
          <h2 className="text-2xl font-bold text-green-800">
            Overview of Past Programs
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Koforidua Technical University</li>
            <li>St. Louis Senior High School Monitoring and Evaluation Form</li>
          </ul>
        </div>

        <div
          className="relative bg-cover bg-center bg-no-repeat min-h-screen p-6"
          style={{ backgroundImage: "url('/images/backGroundImage.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative space-y-8 p-6 shadow-lg text-white">
            <div>
              <h1 className="text-4xl font-bold text-center">Our Partners</h1>
              <div className="flex justify-center items-center gap-0.5">
                <div className="bg-green-800 w-[20%] md:w-[10%] lg:w-[5%] h-2" />
                <div className="bg-white w-[40%] md:w-[20%] lg:w-[10%] h-2" />
              </div>
            </div>
            <p className="text-lg  text-center max-w-2xl mx-auto">
              Our future starts now. An initiative of the office of the 2022
              National Best Farmer Launch of Rethink.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnersData.map((data) => (
                <PartnersCard key={data.id} name={data.name} logo={data.logo} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*---------------- Newsletter ----------------*/}
      <section className="w-[90%] lg:w-[80%] mx-auto mb-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold text-green-700 mb-4">
              Press Releases
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Official statements about SIASD’s latest achievements, projects,
              and collaborations. Stay informed about how SIASD is making a
              difference through innovative initiatives and impactful
              partnerships.
            </p>
          </div>

          <div className="bg-green-100 shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold text-green-800 mb-4">
              Newsletter Subscription
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Sign up for our monthly newsletter to stay updated on the latest
              events, innovations, and opportunities at SIASD.
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-700"
              />
              <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SiriboeFarms;
