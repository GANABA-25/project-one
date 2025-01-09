import React from "react";

interface FacilitiesProps {
  image: string;
  title: string;
  description: string;
  space1?: string;
  space2?: string;
  space3?: string;
  space4?: string;
  space5?: string;
  space6?: string;
  rate: string;
}

const Facilities: React.FC<FacilitiesProps> = ({
  image,
  title,
  description,
  space1,
  space2,
  space3,
  space4,
  space5,
  space6,
  rate,
}) => {
  return (
    <section className="montserrat-regular shadow-lg rounded-lg overflow-hidden bg-white grid md:grid-cols-2 gap-6 py-8 px-6 max-w-5xl mx-auto">
      <div className="relative w-full h-full md:h-auto">
        <img
          width={500}
          height={500}
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="grid gap-4">
        <div>
          <h1 className="text-2xl montserrat-bold text-gray-800">{title}</h1>
          <div className="flex gap-0.5">
            <div className="bg-green-800 w-[20%] md:w-[10%] lg:w-[5%] h-2" />
            <div className="bg-black w-[40%] md:w-[20%] lg:w-[10%] h-2" />
          </div>
        </div>

        <p className="text-gray-600 text-sm">{description}</p>
        <ul className="text-gray-700 text-sm space-y-2">
          {space1 && <li className="flex items-start gap-2">✔ {space1}</li>}
          {space2 && <li className="flex items-start gap-2">✔ {space2}</li>}
          {space3 && <li className="flex items-start gap-2">✔ {space3}</li>}
          {space4 && <li className="flex items-start gap-2">✔ {space4}</li>}
          {space5 && <li className="flex items-start gap-2">✔ {space5}</li>}
          {space6 && <li className="flex items-start gap-2">✔ {space6}</li>}
        </ul>
        <div className="text-md montserrat-bold text-green-600">{rate}</div>
      </div>
    </section>
  );
};

export default Facilities;
