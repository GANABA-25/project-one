"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { SiFacebook } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

const Footer = () => {
  const logo = "/images/footer.png";

  return (
    <main className="bg-[#171717] text-white montserrat-regular">
      <div className="mx-auto py-8 px-4 md:flex md:justify-between md:gap-8 lg:px-12 lg:justify-center lg:gap-4">
        {/* Logo Section */}
        <div className="text-center md:text-left md:flex-1">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5 }}
            className="mb-6"
          >
            <img src={logo} alt="logo" className="mx-auto md:mx-0 w-64" />
          </motion.div>
          <p className="mt-4 text-lg font-bold">Obi nnim a, obi kyere</p>
        </div>

        {/* Important Links */}
        <div className="mt-8 md:mt-0 md:flex-1">
          <h2 className="text-xl font-bold underline underline-offset-4 mb-4">
            Important Links
          </h2>
          <motion.ul
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5 }}
            className="space-y-4"
          >
            <li>
              <Link href="/" className="hover:text-green-500">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-green-500">
                Innovation Hub
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-green-500">
                Siriboe Farms
              </Link>
            </li>
          </motion.ul>
        </div>

        {/* Contact Us */}
        <div className="mt-8 md:mt-0 md:flex-1">
          <h2 className="text-xl font-bold underline underline-offset-4 mb-4">
            Contact Us
          </h2>
          <motion.ul
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5 }}
            className="space-y-4"
          >
            <li className="flex items-center gap-4">
              <FaPhoneAlt className="text-green-500" />
              <span>+233 (0) 244464592 / +233 (0) 557260049</span>
            </li>
            <li className="flex items-center gap-4">
              <MdOutlineMail className="text-green-500" />
              <span>info@siasd.org / atopare.siasd@gmail.com</span>
            </li>
            <li className="flex items-center gap-4">
              <IoLocation className="text-green-500" />
              <span>Bomfa, Juaben, Juaben-Ashanti, Ghana, West Africa</span>
            </li>
          </motion.ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-8 md:mt-0 md:flex-1">
          <div className="bg-green-100 text-green-800 shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Newsletter Subscription</h2>
            <p className="text-sm mb-4">
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
      </div>

      {/* Social Links & Footer Note */}
      <div className="mx-auto py-6 mt-8 border-t border-gray-800">
        <div className="flex flex-col items-center">
          <ul className="flex gap-6 text-2xl">
            <li>
              <Link href="https://www.linkedin.com">
                <GrLinkedin className="hover:text-blue-500" />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com">
                <BsInstagram className="hover:text-pink-500" />
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com">
                <SiFacebook className="hover:text-blue-500" />
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com">
                <RiTwitterXLine className="hover:text-black" />
              </Link>
            </li>
          </ul>
          <p className="mt-4 text-sm text-center">
            © 2024 Siriboe Institute of Agribusiness and Skills Development. All
            rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Footer;
