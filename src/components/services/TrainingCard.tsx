import React from "react";

// Define the prop types for the component
interface TrainingCardProps {
  title: string;
  header: string;
  description: string;
  color: string;
}

const TrainingCard: React.FC<TrainingCardProps> = ({
  title,
  header,
  description,
  color,
}) => {
  return (
    <div
      className="bg-white text-black grid gap-4 border-t border-green-800 p-12 shadow-xl"
      style={{
        borderTop: `8px solid ${color}`,
      }}
    >
      <h1 className="text-green-800 text-4xl montserrat-bold">{header}</h1>
      <h1 className="text-xl montserrat-semibold">{title}</h1>
      <p className="montserrat-regular">{description}</p>
    </div>
  );
};

export default TrainingCard;
