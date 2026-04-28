import React from "react";
import ContainerSec from "./ContainerSec";
import * as motion from "motion/react-client";
import { easeOut } from "motion";

const Dream = () => {
  return (
    <>
      <section className=" 2xl:mt-[100px] xl:mt-[80px] lg:mt-[80px] mt-[50px] ">
        <ContainerSec className=" relative xl:pb-[240px] lg:pb-[260px] md:pb-[220px] pb-[100px] ">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 100, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: easeOut,
              type: "spring",
              stiffness: "80",
            }}
            viewport={{ once: true }}
            className=" xl:text-[38px] lg:text-[38] md:text-[34px] text-[26px] font-Gambarino text-center w-[80%] leading-tight mx-auto overflow-hidden selection:text-white selection:bg-black "
          >
            You dream it, I design it — let your vision come to life.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 100, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: easeOut,
              type: "spring",
              stiffness: "80",
            }}
            viewport={{ once: true, amount: 0.2 }}
            className=" absolute left-[50%] translate-x-[-50%] xl:top-[-140px] lg:top-[-140px] md:top-[-170px] top-[-220px] rotate-[-90deg] select-none pointer-events-none xl:scale-100 lg:scale-100 md:scale-90 scale-45 "
          >
            <div className=" w-[200px] rotate-50 border-[5px] rounded-3xl border-[#ffffff] ">
              <img
                src="image/pavanmg.png"
                alt=""
                className=" grayscale-50 rounded-2xl "
              />
            </div>
            <div className=" w-[200px] rotate-50 border-[5px] rounded-3xl border-[#ffffff] ">
              <img
                src="image/mrcfly.png"
                alt=""
                className=" grayscale-50 rounded-2xl "
              />
            </div>
            <div className=" w-[200px] rotate-50 border-[5px] rounded-3xl border-[#ffffff] ">
              <img
                src="image/exclusive.png"
                alt=""
                className=" grayscale-50 rounded-2xl "
              />
            </div>
            <div className=" w-[200px] rotate-50 border-[5px] rounded-3xl border-[#ffffff] ">
              <img
                src="image/hancok.png"
                alt=""
                className=" grayscale-50 rounded-2xl "
              />
            </div>
            <div className=" w-[200px] rotate-50 border-[5px] rounded-3xl border-[#ffffff] ">
              <img
                src="image/aeropage.png"
                alt=""
                className=" grayscale-50 rounded-2xl "
              />
            </div>
            <div className=" w-[200px] rotate-50 border-[5px] rounded-3xl border-[#ffffff] ">
              <img
                src="image/omah.png"
                alt=""
                className=" grayscale-50 rounded-2xl "
              />
            </div>
            <div className=" w-[200px] rotate-50 border-[5px] rounded-3xl border-[#ffffff] ">
              <img
                src="image/notepad.gif"
                alt=""
                className=" grayscale-50 rounded-2xl "
              />
            </div>
          </motion.div>
        </ContainerSec>
      </section>
    </>
  );
};

export default Dream;
