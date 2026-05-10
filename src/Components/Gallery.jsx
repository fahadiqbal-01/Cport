import { motion } from "motion/react";
import React, { useState } from "react";

const Gallery = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 xl:px-[50px] lg:px-[50px] md:px-[50px] px-[20px] pt-[50px] select-none "
      >
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="image/Maverick.png"
              alt="..."
              loading="lazy"
            />
          </div>

          <div>
            <img
              className="h-auto max-w-full z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="image/redhood.png"
              alt="..."
              loading="lazy"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="image/vintageknight.png"
              alt="..."
              loading="lazy"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="image/Tscott.png"
              alt="..."
              loading="lazy"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="image/vintagecar.png"
              alt="..."
              loading="lazy"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="image/aventador.png"
              alt="..."
              loading="lazy"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="image/Phantom.png"
              alt="..."
              loading="lazy"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="image/painteye.png"
              alt="..."
              loading="lazy"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="image/flyingwarrior.png"
              alt="..."
              loading="lazy"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="image/MoreAmore.png"
              alt="..."
              loading="lazy"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="image/porsche.png"
              alt="..."
              loading="lazy"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="image/Marlboro.png"
              alt="..."
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 xl:px-[50px] lg:px-[50px] md:px-[50px] px-[20px] pt-[50px] ">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="image/YUAN.png"
              alt="..."
              loading="lazy"
            />
          </div>

          <div>
            <img
              className="h-auto max-w-full z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="image/eyes.png"
              alt="..."
              loading="lazy"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="image/redghost.png"
              alt="..."
              loading="lazy"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="image/FEIN.png"
              alt="..."
              loading="lazy"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="image/crown.png"
              alt="..."
              loading="lazy"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="image/SicoMode.png"
              alt="..."
              loading="lazy"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="image/Avaia.png"
              alt="..."
              loading="lazy"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="image/knight.png"
              alt="..."
              loading="lazy"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="image/fear.png"
              alt="..."
              loading="lazy"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="image/airporsche.png"
              alt="..."
              loading="lazy"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="image/redghost.png"
              alt="..."
              loading="lazy"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full z-50 hover:scale-[0.95] hover:z-auto duration-300 ease-out  "
              src="image/crown.png"
              alt="..."
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
