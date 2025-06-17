import React, { useEffect, useRef } from "react";
import * as motion from "motion/react-client";
import { Link, Navigate } from "react-router-dom";
import { easeIn, easeInOut, easeOut } from "motion";
import { useAnimation, useInView } from "motion/react";
import { Linear } from "gsap";

const NavBar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <nav className=" pl-[5px] pt-[20px] pb-[10px] ">
        <ul className=" flex gap-[20px] items-center justify-center p-0 m-0  ">
          <Link to="/">
            <motion.li
              ref={ref}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 100, x: 0 },
              }}
              initial={`hidden`}
              animate={mainControls}
              transition={{
                delay: 0.5,
                duration: 1,
                ease: easeOut,
              }}
              className=" drop-shadow-2xl px-[10px] font-thin text-[16px] text-black cursor-pointer select-none font-GeneralSans z-50 
              after:content-[''] after:h-[30px] after:w-[3px] after:bg-yellow-500 after:absolute after:left-0 after:bottom-[-3px] after:duration-300
               after:ease-out after:-z-50 hover:after:w-[100%]  relative"
            >
              Home
            </motion.li>
          </Link>

          <motion.li
            ref={ref}
            variants={{
              hidden: { y: -100 },
              visible: { y: 0 },
            }}
            initial={`hidden`}
            animate={mainControls}
            transition={{
              delay: 0.5,
              duration: 1,
              ease: easeOut,
            }}
            className=" inline-block drop-shadow-2xl ml-[10px] text-[30px] font-aktura cursor-default select-none text-center leading-[30px] "
          >
            FAHAD <br /> IQBAL
          </motion.li>
          <Link to="/explore">
            <motion.li
              ref={ref}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 100, x: 0 },
              }}
              initial={`hidden`}
              animate={mainControls}
              transition={{
                delay: 0.5,
                duration: 1,
                ease: easeOut,
              }}
              className=" drop-shadow-2xl px-[10px] font-thin text-[16px] text-black cursor-pointer select-none font-GeneralSans z-50
              after:content-[''] after:h-[30px] after:w-[3px] after:bg-yellow-500 after:absolute after:right-0 after:bottom-[-3px] after:duration-300
               after:ease-out after:-z-50 hover:after:w-[100%]  relative"
            >
              Explore
            </motion.li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
