import React from "react";
import ContainerSec from "./ContainerSec";
import * as motion from "motion/react-client";

const Dream = () => {
  return (
    <>
      <section>
        <ContainerSec className=" relative">
          <h2 className=" text-[38px] font-cabinet text-center mt-[160px] w-[80%] mx-auto overflow-hidden mb-[-120px]  ">
            You dream it, I design it — let your vision come to life.
          </h2>
          <div className=" absolute left-[50%] translate-x-[-50%] top-[-100px] rotate-[-90deg] select-none pointer-events-none ">
            <div
              initial={{ opacity: 0, x: -100, y: -100 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ ease: "easeOut" }}
              className="border-[10px] border-[#fefeff] rounded-3xl w-[200px] rotate-50 "
            >
              <img
                src="pavanmg.png"
                alt=""
                className=" grayscale-50 rounded-2xl "
              />
            </div>
            <motion.div
              initial={{ x: -100, y: -100 }}
              whileInView={{ x: 0, y: 0 }}
              transition={{ ease: "easeOut" }}
              className="border-[10px] border-[#fefeff] rounded-3xl w-[200px] rotate-50 "
            >
              <img
                src="pavanmg.png"
                alt=""
                className=" grayscale-50 rounded-2xl "
              />
            </motion.div>
            <motion.div
              initial={{ x: -200, y: -200 }}
              whileInView={{ x: 0, y: 0 }}
              transition={{ ease: "easeOut" }}
              className="border-[10px] border-[#fefeff] rounded-3xl w-[200px] rotate-50 "
            >
              <img
                src="pavanmg.png"
                alt=""
                className=" grayscale-50 rounded-2xl "
              />
            </motion.div>
            <motion.div
              initial={{ x: -300, y: -300 }}
              whileInView={{ x: 0, y: 0 }}
              transition={{ ease: "easeOut" }}
              className="border-[10px] border-[#fefeff] rounded-3xl w-[200px] rotate-50 "
            >
              <img
                src="pavanmg.png"
                alt=""
                className=" grayscale-50 rounded-2xl "
              />
            </motion.div>
            <motion.div
              initial={{ x: -400, y: -400 }}
              whileInView={{ x: 0, y: 0 }}
              transition={{ ease: "easeOut" }}
              className="border-[10px] border-[#fefeff] rounded-3xl w-[200px] rotate-50 "
            >
              <img
                src="pavanmg.png"
                alt=""
                className=" grayscale-50 rounded-2xl "
              />
            </motion.div>
            <motion.div
              initial={{ x: -500, y: -500 }}
              whileInView={{ x: 0, y: 0 }}
              transition={{ ease: "easeOut" }}
              className="border-[10px] border-[#fefeff] rounded-3xl w-[200px] rotate-50 "
            >
              <img
                src="pavanmg.png"
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
