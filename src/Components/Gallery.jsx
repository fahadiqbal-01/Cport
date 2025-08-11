import { motion } from "motion/react";
import React, { useState } from "react";

const Gallery = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 xl:px-[50px] lg:px-[50px] md:px-[50px] px-[20px] pt-[50px] select-none "
      >
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="Maverick.png"
              alt=""
            />
          </div>

          <div>
            <img
              className="h-auto max-w-full rounded-lg z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="redhood.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="vintageknight.png"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="/Tscott.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="vintagecar.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="YUAN.png"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="Phantom.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="painteye.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="flyingwarrior.png"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="MoreAmore.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="porsche.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="Marlboro.png"
              alt=""
            />
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-[50px] pt-[50px] ">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="aventador.png"
              alt=""
            />
          </div>

          <div>
            <img
              className="h-auto max-w-full rounded-lg z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="eyes.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="redghost.png"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="brokensoul.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="crown.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="SicoMode.png"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="Avaia.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="catwomen.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="fear.png"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="airporsche.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="redghost.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="crown.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
