import React from "react";
import ContainerSec from "../Components/ContainerSec";
import * as motion from "motion/react-client";
import WorkCart from "../Components/WorkCart";
import { easeOut } from "motion";
import Dream from "../Components/Dream";
import MySelf from "../Components/MySelf";

const Homesec = () => {
  return (
    <>
      <section className=" pb-[100px] mt-[160px] ">
        <ContainerSec>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: easeOut }}
            className=" text-[38px] font-cabinet text-center mb-[60px] selection:text-white selection:bg-black "
          >
            Tiny fraction of my work...
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <WorkCart
              WebLink="https://www.mrcfly.com/"
              src="/mrcfly.png"
              className=" mt-[80px] scale-x-[-1] "
              imgclassName=" scale-x-[-1]  "
              pTExt="MRCFLY.com is a visa agency platform offering personalized application assistance and a 
              client portal to monitor visa status, document submissions, and approvals."
              pTextClass=" !text-black scale-x-[-1] "
              InnerFill="white"
              OuterFill="#822b28"
              StarBG="bg-black"
              innerfillOH="#cfbda2"
              outerfillOH="#cfbda2"
              otTextclass="text-black scale-x-[-1] "
              siteTitle="MRCFLY"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <WorkCart
              WebLink="https://exclusive-io.netlify.app/"
              src="/exclusive.png"
              className="mt-[80px] "
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
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <WorkCart
              WebLink="https://pavanmg.netlify.app/"
              src="/notepad.gif"
              className=" mt-[80px] scale-x-[-1] "
              imgclassName=" scale-x-[-1]"
              pTExt="Pavan MG’s portfolio is a modern, minimal site showcasing his projects,
             creativity, and passion for building engaging digital experiences."
              pTextClass=" !text-black scale-x-[-1] "
              InnerFill="white"
              OuterFill="#0149ad"
              StarBG="bg-black"
              innerfillOH="#fdc244"
              outerfillOH="#fdc244"
              otTextclass="text-black scale-x-[-1] "
              siteTitle="Todo-Tasks"
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

          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <WorkCart
              WebLink="https://fahadiqbal-01.github.io/hanock/"
              src="/hancok.png"
              className=" mt-[80px] scale-x-[-1] "
              imgclassName=" scale-x-[-1]  "
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

          <Dream />
          <MySelf />
        </ContainerSec>
      </section>
    </>
  );
};

export default Homesec;
