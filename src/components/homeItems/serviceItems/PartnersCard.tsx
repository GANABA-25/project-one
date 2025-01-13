import React from "react";

interface PartnersCardProps {
  logoImage: string;
  name: string;
}

const PartnersCard: React.FC<PartnersCardProps> = ({ logoImage, name }) => {
  return (
    <li className="montserrat-bold flex flex-col items-center text-center space-y-4 bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow hover:bg-gray-100">
      <img
        src={logoImage}
        alt="partnersLogo"
        className="w-20 h-20 object-contain rounded-md"
      />
      <h3 className="text-green-600 font-medium text-lg">{name}</h3>
    </li>
  );
};

export default PartnersCard;
