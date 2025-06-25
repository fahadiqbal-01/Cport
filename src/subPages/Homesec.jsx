import React from "react";
import ContainerSec from "../Components/ContainerSec";
import * as motion from "motion/react-client";
import WorkCart from "../Components/WorkCart";
import { easeOut } from "motion";

const Homesec = () => {
  return (
    <>
      <section className=" pb-[100px] mt-[160px] ">
        <ContainerSec>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: easeOut }}
            className=" text-[38px] font-cabinet text-center mb-[60px] "
          >
            Tiny fraction of my work...
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <WorkCart
              WebLink="https://exclusive-io.netlify.app/"
              src="/exclusive.png"
              className=""
              pTExt=" Shopping site where you can find everything.
                Shop fasion, tech, home essentials and more - fast, easy and
                affordable.  (On Going)"
              InnerFill="white"
              OuterFill="#fe8eca"
              StarBG="bg-[#000000]"
              innerfillOH="black"
              outerfillOH="black"
              otTextclass="text-white"
              siteTitle="Exclusive"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <WorkCart
              WebLink="https://fahadiqbal-01.github.io/hanock/"
              src="/hancok.png"
              className=" mt-[80px] scale-x-[-1] "
              pTExt="Hanock is a sleek gaming platform showcasing live matches,
             popular games, and gear, built to engage the esports community."
              pTextClass=" !text-black scale-x-[-1] "
              InnerFill="white"
              OuterFill="#e37041"
              StarBG="bg-black"
              innerfillOH="#fe3d5f"
              outerfillOH="#fe3d5f"
              otTextclass="text-black scale-x-[-1] "
              siteTitle="Hancok"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <WorkCart
              WebLink="https://pavanmg.netlify.app/"
              src="/pavanmg.png"
              className=" mt-[80px]  "
              pTExt="Pavan MG’s portfolio is a modern, minimal site showcasing his projects,
             creativity, and passion for building engaging digital experiences."
              pTextClass=" !text-black "
              InnerFill="white"
              OuterFill="#b31284"
              StarBG="bg-black"
              innerfillOH="#12adf0"
              outerfillOH="#12adf0"
              otTextclass="text-black "
              siteTitle="PavanMG"
            />
          </motion.div>
        </ContainerSec>
      </section>
    </>
  );
};

export default Homesec;
