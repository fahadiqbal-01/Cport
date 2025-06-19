import { easeInOut, useAnimation, useInView } from "motion/react";
import React, { useEffect, useRef } from "react";
import * as motion from "motion/react-client";

const Homeimg = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div>
      <motion.img
        ref={ref}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 100 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ delay: 0.5, duration: 1.4, ease: easeInOut }}
        className=" w-[100px] h-[100px] border-2 border-yellow-500 rounded-2xl mt-[60px] mx-auto "
        src=""
        alt=""
      />
    </div>
  );
};

export default Homeimg;
