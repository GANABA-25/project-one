

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { IoSearch } from 'react-icons/io5';
import Link from 'next/link';

const ContactOverlay = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const stopPoint = 100; 
    const xOffset = Math.max(-100, Math.min(20, (scrollPosition - stopPoint) / 50)); // Adjust divisor for speed
    controls.start({ x: xOffset });
  }, [scrollPosition, controls]);

  return (
    <section className="text-white montserrat-regular fixed top-[8rem] z-50 right-0 hidden lg:block">
      <Link href="/contact"><motion.button
        className="border-t border-b border-l border-[#0a9995] flex items-center  py-2 px-4 rounded-l-3xl text-[0.8rem] hover:bg-white hover:text-black transition-all duration-300"
        animate={controls}
      >
        <IoSearch fontSize={30} className="mr-2 bg-[#0a9995] p-2 rounded-[50%] animate-pulse" />
        {scrollPosition < 500 ? 'find out more' : ''}
      </motion.button></Link>
    </section>
  );
};

export default ContactOverlay;
