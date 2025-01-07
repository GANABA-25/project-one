import React from "react";

interface PartnersCardProps {
  logo: string;
  name: string;
}

const PartnersCard: React.FC<PartnersCardProps> = ({ logo, name }) => {
  return (
    <li className="flex flex-col items-center text-center space-y-4 bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow hover:bg-gray-100">
      <img
        src={logo}
        alt="partnersLogo"
        className="w-20 h-20 object-contain rounded-md"
      />
      <h3 className="text-green-600 font-medium text-lg">{name}</h3>
    </li>
  );
};

export default PartnersCard;
