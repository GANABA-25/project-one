import { motion } from "framer-motion";

const chooseData = [
  {
    image: "/images/innovation.svg",
    heading: "Innovation-Driven Solutions",
    description:
      " We prioritize building forward-thinking solutions that prepare your business for the future",
  },
  {
    image: "/images/expertIT.svg",
    heading: "Expert IT Consulting",
    description:
      "Our team delivers insights and strategies that align technology with your business goals.",
  },
  {
    image: "/images/scanner.png",
    heading: "Comprehensive IT Training",
    description:
      "Our training programs empower your team with the skills to excel in today’s tech-driven world",
  },
  {
    image: "/images/customer.svg",
    heading: "Customer-Centric Approach",
    description:
      "Every project is tailored to meet the specific needs of our clients, ensuring a seamless and effective solution",
  },
];

const WhyChoose = () => {
  return (
    <>
      <section className="w-[95%] mx-auto">
        <section className="pt-4 pb-8">
          <div className="text-center max-[767px]:my-8 md:my-12">
            <h1 className="max-[767px]:text-2xl max-[767px]:my-2 montserrat-bold font-bold md:text-3xl  lg:text-4xl">
              Why Choose Us
            </h1>
          </div>
          <div className="w-[95%] md:flex md:flex-row lg:flex lg:justify-between  lg:gap-16 mx-auto items-center rounded-2xl overflow-hidden">
            <section>
              {chooseData.map((item) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1.5 }}
                  key={item.image}
                  className=" max-[1189px]:w-[30rem] w-[40rem] max-[1023px]:w-full  flex flex-row items-center gap-8 border-t-2 border-tl-2 border-[grey] py-8"
                >
                  <div className="border border-[grey] p-3 rounded-full">
                    <div className="border border-[grey] p-3 rounded-full">
                      <img
                        src={item.image}
                        alt="ennovate"
                        width={item.image === "/images/customer.svg" ? 110 : 90}
                        height={
                          item.image === "/images/customer.svg" ? 110 : 90
                        }
                        className=""
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="montserrat-bold pb-2 text-[1.3rem]">
                      {item.heading}
                    </h3>
                    <p className="montserrat-regular text-justify text-[1.1rem]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </section>
            <div className="md:w-[300rem] max-[1023px]:hidden">
              <img
                src="/images/mills.jpeg"
                alt="ennovate"
                width={1000}
                height={500}
                className="md:rounded-xl object-cover h-[39rem]"
              />
              <p className="text-center montserrat-bold text-[1.1rem] pt-2">
                Michael Odartei Mills
              </p>
              <p className="text-center montserrat-regular text-[1.1rem]">
                CO-FOUNDER
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default WhyChoose;
