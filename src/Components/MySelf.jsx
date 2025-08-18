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
        <h2 className=" xl:text-[38px] lg:text-[36px] md:text-[32px] text-[28px]
         font-cabinet text-center xl:mt-[160px] lg:mt-[140px] md:mt-[120px] mt-[80px] mx-auto pt-[20px] selection:text-white selection:bg-black ">
          Not just building websites — shaping experiences.
        </h2>
        <div className=" my-[30px] grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center">
          <img
            src="/redhood.png"
            alt="myIMG"
            className=" w-[350px] rounded-2xl xl:drop-shadow-none lg:drop-shadow-none md:drop-shadow-none drop-shadow-xl
             xl:shadow-none lg:shadow-none md:shadow-none shadow-xl
             hover:drop-shadow-2xl hover:shadow-2xl duration-300 ease-out select-none mx-auto "
          />
          <p className=" xl:text-[26px] lg:text-[26px] md:text-[24px] text-[20px] xl:mt-0 lg:mt-0 md:mt-0 mt-[16px]
          font-GeneralSans selection:text-white selection:bg-black xl:px-0 lg:px-0 md:px-0 px-[20px] xl:text-left lg:text-left md:text-left text-center ">
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
          className=" flex justify-evenly items-center gap-[28px] mt-[30px] xl:px-[160px] lg:px-[160px] md:px-[150px] px-[20px] py-[20px] 
          bg-transparent border-4 border-white rounded-2xl drop-shadow-xl w-fit mx-auto
           hover:drop-shadow-2xl hover:shadow-2xl duration-300 ease-out select-none "
        >
          {/* <a
            href="https://www.instagram.com/theclonestamp/"
            target="_blank"
            className=" border-4 border-transparent rounded-2xl flex items-center gap-[10px]  "
          >
            <img
              src="/icons/instagram.png"
              alt="instagram_icon"
              className=" w-[32px] "
            />
            <h6 className=" text-[18px] font-GeneralSans xl:block lg:block md:block hidden ">Instagram</h6>
          </a> */}
          {/* <a
            href="https://twitter.com/_fahad_01_"
            target="blank"
            className=" border-4 border-transparent rounded-2xl flex items-center gap-[10px]  "
          >
            <img
              src="/icons/twitter.png"
              alt="insta_icon"
              className=" w-[32px] "
            />
            <h6 className=" text-[18px] font-GeneralSans xl:block lg:block md:block hidden ">Twitter</h6>
          </a> */}
          <a
            href="https://wa.me/8801748996699?text=Hello%20Fahad%2C%20I%20came%20from%20your%20website!"
            target="blank"
            className=" border-4 border-transparent rounded-2xl flex items-center gap-[10px]  "
          >
            <img
              src="/icons/whatsapp.png"
              alt="insta_icon"
              className=" w-[32px] "
            />
            <h6 className=" text-[18px] font-GeneralSans xl:block lg:block md:block hidden ">WhatsApp</h6>
          </a>
        </motion.div>
      </ContainerSec>
    </motion.section>
  );
};

export default MySelf;
