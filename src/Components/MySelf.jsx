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
        <h2 className=" text-[38px] font-cabinet text-center mt-[160px] mx-auto pt-[20px] ">
          Not just building websites — shaping experiences.
        </h2>
        <div className=" my-[30px] grid grid-cols-2 items-center">
          <img
            src="/redhood.png"
            alt="myIMG"
            className=" w-[350px] rounded-2xl hover:drop-shadow-2xl hover:shadow-2xl duration-300 ease-out "
          />
          <p className=" text-[26px] font-GeneralSans  ">
            I’m Fahad Iqbal — a Web & UX/UI Developer, as well as a visual
            creator. I build clean, user-friendly websites and design graphics
            that connect — from posters and banners to refined photo edits. My
            work blends creativity with purpose, always focused on delivering
            meaningful experiences.
          </p>
        </div>

        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
          viewport={{ once: true }}
          className=" flex justify-evenly items-center gap-[20px] mt-[30px] px-[50px] py-[20px] bg-transparent border-4 
        border-white rounded-2xl select-none hover:drop-shadow-2xl hover:shadow-2xl hover:bg-transparent hover:border-transparent duration-300 ease-out "
        >
          <a href="" className=" flex items-center gap-[10px] group ">
            <img
              src="/icons/instagram.png"
              alt="instagram_icon"
              className=" w-[32px] "
            />
            <h6 className=" text-[18px] font-GeneralSans ">Instagram</h6>
          </a>
          <a
            href="https://twitter.com/_fahad_01_"
            target="blank"
            className=" flex items-center gap-[10px] group "
          >
            <img
              src="/icons/twitter.png"
              alt="insta_icon"
              className=" w-[32px] "
            />
            <h6 className=" text-[18px] font-GeneralSans ">Twitter</h6>
          </a>
          <a
            href="https://wa.me/8801748996699?text=Hello%20Fahad%2C%20I%20came%20from%20your%20website!"
            target="blank"
            className=" flex items-center gap-[10px] group "
          >
            <img
              src="/icons/whatsapp.png"
              alt="insta_icon"
              className=" w-[32px] "
            />
            <h6 className=" text-[18px] font-GeneralSans ">WhatsApp</h6>
          </a>
        </motion.div>
      </ContainerSec>
    </motion.section>
  );
};

export default MySelf;
