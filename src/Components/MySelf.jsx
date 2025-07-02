import React from "react";
import ContainerSec from "./ContainerSec";
import * as motion from "motion/react-client";
import { easeOut } from "motion";

const MySelf = () => {
  return (
    <section id="About" className="h-[1000px] ">
      <ContainerSec>
        <h2 className=" text-[38px] font-cabinet text-center mt-[160px] mx-auto pt-[20px] ">
          Not just building websites — shaping experiences.
        </h2>
        <div className=" my-[30px] grid grid-cols-2 items-center">
          <img
            src="/redhood.png"
            alt="myIMG"
            className=" w-[350px] rounded-2xl "
          />
          <p className=" text-[26px] font-GeneralSans ">
            I’m Fahad Iqbal — a Web & UX/UI Developer, as well as a visual
            creator. I build clean, user-friendly websites and design graphics
            that connect — from posters and banners to refined photo edits. My
            work blends creativity with purpose, always focused on delivering
            meaningful experiences.
          </p>
        </div>

        <p className=" text-[26px] font-GeneralSans mr-[25px]  ">
          You bring the vision — I’ll bring it to life with care, clarity, and a
          commitment to getting every detail right."
        </p>

        <div className=" flex justify-evenly items-center gap-[20px] mt-[30px] px-[50px] py-[20px] border-4 border-white rounded-2xl ">
          <a href="" className=" flex items-center gap-[10px] group ">
            <img
              src="/icons/instagram.png"
              alt="insta_icon"
              className=" w-[32px] "
            />
            <h6 className=" text-[18px] font-GeneralSans ">Instagram</h6>
          </a>
          <a href="" className=" flex items-center gap-[10px] group ">
            <img
              src="/icons/twitter.png"
              alt="insta_icon"
              className=" w-[32px] "
            />
            <h6 className=" text-[18px] font-GeneralSans ">Twitter</h6>
          </a>
          <a
            href="https://wa.me/8801234567890?text=Hello%20Fahad%2C%20I%20came%20from%20your%20website!"
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
        </div>
      </ContainerSec>
    </section>
  );
};

export default MySelf;
