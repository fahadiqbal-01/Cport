import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as motion from "motion/react-client";
import { easeOut, useAnimation, useInView } from "motion/react";
import { Linear } from "gsap";

export const SendMSGbtn = ({ children, to, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 100, scale: 1 },
      }}
      initial={`hidden`}
      animate={mainControls}
      transition={{
        delay: 0.5,
        duration: 0.7,
        ease: easeOut,
        type: "spring",
        stiffness: 150,
      }}
      className=" flex justify-center xl:mt-[50px] lg:mt-[40px] md:mt-[40px] mt-[30px] select-none "
    >
      <Link to={to}>
        <button
          className={` ${className}  cursor-pointer overflow-hidden z-50 xl:text-[24px] lg:text-[24px] md:text-[24px] text-[18px] text-white font-Gambarino 
      bg-black xl:px-[100px] lg:px-[100px] md:px-[100px] sm:px-[80px] px-[60px] py-[10px] border-4 border-black 
         rounded-2xl hover:shadow-2xl hover:drop-shadow-2xl hover:text-white hover:scale-[1.1] hover:border-black hover:bg-transparent after:content-[''] 
         after:h-[80px] after:w-[200px] after:bg-[#000000] after:border-0 after:rounded-[500px]
         after:absolute after:bottom-[-100px] after:left-[50%] after:translate-x-[-50%] after:-z-50 after:duration-500 after:ease-out hover:after:bottom-[-40px]
          duration-300 ease-out relative `}
        >
          {children}
        </button>
      </Link>
    </motion.div>
  );
};
