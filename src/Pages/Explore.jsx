import React, { useEffect, useState } from "react";
import Gallery from "../Components/Gallery";
import ContainerSec from "../Components/ContainerSec";
// import Posters from "../Components/Posters";
import { easeOut, motion } from "motion/react";
import { useLocation } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Explore = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {isLoading ? (
        <div className=" w-full h-[100vh] flex items-center justify-center ">
          <DotLottieReact src="json/loading.lottie" loop autoplay />
        </div>
      ) : (
        <section>
          <ContainerSec className=" pt-[60px] ">
            <div>
              <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: easeOut }}
                className=" text-[50px] font-cabinet text-center text-black leading-[75px] selection:text-white selection:bg-black "
              >
                Explore My Work
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: easeOut }}
                className=" text-[20px] font-GeneralSans text-center mt-[10px] selection:text-white selection:bg-black "
              >
                Discover the creative works that showcase my skills and passion.
              </motion.p>
            </div>
          </ContainerSec>
          {/* <Posters /> */}
          <Gallery />
        </section>
      )}
    </>
  );
};

export default Explore;
