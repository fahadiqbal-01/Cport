import React from "react";
import * as motion from "motion/react-client";
import { easeIn, easeInOut, easeOut } from "motion";
import { Link, Navigate } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className=" pl-[5px] pt-[20px] pb-[10px] ">
        <ul className=" flex gap-[20px] items-center justify-center p-0 m-0 ">
          <Link to="/">
            <motion.li
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 100 }}
              transition={{ duration: 0.5, ease: easeInOut }}
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
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 100 }}
              transition={{ duration: 0.5, ease: easeInOut }}
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
