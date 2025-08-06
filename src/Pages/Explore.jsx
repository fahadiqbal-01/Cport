import React from "react";
import Gallery from "../Components/Gallery";
import ContainerSec from "../Components/ContainerSec";
import Posters from "../Components/Posters";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <>
      <section>
        <ContainerSec className=" pt-[60px] ">
          <div>
            <h1 className=" text-[50px] font-cabinet text-center text-black leading-[75px] selection:text-white selection:bg-black ">
              Explore My Work
            </h1>
            <p className=" text-[20px] font-GeneralSans text-center mt-[10px] selection:text-white selection:bg-black ">
              Discover the creative works that showcase my skills and passion.
            </p>
          </div>
        </ContainerSec>
        <Posters />
        <Gallery />
      </section>
    </>
  );
};

export default Explore;
