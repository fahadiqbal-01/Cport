import React from "react";
import { GiStarFormation } from "react-icons/gi";

export const HireMe = ({ className }) => {
  return (
    <form
      className={` ${className} flex flex-col justify-center items-start p-10 absolute right-[10px] top-0 bg-transparent rounded-xl scale-0 opacity-0 z-50 w-fit
             group-hover:bg-Khaki group-hover:top-[-600px] group-hover:right-[00px] group-hover:scale-100 group-hover:opacity-100 delay-400 duration-300 ease-out`}
    >
      <div className=" mb-[50px] flex justify-center gap-[10px] scale-0 group-hover:scale-100 delay-500 duration-300 ease-out ">
        <p className=" inline-block drop-shadow-2xl text-[30px] text-black font-aktura select-none text-center leading-[25px] z-50  ">
          FAHAD <br /> IQBAL
        </p>
        <div>
          <p className=" text-black font-GeneralSans font-extrabold text-[18px] items-start mt-[-5px] ">
            Work With Fahad
          </p>
          <p className=" text-black  text-[12px] items-start mt-[6px] ">
            Responds in about 2 hours
          </p>
        </div>
      </div>

      <div className=" flex justify-evenly gap-[10px] items-baseline mb-[10px] scale-0 group-hover:scale-100 delay-500 duration-300 ease-out  ">
        <label className=" text-DarkRed  font-GeneralSans text-[16px] flex justify-center gap-[3px] items-start ">
          Project Detals
          <GiStarFormation className=" text-[8px] mt-[5px] text-white " />
        </label>
        <p className=" text-[14px] text-black  ">Mnimum 50 characters</p>
      </div>

      <textarea
        placeholder="Briefly describe your project with any specific desgn requirements, timelines and goals you have in mind..."
        className=" outline-3 outline-black focus:outline-white rounded-md px-[6px] text-[14px] font-GeneralSans text-black py-[8px] w-[300px] h-[150px]
              scale-0 group-hover:outline-black group-hover:scale-100 delay-500 duration-300 ease-out placeholder:text-[14px] placeholder:text-black "
      />

      <div className=" flex flex-col justify-center items-start mb-[10px] mt-[22px] scale-0 group-hover:scale-100 delay-500 duration-300 ease-out  ">
        <label className="text-DarkRed  font-GeneralSans text-[16px] flex justify-center gap-[3px] items-start ">
          Target Date
          <GiStarFormation className="btext-black  text-[8px] mt-[5px] text-white " />
        </label>
        <p className="text-black  text-[14px] ">
          Select when you need the project to be completed
        </p>
      </div>
      <input
        id="custom-date"
        type="date"
        className=" font-GeneralSans outline-3 outline-black focus:outline-white rounded-md px-[6px] text-[14px] py-[8px] w-[300px] 
              scale-0 group-hover:outline-black group-hover:scale-100 delay-500 duration-300 ease-out placeholder:text-[14px]
              placeholder:select-none valid:select-none select-none "
      />

      <div className=" mt-[22px] mb-[10px] scale-0 group-hover:scale-100 delay-500 duration-300 ease-out  ">
        <label className="text-DarkRed  font-GeneralSans text-[16px] flex justify-center gap-[3px] items-start ">
          Project Budget
          <GiStarFormation className=" text-[8px] mt-[5px] text-white " />
        </label>
      </div>
      <input
        type="number"
        placeholder="Your Budget in USD"
        className=" font-GeneralSans outline-3 outline-black focus:outline-white rounded-md px-[6px] text-white py-[8px] w-[300px] 
              scale-0 group-hover:outline-black group-hover:scale-100 delay-500 duration-300 ease-out placeholder:text-[14px] placeholder:text-black "
      />
      <button className="font-GeneralSans text-[18px] tracking-widest text-white bg-black px-[20px] py-[10px] mt-[16px] border-3 border-black rounded-lg ml-[-2px] cursor-pointer ">
        Send
      </button>
    </form>
  );
};
