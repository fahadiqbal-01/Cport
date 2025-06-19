import { easeInOut, easeOut, useAnimation, useInView } from "motion/react";
import Marquee from "react-fast-marquee";
import * as motion from "motion/react-client";
import { useEffect, useRef } from "react";
import { SiGnuicecat } from "react-icons/si";

const LeftSlide = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 100, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.3,
        ease: easeOut,
      }}
      className="mt-[110px] "
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 100, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.4,
          ease: easeOut,
        }}
        className=" mb-[20px] "
      >
        <div className=" p-0 m-0 pointer-events-none ">
          <SiGnuicecat className=" mx-auto text-[60px] pb-0 fill-black pointer-events-auto w-fit " />
        </div>

        <h2 className=" font-cabinet text-[28px] font-medium text-center ">
          Step into my digital home
        </h2>
        <div></div>
      </motion.div>

      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={false}
        loop={0} // 0 = infinite loop
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
            className=" rounded-2xl grayscale-[100%] hover:grayscale-0 duration-300 ease-out "
            src="/porsche.png"
            alt=""
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
            className=" rounded-2xl grayscale-[100%] hover:grayscale-0 duration-300 ease-out "
            src="/Maverick.png"
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
            className=" rounded-2xl grayscale-[100%] hover:grayscale-0 duration-300 ease-out "
            src=""
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
            className=" rounded-2xl grayscale-[100%] hover:grayscale-0 duration-300 ease-out "
            src=""
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
            className=" rounded-2xl grayscale-[100%] hover:grayscale-0 duration-300 ease-out "
            src=""
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
            className=" rounded-2xl grayscale-[100%] hover:grayscale-0 duration-300 ease-out "
            src=""
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
            className=" rounded-2xl grayscale-[100%] hover:grayscale-0 duration-300 ease-out "
            src=""
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
            className=" rounded-2xl grayscale-[100%] hover:grayscale-0 duration-300 ease-out "
            src=""
          />
        </motion.div>
      </Marquee>
    </motion.div>
  );
};

const slideStyle = {
  maxWidth: "300px",
  margin: "0 20px ",
  background: "transparent",
  color: "white",
  textAlignY: "start",
  willChange: "transform",
};

export default LeftSlide;
