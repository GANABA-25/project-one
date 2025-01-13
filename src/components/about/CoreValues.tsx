import React from "react";
import { Leaf, Lightbulb, GraduationCap, Users } from "lucide-react";

export function CoreValues() {
  const values = [
    {
      name: "Sustainability",
      icon: Leaf,
      description:
        "Committed to environmental and economic sustainability in agriculture",
    },
    {
      name: "Innovation",
      icon: Lightbulb,
      description: "Fostering creative solutions and technological advancement",
    },
    {
      name: "Education",
      icon: GraduationCap,
      description:
        "Providing comprehensive learning opportunities and knowledge sharing",
    },
    {
      name: "Community Empowerment",
      icon: Users,
      description:
        "Strengthening local communities through agricultural development",
    },
  ];

  return (
    <div className="bg-white pt-4 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl montserrat-bold text-gray-900">
            Core Values
          </h2>
          <p className="mt-4 max-w-2xl text-xl montserrat-semibold text-gray-500 lg:mx-auto">
            Our values guide everything we do at SIASD
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.name} className="pt-6">
                <div className="flow-root bg-gray-200 rounded-lg px-6 pb-8">
                  <div className="-mt-6 h-[15rem]">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                        <value.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg montserrat-semibold text-gray-900 tracking-tight">
                      {value.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500 montserrat-regular">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
