import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
      <section className="w-[90%] m-auto">
        <div className="grid gap-4 my-8">
          <div className="grid md:gap-2">
            <h1 className="max-[767px]:text-[0.97rem] max-[767px]:leading-7 md:text-3xl font-bold font-serif">
              Siriboe Institute Of Agribusiness and Skills
              <br /> Development
            </h1>
            <div className="flex gap-0.5">
              <div className="bg-green-800 w-[5%] h-2" />
              <div className="bg-black w-[10%] h-2" />
            </div>
          </div>

          <p className="max-[767px]:text-sm font-serif text-green-800 md:text-2xl lg:text-[1.2rem] lg:leading-6">
            A Centre to augment agriculture, upskilling and innovation, and
            entrepreneurship… for youth to make wealth in agriculture and more.
            Access to resources to help combats youth’s insufficient access to
            knowledge, information and education.(Youth and Agriculture: Key
            Challenges and Concrete Solutions report, FAO, CTA & IFAD)
          </p>
        </div>

        <div className="flex max-[767px]:gap-2 md:gap-3 lg:gap-4">
          <div className="w-full relative shadow-xl lg:w-[70%]">
            <div className="absolute w-full h-full rounded-md bg-orange-600" />
            <img
              className="absolute w-full h-full shadow-2xl"
              src="/images/girls.png"
            />
          </div>

          <div className="max-[767px]:text-[0.6rem] max-[767px]:gap-2 max-[767px]:p-2 border border-black border-opacity-50 w-full h-full bg-green-400 p-8 grid md:gap-4 font-serif rounded-md shadow-xl">
            <div>
              <h1 className="uppercase montserrat-bold">
                Siriboe Agribusiness
              </h1>
              <div className="flex gap-0.5">
                <div className="bg-green-800 w-[5%] h-2" />
                <div className="bg-orange-500 w-[10%] h-2" />
              </div>
            </div>

            <p className="lg:text-sm">
              Siriboe Institute of Agribusiness and Skills Development (SIASD)
              is an agribusiness and entrepreneurship education institution and
              business incubator program set up to provide youth and aspiring
              entrepreneurs with the necessary theoretical and practical
              training in agribusiness and entrepreneurship to enable them
              successfully launch and run their businesses with a focus on value
              chain production, processing and agriculture technologies
              (agritech).{" "}
            </p>
            <p className="hidden lg:block lg:text-sm">
              SIASD operates a vibrant hub, SIASD Incubation Hub, dedicated to
              nurturing innovation, collaboration, and entrepreneurial spirit
              among young innovators across the agribusiness sector. <br />
              <span className="montserrat-bold">
                Inspiration to Agripreneurs… Innovators… and Startuppers.
                “Agriculture is More than Cutlass and Hoe… Technology and
                Innovation, now!”
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* <section className="pt-16 pb-8">
        <div className="w-[95%] shadow-xlarge-white md:flex md:flex-row lg:flex lg:justify-between shadow-xlarge lg:gap-16 mx-auto items-center border-4 border-white rounded-2xl bg-green-800 hover:bg-green-700">
          <div className="md:w-[300rem]">
            <img
              src="/images/landingImages/land5.jpg"
              alt="siriboe"
              width={1000}
              height={500}
              className="md:rounded-l-xl object-cover h-[30rem] transition-transform duration-500 ease-in-out transform lg:hover:scale-110 lg:hover:rounded-xl"
            />
          </div>
          {introductoryMessage && (
            <motion.p
              initial={{ opacity: 0.5, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5 }}
              className="text-white montserrat-regular text-justify p-4 md:p-4 lg:pr-12 text-[1.1rem] lg:leading-[2rem]"
            >
              <span className="montserrat-bold">
                “A Centre to augment agriculture, upskilling and innovation, and
                entrepreneurship… for youth to make wealth in agriculture and
                more.”
              </span>{" "}
              Access to resources to help combats youth’s insufficient access to
              knowledge, information and education. (Youth and Agriculture: Key
              Challenges and Concrete Solutions report, FAO, CTA & IFAD)
            </motion.p>
          )}
          {!introductoryMessage && (
            <motion.p
              initial={{ opacity: 0.5, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5 }}
              className="text-white montserrat-regular text-justify p-4 md:p-4 lg:pr-12 text-[1.1rem] lg:leading-[2rem]"
            >
              <span>
                Siriboe Institute of Agribusiness and Skills Development (SIASD)
                is an agribusiness and entrepreneurship education institution
                and business incubator program set up to provide youth and
                aspiring entrepreneurs with the necessary theoretical and
                practical training in agribusiness and entrepreneurship to
                enable them successfully launch and run their businesses with a
                focus on value chain production, processing and agriculture
                technologies (agritech). SIASD operates a vibrant hub, SIASD
                Incubation Hub, dedicated to nurturing innovation,
                collaboration, and entrepreneurial spirit among young innovators
                across the agribusiness sector. <br />
                <span className="montserrat-bold">
                  Inspiration to Agripreneurs… Innovators… and Startuppers.
                  “Agriculture is More than Cutlass and Hoe… Technology and
                  Innovation, now!”
                </span>{" "}
              </span>
            </motion.p>
          )}
        </div>
      </section>
      <section className="flex place-content-center">
        <div className="flex gap-6">
          <button
            className={`h-[1rem] w-[1rem] border border-[grey] rounded-[50%] ${radioColor.firstButton}`}
            onClick={() => setIntroductoryMessage(true)}
          ></button>
          <button
            className={`h-[1rem] w-[1rem] border border-[grey] rounded-[50%] ${radioColor.secondButton}`}
            onClick={() => setIntroductoryMessage(false)}
          ></button>
        </div>
      </section> */}
    </>
  );
};

export default Descriptions;
