import React, { useEffect, useRef } from "react";
import Star from "../Components/Star";
import Container from "../Components/Container";
import * as motion from "motion/react-client";
import { easeInOut, easeOut, scale } from "motion";
import Chat from "../Components/Chat";
import { SiGnuicecat } from "react-icons/si";
import { Link } from "react-router-dom";
import { _round } from "gsap/gsap-core";
import HSlider from "../Components/HSlider";
import { useAnimation, useInView } from "motion/react";

const HomeMain = () => {
  const ref = useRef(null);
  const isINView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isINView) {
      mainControls.start("visible");
    }
  }, [isINView]);

  return (
    <section>
      <Container className=" grid grid-cols-3  ">
        <div className=" flex justify-start relative">
          <Star
            className=" absolute left-[-120px] top-0 "
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
            transition={{
              duration: 2,
              ease: easeInOut,
            }}
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
            transition={{
              duration: 2,
              ease: easeInOut,
            }}
            className=" text-[68px] font-cabinet text-center text-black leading-[65px] mt-[20px] "
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
            transition={{
              duration: 2,
              ease: easeInOut,
            }}
            className=" text-center font-GeneralSans text-[16px] text-black leading-7 mt-[25px] "
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
              transition={{
                duration: 2,
                ease: easeInOut,
              }}
              className=" p-0 m-0 pointer-events-none "
            >
              <SiGnuicecat className=" mx-auto text-[60px] pb-0 fill-black pointer-events-auto " />
            </motion.div>

            <motion.h2
              ref={ref}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 100 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{
                duration: 2,
                ease: easeInOut,
              }}
              className=" font-cabinet text-[28px] font-medium text-center "
            >
              Step into my digital home
            </motion.h2>
            <div></div>
          </div>
        </div>

        <div className=" relative ">
          <Star
            className=" absolute right-[-120px] top-0 "
            innerFill="#fafcf8"
            outerFill="#91040c"
          />
        </div>
      </Container>
      <HSlider />
    </section>
  );
};

export default HomeMain;
