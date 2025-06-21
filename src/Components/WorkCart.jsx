import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import StarNoAni from "./StarNoAni";
import * as motion from "motion/react-client";
import { easeOut } from "motion";
import StarSec from "./StarSec";

const WorkCart = ({
  className,
  src,
  pTExt,
  pTextClass,
  InnerFill,
  OuterFill,
  StarBG,
  innerfillOH,
  outerfillOH,
  otTextclass,
  siteTitle,
  WebLink
}) => {
  return (
    <div
      className={` flex justify-between gap-[20px] overflow-hidden rounded-2xl ${className} `}
    >
      <div className=" rounded-2xl relative group bg-[#fefeff] ">
        <img
          src={`${src}`}
          alt=""
          className=" rounded-2xl group-hover:opacity-0 duration-200 ease-in "
        />

        <a href={WebLink} target="blank" className=" cursor-pointer select-none " >
          <div className=" scale-0 absolute left-[-900px] top-[120px] group-hover:left-[-310px] group-hover:top-[-380px] group-hover:scale-100 delay-75 duration-300 ease-in-out ">
            <StarNoAni
              innerFill={innerfillOH}
              outerFill={outerfillOH}
              className=" relative w-[1100px] "
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay:0.2,
                duration: 0.2,
                ease: easeOut,
              }}
              className=" absolute left-[50%] translate-x-[-50%] top-[40%] translate-y-[-40%] "
            >
              <p
                className={` text-[28px] font-cabinet text-white select-none mt-[100px] mb-[40px] w-[400px] ${pTextClass}`}
              >
                {pTExt}
              </p>
              <p className={`flex justify-between items-center ${otTextclass} `}  >
                {siteTitle}
                <MdOutlineKeyboardDoubleArrowRight className=" text-[26px] " />
              </p>
            </motion.div>
          </div>
        </a>
      </div>

      <div className=" grid grid-rows-2 gap-[20px] ">
        <StarSec
          innerFill={InnerFill}
          outerFill={OuterFill}
          className={` !w-[140px] ${StarBG} rounded-2xl `}
        />
        <div className=" bg-[#fefeff] w-full h-[140px] rounded-2xl  "></div>
      </div>
    </div>
  );
};

export default WorkCart;
