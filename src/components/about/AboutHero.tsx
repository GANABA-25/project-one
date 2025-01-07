
import React from 'react';
import { Sprout } from 'lucide-react';



export function AboutHero() {
    return (
        <div className="relative bg-green-200 py-16 sm:py-24 aboutContainer">
        <div className="bg-gray-950 absolute w-full h-full opacity-70" style={{ zIndex: 0 }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <div className="flex items-center space-x-2">
                <Sprout className="h-6 w-6 text-green-600" />
                <h2 className="text-base montserrat-semibold text-green-600 tracking-wide uppercase">
                  About SIASD
                </h2>
              </div>
              <p className="mt-4 text-4xl montserrat-bold text-white tracking-tight">
                Supporting Local Agriculture Innovation
              </p>
              <p className="mt-6 text-xl text-gray-300 leading-8 montserrat-regular">
                SIASD offers services designed to support local agriculture producers and processors, customized to take advantage of regional assets and unique aspects of the local food and agriculture economies.
              </p>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
                  alt="Agricultural innovation"
                />
              </div>
              {/* <p className='text-red-800'>Important Notice: This page is still under construction...it is being refactored to look nice</p> */}
            </div>
          </div>
        </div>
      </div>
      
    );
  }