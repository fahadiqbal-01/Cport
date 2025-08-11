import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className=" w-full h-auto flex flex-col justify-center items-center ">
      <p className=" xl:text-[38px] lg:text-[36px] md:text-[32px] text-[28px] font-GeneralSans flex flex-col justify-center items-center pt-[28px] ">
        Lost? <br />
        <span>
          Return -{" "}
          <Link to="/" className=" text-[#c51111] ">
            Home
          </Link>
        </span>
      </p>
      <DotLottieReact src="json/404.lottie" loop autoplay />
    </div>
  );
};
