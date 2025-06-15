import React, { useState } from "react";
import * as motion from "motion/react-client";
import { easeInOut } from "motion";

const Chat = () => {

  return (
    <>
      <div className=" flex justify-center mt-[50px] ">
        <motion.button
          initial={{ y: 100, opacity:0 }}
          whileInView={{ y: 0, opacity:100 }}
          transition={{ ease: easeInOut }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className=" cursor-pointer overflow-hidden z-50 text-[20px] text-yellow-500 font-GeneralSans bg-black px-[100px] py-[10px] border-4 border-black
         rounded-2xl hover:text-black hover:border-yellow-500 hover:bg-transparent after:content-[''] after:h-[80px] after:w-[200px] after:bg-yellow-500 after:border-0 after:rounded-[500px]
         after:absolute after:bottom-[-100px] after:left-[50%] after:translate-x-[-50%] after:-z-50 after:duration-500 after:ease-out hover:after:bottom-[-40px] duration-300 ease-out relative "
        >
          Chat with me
        </motion.button>

      </div>
    </>
  );
};

export default Chat;
