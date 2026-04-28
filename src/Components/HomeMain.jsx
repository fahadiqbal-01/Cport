import React, { useRef } from "react";
import Container from "./Container";
import { motion, useInView } from "framer-motion";
import { SendMSGbtn } from "./SendMSGbtn";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const HomeMain = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative overflow-hidden w-full min-h-[calc(100vh-100px)] flex flex-col justify-center py-12 md:py-10 bg-[#ffffff] selection:bg-DarkRed selection:text-white">
      {/* Massive Background Aktura Typography */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 0.04, scale: 1 } : {}}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <h1 className="font-aktura text-[150px] sm:text-[200px] md:text-[280px] lg:text-[400px] xl:text-[500px] leading-normal text-black whitespace-nowrap select-none">
          Fahad
        </h1>
      </motion.div>

      <Container className="relative z-10 flex flex-col items-center">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center justify-center w-full max-w-[1200px] mx-auto text-center px-2 sm:px-4"
        >
          {/* Availability Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-6 sm:mb-8 md:mb-10 w-full flex justify-center"
          >
            <div className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-black/15 bg-white/40 backdrop-blur-md shadow-sm hover:border-DarkRed/40 transition-colors duration-500 w-[90%] sm:w-auto max-w-sm sm:max-w-none">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-DarkRed opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-DarkRed"></span>
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-[11px] font-Satoshi font-bold text-black tracking-[0.15em] sm:tracking-[0.3em] uppercase truncate">
                Available for worldwide projects
              </span>
            </div>
          </motion.div>

          {/* Main Headline Composition */}
          <motion.div
            variants={itemVariants}
            className="relative mb-8 sm:mb-10 md:mb-12 w-full"
          >
            <h2 className="text-DarkRed text-[10px] sm:text-xs md:text-sm lg:text-base font-Satoshi font-bold tracking-[0.3em] sm:tracking-[0.5em] uppercase mb-4 sm:mb-6 md:mb-8">
              Fahad Iqbal
            </h2>
            <h1 className="text-[28px] min-[400px]:text-[34px] sm:text-[45px] md:text-[60px] lg:text-[75px] xl:text-[90px] font-Gambarino text-black leading-[1.1] md:leading-[1] tracking-[-0.02em] px-2 sm:px-0">
              Creative mind you can trust for <br className="hidden sm:block" />
              clarity, style, and <br className="md:hidden" />
              <span className="font-aktura text-DarkRed text-[50px] min-[400px]:text-[60px] sm:text-[75px] md:text-[100px] lg:text-[120px] xl:text-[150px] font-normal leading-[0.5] md:leading-[0.3] relative top-1 md:top-3 inline-block ml-0 md:ml-4 mt-2 md:mt-0">
                purpose
              </span>
            </h1>
          </motion.div>

          {/* Bottom Row: Description & Button */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 mt-4 sm:mt-6 md:mt-10 max-w-[950px] w-full px-2 sm:px-0"
          >
            <p className="text-gray-600 font-SatoshiSec text-[13px] sm:text-sm md:text-lg leading-[1.7] md:leading-[1.8] text-center md:text-right flex-1 px-2 md:px-0 max-w-[450px] md:max-w-none">
              A collection of work shaped by creativity and thoughtful details,
              fueled by a genuine passion for turning ideas into clear, engaging
              visual experiences.
            </p>

            <div className="w-[1px] h-16 md:h-20 bg-black/10 hidden md:block"></div>

            <div className="flex-1 flex justify-center md:justify-start w-full md:w-auto [&>div]:!mt-0">
              <SendMSGbtn
                className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-[10px] sm:text-xs md:text-sm tracking-[0.15em] md:tracking-[0.25em] !bg-black !text-white shadow-2xl
                 hover:!text-DarkRed hover:shadow-DarkRed/30 transition-all duration-500 border-none rounded-none w-full sm:w-auto"
                to="/lets-build-something-great-together"
              >
                Let's Connect
              </SendMSGbtn>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HomeMain;
