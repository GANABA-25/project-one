import React from "react";

interface AnimalsProps {
  title: string;
  image: string;
}

const Animals: React.FC<AnimalsProps> = ({ title, image }) => {
  return (
    <div className="relative w-full h-[10rem] overflow-hidden shadow-xl">
      <img
        src={image}
        width={500}
        height={500}
        alt="Farm"
        className="object-cover lg:h-[10rem] w-full"
      />
      <div className="absolute inset-0 bg-green-900/40" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 space-y-4">
        <h1 className="text-3xl md:text-2xl montserrat-bold">{title}</h1>
      </div>
    </div>
  );
};

export default Animals;
