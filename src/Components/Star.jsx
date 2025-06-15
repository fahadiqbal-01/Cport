import { _round } from "gsap/gsap-core";
import { easeIn, easeInOut, easeOut } from "motion";
import { useAnimation, useInView } from "motion/react";
import * as motion from "motion/react-client";
import React, { useEffect, useRef } from "react";

const Star = ({ className, innerFill, outerFill }) => {
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
      <div className={`w-[700px] pointer-events-none ${className} `}>
        <motion.svg
          ref={ref}
          variants={{
            hidden: { rotate: 0 },
            visible: { rotate: 360 },
          }}
          initial="hidden"
          animate={mainControls}
          whileHover={{ rotate: 150 }}
          transition={{
            duration: 1,
            ease: easeInOut,
          }}
          className=" p-0 m-0"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill={outerFill} className=" pointer-events-auto ">
            <path
              className=" "
              d="M100,50 
             C115,30 135,30 140,50 
             C165,50 170,75 155,90 
             C175,105 165,130 145,125 
             C150,150 120,160 100,145 
             C80,160 50,150 55,125 
             C35,130 25,105 45,90 
             C30,75 35,50 60,50 
             C65,30 85,30 100,50
             Z"
            />
          </g>
          <circle cx="100" cy="100" r="20" fill={innerFill} />
        </motion.svg>
      </div>
    </>
  );
};

export default Star;
