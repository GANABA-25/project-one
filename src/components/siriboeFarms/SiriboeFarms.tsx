import React from "react";
import Link from "next/link";

import Animals from "./Animals";

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

  return (
    <>
      {/*--------------- BACKGROUNG IMAGE ---------------*/}
      <section className="relative h-[35rem] w-screen mb-16 lg:h-[45rem] montserrat-regular">
        <img
          src="/images/landingImages/farmer.jpg"
          alt="Farm Background"
          className="absolute inset-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        <div className="gap-5 relative z-10 w-[90%] max-w-6xl mx-auto flex flex-col justify-center h-full text-white text-center lg:text-left px-6">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold montserrat-bold">
              Siriboe Farms
            </h1>
            <p className="mt-4 text-lg md:text-xl  leading-relaxed max-w-4xl mx-auto lg:mx-0">
              Siriboe Farms believes in giving farmers and entrepreneurs
              authentic conditions to grow their trades and manufacture{" "}
              <strong className="bg-green-800 px-2 py-1 rounded-lg">
                nutritious food items on a worldwide scale.
              </strong>{" "}
              We are a group of people who pride ourselves on being{" "}
              <strong className="text-green-400">unique</strong> and on having
              the desire to create.
            </p>
          </div>
          <div className="montserrat-bold">
            <Link
              href="/contact"
              className="bg-green-800 text-white rounded-md p-2 lg:hover:bg-green-600 cursor-pointer"
            >
              Find More
            </Link>
          </div>
        </div>
      </section>

      {/*---------------- FARM ANIMALS ----------------*/}
      <div className="w-[90%] lg:w-[80%] m-auto montserrat-regular">
        <section className="grid gap-4 mb-16">
          <div>
            <h1 className="text-3xl text-green-800 md:text-4xl lg:text-3xl montserrat-bold">
              Siriboe Farms
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
      </div>

      {/*-------------------- MARKET --------------------*/}

      <div className="w-[90%] lg:w-[95%] m-auto mb-16 shadow-md montserrat-regular">
        <Card className="p-4">
          <section className="relative bg-white py-10 px-6 md:px-16">
            <div className="grid gap-4 mb-8 text-center">
              <div className=" flex justify-center items-center gap-2">
                <h1 className="text-4xl font-bold text-green-800 montserrat-bold">
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
                <h2 className="text-3xl md:text-4xl montserrat-bold">
                  Fresh Produce & Market
                </h2>
                <p className="text-lg mt-2 max-w-xl">
                  A hub for fresh vegetables, meat, mushrooms, and more,
                  supporting local farmers and sustainable practices.
                </p>
              </div>
            </div>

            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm md:text-base text-gray-800 montserrat-bold">
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
    </>
  );
};

export default SiriboeFarms;
