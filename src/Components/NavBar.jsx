import React, { useEffect, useRef } from "react";
import * as motion from "motion/react-client";
import { easeIn, easeInOut, easeOut } from "motion";
import { Link, Navigate } from "react-router-dom";
import { useAnimation, useInView } from "motion/react";

const NavBar = () => {
  const ref = useRef(null);
  const isINView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isINView) {
      mainControls.start("visible");
    }
  }, [isINView]);

  return (
    <>
      <nav className=" pl-[5px] pt-[20px] pb-[10px] ">
        <ul className=" flex gap-[20px] items-center justify-center p-0 m-0 ">
          <Link to="/">
            <motion.li
              ref={ref}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{
                duration: 0.5,
                easeInOut,
              }}
              className=" drop-shadow-2xl px-[10px] font-thin text-[16px] text-black cursor-pointer select-none font-GeneralSans z-50
              after:content-[''] after:h-[30px] after:w-[3px] after:bg-yellow-500 after:absolute after:left-0 after:bottom-[-3px] after:duration-500
               after:ease-out after:-z-50 hover:after:w-[100%]  relative"
            >
              Home
            </motion.li>
          </Link>

          <li className=" inline-block drop-shadow-2xl ml-[10px] text-[30px] font-aktura cursor-default select-none text-center leading-[30px] ">
            FAHAD <br /> IQBAL
          </li>
          <Link to="/explore">
            <motion.li
              ref={ref}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{
                duration: 0.5,
                easeInOut,
              }}
              className=" drop-shadow-2xl px-[10px] font-thin text-[16px] text-black cursor-pointer select-none font-GeneralSans z-50
              after:content-[''] after:h-[30px] after:w-[3px] after:bg-yellow-500 after:absolute after:right-0 after:bottom-[-3px] after:duration-500
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
