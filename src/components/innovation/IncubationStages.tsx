import React from "react";

interface IncubationStagesProps {
  step: string;
  title: string;
  description: JSX.Element;
}

const IncubationStages: React.FC<IncubationStagesProps> = ({
  step,
  title,
  description,
}) => {
  return (
    <div className="grid gap-5 border border-green-100 shadow-md p-4">
      <div className="font-serif">
        <p className="text-red-400">{step}</p>
        <h1 className="max-[767px]:text-[1rem] font-bold">{title}</h1>
      </div>

      <div className="flex gap-0.5">
        <div className="bg-green-800 w-[20%] h-2" />
        <div className="bg-black w-[50%] h-2" />
      </div>
      <p className="max-[767px]:text-sm font-serif">{description}</p>
    </div>
  );
};

export default IncubationStages;
