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
            hidden: { rotate: 0, scale: 0.5 },
            visible: { rotate: 360, scale: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          viewport={{ once: true }}
          style={{ willChange: "transform" }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            type: "spring",
            stiffness: 30,
          }}
          className="p-0 m-0"
          viewBox="0 0 550 550"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill={outerFill} className="pointer-events-auto">
            {/* Top petal (closer to center) */}
            <ellipse cx="275" cy="160" rx="38" ry="70" />

            {/* Right petal (closer, rotated +120°) */}
            <ellipse
              cx="275"
              cy="160"
              rx="38"
              ry="70"
              transform="rotate(120 275 275)"
            />

            {/* Left petal (closer, rotated -120°) */}
            <ellipse
              cx="275"
              cy="160"
              rx="38"
              ry="70"
              transform="rotate(-120 275 275)"
            />
          </g>
        </motion.svg>
      </div>
    </>
  );
};

export default Star;
