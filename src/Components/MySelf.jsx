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
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          transition={{
            duration: 1.2,
            ease: easeOut,
          }}
          viewport={{ once: true, amount: 0.4 }}
          className=" xl:text-[38px] lg:text-[36px] md:text-[32px] text-[28px] 
         font-cabinet text-center xl:mt-[160px] lg:mt-[140px] md:mt-[120px] mt-[80px] mx-auto pt-[20px] selection:text-white selection:bg-black "
        >
          Not just building websites — shaping experiences.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          transition={{
            duration: 1.2,
            ease: easeOut,
          }}
          viewport={{ once: true, amount: 0.4 }}
          className=" my-[30px] grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center"
        >
          <img
            src="image/f3.PNG"
            alt="myIMG"
            className=" w-[300px] rounded-2xl xl:drop-shadow-2xl lg:drop-shadow-2xl md:drop-shadow-2xl drop-shadow-2xl
             xl:shadow-2xl lg:shadow-2xl md:shadow-2xl shadow-xl select-none mx-auto "
          />
          <p
            className=" xl:text-[26px] lg:text-[26px] md:text-[24px] text-[20px] xl:mt-0 lg:mt-0 md:mt-0 mt-[16px]
          font-GeneralSans selection:text-white selection:bg-black xl:px-0 lg:px-0 md:px-0 px-[20px] xl:text-left lg:text-left md:text-left text-center "
          >
            <span className=" text-[#91040c] font-black ">I’m Fahad Iqbal</span>
            — a Web & UX/UI Developer, as well as a visual creator. I build
            clean, user-friendly websites and design graphics that connect —
            from posters and banners to refined photo edits. My work blends
            creativity with purpose, always focused on delivering meaningful
            experiences.
          </p>
        </motion.div>

        <div className=" flex xl:justify-start lg:justify-start md:justify-start justify-center items-center gap-4 xl:ml-12 lg:ml-12 md:ml-12 ml-0 ">
          <motion.a
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 100, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: easeOut,
            }}
            viewport={{ once: true }}
            href="https://github.com/fahadiqbal-01"
            target="_blank"
            className=" block "
          >
            <img
              src="icons/github.png"
              alt="github_icon"
              className=" w-[40px] "
            />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 100, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: easeOut,
            }}
            viewport={{ once: true }}
            href="https://x.com/_fahad_01_"
            target="_blank"
            className=" block "
          >
            <img src="icons/x.png" alt="twitter_icon" className=" w-[40px] " />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 100, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: easeOut,
            }}
            viewport={{ once: true }}
            href=""
            target="_blank"
            className=" block "
          >
            <img
              src="icons/linkedin.png"
              alt="linkedin_icon"
              className=" w-[40px] "
            />
          </motion.a>
        </div>
      </ContainerSec>
    </motion.section>
  );
};

export default MySelf;
