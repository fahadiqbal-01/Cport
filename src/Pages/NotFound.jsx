import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{delay:0.3, duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className=" w-full h-auto flex flex-col justify-center items-center "
    >
      <p className=" xl:text-[38px] lg:text-[36px] md:text-[32px] text-[28px] font-GeneralSans flex flex-col justify-center items-center pt-[28px] ">
        Lost? <br />
        <span>
          Return -
          <Link to="/" className=" text-[#c51111] ml-2 ">
            Home
          </Link>
        </span>
      </p>
      <DotLottieReact src="json/404.lottie" loop autoplay />
    </motion.div>
  );
};
