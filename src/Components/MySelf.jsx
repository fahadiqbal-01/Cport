import React from "react";
import ContainerSec from "./ContainerSec";

const MySelf = () => {
  return (
    <section id="About" className="h-[1000px] " >
      <ContainerSec>
        <h2 className=" text-[38px] font-cabinet text-center mt-[160px] mx-auto pt-[20px] ">
          Not just building websites — shaping experiences.
        </h2>
        <div className=" my-[30px] flex justify-between items-center gap-[40px] ">
          <img
            src="/redhood.png"
            alt="myIMG"
            className=" w-[300px] rounded-2xl "
          />
          <p className=" text-[26px] font-GeneralSans ">
            I’m Fahad Iqbal — a Web & UX/UI Developer, as well as a visual creator. I
            build clean, user-friendly websites and design graphics that connect
            — from posters and banners to refined photo edits. My work blends
            creativity with purpose, always focused on delivering meaningful
            experiences.
          </p>
        </div>
      </ContainerSec>
    </section>
  );
};

export default MySelf;
