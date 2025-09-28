import { easeInOut, easeOut, useAnimation, useInView } from "motion/react";
import Marquee from "react-fast-marquee";
import * as motion from "motion/react-client";
import { useEffect, useRef } from "react";
import { SiGnuicecat } from "react-icons/si";

const LeftSlide = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 100, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.7,
        ease: easeOut,
        type: "spring",
        stiffness: 100,
      }}
      className=" xl:mt-[110px] lg:mt-[90px] md:mt-[70px] sm:mt-[50px] mt-[30px] "
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 100 }}
        transition={{
          delay: 0.3,
          duration: 0.5,
          ease: easeOut,
        }}
        className=" mb-[20px] "
      >
        <div className=" ">
          <SiGnuicecat className=" mx-auto xl:text-[60px] lg:text-[60px] md:text-[50px] sm:text-[40px] text-[30px] fill-black" />
        </div>

        <h2 className=" font-cabinet xl:text-[38px] lg:text-[36px] md:text-[32px] text-[28px] font-medium text-center select-auto selection:bg-black selection:text-white ">
          Step into my digital home
        </h2>
      </motion.div>

      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={false}
        loop={0} // 0 = infinite loop
        className=" select-none "
      >
        <motion.div
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1 }}
          transition={{
            duration: 0.3,
            ease: easeOut,
          }}
          style={slideStyle}
        >
          <img
            className=" rounded-2xl duration-300 ease-out  "
            src="/vintagecar.png"
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1 }}
          transition={{
            duration: 0.3,
            ease: easeOut,
          }}
          style={slideStyle}
        >
          <img
            className=" rounded-2xl duration-300 ease-out "
            src="/porsche.png"
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0.96 }}
          whileHover={{ scale: 1.06 }}
          transition={{
            duration: 0.3,
            ease: easeOut,
          }}
          style={slideStyle}
        >
          <img
            className=" rounded-2xl duration-300 ease-out "
            src="/flyingwarrior.png"
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1 }}
          transition={{
            duration: 0.3,
            ease: easeOut,
          }}
          style={slideStyle}
        >
          <img
            className=" rounded-2xl duration-300 ease-out "
            src="aventador.png"
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1 }}
          transition={{
            duration: 0.3,
            ease: easeOut,
          }}
          style={slideStyle}
        >
          <img
            className=" rounded-2xl duration-300 ease-out "
            src="defpunk.png"
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1 }}
          transition={{
            duration: 0.3,
            ease: easeOut,
          }}
          style={slideStyle}
        >
          <img
            className=" rounded-2xl duration-300 ease-out "
            src="knight.png"
          />
        </motion.div>
      </Marquee>
    </motion.div>
  );
};

const slideStyle = {
  maxWidth: "300px",
  margin: "0 10px ",
  background: "transparent",
  color: "white",
  textAlignY: "start",
  willChange: "transform",
};

export default LeftSlide;
