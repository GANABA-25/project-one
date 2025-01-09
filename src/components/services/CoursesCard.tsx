import React from "react";

interface CoursesCardProps {
  image: string;
  header: string;
  content: string;
  strategy: string;
  outcome: string;
  duration: string;
}

const CoursesCard: React.FC<CoursesCardProps> = ({
  image,
  header,
  content,
  strategy,
  outcome,
  duration,
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto montserrat-regular">
      <img
        src={image}
        alt="Mushroom Farming"
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <p className="text-lg text-gray-800 mb-6 montserrat-bold">{header}</p>

      <h3 className="text-xl montserrat-semibold text-gray-800 mb-2">
        Content
      </h3>
      <p className="text-lg text-gray-700 mb-6">{content}</p>

      <h3 className="text-xl montserrat-semibold text-gray-800 mb-2">
        Execution Strategy
      </h3>
      <p className="text-lg text-gray-700 mb-6">{strategy}</p>

      <h3 className="text-xl montserrat-semibold text-gray-800 mb-2">
        Outcome
      </h3>
      <p className="text-lg text-gray-700 mb-6">{outcome}</p>

      <h3 className="text-xl montserrat-semibold text-gray-800 mb-2">
        Duration
      </h3>
      <p className="text-lg text-gray-700 mb-6">{duration}</p>

      <button className="montserrat-bold px-6 py-3 bg-green-800 text-white text-lg rounded-lg hover:bg-green-700 transition">
        Read More
      </button>
    </div>
  );
};

export default CoursesCard;
