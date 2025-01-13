"use client";
import { useState } from "react";
import ContactForm from "./ContactForm";
import MessageSuccessModal from "../modals/MessageSuccessfulModal";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [messageSuccessful, setMessageSuccessful] = useState<boolean>(false);

  return (
    <>
      <div className="visionContainer max-[767px]:mt-1 md:mt-1">
        <div className="bg-gray-950 absolute w-full h-full opacity-70" />
        <div className="text-white">
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0.5, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5 }}
              className="max-[767px]:text-xl max-[767px]:my-4 md:w-[70rem] md:text-xl lg:text-3xl montserrat-bold"
            >
              Ready for modern knowledge in <br /> Agriculture? OR <br />
              for Donation, Grant or Partnership?
              <p className="pt-8 monteserrat-bold text-4xl md:text-4xl lg:text-7xl text-green-600">
                Contact Us!
              </p>
            </motion.h1>
          </div>
        </div>
      </div>

      <section className="lg:pt-12 bg-gray-200 border border-grey-500 montserrat-regular">
        <div className="w-13 m-auto mb-12 md:mb-12 lg:mb-24 w-[95%]">
          <section className="lg:flex lg:justify-between gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5 }}
              className="h-[40rem] hidden lg:block w-[40rem]"
            >
              <h1 className="text-2xl font-bold md:text-6xl md:mb-8 md:mt-4 lg:text-4xl montserrat-semibold ">
                GOT A QUERY ?
              </h1>

              <div className="mt-16 flex flex-row gap-6 items-center border-b border-black pb-8 ">
                <FaPhoneAlt fontSize={40} />
                <div>
                  <h3>Contact Number</h3>
                  <p className="text-green-600">
                    +233 (0) 244464592/ +233 (0) 557260049
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-row gap-6 items-center border-b border-black pb-8 ">
                <FaEnvelope fontSize={40} />
                <div>
                  <h3>Email</h3>
                  <p className="text-green-600">
                    info@siasd.org / atopare.siasd@gmail.com
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-row gap-6 items-center border-b border-black pb-8 ">
                <FaWhatsapp fontSize={40} />
                <div>
                  <h3>WhatsApp</h3>
                  <p className="text-green-600">+233 (0) 244464592</p>
                </div>
              </div>
              <div className="mt-8 flex flex-row gap-6 items-center border-b border-black pb-8 ">
                <FaMapMarkerAlt fontSize={40} />
                <div>
                  <h3>Location</h3>
                  <p className="text-green-600">
                    Bomfa, Juaben, Juaben-Ashanti,Ghana, West Africa
                  </p>
                </div>
              </div>
            </motion.div>
            <div className="lg:shadow-xlarge lg:px-8 rounded-2xl">
              <h1 className="text-2xl md:text-6xl md:mb-8 md:mt-4 lg:text-4xl montserrat-semibold ">
                Send Us A Message
                <span className="hidden md:block max-[767px]:mb-2 w-4 h-2 bg-green-600  group-hover:w-full transition-width duration-300" />
              </h1>

              {messageSuccessful && <MessageSuccessModal />}
              <ContactForm setMessageSuccessful={setMessageSuccessful} />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Contact;
