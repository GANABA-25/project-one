import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow max-[767px]:w-[20px] max-[767px]:h-[20px] max-[767px]:top-[50%] max-[767px]:left-[21.5rem] h-[40px] w-[40px] bg-green-800 rounded-full flex justify-center items-center absolute translate-y-[-50%] shadow-[0_2px_5px_rgba(0,_0,_0,_0.2)] cursor-pointer transition-all duration-300 md:top-[50%] md:left-[40rem] lg:top-[50%] lg:left-[51rem]"
      onClick={onClick}
    >
      <span style={{ fontSize: "20px", color: "white", fontWeight: "bold" }}>
        &gt;
      </span>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow max-[767px]:w-[20px] max-[767px]:h-[20px] max-[767px]:top-[50%] max-[767px]:right-[21.5rem] h-[40px] w-[40px] bg-green-800 rounded-full flex justify-center items-center absolute translate-y-[-50%] shadow-[0_2px_5px_rgba(0,_0,_0,_0.2)] cursor-pointer transition-all duration-300 md:top-[50%] md:right-[40rem] lg:top-[50%] lg:right-[51rem]"
      onClick={onClick}
    >
      <span style={{ fontSize: "20px", color: "white", fontWeight: "bold" }}>
        &lt;
      </span>
    </div>
  );
}

function Resizable() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const images = [
    "/images/home/partners-Logos/KNUST.png",
    "/images/home/partners-Logos/csir.png",
    "/images/home/partners-Logos/Kwadaso agric 2.jpg",
    "/images/home/partners-Logos/mof.png",
    "/images/home/partners-Logos/Neip (1).png",
    "/images/home/partners-Logos/WorldBank_Logo_optimized-17.png",
    "/images/home/partners-Logos/UNDP_YAI.png",
    "/images/home/partners-Logos/MEST.png",
  ];

  return (
    <div className="slider-container">
      <div className="slider-content max-[767px]:w-[350px] md:w-[600px] lg:w-[800px]">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="px-4">
              <img
                src={src}
                onError={(e) =>
                  (e.currentTarget.src = "/images/placeholder.png")
                }
                alt={`partnersLogo-${index}`}
                className="w-full h-40 object-contain rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Resizable;
