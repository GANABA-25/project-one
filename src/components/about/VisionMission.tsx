import React from "react";
import { Target, Compass, CheckCircle } from "lucide-react";

export function VisionMission() {
  const visionPoints = [
    "Be the frontliner for startup and innovation development in our sector",
    "Create a thriving regional agrifood sector that is a significant contributor to GDP",
    "Facilitate training, education, information",
    "Foster networking and mentorship",
    "Deliver marketing support",
    "Facilitate access to land, facilities and equipment",
    "Develop sustainable partnerships providing strong policies and resilient initiatives",
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
      {/* Vision Section */}
      <div className="">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 mb-6">
            <Target className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl montserrat-bold text-gray-900">
              Vision Statement
            </h2>
          </div>
          <div className="flex justify-between items-center gap-16">
            <div className="relative">
              <div className="bg-white rounded-l-2xl shadow-xl p-8">
                <p className="text-[1.2rem] text-gray-600 mb-8 montserrat-regular leading-relaxed">
                  SIASD envisions to be Africa's premier Institute and
                  innovation hub for research-based agriculture, agribusiness
                  and entrepreneurship education.
                </p>
                <ul className="space-y-2">
                  {visionPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-1" />
                      <span className="ml-3 text-gray-700 text-[1rem]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className=" mt-10 lg:mt-0">
              <div className="relative aspect-w-16">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-screen h-[30rem] lg:rounded-r-[2rem] shadow-large"
                >
                  <source src="/videos/siriboe.mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-24 bg-gray-200">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 py-24 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-w-16 aspect-h-9">
                <img
                  src="/images/mission.jpeg"
                  alt="Agricultural education"
                  className="rounded-l-2xl shadow-2xl h-[28rem] object-cover"
                />
              </div>
            </div>
            <div className="relative order-1 lg:order-2 mb-10 lg:mb-0">
              <div className="flex items-center space-x-2 mb-6 absolute top-[-4rem]">
                <Compass className="h-6 w-6 text-green-600" />
                <h2 className="text-2xl montserrat-bold text-gray-900">
                  Mission Statement
                </h2>
              </div>
              <div className="bg-white rounded-r-2xl shadow-xl p-16">
                <p className="text-[1.1rem] montserrat-regular text-gray-600 mb-6 leading-relaxed">
                  SIASD mission is to create enabling environment to empower
                  youth, farmers and entrepreneurs with comprehensive support
                  and education in agribusiness and entrepreneurship, to
                  transform agribusiness innovation ecosystem.
                </p>
                <p className="text-[1.1rem] montserrat-regular text-gray-600 leading-relaxed">
                  We seek to empower farmers and entrepreneurs in the
                  agriculture industry by providing them with authentic
                  conditions and comprehensive support to transform their
                  innovative ideas into profitable businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
