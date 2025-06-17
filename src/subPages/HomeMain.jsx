import React, { useEffect, useRef } from "react";
import Star from "../Components/Star";
import Container from "../Components/Container";
import * as motion from "motion/react-client";
import { delay, easeIn, easeInOut, easeOut, scale } from "motion";
import Chat from "../Components/Chat";
import { SiGnuicecat } from "react-icons/si";
import { Link } from "react-router-dom";
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
    <section className=" h-[2000px] ">
      <Container className=" grid grid-cols-3 ">
        <div className=" relative">
          <Star
            className=" absolute top-0 right-0 "
            innerFill="#fafcf8"
            outerFill="lightblue"
          />
        </div>

        <div className=" z-50 ">
          <motion.h2
            ref={ref}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 100 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ delay: 0.5, duration: 1.4, ease: easeInOut }}
            className=" font-GeneralSans text-black text-[16px] text-center mt-[110px] "
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
            className=" text-[68px] font-cabinet text-center text-black leading-[65px] mt-[20px] w-fit "
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
          <Link to="/ChatWithME">
            <Chat />
          </Link>

          <div className=" mt-[90px] ">
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 100 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ delay: 0.5, duration: 1.4, ease: easeInOut }}
              className=" p-0 m-0 pointer-events-none "
            >
              <SiGnuicecat className=" mx-auto text-[60px] pb-0 fill-black pointer-events-auto w-fit " />
            </motion.div>

            <motion.h2
              ref={ref}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 100 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ delay: 0.5, duration: 1.4, ease: easeInOut }}
              className=" font-cabinet text-[28px] font-medium text-center "
            >
              Step into my digital home
            </motion.h2>
            <div></div>
          </div>
        </div>

        <div className=" relative">
          <Star
            className=" absolute top-0 left-0 "
            innerFill="#fafcf8"
            outerFill="#91040c"
          />
        </div>
      </Container>
      <motion.div
        ref={ref}
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          animation: {
            delay: 1,
          },
          duration: 1,
          ease: easeIn,
        }}
      >
        <LeftSlide />
      </motion.div>
    </section>
  );
};

export default HomeMain;
