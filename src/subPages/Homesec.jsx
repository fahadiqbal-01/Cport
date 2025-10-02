import React from "react";
import ContainerSec from "../Components/ContainerSec";
import * as motion from "motion/react-client";
import { easeOut } from "motion";
import Dream from "../Components/Dream";
import MySelf from "../Components/MySelf";


const contents = [
  {
    coverImage: "/image/redhood.png",
    expandedImage: "/image/blackhood.png",
    text: "Red Hood",
  },
  {
    coverImage: "/image/redhood.png",
    expandedImage: "/image/blackhood.png",
    text: "Red Hood",
  },
  {
    coverImage: "/image/redhood.png",
    expandedImage: "/image/blackhood.png",
    text: "Red Hood",
  },
  {
    coverImage: "/image/redhood.png",
    expandedImage: "/image/blackhood.png",
    text: "Red Hood",
  },
  {
    coverImage: "/image/redhood.png",
    expandedImage: "/image/blackhood.png",
    text: "Red Hood",
  },
  {
    coverImage: "/image/redhood.png",
    expandedImage: "/image/blackhood.png",
    text: "Red Hood",
  },
];

const Homesec = () => {
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  const handleExpand = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <>
      <section className="pb-[100px] xl:mt-[160px] lg:mt-[130px] md:mt-[100px] sm:mt-[70px] mt-[40px]">
        <ContainerSec>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: easeOut }}
            className="xl:text-[38px] lg:text-[36px] md:text-[32px] text-[28px]
             font-cabinet text-center xl:mb-[60px] lg:mb-[50px] md:mb-[40px] mb-[20px] selection:text-white selection:bg-black"
          >
            Tiny fraction of my work...
          </motion.h2>
          <div className="flex justify-center items-center gap-[10px] Expand-list xl:px-0 lg:px-0 md:px-[40px] px-[20px] ">
            {contents.map((content, idx) => (
              <div
                key={idx}
                onClick={() => handleExpand(idx)}
                className={`transition-all duration-300 ease-in-out cursor-pointer rounded-xl bg-black overflow-hidden
                  ${
                    expandedIndex === idx
                      ? "xl:w-[900px] lg:w-[500px] md:w-[400px] w-[70vw] xl:h-[450px] lg:h-[400px] md:h-[350px] h-[180px]"
                      : "xl:w-[150px] lg:w-[120px] md:w-[90px] w-[12vw] xl:h-[450px] lg:h-[400px] md:h-[350px] h-[180px] "
                  }`}
              >
                {expandedIndex === idx ? (
                  <img
                    src={content.expandedImage}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <img
                      src={content.coverImage}
                      alt=""
                      className="w-full h-[60%] object-cover rounded-t-xl"
                    />
                    <div
                      className={` p-2 text-white text-center text-sm`}
                    >
                      {content.text}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          <Dream />
          <MySelf />
        </ContainerSec>
      </section>
    </>
  );
};

export default Homesec;
