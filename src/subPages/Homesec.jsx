import React from "react";
import ContainerSec from "../Components/ContainerSec";
import * as motion from "motion/react-client";
import WorkCart from "../Components/WorkCart";

const Homesec = () => {
  return (
    <>
      <section className=" pb-[100px] mt-[160px] ">
        <ContainerSec>
          <h2 className=" text-[38px] font-cabinet text-center mb-[60px] ">
            Tiny fraction of my work...
          </h2>
          <WorkCart
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
          <WorkCart
            src="/hancok.png"
            className=" mt-[50px] scale-x-[-1] "
            pTExt="Shopping site where you can find everything. 
                Shop fasion, tech, home essentials and more - fast, easy and
                affordable.  (On Going)"
            pTextClass=" scale-x-[-1] !text-black "
            InnerFill="white"
            OuterFill="#black"
            StarBG="bg-[#fe3d5f]"
            innerfillOH="#e37041"
            outerfillOH="#e37041"
            otTextclass="text-black scale-x-[-1] "
            siteTitle="Hancok"
          />
        </ContainerSec>
      </section>
    </>
  );
};

export default Homesec;
