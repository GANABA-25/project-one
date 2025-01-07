import React from "react";

// Define prop types for the component
interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className="font-serif grid gap-4 p-8 bg-[rgb(245,226,229)] cursor-pointer hover:shadow-[0_0_20px_0px_rgb(124,122,122)] transition-shadow">
      <div>
        <h1 className="text-center text-green-800 text-2xl">{title}</h1>
        <div className="flex justify-center items-center gap-0.5">
          <div className="bg-green-800 w-[20%] md:w-[10%] lg:w-[10%] h-2" />
          <div className="bg-black w-[40%] md:w-[20%] lg:w-[10%] h-2" />
        </div>
      </div>

      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
