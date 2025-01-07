
import React from "react";
import Link from "next/link";

interface managersData {

    data:{
        image:string,
        title:string,
        description:string,
        buttonValue:string
    }
}

const ServiceCard:React.FC<managersData> = ({data}) => {
  
  return (
    <div className="max-[767px]:my-4 bg-gray-200 drop-shadow-lg group hover:shadow-lg rounded-xl h-[40rem] w-[25rem] custom-gradient hover:custom-gradient-2 hover:border-l hover:border-t hover:border-grey-500">
      <img className="rounded-t-xl" src={data.image} alt="innovateImage" />
      <div className="max-[767px]:mb-2 w-4 h-2 bg-[#0a9995] group-hover:w-full transition-width duration-300" />
      <div className="p-4">
        <h1 className="montserrat-bold  max-[767px]:my-2 font-bold opacity-90 md:text-xl md:my-4 text-white">
          {data.title}
        </h1>
        <p className="max-[767px] opacity-60 md:text-[1.1rem] max-[767px]:text-base montserrat-regular text-gray-200 text-justify">{data.description}</p>
      </div>
      <Link href="/contact"><button className=" absolute bottom-2 montserrat-regular max-[767px]:my-4 border-2 border-orange-500 max-[767px]:py-1 max-[767px]:px-6 mx-4 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full md:py-2 md:px-7 md:my-8 text-base">
        {data.buttonValue}
      </button></Link>
    </div>
  );
};

export default ServiceCard;