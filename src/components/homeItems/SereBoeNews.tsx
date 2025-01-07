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
    <section className="shadow-2xl" style={{ backgroundColor: color }}>
      <img src={image} alt="news" />
      <div className="grid gap-4 my-4">
        <div
          className="w-[80%] m-auto grid gap-3 justify-center items-center"
          style={{ color: textColor }}
        >
          <h1 className="max-[767px]:text-sm md:text-2xl lg:text-xl">
            {title}
          </h1>
          <p className="max-[767px]:text-sm md:text-xl lg:text-sm">
            {description}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <h1
            className="text-sm rounded-xl p-2 md:text-xl lg:text-sm"
            style={{ backgroundColor: ButtonColor }}
          >
            {button}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default SiriboeNews;

// <main>
//   <section className="w-[95%] m-auto ">
//     <div className="relative border-4 border-red-600 group hover:bg-white hidden md:block lg:hidden">
//       <div className="bg-gray-950 absolute w-full h-full opacity-30" />
//       <img
//         className="w-[65rem] h-[20rem] object-cover"
//         src="/images/landingImages/land6.jpg"
//         width={500}
//         height={500}
//         alt="newImage"
//       />
//       <div className="absolute inset-0 flex justify-center items-center text-start text-white hover:underline hover:decoration-green-600 ">
//         <span>
//           <div className="max-[767px]:mb-2 max-[767px]:mx-2 w-4 h-2 bg-green-600 group-hover:bg-white transition-width duration-300" />
//           <p className="max-[767px]:text-xl montserrat-semibold  bg-black bg-opacity-50 md:text-2xl">
//             SIASD Award Presentations
//           </p>
//           <p className="max-[767px]:mx-2 max-[767px]:w-28 bg-black bg-opacity-50 montserrat-regular">
//             July, 2025
//           </p>
//         </span>
//       </div>
//     </div>
//     <div className="grid gap-1  md:grid md:grid-cols-2 my-1 lg:flex lg:gap-1">
//       <motion.div
//         initial={{ opacity: 0, x: 75 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: false }}
//         transition={{ duration: 1.5 }}
//         className="relative group hover:bg-white md:hidden lg:block"
//       >
//         <div className="bg-gray-950 absolute w-full h-full opacity-30" />
//         <img
//           className="w-[65rem] h-[20rem] object-cover"
//           src="/images/landingImages/land6.jpg"
//           alt="newImage"
//           width={500}
//           height={500}
//         />
//         <div className="absolute inset-0 flex justify-center items-center text-start text-white hover:underline hover:decoration-green-600 ">
//           <span>
//             <div className="max-[767px]:mb-2 max-[767px]:mx-2 w-4 h-2 bg-green-600 group-hover:bg-white transition-width duration-300" />
//             <p className="max-[767px]:text-lg montserrat-semibold  bg-black bg-opacity-50 md:text-xl">
//               SIASD Award Presentations
//             </p>
//             <p className="max-[767px]:mx-2 max-[767px]:w-28 bg-black bg-opacity-50 montserrat-regular">
//               July, 2025
//             </p>
//           </span>
//         </div>
//       </motion.div>
//       <div className="">
//         <div className="relative group hover:bg-white">
//           <div className="bg-gray-950 absolute w-full h-full opacity-30" />
//           <img
//             className=" h-[20rem] w-full object-cover"
//             src="/images/landingImages/land6.jpg"
//             alt="newImage"
//             width={500}
//             height={500}
//           />
//           <div className="absolute inset-0 flex justify-center items-center text-start text-white hover:underline hover:decoration-green-600 ">
//             <span>
//               <div className="max-[767px]:mb-2 max-[767px]:mx-2 w-4 h-2 bg-green-600 group-hover:bg-white transition-width duration-300 md:mx-4" />
//               <p className="max-[767px]:text-lg font-bold  bg-black bg-opacity-50 md:text-xl md:mx-4">
//                 SIASD Award Presentations
//               </p>
//               <p className="max-[767px]:mx-2 max-[767px]:w-28 bg-black bg-opacity-50 md:mx-4 montserrat-regular">
//                 January,2025
//               </p>
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className="">
//         <div className="relative group hover:bg-white">
//           <div className="bg-gray-950 absolute w-full h-full opacity-30" />
//           <img
//             className=" h-[20rem] w-full object-cover"
//             src="/images/landingImages/land6.jpg"
//             alt="newImage"
//             width={500}
//             height={500}
//           />
//           <div className="absolute inset-0 flex justify-center items-center text-start text-white hover:underline hover:decoration-green-600 ">
//             <span>
//               <div className="max-[767px]:mb-2 max-[767px]:mx-2 w-4 h-2 bg-green-600 group-hover:bg-white transition-width duration-300 md:mx-4" />
//               <p className="max-[767px]:text-lg montserrat-semibold  bg-black bg-opacity-50 md:text-xl md:mx-4">
//                 SIASD Festivals
//               </p>
//               <p className="max-[767px]:mx-2 montserrat-regular max-[767px]:w-28 bg-black bg-opacity-50 md:mx-4">
//                 March, 2025
//               </p>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>

//     <div className="grid gap-2 md:grid md:grid-cols-2 lg:flex lg:gap-1">
//       <div className="">
//         <div className="relative group hover:bg-white">
//           <div className="bg-gray-950 absolute w-full h-full opacity-30" />
//           <img
//             className="object-cover h-[20rem] w-full "
//             src="/images/landingImages/land6.jpg"
//             width={500}
//             height={500}
//             alt="newImage"
//           />
//           <div className="absolute inset-0 flex justify-center items-center text-start text-white hover:underline hover:decoration-green-600 ">
//             <span>
//               <div className="max-[767px]:mb-2 max-[767px]:mx-2 w-4 h-2 bg-green-600 group-hover:bg-white transition-width duration-300 md:mx-4" />
//               <p className="max-[767px]:text-lg montserrat-semibold bg-black bg-opacity-50 md:text-xl md:mx-4">
//                 SIASD Award Presentations
//               </p>
//               <p className="max-[767px]:mx-2 montserrat-regular max-[767px]:w-28 bg-black bg-opacity-50 md:mx-4">
//                 July, 2025
//               </p>
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className="">
//         <div className="relative group hover:bg-white">
//           <div className="bg-gray-950 absolute w-full h-full opacity-30" />
//           <img
//             className="object-cover h-[20rem] w-full"
//             src="/images/landingImages/land6.jpg"
//             width={500}
//             height={500}
//             alt="newImage"
//           />
//           <div className="absolute inset-0 flex justify-center items-center text-start text-white hover:underline hover:decoration-green-600 ">
//             <span>
//               <div className="max-[767px]:mb-2 max-[767px]:mx-2 w-4 h-2 bg-green-600 group-hover:bg-white transition-width duration-300 md:mx-4" />
//               <p className="max-[767px]:text-lg montserrat-semibold  bg-black bg-opacity-50 md:text-xl md:mx-4">
//                 SIASD Award Presentations
//               </p>
//               <p className="max-[767px]:mx-2 montserrat-regular max-[767px]:w-28 bg-black bg-opacity-50 md:mx-4">
//                 July, 2025
//               </p>
//             </span>
//           </div>
//         </div>
//       </div>
//       <motion.div className="hidden md:block ">
//         <div className="relative group hover:bg-white">
//           <div className="bg-gray-950 absolute w-full h-full opacity-30" />
//           <img
//             className="object-cover h-[20rem]"
//             src="/images/landingImages/land6.jpg"
//             width={500}
//             height={500}
//             alt="newImage"
//           />
//           <div className="absolute inset-0 flex justify-center items-center text-start text-white hover:underline hover:decoration-green-600 ">
//             <span>
//               <div className="max-[767px]:mb-2 max-[767px]:mx-2 w-4 h-2 bg-green-600 group-hover:bg-white transition-width duration-300 md:mx-4" />
//               <p className="max-[767px]:text-lg max-[767px]:mx-2 max-[767px]:my-2 montserrat-semibold bg-black bg-opacity-50 md:text-xl md:mx-4">
//                 SIASD Award Presentations
//               </p>
//               <p className="max-[767px]:mx-2 montserrat-regular max-[767px]:w-28 bg-black bg-opacity-50 md:mx-4">
//                 July, 2025
//               </p>
//             </span>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   </section>
// </main>
