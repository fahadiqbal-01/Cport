import { easeIn, easeInOut, easeOut, keyframes } from "motion";
import { motion } from "framer-motion";
import Container from "./Container";
import LeftSlideSec from "./LeftSlideSec";

export const AboutProfile = () => {
  return (
    <section className="">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 100, y: 0 }}
          transition={{
            duration: 1.2,
            ease: easeInOut,
            type: "spring",
            stiffness: 70,
          }}
          viewport={{ once: true }}
          className=" grid grid-cols-2 selection:bg-black selection:text-white xl:mb-[-60px] lg:mb-[-60px] md:mb-[-40px] mb-0 xl:px-4 lg:px-4 md:px-4 px-2 "
        >
          <div className=" xl:text-[150px] lg:text-[120px] md:text-[80px] font-GeneralSans gap-0 xl:mt-[290px] lg:mt-[220px] mt-[280px] xl:block lg:block md:block hidden ">
            WEB DEVELOPER
          </div>
          <div className=" pt-[50px] xl:col-span-1 lg:col-span-1 md:col-span-1 col-span-2 xl:block lg:block md:block flex flex-col items-center ">
            <img
              src="/redghost.png"
              alt=""
              className=" xl:w-[250px] lg:w-[200px] md:w-[150px] w-[100px] rounded-xl xl:ml-auto lg:ml-auto md:ml-auto ml-0 select-none "
            />
            <div
              className=" w-[250px] xl:ml-auto lg:ml-auto md:ml-auto ml-0 xl:text-[16px] lg:text-[16px] md:text-[14px]
            xl:mt-[200px] lg:mt-[130px] md:mt-[180px] mt-[50px] xl:text-left lg:text-right md:text-right text-center "
            >
              <h1 className=" font-GeneralSans ">HI, I'm Fahad IQbal</h1>
              <p>Crafting Web, Design & Visuals</p>
              <p>Shaping Ideas Into Experiences</p>
              <p>Turning Silence Into Visual Stories</p>
            </div>
          </div>
        </motion.div>
      </Container>
      <LeftSlideSec />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 100, y: 0 }}
          transition={{
            duration: 1.2,
            ease: easeInOut,
            type: "spring",
            stiffness: 70,
          }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className=" selection:bg-black selection:text-white xl:px-0 lg:px-0 px-4 ">
            <h1 className=" font-GeneralSans xl:text-[50px] lg:text-[50px] md:text-[50px] text-[30px] xl:pt-[50px] lg:pt-[50px] md:pt-[50px] pt-[20px] xl:pb-0 lg:pb-0 md:pb-0 pb-[20px] ">
              Education_
            </h1>
            <div
              className=" flex xl:flex-row lg:flex-row md:flex-row flex-col justify-between xl:items-center lg:items-center md:items-start items-start
          xl:gap-0 lg:gap-0 md:gap-0 gap-[10px] t-[20px] "
            >
              <div>
                <h1 className=" font-GeneralSans text-[18px] ">
                  Secondary School Certificate (SSC)
                </h1>
                <h2>Udayan Seconday School</h2>
              </div>

              <div>
                <h1 className=" font-GeneralSans text-[18px] ">
                  Higher School Certificate (HSC)
                </h1>
                <h2>Govt. Syed Hatem Ali College</h2>
              </div>

              <div>
                <h1 className=" font-GeneralSans text-[18px] ">
                  Diploma in Computer Engineering (currenly studying)
                </h1>
                <h2> Barishal Polytechnic Institute </h2>
              </div>
            </div>
          </div>

          <div className=" selection:bg-black selection:text-white xl:px-0 lg:px-0 px-4 ">
            <h1 className=" font-GeneralSans xl:text-[50px] lg:text-[50px] md:text-[50px] text-[30px] pt-[50px] ">
              Experience_
            </h1>
            <div className=" mt-[20px]">
              <h1 className=" font-GeneralSans text-[18px] ">
                EDGE Trainig Program
              </h1>
              <h2>Web Development Trainee (Sep 2024 - Mar 2025)</h2>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
