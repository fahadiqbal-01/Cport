import { _round } from "gsap/gsap-core";
import { delay, easeIn, easeInOut, easeOut, scale } from "motion";
import { useAnimation, useInView } from "motion/react";
import * as motion from "motion/react-client";
import React, { useEffect, useRef } from "react";

const Star = ({ className, innerFill, outerFill }) => {
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
      <div
        className={`xl:w-[600px] pointer-events-none select-none ${className} `}
      >
        <motion.svg
          ref={ref}
          variants={{
            hidden: { rotate: 0 },
            visible: { rotate: 360 },
          }}
          initial="hidden"
          animate={mainControls}
          viewport={{ once: true }}
          style={{ willChange: "transform" }}
          transition={{
            duration: 1.5,
            ease: easeOut,
          }}
          className="p-0 m-0"
          viewBox="0 0 550 550"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill={outerFill} className="pointer-events-auto">
            <path d="M256 120c20 0 36 16 36 36v60l53-30c17-10 38-4 48 13s4 38-13 48l-53 30 53 
            30c17 10 23 31 13 48s-31 23-48 13l-53-30v60c0 20-16 36-36 36s-36-16-36-36v-60l-53 
            30c-17 10-38 4-48-13s-4-38 13-48l53-30-53-30c-17-10-23-31-13-48s31-23 48-13l53 30v-60c0-20 16-36 36-36z" />
          </g>
        </motion.svg>
      </div>
    </>
  );
};

export default Star;
