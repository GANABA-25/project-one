"use client";

import { FcNews } from "react-icons/fc";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoArrowForwardCircle } from "react-icons/io5";
import Descriptions from "./Descriptions";
import SiriboeNews from "./SereBoeNews";

import Events from "./events/Events";
import PartnersCard from "./serviceItems/PartnersCard";

const newsData = [
  {
    id: "1",
    image: "/images/newsImage.jpg",
    title: " Rethink",
    description:
      "Our future starts now. An initiative of the office of the 2022 National Best Farmer Launch of Rethink.",
    button: "Read More",
    color: "#6953cf",
    textColor: "white",
    ButtonColor: "#48bb78",
  },
  {
    id: "2",
    image: "/images/newsImage.jpg",
    title: "Enterprise guide",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandaeillo ab cupiditate modi maiores omnis debitis rerum eius? Debitis,eveniet iste. Consectetur.",
    button: "Read More",
    color: "#08374c",
    textColor: "green",
    ButtonColor: "#48bb78",
  },
  {
    id: "3",
    image: "/images/newsImage.jpg",
    title: "Enterprise guide",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandaeillo ab cupiditate modi maiores omnis debitis rerum eius? Debitis,eveniet iste. Consectetur.",
    button: "Read More",
    color: "#8cf49b",
    textColor: "black",
    ButtonColor: "#6953cf",
  },
  {
    id: "4",
    image: "/images/newsImage.jpg",
    title: "Enterprise guide",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandaeillo ab cupiditate modi maiores omnis debitis rerum eius? Debitis,eveniet iste. Consectetur.",
    button: "Read More",
    color: "#f36d50",
    textColor: "black",
    ButtonColor: "black",
  },
];

const partnersData = [
  {
    id: "1",
    name: "Kwame Nkrumah University of Science and Technology",
    logoImage: "/images/partnerslogos/KNUST.png",
  },
  {
    id: "2",
    name: "Centre for Scientific and Industrial Research (CSIR)",
    logoImage: "/images/partnerslogos/csir.png",
  },
  {
    id: "3",
    name: "Kwadaso Agric College",
    logoImage: "/images/partnerslogos/Kwadaso agric 2.jpg",
  },
  {
    id: "4",
    name: "World Bank Group",
    logoImage: "/images/partnerslogos/WorldBank_Logo_optimized-17.png",
  },
  {
    id: "5",
    name: "Ministry of Finance",
    logoImage: "/images/partnerslogos/mof 1.jpg",
  },
  { id: "6", name: "NEIP", logoImage: "/images/partnerslogos/Neip (1).png" },
  { id: "7", name: "UNDP", logoImage: "/images/partnerslogos/UNDP_YAI.png" },
  {
    id: "8",
    name: "MEST Africa",
    logoImage: "/images/partnerslogos/MEST.png",
  },
  {
    id: "9",
    name: "Siriboe Farms",
    logoImage: "/images/partnerslogos/KNUST.png",
  },
  {
    id: "10",
    name: "Juaben Oil Mill",
    logoImage: "/images/partnerslogos/KNUST.png",
  },
];

const Home = () => {
  const [itemIndex, setItemIndex] = useState<number>(0);
  const [background, setBackground] = useState<string[]>([
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-white",
  ]);

  const items = [
    "container",
    "container2",
    "container3",
    "container4",
    "container5",
    "container6",
  ];

  const textItems = [
    "START YOUR INNOVATIONS WITH US",
    "JOIN OUR TRAINING PROGRAMS",
    "AVAILABLE CO-WORKING SPACES",
    "FOOD AND FARM TRAINING",
    "NETWORKING TO FOSTER CREATIVITY",
    "ROBUST INCUBATION PROGRAMMES",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setItemIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 8000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setBackground((prev) =>
      prev.map((color, index) =>
        index === itemIndex ? "bg-green-500" : "bg-white"
      )
    );
  }, [itemIndex]);

  return (
    <>
      <section className="min-h-screen montserrat-regular">
        <section
          className={`${items[itemIndex]} max-[767px]:mt-1 md:mt-1 overflow-x-hidden`}
        >
          <div className="bg-gray-950 absolute w-full h-full opacity-70" />
          <div className=" text-white">
            <div className="w-[100%] m-auto relative ">
              {
                <motion.h1
                  initial={{ opacity: 0.5, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1.5 }}
                  className="max-[450px]:text-2xl max-[767px]:text-3xl max-[767px]:my-4 text-center md:text-4xl lg:text-6xl montserrat-bold"
                >
                  {textItems[itemIndex]}
                </motion.h1>
              }
              <motion.section
                initial={{ opacity: 0.5, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5 }}
                className="flex mt-20"
              >
                <div className="flex gap-2">
                  {items.map((item, index) => (
                    <div
                      key={item}
                      className="w-[3rem] bg-white border h-[0.3rem] flex items-center rounded"
                    >
                      <button
                        className={` h-full ${background[index]} w-[100%] relative`}
                        onClick={() => setItemIndex(items.indexOf(item))}
                      />
                    </div>
                  ))}
                </div>
              </motion.section>
              <motion.div
                initial={{ opacity: 0.5, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="flex items-center gap-8 mt-16 "
              >
                <button className="bg-blue-500 border border-red-200 hover:bg-blue-600 text-sm md:text-lg lg:w-[25rem] px-2 md:w-[18rem] py-2 rounded-[0.5rem] montserrat-semibold flex justify-center items-center gap-4">
                  Enroll to our Institute{" "}
                  <IoArrowForwardCircle
                    fontSize={30}
                    className="hidden lg:block "
                  />
                </button>
                <button className="bg-blue-500 border border-red-200 hover:bg-blue-600 text-sm md:text-lg lg:w-[25rem] px-2 md:w-[18rem] py-2 rounded-[0.5rem] montserrat-semibold flex justify-center items-center gap-4">
                  Join our Innovation Hub{" "}
                  <IoArrowForwardCircle
                    fontSize={30}
                    className="hidden lg:block"
                  />
                </button>
              </motion.div>
              <section></section>
            </div>
          </div>
        </section>

        <section>
          <div>
            <Descriptions />
          </div>
          <div className="bg-blue-950 mt-6 py-8 grid gap-8 text-white montserrat-regular mb-16">
            <div className="text-center w-[95%] m-auto grid gap-2">
              <h1 className="max-[767px]:text-3xl montserrat-bold md:text-4xl lg:text-4xl flex justify-center items-center gap-1">
                Siriboe News <FcNews />
              </h1>
              <p>
                Bringing you the latest updates, insights, and guides to keep
                you informed and inspired
              </p>
              <div className="flex justify-center items-center gap-0.5">
                <div className="bg-green-800 w-[5%] h-2" />
                <div className="bg-orange-500 w-[5%] h-2" />
              </div>
            </div>

            <div className="max-[767px]:w-[95%] grid max-[767px]:grid-cols-2 md:w-[90%] md:grid-cols-2 m-auto lg:grid-cols-4 gap-4 ">
              {newsData.map((data) => (
                <SiriboeNews
                  key={data.id}
                  image={data.image}
                  title={data.title}
                  description={data.description}
                  button={data.button}
                  color={data.color}
                  textColor={data.textColor}
                  ButtonColor={data.ButtonColor}
                />
              ))}
            </div>
          </div>

          {/*---------------------------------- PARTNERS ----------------------------------*/}
          <section className="grid gap-5 mb-12">
            <div
              className="relative bg-cover bg-center bg-no-repeat min-h-screen p-6"
              style={{ backgroundImage: "url('/images/backGroundImage.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/70" />
              <div className="relative space-y-8 p-6 shadow-lg text-white">
                <div>
                  <h1 className="montserrat-bold text-4xl text-center">
                    Our Partners
                  </h1>
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
                    <PartnersCard
                      key={data.id}
                      name={data.name}
                      logoImage={data.logoImage}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
          <div>
            <Events />
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
