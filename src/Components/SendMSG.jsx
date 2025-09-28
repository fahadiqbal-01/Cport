import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as motion from "motion/react-client";
import { easeOut, useAnimation, useInView } from "motion/react";
import { Linear } from "gsap";

export const SendMSG = () => {
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
      <Link to="/ContactMSG">
        <button
          className=" cursor-pointer overflow-hidden z-50 xl:text-[20px] lg:text-20px md:text-[20px] sm:text-[20px] text-[16px] text-yellow-500 font-GeneralSans 
      bg-black xl:px-[100px] lg:px-[100px] md:px-[100px] sm:px-[80px] px-[60px] py-[10px] border-4 border-black 
         rounded-2xl hover:shadow-2xl hover:drop-shadow-2xl hover:text-black hover:scale-[1.2] hover:border-yellow-500 hover:bg-transparent after:content-[''] 
         after:h-[80px] after:w-[200px] after:bg-yellow-500 after:border-0 after:rounded-[500px]
         after:absolute after:bottom-[-100px] after:left-[50%] after:translate-x-[-50%] after:-z-50 after:duration-500 after:ease-out hover:after:bottom-[-40px] duration-300 ease-out relative "
        >
          Send a text
        </button>
      </Link>
    </motion.div>
  );
};
