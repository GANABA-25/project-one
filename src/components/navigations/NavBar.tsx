"use client";

import { useState } from "react";
import { FaBars, FaTimes, FaTractor } from "react-icons/fa";
// import { GrServices } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { SiFlathub } from "react-icons/si";
import { IoInformationCircleOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [showSearchInput, setShowSearchInput] = useState<boolean>(false);
  // const [showIcon, setShowIcon] = useState<boolean>(false);

  // const [homePage, setHomePage] = useState<string>("text-black");
  // const [whatWeARe, setWhatWeARe] = useState<string>("text-black");
  // const [whatWeDo, setWhatWeDo] = useState<string>("text-black");
  // const [programs, setPrograms] = useState<string>("text-black");
  // const [startup, setStartup] = useState<string>("text-black");
  // const [stories, setStories] = useState<string>("text-black");
  // const [contact, setContact] = useState<string>("text-black");

  const location = usePathname();

  const toggleOffcanvas = (): void => {
    setIsOpen(!isOpen);
  };

  // const toggleSearchInput = (): void => {
  //   setShowSearchInput(!showSearchInput);
  //   setShowIcon(!showIcon);
  // };

  return (
    <>
      <nav className="montserrat-regular">
        <nav>
          <div className={`offcanvas ${isOpen ? "open" : ""} bg-black`}>
            <div className="max-[767px]:text-2xl mt-3 mx-2 flex justify-between max-[767px]:mr-2 text-black cursor-pointer md:mx-4 md:text-3xl">
              <span>
                <Link href="/">
                  <img
                    src="/images/logo.png"
                    width={40}
                    height={40}
                    alt="logo"
                    className="rounded-full"
                  />
                </Link>
              </span>
              <span onClick={toggleOffcanvas}>
                <FaTimes className="hover:text-red-600 text-white cursor-pointer" />
              </span>
            </div>

            <div className="offcanvas-content montserrat-regular mx-4 my-8 md:mx-4 md:my-16 border-t-2 ">
              <ul className="text-[1.2rem] text-white pt-8 ">
                <ul className="grid gap-12">
                  <Link
                    className={`hover:text-[grey] flex flex-row items-center gap-4`}
                    href="/about"
                  >
                    <IoInformationCircleOutline fontSize={23} />
                    <li onClick={toggleOffcanvas}>What We Do</li>
                  </Link>
                  <Link
                    className={`hover:text-[grey] flex flex-row items-center gap-4`}
                    href="services"
                  >
                    <FaTractor fontSize={23} />
                    <li onClick={toggleOffcanvas}>Service</li>
                  </Link>

                  {/* <Link
                    className={`hover:text-[grey] flex flex-row items-center gap-4`}
                    href="/services"
                  >
                    <GrServices fontSize={18} />
                    <li onClick={toggleOffcanvas}>Our Services</li>
                  </Link> */}

                  <Link
                    className={`hover:text-[grey] flex flex-row items-center gap-4`}
                    href="/innovation-hub"
                  >
                    <SiFlathub fontSize={20} />
                    <li onClick={toggleOffcanvas}>Innovation Hub</li>
                  </Link>
                  <Link
                    className={`hover:text-[grey] flex flex-row items-center gap-4`}
                    href="siriboe_farms"
                  >
                    <FaTractor fontSize={23} />
                    <li onClick={toggleOffcanvas}>Siriboe Farms</li>
                  </Link>
                  <Link
                    className={`hover:text-[grey] flex flex-row items-center gap-4`}
                    href="/contact"
                  >
                    <FaPhoneAlt fontSize={23} />
                    <li onClick={toggleOffcanvas}>Contact Us</li>
                  </Link>
                </ul>
              </ul>
            </div>
          </div>
          <div
            onClick={toggleOffcanvas}
            className={`overlay ${isOpen ? "open" : ""}`}
          ></div>
        </nav>

        <nav className="bg-black bg-opacity-10 backdrop-blur-md fixed top-0 w-screen zindices  text-white block lg:hidden  ">
          <div className="w-[95%] m-auto flex justify-between">
            <span className="text-white flex flex-row items-center">
              <Link href="/">
                {
                  <img
                    src="/images/logo.png"
                    alt="logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                }
              </Link>
              <Link href="/">
                <p className="font-extrabold ml-2 montserrat-semibold">SIASD</p>
              </Link>
            </span>

            <div className="flex gap-4 max-[767px]:text-2xl max-[767px]:py-4 md:text-3xl">
              <div className="max-[767px]:p-3 md:p-4">
                {location !== "/contact" && (
                  <FaBars
                    className="hover:text-red-600 cursor-pointer"
                    onClick={toggleOffcanvas}
                  />
                )}
              </div>
            </div>
          </div>
        </nav>

        <nav className="bg-black bg-opacity-10 backdrop-blur-md hidden lg:block  py-4 fixed w-full top-0 zindices shadow-xlarge">
          <div className="w-[97%] m-auto flex justify-between items-center">
            <Link href="/">
              <span className="text-white flex flex-row items-center">
                {
                  <img
                    className="rounded-full"
                    src="/images/logo.png"
                    alt="logo"
                    width={50}
                    height={40}
                  />
                }
                <p className="font-extrabold ml-2 max-[1115px]:hidden montserrat-bold">
                  SIASD
                </p>
              </span>
            </Link>

            {location !== "/contact" ? (
              <div className="flex gap-12 montserrat-semibold">
                <ul className="hidden lg:flex justify-center items-center gap-8 text-white">
                  <Link className={`cursor-pointer`} href="/about">
                    <li>What We Do</li>
                  </Link>
                  <Link className={`cursor-pointer`} href="services">
                    <li>Service</li>
                  </Link>

                  {/* <Link className={`cursor-pointer`} href="/services">
                    <li className="flex gap-4">Services</li>
                  </Link> */}

                  <Link className={`cursor-pointer`} href="/innovation-hub">
                    <li>Innovation Hub</li>
                  </Link>

                  <Link className={`cursor-pointer`} href="siriboe_farms">
                    <li>Siriboe Farms</li>
                  </Link>
                  <Link className={`cursor-pointer`} href="/contact">
                    <li>Contact Us</li>
                  </Link>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </nav>
      </nav>
    </>
  );
};

export default NavBar;
