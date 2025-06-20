import React, { useEffect, useRef } from "react";
import Star from "../Components/Star";
import Container from "../Components/Container";
import * as motion from "motion/react-client";
import { delay, easeIn, easeInOut, easeOut, scale } from "motion";
import Chat from "../Components/Chat";
import { _round } from "gsap/gsap-core";
import { useAnimation, useInView } from "motion/react";
import LeftSlide from "../Components/LeftSlide";

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
      <Container className=" grid grid-cols-3 pb-[60px] ">
        <div className=" relative">
          <Star
            className=" absolute top-0 right-0 "
            innerFill="#fafcf8"
            outerFill="lightblue"
          />
        </div>

        <div className=" z-50 mt-[160px] ">


          <motion.h2
            ref={ref}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 100 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ delay: 0.5, duration: 1.4, ease: easeInOut }}
            className=" font-GeneralSans text-black text-[16px] text-center mt-[10px] "
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
            transition={{ delay: 0.5, duration: 1.4, ease: easeInOut }}
            className=" text-[75px] font-cabinet text-center text-black leading-[65px] mt-[30px] w-fit "
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
            transition={{ delay: 0.5, duration: 1.4, ease: easeInOut }}
            className=" text-center font-GeneralSans text-[16px] text-black leading-7 mt-[25px] w-fit "
          >
            A collection of work shaped by creativity and thoughtful details,
            fueled by a genuine passion for turning ideas into clear, engaging
            visual experiences that inspire and connect.
          </motion.p>

          <Chat />
        </div>

        <div className=" relative">
          <Star
            className=" absolute top-0 left-0 "
            innerFill="#fafcf8"
            outerFill="#91040c"
          />
        </div>
      </Container>
    </section>
  );
};

export default HomeMain;
