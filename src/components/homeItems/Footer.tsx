"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
// import { FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiFacebook } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

const Footer = () => {
  const logo = "/images/footer.png";

  return (
    <main className="text-white montserrat-regular bg-[#171717]">
      <div className="w-[80%] max-[1122px]:w-[95%] pt-4 mx-auto md:flex md:justify-between md:gap-6 md:pt-8 lg:mt-2">
        <div className="max-[767px]:flex place-content-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5 }}
              className="flex flex-row  h-[2.5rem] gap-2 items-center pt-20 lg:pt-16"
            >
              {
                <img
                  className="   "
                  src={logo}
                  alt="logo"
                  width={300}
                  height={10}
                />
              }
              {/* <h4 className="montserrat-bold text-[1.5rem] max-[1122px]:text-[1.2rem] text-center">
                Innovative IT Solutions and Expert Consulting{" "}
              </h4> */}
            </motion.div>
            <p className="pt-24 montserrat-bold text-center lg:text-justify">
              Obi nnim a, obi kyere
            </p>
          </div>
        </div>
        <div className="max-[767px]:my-8 max-[767px]:flex place-content-center ">
          <div>
            <h1 className="text-[1.2rem] max-[767px]:text-2xl underline underline-offset-8 max-[767px]:my-3 montserrat-bold">
              Important Links
            </h1>
            <motion.ul
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5 }}
              className="grid gap-14 max-[767px]:text-md mt-6 max-[767px]:text-center"
            >
              {/* <li className="cursor-pointer hover:font-bold">About Us</li> */}
              {/* <Link href="/corporate-staff">
                            <li className="cursor-pointer hover:font-bold">
                                The Corporate Staff
                            </li>
                        </Link> */}
              <Link href="/">
                <li className="cursor-not-allowed hover:text-green-500 transition-transform transform hover:translate-x-2">
                  Careers
                </li>
              </Link>
              <Link href="/">
                <li className="cursor-not-allowed hover:text-green-500 transition-transform transform hover:translate-x-2">
                  Innovation Hub
                </li>
              </Link>
              <Link href="/">
                <li className="cursor-not-allowed hover:text-green-500 transition-transform transform hover:translate-x-2">
                  Siriboe Farms
                </li>
              </Link>
            </motion.ul>
          </div>
        </div>

        <div className="max-[767px]:my-8">
          <div className="hidden max-[767px]:my-8 md:block ">
            <h1 className="text-[1.2rem] max-[767px]:text-2xl max-[767px]:my-3 underline underline-offset-8 montserrat-bold">
              Contact Us
            </h1>
            <motion.ul
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5 }}
              className="grid gap-2 max-[767px]:text-md mt-2"
            >
              <div className="max-[767px]:my-2 flex justify-betweem items-center  gap-2 md:my-4">
                <FaPhoneAlt className="max-[767px]:mt-1 max-[767px]:text-xl  md:mt-2 md:text-xl " />
                <p className="hover:text-green-500 transition-transform transform hover:translate-x-2">
                  +233 (0) 244464592/ +233 (0) 557260049
                </p>
              </div>
              <div className="max-[767px]:my-2 flex justify-betweem items-center  gap-2 md:my-4">
                <MdOutlineMail fontSize={30} className=" " />
                <h1 className="hover:text-green-500 transition-transform transform hover:translate-x-2">
                  info@siasd.org / atopare.siasd@gmail.com
                </h1>
              </div>
              <div className="max-[767px]:my-2 flex justify-betweem items-center  gap-2 md:my-4">
                <IoLocation fontSize={30} />
                <p className="mt-3 hover:text-green-500 transition-transform transform hover:translate-x-2">
                  Bomfa, Juaben, Juaben-Ashanti,Ghana, West Africa.
                </p>
              </div>
            </motion.ul>
          </div>
        </div>

        <div className="max-[767px]:my-8 max-[767px]:flex place-content-center md:hidden">
          <div className=" ">
            <h1 className="text-[1.2rem] max-[767px]:text-2xl max-[767px]:my-3 underline underline-offset-8  montserrat-bold text-center">
              Contact Us
            </h1>
            <motion.ul
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5 }}
              className="grid gap-2 max-[767px]:text-md mt-2"
            >
              <div className="max-[767px]:my-2 flex justify-center items-center  gap-2 md:my-4 lg:justify-center">
                <FaPhoneAlt className="max-[767px]:mt-1 max-[767px]:text-xl  md:mt-2 md:text-xl" />
                <p className="text-center hover:text-green-500 transition-transform transform hover:translate-x-2">
                  +233 (0) 244464592/ +233 (0) 557260049
                </p>
              </div>
              <div className="max-[767px]:my-2 flex justify-center items-center  gap-2 md:my-4">
                <MdOutlineMail fontSize={30} className=" " />
                <h1 className="hover:text-green-500 transition-transform transform hover:translate-x-2">
                  info@siasd.org / atopare.siasd@gmail.com
                </h1>
              </div>
              <div className="max-[767px]:my-4  md:my-4">
                <div className="max-[767px]:my-2 flex  items-center  justify-center gap-2 md:my-4">
                  <IoLocation fontSize={30} />
                  <p className="mt-3 hover:text-green-500 transition-transform transform hover:translate-x-2">
                    Bomfa, Juaben, Juaben-Ashanti,Ghana, West Africa.
                  </p>
                </div>
              </div>
            </motion.ul>
          </div>
        </div>
      </div>

      {/*---------------- Newsletter ----------------*/}
      <section className="w-[90%] lg:w-[80%] mx-auto mb-16 montserrat-regular mt-8">
        <div className="bg-green-100 shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold text-green-800 mb-4 montserrat-bold">
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
      </section>

      <div className="w-[80%] m-auto flex place-content-center items-center md:pt-4 mt-4 border-t-2 border-gray-800">
        <div>
          <div className="flex place-content-center">
            <ul className="max-[767px]:py-4 max-[767px]:text-3xl pt-4 flex  gap-4 md:text-2xl">
              <li className="hover:transition-transform transform hover:-translate-y-2 hover:bg-blue-500">
                <Link href="https://www.linkedin.com/posts/siriboe-institute-of-agribusiness-and-skills-development_siriboe-institute-of-agribusiness-and-skills-activity-7226676968723755010-GgDt?utm_source=share&utm_medium=member_android">
                  <GrLinkedin />
                </Link>
              </li>
              <li className="hover:transition-transform transform hover:-translate-y-2 hover:bg-red-500 hover:rounded-full">
                <Link href="https://www.instagram.com/siasdhub/profilecard/?igsh=a2g1ZHBlbHlubmJk">
                  <BsInstagram />
                </Link>
              </li>
              <li className="hover:transition-transform transform hover:-translate-y-2 hover:bg-blue-500 hover:rounded-full">
                <Link href="https://www.facebook.com/share/3xbKwhQADBMxeQPr/">
                  <SiFacebook />
                </Link>
              </li>
              <li className="hover:transition-transform transform hover:-translate-y-2 hover:bg-black">
                <Link href="Take a look at Siriboe Institute of Agribusiness and Skills Devt. (@siasdhub): https://x.com/siasdhub?t=Zi0WUH1NZg8o8BORqD3a-A&s=08">
                  <RiTwitterXLine />
                </Link>
              </li>
            </ul>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 75 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5 }}
            className="hidden pb-8 md:pb-8 md:block text-center pt-4 "
          >
            © 2024 Siriboe Institute of Agribusiness and Skills Development. All
            rights reserved.
          </motion.p>
        </div>
      </div>
      <p className="w-[80%] m-auto  pb-8 md:pb-0 md:hidden text-center">
        © 2024 Siriboe Institute of Agribusiness and Skills Development. All
        rights reserved.
      </p>
    </main>
  );
};

export default Footer;
