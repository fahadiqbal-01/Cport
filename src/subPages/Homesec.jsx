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
      <section className=" pb-[100px] xl:mt-[160px] lg:mt-[130px] md:mt-[100px] sm:mt-[70px] mt-[40px] ">
        <ContainerSec>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: easeOut }}
            className=" xl:text-[38px] lg:text-[36px] md:text-[32px] text-[28px]
             font-cabinet text-center xl:mb-[60px] lg:mb-[50px] md:mb-[40px] mb-[20px] selection:text-white selection:bg-black "
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
              className="  scale-x-[-1] "
              imgclassName=" scale-x-[-1]  "
              pTExt="MRCFLY.com is a visa agency providing personalized application help and a portal to track visa status, documents, and approvals."
              pTextClass=" !text-black scale-x-[-1] "
              InnerFill="white"
              OuterFill="#cfbda2"
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
              pTExt=" Shopping site where you can find everything.
                Shop fasion, tech, home essentials and more - fast, easy and
                affordable.  (On Going)"
              pTextClass=" !text-black "
              InnerFill="white"
              OuterFill="#fe8eca"
              StarBG="bg-[#000000]"
              innerfillOH="#fe8eca"
              outerfillOH="#fe8eca"
              otTextclass="text-black"
              siteTitle="Exclusive"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <WorkCart
              WebLink="https://notepadlist.vercel.app/"
              src="/notepad.gif"
              className="  scale-x-[-1] "
              imgclassName=" scale-x-[-1]"
              pTExt="A sleek React.js & Tailwind CSS notepad app enabling users to effortlessly add, 
              edit, and delete notes for efficient organization."
              pTextClass=" scale-x-[-1] text-white "
              InnerFill="white"
              OuterFill="#0149ad"
              StarBG="bg-black"
              innerfillOH="#0149ad"
              outerfillOH="#0149ad"
              otTextclass="text-white scale-x-[-1] "
              siteTitle="Todo List"
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
              pTExt="Pavan MG’s portfolio is a modern, minimal site showcasing his projects,
             creativity, and passion for building engaging digital experiences."
              pTextClass=" !text-black "
              InnerFill="white"
              OuterFill="#12adf0"
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
              className="  scale-x-[-1] "
              imgclassName=" scale-x-[-1]  "
              pTExt="Hanock is a sleek gaming platform showcasing live matches,
             popular games, and gear, built to engage the esports community."
              pTextClass=" !text-black scale-x-[-1] "
              InnerFill="white"
              OuterFill="#e37041"
              StarBG="bg-black"
              innerfillOH="#e37041"
              outerfillOH="#e37041"
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
