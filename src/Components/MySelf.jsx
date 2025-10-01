import React from "react";
import ContainerSec from "./ContainerSec";
import * as motion from "motion/react-client";
import { easeOut } from "motion";
import Dream from "./Dream";

const MySelf = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4, ease: easeOut }}
      viewport={{ once: true }}
      id="About"
      className=""
    >
      <ContainerSec>
        <h2
          className=" xl:text-[38px] lg:text-[36px] md:text-[32px] text-[28px]
         font-cabinet text-center xl:mt-[160px] lg:mt-[140px] md:mt-[120px] mt-[80px] mx-auto pt-[20px] selection:text-white selection:bg-black "
        >
          Not just building websites — shaping experiences.
        </h2>
        <div className=" my-[30px] grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center">
          <img
            src="image/f1.PNG"
            alt="myIMG"
            className=" w-[300px] rounded-2xl xl:drop-shadow-none lg:drop-shadow-none md:drop-shadow-none drop-shadow-xl
             xl:shadow-none lg:shadow-none md:shadow-none shadow-xl
             hover:drop-shadow-2xl hover:shadow-2xl duration-300 ease-out select-none mx-auto "
          />
          <p
            className=" xl:text-[26px] lg:text-[26px] md:text-[24px] text-[20px] xl:mt-0 lg:mt-0 md:mt-0 mt-[16px]
          font-GeneralSans selection:text-white selection:bg-black xl:px-0 lg:px-0 md:px-0 px-[20px] xl:text-left lg:text-left md:text-left text-center "
          >
          <span className=" text-[#d50201] font-black " >I’m Fahad Iqbal</span> — a Web & UX/UI Developer, as well as a
            visual creator. I build clean, user-friendly websites and design
            graphics that connect — from posters and banners to refined photo
            edits. My work blends creativity with purpose, always focused on
            delivering meaningful experiences.
          </p>
        </div>
      </ContainerSec>
    </motion.section>
  );
};

export default MySelf;
