import React, { useState, useRef, useEffect } from "react";
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
  WebLink,
  imgclassName,
}) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const cartRef = useRef(null);

  const isTouchDevice =
    typeof window !== "undefined" && "ontouchstart" in window;

  const toggleOverlay = () => {
    if (isTouchDevice) setShowOverlay(!showOverlay);
  };

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setShowOverlay(false);
      }
    }

    if (isTouchDevice) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isTouchDevice]);

  return (
    <div
      ref={cartRef}
      className={`flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col justify-between gap-[20px] overflow-hidden rounded-2xl mx-[20px]
        xl:mt-[80px] lg-[mt-[70px] md:mt-[60px] sm:mt-[50px] mt-[40px] select-none ${className}`}
    >
      <div
        className="rounded-2xl relative group bg-transparent cursor-pointer overflow-hidden "
        onClick={toggleOverlay}
      >
        {/* Image */}
        <img
          src={src}
          alt=""
          className={`rounded-2xl transition-opacity duration-200 ease-in 
          ${
            (!isTouchDevice && "group-hover:opacity-0") ||
            (showOverlay ? "opacity-0" : "opacity-100")
          } 
          xl:h-[300px] lg:h-[300px] md:h-[300px] h-[150px] ${imgclassName}`}
        />

        {/* Overlay */}
        <a
          href={WebLink}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer select-none"
        >
          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
            transition-transform duration-150 ease-in
            ${
              isTouchDevice
                ? showOverlay
                  ? "scale-100"
                  : "scale-0"
                : "scale-0 group-hover:scale-100"
            }`}
          >
            <StarNoAni
              innerFill={innerfillOH}
              outerFill={outerfillOH}
              className="w-[1100px] max-w-none"
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: showOverlay || !isTouchDevice ? 1 : 0, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.2,
                ease: easeOut,
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
            >
              <p
                className={`xl:text-[23px] lg:text-[23px] md:text-[23px] sm:text-[18px] text-[14px] font-cabinet text-white select-none mb-[40px]
                   xl:w-[400px] lg:w-[400px] md:w-[400px] w-[300px] ${pTextClass}`}
              >
                {pTExt}
              </p>
              <p className={`flex justify-between items-center ${otTextclass}`}>
                {siteTitle}
                <MdOutlineKeyboardDoubleArrowRight className="text-[26px]" />
              </p>
            </motion.div>
          </div>
        </a>
      </div>

      {/* Right side content */}
      <div className="xl:grid lg:grid md:grid sm:hidden hidden grid-rows-2 gap-[20px]">
        <StarSec
          innerFill={InnerFill}
          outerFill={OuterFill}
          className={`!w-[140px] ${StarBG} rounded-2xl`}
        />
        <div className="bg-[#fefeff] w-full h-[140px] rounded-2xl"></div>
      </div>
    </div>
  );
};

export default WorkCart;
