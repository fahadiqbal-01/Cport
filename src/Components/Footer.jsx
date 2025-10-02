import React from "react";
import { GiStarFormation } from "react-icons/gi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  let [toggle, setToggle] = React.useState(false);

  const handleToogle = () => {
    setToggle(!toggle);
  };

  return (
    <footer className="mt-[120px] p-6 selection:bg-white selection:text-black bg-black text-white relative">
      <div className="flex justify-between items-start mb-[50px]">
        <h1 className="font-GeneralSans xl:text-[140px] lg:text-[120px] md:text-[100px] text-[45px] xl:leading-normal lg:leading-[130px] md:leading-[100px] leading-[60px]">
          Let's Connect <br /> There
        </h1>

        <div
          id="chat"
          className="xl:mt-0 lg:mt-[-50px] md:mt-[-60px] mt-[-70px]"
        >
          <button
            onClick={handleToogle}
            className="bg-[#363636] px-[12px] xl:py-[20px] lg:py-[20px] md:py-[20px] py-[20px] rounded-full text-white font-GeneralSans text-[20px] xl:w-[250px] lg:w-[250px] md:w-[250px] w-[150px] xl:h-[80px] lg:h-[80px] md:h-[80px] h-[10px]
          flex justify-between items-center mt-[80px] cursor-pointer relative"
          >
            <div
              className={`xl:p-2 lg:p-2 md:p-2 p-[4px] bg-black rounded-full duration-300 ease-in-out 
               ${
                 toggle
                   ? "xl:pl-[178px] lg:pl-[178px] md:pl-[178px] pl-[115px]"
                   : "xl:pl-0 lg:pl-0 md:pl-0 pl-0"
               } xl:ml-0 lg:ml-0 md:ml-0 ml-[-4px] `}
            >
              <MdKeyboardDoubleArrowRight className="xl:text-[40px] lg:text-[40px] md:text-[40px] text-[15px] text-white pl-2 " />
            </div>
            <span
              className={`xl:text-[20px] lg:text-[20px] md:text-[20px] text-[10px] absolute right-[30px] top-[50%] translate-y-[-50%] duration-200 ease-out
             ${toggle ? "right-[-250px] text-transparent" : ""}`}
            >
              Hire Me Now!
            </span>
            <form
              className={`absolute right-[270px] top-[-600px] bg-Khaki p-6 rounded-xl z-50 w-fit
    ${
      toggle ? "block opacity-100 bg-Khaki duration-300 ease-out " : "hidden opacity-0"
    } duration-300 ease-out`}
            >
              <div className="mb-[50px] flex justify-center gap-[10px]">
                <p className="inline-block drop-shadow-2xl text-[30px] text-black font-aktura select-none text-center leading-[25px] z-50">
                  FAHAD <br /> IQBAL
                </p>
                <div>
                  <p className="text-black font-GeneralSans font-extrabold text-[18px] items-start mt-[-5px]">
                    Work With Fahad
                  </p>
                  <p className="text-black text-[12px] items-start mt-[6px]">
                    Responds in about 2 hours
                  </p>
                </div>
              </div>

              <div className="flex justify-evenly gap-[10px] items-baseline mb-[10px]">
                <label className="text-DarkRed font-GeneralSans text-[16px] flex justify-center gap-[3px] items-start">
                  Project Detals
                  <GiStarFormation className="text-[8px] mt-[5px] text-white" />
                </label>
                <p className="text-[14px] text-black">Mnimum 50 characters</p>
              </div>

              <textarea
                placeholder="Briefly describe your project with any specific desgn requirements, timelines and goals you have in mind..."
                className="outline-3 outline-black focus:outline-white rounded-md px-[6px] text-[14px] font-GeneralSans text-black py-[8px] w-[300px] h-[150px] placeholder:text-[14px] placeholder:text-black"
              />

              <div className="flex flex-col justify-center items-start mb-[10px] mt-[22px]">
                <label className="text-DarkRed font-GeneralSans text-[16px] flex justify-center gap-[3px] items-start">
                  Target Date
                  <GiStarFormation className="btext-black text-[8px] mt-[5px] text-white" />
                </label>
                <p className="text-black text-[14px]">
                  Select when you need the project to be completed
                </p>
              </div>
              <input
                id="custom-date"
                type="date"
                className="font-GeneralSans outline-3 outline-black focus:outline-white rounded-md px-[6px] text-[14px] py-[8px] w-[300px] placeholder:text-[14px] placeholder:select-none valid:select-none select-none"
              />

              <div className="mt-[22px] mb-[10px]">
                <label className="text-DarkRed font-GeneralSans text-[16px] flex justify-center gap-[3px] items-start">
                  Project Budget
                  <GiStarFormation className="text-[8px] mt-[5px] text-white" />
                </label>
              </div>
              <input
                type="number"
                placeholder="Your Budget in USD"
                className="font-GeneralSans outline-3 outline-black focus:outline-white rounded-md px-[6px] text-white py-[8px] w-[300px] placeholder:text-[14px] placeholder:text-black"
              />
              <button className="font-GeneralSans text-[18px] tracking-widest text-white bg-black px-[20px] py-[10px] mt-[16px] border-3 border-black rounded-lg ml-[-2px] cursor-pointer">
                Send
              </button>
            </form>
          </button>
        </div>
      </div>
      <div className="py-[40px] flex xl:flex-row lg:flex-row md:flex-row flex-col xl:gap-0 lg:gap-0 md:gap-0 gap-[20px] justify-between border-t-2 border-white/50 xl:pr-[120px] lg:pr-[120px] md:pr-0">
        <div>
          <Link to="/" className="z-50">
            <p className="inline-block drop-shadow-2xl ml-[10px] xl:text-[20px] lg:text-[20px] md:text-[20px] text-[14px] font-aktura cursor-pointer select-none text-center leading-[25px] z-50">
              FAHAD <br /> IQBAL
            </p>
          </Link>
          <p className="xl:text-balance text-white/70 font-medium w-[300px] pl-[10px] xl:mt-[20px] lg:mt-[20px] md:mt-[20px] mt-[10px]">
            I’m Fahad Iqbal — a Web & UX/UI Developer, as well as a visual
            creator. I build clean, user-friendly websites and design graphics
            that connect — from posters and banners to refined photo edits. My
            work blends creativity with purpose, always focused on delivering
            meaningful experiences.
          </p>
        </div>

        <div className="xl:ml-0 lg:ml-0 md:ml-0 ml-[10px]">
          <h1 className="font-GeneralSans text-[24px] font-white">Email</h1>
          <p className="mt-[8px] text-white/70">fahad.iqbal.im.47@icloud.com</p>
          <p className="mt-[8px] text-white/70">fahadddd.im@gmail.com</p>
        </div>
        <div className="xl:ml-0 lg:ml-0 md:ml-0 ml-[10px]">
          <h1 className="font-GeneralSans text-[24px] font-white">Contact</h1>
          <p className="mt-[8px] text-white/70">+880 1748 996699</p>
          <p className="mt-[8px] text-white/70">+880 1601 859894</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
