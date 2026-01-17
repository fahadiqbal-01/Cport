import React from "react";
import ContainerSec from "../Components/ContainerSec";
import * as motion from "motion/react-client";
import { easeOut } from "motion";
import Dream from "../Components/Dream";
import MySelf from "../Components/MySelf";
import { href } from "react-router-dom";
import WorkGallery from "../Components/WorkGallery";

const contents = [
  {
    coverImage: "/image/mrcflyPreview.png",
    expandedImage: "/image/mrcflyPoster.PNG",
    text: "MRC FLY – Visa and immigration service platform for jobs, work permits, and travel or study visas.",
    href: "https://www.mrcfly.com/",
  },
  {
    coverImage: "/image/gachpalaPreview.png",
    expandedImage: "/image/gachpalaPoster.PNG",
    text: "Gachapala: Your online destination for a diverse selection of plants and essential accessories to beautifully green your home and garden.",
    href: "https://example.com/redhood",
  },
  {
    coverImage: "/image/portfolioPreview.png",
    expandedImage: "/image/portfolioPoster.PNG",
    text: "A Portfolio site showcasing Fahad Iqbal’s frontend development skills and projects.",
    href: "https://fahad-iqbal.netlify.app/",
  },
  {
    coverImage: "/image/notePreview.gif",
    expandedImage: "/image/notePoster.PNG",
    text: "A Simple to-do app for managing and tracking daily tasks efficiently.",
    href: "https://example.com/redhood",
  },
  {
    coverImage: "/image/exclusivePreview.png",
    expandedImage: "/image/exclusivePoster.PNG",
    text: "Exclusive – Ecommerce site offering curated products with a smooth shopping experience.",
    href: "https://exclusive-io.netlify.app/",
  },
];

const Homesec = () => {
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  const handleExpand = (idx) => {
    setExpandedIndex(idx === expandedIndex ? null : idx);
  };

  const handleClose = () => {
    setExpandedIndex(null);
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 100 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: easeOut,
            }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-[10px] Expand-list xl:px-0 lg:px-0 md:px-[40px] px-[20px] "
          >
            {contents.map((content, idx) => (
              <div
                key={idx}
                onClick={() => handleExpand(idx)}
                className={`transition-all duration-300 ease-in-out rounded-xl bg-black overflow-hidden cursor-default
                  ${
                    expandedIndex === idx
                      ? "xl:w-[900px] lg:w-[500px] md:w-[400px] w-[110vw] xl:h-[450px] lg:h-[400px] md:h-[350px] h-[180px]"
                      : "xl:w-[250px] lg:w-[220px] md:w-[120px] w-[24vw] xl:h-[450px] lg:h-[400px] md:h-[350px] h-[180px] "
                  }`}
              >
                {expandedIndex === idx ? (
                  <div className="h-full flex flex-col items-center bg-[#000000] py-4 relative">
                    <motion.img
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 0.9 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 50,
                      }}
                      src={content.expandedImage}
                      alt=""
                      className=" h-[80%] object-cover shadow-white/50 shadow-lg rounded-xl xl:mt-4 lg:mt-4 md:mt-2 mt-0 xl:scale-[0.9] lg:scale-[0.9] scale-[0.7]  "
                    />
                    <div
                      className={` xl:px-6 lg:px-6 md:px-4 px-2 text-white text-center xl:text-sm lg:text-sm md:text-sm text-[8px] xl:mt-0 lg:mt-0 mt-[-8px] `}
                    >
                      {content.text} <br />
                    </div>
                    <a
                      href={content.href}
                      onClick={handleClose}
                      target="_blank"
                      className=" absolute left-[50%] translate-x-[-50%] top-3 z-50 text-white xl:text-[12px] lg:text-[12px] md:text-[12px] text-[8px] font-bold bg-[#91040c] px-[8px] py-[2px] rounded-lg "
                    >
                      Live
                    </a>
                  </div>
                ) : (
                  <>
                    <img
                      src={content.coverImage}
                      alt=""
                      className="w-full h-full object-cover rounded-t-xl duration-300 ease-in-out "
                    />
                  </>
                )}
              </div>
            ))}
          </motion.div>
          <Dream />
          <WorkGallery />
          <MySelf />
        </ContainerSec>
      </section>
    </>
  );
};

export default Homesec;
