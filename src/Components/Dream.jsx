import React from "react";
import ContainerSec from "./ContainerSec";
import * as motion from "motion/react-client";

const Dream = () => {
  return (
    <>
      <section>
        <ContainerSec className=" relative pb-[150px] ">
          <h2 className=" text-[38px] font-cabinet text-center mt-[160px] w-[80%] mx-auto overflow-hidden ">
            You dream it, I design it — let your vision come to life.
          </h2>
          <div className=" absolute left-[50%] translate-x-[-50%] top-[-80px] rotate-[-90deg] select-none pointer-events-none ">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut" }}
              className=" w-[200px] rotate-50 border-[5px] rounded-3xl border-[#ffffff] "
            >
              <img
                src="pavanmg.png"
                alt=""
                className=" grayscale-50 rounded-2xl "
              />
            </motion.div>
            <motion.div
              initial={{ x: -100, y: -100, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ ease: "easeOut" }}
              className=" w-[200px] rotate-50 border-[5px] rounded-3xl border-[#ffffff] "
            >
              <img
                src="exclusive.png"
                alt=""
                className=" grayscale-50 rounded-2xl "
              />
            </motion.div>
            <motion.div
              initial={{ x: -200, y: -200, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ ease: "easeOut" }}
              className=" w-[200px] rotate-50 border-[5px] rounded-3xl border-[#ffffff] "
            >
              <img
                src="hancok.png"
                alt=""
                className=" grayscale-50 rounded-2xl "
              />
            </motion.div>
            <motion.div
              initial={{ x: -300, y: -300, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ ease: "easeOut" }}
              className=" w-[200px] rotate-50 border-[5px] rounded-3xl border-[#ffffff] "
            >
              <img
                src="aeropage.png"
                alt=""
                className=" grayscale-50 rounded-2xl "
              />
            </motion.div>
            <motion.div
              initial={{ x: -400, y: -400, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ ease: "easeOut" }}
              className=" w-[200px] rotate-50 border-[5px] rounded-3xl border-[#ffffff] "
            >
              <img
                src="omah.png"
                alt=""
                className=" grayscale-50 rounded-2xl "
              />
            </motion.div>
            <motion.div
              initial={{ x: -500, y: -500, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ ease: "easeOut" }}
              className=" w-[200px] rotate-50 border-[5px] rounded-3xl border-[#ffffff] "
            >
              <img
                src="notepad.gif"
                alt=""
                className=" grayscale-50 rounded-2xl "
              />
            </motion.div>
          </div>
        </ContainerSec>
      </section>
    </>
  );
};

export default Dream;
