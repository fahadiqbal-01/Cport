import React, { useEffect, useState } from "react";
import Gallery from "../Components/Gallery";
import ContainerSec from "../Components/ContainerSec";
import { easeOut, motion, AnimatePresence } from "motion/react";
import { useLocation } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Explore = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <section className="relative w-full min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <DotLottieReact src="json/loading.lottie" loop autoplay />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ContainerSec className="pt-[60px]">
              <div>
                <motion.h1
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    ease: easeOut,
                  }}
                  className="text-[50px] font-cabinet text-center text-black leading-[75px] selection:text-white selection:bg-black"
                >
                  Explore My Work
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    ease: easeOut,
                  }}
                  className="text-[20px] font-GeneralSans text-center mt-[10px] selection:text-white selection:bg-black"
                >
                  Discover the creative works that showcase my skills and passion.
                </motion.p>
              </div>
            </ContainerSec>
            <Gallery />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Explore;
