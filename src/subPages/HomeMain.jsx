import React, { useEffect, useRef } from "react";
import Star from "../Components/Star";
import Container from "../Components/Container";
import * as motion from "motion/react-client";
import { delay, easeIn, easeInOut, easeOut, scale } from "motion";
import Chat from "../Components/Chat";
import { _round } from "gsap/gsap-core";
import { useAnimation, useInView } from "motion/react";
import LeftSlide from "../Components/LeftSlide";
import { HashLink } from "react-router-hash-link";

const HomeMain = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <section>
      <Container className=" grid xl:grid-cols-3 grid-cols-1 xl:pb-[70px] lg:pb-[60px] md:pb-[50px] pb-[40px] ">
        <div className=" relative xl:block hidden ">
          <Star
            className=" absolute top-0 right-0 "
            innerFill="#f7f5f0"
            outerFill="lightblue"
          />
        </div>

        <div className=" z-50 xl:pt-[110px] lg:pt-[80px] md:pt-[70px] pt-[60px] mx-auto xl:px-0 px-[20px] ">
          <motion.h2
            ref={ref}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 100 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ delay: 0.5, duration: 0.7, ease: easeOut }}
            className=" font-GeneralSans text-black xl:text-[16px] lg:text-[16px] text-[16px] text-center mt-[10px] selection:text-white selection:bg-black "
          >
            Hi, I'm Fahad
          </motion.h2>

          <motion.h1
            ref={ref}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 100 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ delay: 0.5, duration: 1, ease: easeOut }}
            className=" xl:text-[70px] lg:text-[60px] md:text-[50px] text-[50px] font-cabinet text-center text-black 
            xl:leading-[75px] lg:leading-[60px] md:leading-[50px] leading-[40px] 
             xl:mt-[25px] lg:mt-[25px] md:mt-[25px] sm:mt-[18px] mt-[12px] 
             xl:w-fit lg:w-[70%] md:w-[80%] w-full mx-auto selection:text-white selection:bg-black "
          >
            Creative mind you can trust for clarity, style, and purpose
          </motion.h1>
          <motion.p
            ref={ref}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 100 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ delay: 0.5, duration: 0.7, ease: easeOut }}
            className=" text-center font-GeneralSans xl:text-[16px] lg:text-[16px] text-[16px] text-black 
            xl:leading-7 lg:leading-6 md:leading-5 leading-4 
            xl:mt-[25px] lg:mt-[25px] md:mt-[25px] mt-[18px] 
            xl:w-fit lg:w-[70%] md:w-[80%] w-full mx-auto selection:text-white selection:bg-black "
          >
            A collection of work shaped by creativity and thoughtful details,
            fueled by a genuine passion for turning ideas into clear, engaging
            visual experiences that inspire and connect.
          </motion.p>

          <Chat />
        </div>

        <div className=" relative xl:block hidden ">
          <Star
            className=" absolute top-0 left-0 "
            innerFill="#f7f5f0"
            outerFill="#822b28"
          />
        </div>
      </Container>
    </section>
  );
};

export default HomeMain;
