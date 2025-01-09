import React from "react";
import { Sprout } from "lucide-react";

export function AboutHero() {
  return (
    <div className="relative bg-green-200 py-16 sm:py-24 aboutContainer">
      <div
        className="bg-gray-950 absolute w-full h-full opacity-70"
        style={{ zIndex: 0 }}
      />
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ zIndex: 1 }}
      >
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <div className="flex items-center space-x-2">
              <Sprout className="h-6 w-6 text-green-600" />
              <h2 className="text-base montserrat-semibold text-green-600 tracking-wide uppercase md:text-xl lg:text-base">
                About SIASD
              </h2>
            </div>
            <p className="mt-4 text-4xl montserrat-bold text-white tracking-tight">
              Supporting Local Agriculture Innovation
            </p>
            <p className="mt-6 text-xl text-gray-300 leading-8 montserrat-regular md:text-3xl lg:text-xl">
              SIASD offers services designed to support local agriculture
              producers and processors, customized to take advantage of regional
              assets and unique aspects of the local food and agriculture
              economies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
