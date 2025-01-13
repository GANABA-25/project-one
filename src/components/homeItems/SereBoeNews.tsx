import { motion } from "framer-motion";

interface SiriboeNewsProps {
  image: string;
  title: string;
  description: string;
  button: string;
  color: string;
  textColor?: string;
  ButtonColor?: string;
}

const SiriboeNews: React.FC<SiriboeNewsProps> = ({
  image,
  title,
  description,
  button,
  color,
  textColor,
  ButtonColor,
}) => {
  return (
    <section
      className="shadow-2xl montserrat-regular"
      style={{
        backgroundColor: color,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%", // Ensures the section takes full available height
      }}
    >
      <img src={image} alt="news" className="w-full" />
      <div className="grid gap-4 my-4 flex-grow">
        <div
          className="w-[80%] m-auto grid gap-3 justify-center items-center"
          style={{ color: textColor }}
        >
          <h1 className="montserrat-bold max-[767px]:text-sm md:text-2xl lg:text-xl">
            {title}
          </h1>
          <p className="max-[767px]:text-sm md:text-xl lg:text-sm">
            {description}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-auto p-4">
        <h1
          className="text-sm rounded-xl p-2 md:text-xl lg:text-sm"
          style={{ backgroundColor: ButtonColor }}
        >
          {button}
        </h1>
      </div>
    </section>
  );
};

export default SiriboeNews;
