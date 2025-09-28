import { easeInOut, easeOut, useAnimation, useInView } from "motion/react";
import Marquee from "react-fast-marquee";
import * as motion from "motion/react-client";
import { FaCss3Alt, FaGitAlt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const LeftSlideSec = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 100, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 1,
        ease: easeOut,
      }}
      className=" xl:mt-[110px] lg:mt-[90px] md:mt-[70px] sm:mt-[50px] my-[30px] select-none "
    >
      <Marquee gradient={false} speed={100} pauseOnHover={false} loop={0}>
        <motion.div
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1 }}
          transition={{
            duration: 0.3,
            ease: easeOut,
          }}
          style={slideStyle}
        >
          <div className=" py-[25px] px-[60px] bg-black/10 rounded-lg">
            <FaReact className=" xl:text-[80px] lg:text-[60px] md:text-[50px] text-[30px] text-[#53c1de] " />
          </div>
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
          <div className=" py-[25px] px-[60px] bg-black/10 rounded-lg">
            <RiTailwindCssFill className=" xl:text-[80px] lg:text-[60px] md:text-[50px] text-[30px] text-[#01adc1] " />
          </div>
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
          <div className=" py-[25px] px-[60px] bg-black/10 rounded-lg">
            <SiRedux className=" xl:text-[75px] lg:text-[55px] md:text-[45px] text-[25px] text-[#000000] " />
          </div>
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
          <div className=" py-[25px] px-[60px] bg-black/10 rounded-lg">
            <FaHtml5 className=" xl:text-[80px] lg:text-[60px] md:text-[50px] text-[30px] text-[#e75000] " />
          </div>
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
          <div className=" py-[25px] px-[60px] bg-black/10 rounded-lg">
            <FaCss3Alt className=" xl:text-[80px] lg:text-[60px] md:text-[50px] text-[30px] text-[#0377bc] " />
          </div>
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
          <div className=" py-[25px] px-[60px] bg-black/10 rounded-lg">
            <FaJs className=" xl:text-[80px] lg:text-[60px] md:text-[50px] text-[30px] text-[#fed601] " />
          </div>
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
          <div className=" py-[25px] px-[60px] bg-black/10 rounded-lg">
            <TbApi className=" xl:text-[80px] lg:text-[60px] md:text-[50px] text-[30px] text-[#000000] " />
          </div>
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
          <div className=" py-[25px] px-[60px] bg-black/10 rounded-lg">
            <RiNextjsFill className=" xl:text-[80px] lg:text-[60px] md:text-[50px] text-[30px] text-[#000000] " />
          </div>
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
          <div className=" py-[25px] px-[60px] bg-black/10 rounded-lg">
            <FaGitAlt className=" xl:text-[80px] lg:text-[60px] md:text-[50px] text-[30px] text-[#f4501f] " />
          </div>
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
          <div className=" py-[25px] px-[60px] bg-black/10 rounded-lg">
            <img src="firebase.png" className=" xl:w-[65px] lg:w-[50px] md:w-[40px] w-[25px] " />
          </div>
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

export default LeftSlideSec;
