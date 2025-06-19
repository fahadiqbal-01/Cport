import React, { useEffect, useRef, useState } from "react";
import * as motion from "motion/react-client";
import { easeInOut, scale } from "motion";
import { useAnimate, useAnimation, useInView } from "motion/react";

const Chat = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <a
        href="mailto:yourname@example.com"
        className=" flex justify-center mt-[60px] select-none "
      >
        <motion.button
          ref={ref}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 100 },
          }}
          initial={`hidden`}
          animate={mainControls}
          transition={{ delay: 0.5, duration: 1.4, ease: easeInOut }}
          className=" cursor-pointer overflow-hidden z-50 text-[20px] text-yellow-500 font-GeneralSans bg-black px-[100px] py-[10px] border-4 border-black 
         rounded-2xl hover:text-black hover:scale-[1.2] hover:border-yellow-500 hover:bg-transparent after:content-[''] after:h-[80px] after:w-[200px] after:bg-yellow-500 after:border-0 after:rounded-[500px]
         after:absolute after:bottom-[-100px] after:left-[50%] after:translate-x-[-50%] after:-z-50 after:duration-500 after:ease-out hover:after:bottom-[-40px] duration-300 ease-out relative "
        >
          Chat with me
        </motion.button>
      </a>
    </>
  );
};

export default Chat;
