import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { HiOutlineArrowSmallRight } from "react-icons/hi2";

const Descriptions = () => {
  const [introductoryMessage, setIntroductoryMessage] = useState(true);
  const [radioColor, setRadioColor] = useState({
    firstButton: "bg-white",
    secondButton: "bg-white",
  });

  useEffect(() => {
    if (introductoryMessage) {
      setRadioColor((prev) => ({ ...prev, firstButton: "bg-green-800" }));
    } else {
      setRadioColor((prev) => ({ ...prev, firstButton: "bg-white" }));
    }

    if (!introductoryMessage) {
      setRadioColor((prev) => ({ ...prev, secondButton: "bg-green-800" }));
    } else setRadioColor((prev) => ({ ...prev, secondButton: "bg-white" }));
  }, [introductoryMessage]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (introductoryMessage === true) {
        setIntroductoryMessage(false);
      } else if (introductoryMessage === false) {
        setIntroductoryMessage(true);
      }
    }, 10000);
    return () => clearInterval(intervalId);
  }, [introductoryMessage]);

  return (
    <>
      <section className="grid gap-12 montserrat-regular mt-12">
        <div className="grid gap-3 m-2 max-[767px]:mx-4">
          <h1 className="max-[767px]:text-xl text-center montserrat-bold text-4xl text-green-600">
            Siriboe Institute Of Agribusiness
            <br /> and Skills Development
          </h1>
          <div className="max-[767px]:text-md flex justify-center items-center md:p-6 lg:p-0 leading-7 lg:text-justify">
            <p>
              A Centre to augment agriculture, upskilling and innovation, and
              entrepreneurship… for youth to make wealth in{" "}
              <br className="hidden lg:block" />
              agriculture and more. Access to resources to help combats youth’s
              insufficient access to knowledge,{" "}
              <br className="hidden lg:block" />
              information and education (Youth and Agriculture: Key Challenges
              and Concrete Solutions report, FAO, CTA & IFAD)
            </p>
          </div>
        </div>

        <div className="max-[767px]:py-16 max-[767px]:px-4 bg-green-200 bg-opacity-50 rounded-md md:p-16 lg:p-32">
          <div className="grid gap-4 md:gap-8 lg:flex lg:flex-row lg:w-[90%] lg:m-auto">
            <img
              src="/images/home/twoPeople.jpg"
              alt="Innovation Hub"
              className="max-[767px]:w-full md:w-full lg:w-1/2 h-auto object-cover rounded-md shadow-md"
            />
            <div className="grid max-[767px]:gap-8 max-[767px]:w-full max-[767px]:mt-8 md:gap-8 md:mt-8 md:w-full lg:gap-0 lg:mt-0 lg:w-1/2 px-4 py-8 bg-green-200 drop-shadow-xl rounded-md">
              <p className="text-xl text-justify text-green-800 leading-8">
                Siriboe Institute of Agribusiness and Skills Development (SIASD)
                is an agribusiness and entrepreneurship education institution
                and business incubator program set up to provide youth and
                aspiring entrepreneurs with the necessary theoretical and
                practical training in agribusiness and entrepreneurship to
                enable them successfully launch and run their businesses with a
                focus on value chain production, processing and agriculture
                technologies (agritech).
              </p>
              <div className="flex justify-center items-center">
                <HiOutlineArrowSmallRight className="w-16 h-6 transform scale-x-150 text-green-600 hover:scale-x-160 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Descriptions;
