import ServiceCard from "./serviceItems/ServiceCard";

const Services = () => {
  const ProgramData = [
    {
      image: "/images/software.jpg",
      title: "Custom Software Development",
      description:
        "We design and develop bespoke software solutions tailored to your business needs, ensuring efficiency, scalability, and integration with existing systems.",
      buttonValue: "LEARN MORE",
    },
    {
      image: "/images/webmobile.jpg",
      title: "Mobile & Web App Development",
      description:
        "Our team builds responsive and user-friendly mobile and web applications to enhance your digital presence and engage customers effectively, whether on iOS, Android, or web platforms.",
      buttonValue: "LEARN MORE",
    },
    {
      image: "/images/consulting.jpg",
      title: "IT Consulting",
      description:
        "TecHelp’s experienced consultants provide strategic advice on implementing the right technology, including cloud solutions, cybersecurity, and digital transformation, to align with your business objectives.",
      buttonValue: "LEARN MORE",
    },
    {
      image: "/images/cloud.webp",
      title: "Cloud & Infrastructure Services",
      description:
        "We help businesses migrate to and optimize cloud infrastructures, ensuring flexibility, security, and improved operational efficiency.",
      buttonValue: "LEARN MORE",
    },
    {
      image: "/images/ittraining.jpg",
      title: "IT Training",
      description:
        "In addition to our development and consulting services, TecHelp offers comprehensive IT training programs, equipping individuals and teams with the skills they need in areas such as software development, cybersecurity, AI, and cloud computing.",
      buttonValue: "LEARN MORE",
    },
  ];

  return (
    <>
      <section>
        <div className="text-center max-[767px]:my-8 md:my-12">
          <h1 className="max-[767px]:text-2xl max-[767px]:my-2 montserrat-bold md:text-3xl  lg:text-4xl text-white">
            Our Services
          </h1>
        </div>
        <div className="w-full flex overflow-x-auto hide-scrollbar">
          <div className="flex flex-row space-x-8">
            {ProgramData.map((data) => (
              <ServiceCard key={data.title} data={data} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
