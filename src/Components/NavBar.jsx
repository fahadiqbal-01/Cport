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
      <nav className=" pt-[20px] pb-[10px] w-full ">
        <ul className=" flex gap-[20px] items-center justify-center p-0 m-0 mx-auto ">
          <Link to="/explore">
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
                type: "spring",
                stiffness: 50,
                ease: easeOut,
              }}
              className={`drop-shadow-2xl px-[10px] font-thin text-[16px] text-black cursor-pointer select-none font-GeneralSans z-50 
              after:content-[''] after:h-[30px] after:w-[3px] after:bg-[#91040c] after:absolute after:left-0 after:bottom-[-3px] after:duration-300
               after:ease-out after:-z-50 hover:text-white hover:after:w-[100%] duration-300 ease-in-out  relative`}
            >
              Explore
            </motion.li>
          </Link>

          <Link to="/" className=" z-50 ">
            <motion.li
              ref={ref}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 100 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ delay: 0.5, duration: 1.4, ease: easeInOut }}
              className=" inline-block drop-shadow-2xl ml-[10px] text-[30px] font-aktura cursor-pointer select-none text-center leading-[30px] z-50 "
            >
              FAHAD <br /> IQBAL
            </motion.li>
          </Link>

          <Link to="/about">
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
                type: "spring",
                stiffness: 50,
                ease: easeOut,
              }}
              className=" drop-shadow-2xl px-[10px] font-thin text-[16px] text-black cursor-pointer select-none font-GeneralSans z-50
              after:content-[''] after:h-[30px] after:w-[3px] after:bg-[#91040c] after:absolute after:right-0 after:bottom-[-3px] after:duration-300
               after:ease-out after:-z-50 hover:text-white hover:after:w-[100%] duration-300 ease-in-out relative"
            >
              About Me
            </motion.li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
