import React from "react";
import ContainerSec from "./ContainerSec";
import * as motion from "motion/react-client";

const Dream = () => {
  return (
    <>
      <section>
        <ContainerSec className=" xl:block lg:block md:block hidden  relative pb-[150px] ">
          <h2 className=" text-[38px] font-cabinet text-center mt-[160px] w-[80%] mx-auto overflow-hidden selection:text-white selection:bg-black ">
            You dream it, I design it — let your vision come to life.
          </h2>
          <div className=" absolute left-[50%] translate-x-[-50%] top-[-80px] rotate-[-90deg] select-none pointer-events-none ">
            <div
              className=" w-[200px] rotate-50 border-[5px] rounded-3xl border-[#ffffff] "
            >
              <img
                src="image/pavanmg.png"
                alt=""
                className=" grayscale-50 rounded-2xl "
              />
            </div>
            <div
              className=" w-[200px] rotate-50 border-[5px] rounded-3xl border-[#ffffff] "
            >
              <img
                src="image/mrcfly.png"
                alt=""
                className=" grayscale-50 rounded-2xl "
              />
            </div>
            <div
              className=" w-[200px] rotate-50 border-[5px] rounded-3xl border-[#ffffff] "
            >
              <img
                src="image/exclusive.png"
                alt=""
                className=" grayscale-50 rounded-2xl "
              />
            </div>
            <div
              className=" w-[200px] rotate-50 border-[5px] rounded-3xl border-[#ffffff] "
            >
              <img
                src="image/hancok.png"
                alt=""
                className=" grayscale-50 rounded-2xl "
              />
            </div>
            <div
              className=" w-[200px] rotate-50 border-[5px] rounded-3xl border-[#ffffff] "
            >
              <img
                src="image/aeropage.png"
                alt=""
                className=" grayscale-50 rounded-2xl "
              />
            </div>
            <div
              className=" w-[200px] rotate-50 border-[5px] rounded-3xl border-[#ffffff] "
            >
              <img
                src="image/omah.png"
                alt=""
                className=" grayscale-50 rounded-2xl "
              />
            </div>
            <div
              className=" w-[200px] rotate-50 border-[5px] rounded-3xl border-[#ffffff] "
            >
              <img
                src="image/notepad.gif"
                alt=""
                className=" grayscale-50 rounded-2xl "
              />
            </div>
          </div>
        </ContainerSec>
      </section>
    </>
  );
};

export default Dream;
