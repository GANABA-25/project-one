import eventData from "../../../data/events.json";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const Events = () => {

  const slicedData = eventData.slice(0, 6);

  const dateSplit = (dateParts:string)=>{
        const itemSplit = dateParts.split(" ")
        const month = itemSplit[0].slice(0, 3)
        const day = itemSplit[1].replace(",", " ")

        const result = `${month} ${day}`;

        return result
  }

  return (
    <>
      <section className="w-[95%] m-auto mt-16 lg:flex lg:flex-row lg:items-center lg:gap-8  px-4 rounded-[2rem] my-16">
        <section>
          <img
            src="/images/landingImages/land2.jpg"
            alt="events"
            width={500}
            height={500}
            className="object-cover lg:h-[50rem] h-[25rem] w-full lg:rounded-l-[1.2rem]"
          />
        </section>
        <section>
          <div className="max-[767px]:mb-2 max-[767px]:mx-2 w-8 h-2 bg-green-600 transition-width duration-300 mt-8 lg:mt-[0rem] " />
          <h1 className="max-[767px]:text-3xl  max-[767px]:my-3 montserrat-bold font-bold md:text-4xl md:my-4 lg:text-4xl lg:my-4">
            Upcoming Events
          </h1>
          {slicedData.map((eventName)=>(
            <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1.5 }}
                  key={eventName.id}
            className="flex flex-row items-center my-2 lg:w-[55rem] bg-gray-100 lg:rounded-r-[1.2rem]">
                <div className="bg-[#D6D3D1] py-12 text-center  w-[12rem] montserrat-semibold">
                    {dateSplit(eventName.date)}
                </div>
                <div className="px-8">
                    <h6 className="text-blue-500 text-[1rem] montserrat-bold">{eventName.title}</h6>
                    <p className="text-[1rem] montserrat-regular">{`${eventName.day}, ${eventName.date}, ${eventName.time}`}</p>
                    <p className="text-[1rem] montserrat-regular">{eventName.venue}</p>
                </div>
            </motion.div>
          ))}
          <a href="#####"><p className="text-blue-500 montserrat-semibold py-4 flex flex-row items-center gap-4">More Events <FaArrowRightLong /></p> </a>
        </section>
      </section>
    </>
  );
};

export default Events;
