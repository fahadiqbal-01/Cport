import React from "react";
import { GiStarFormation } from "react-icons/gi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { ScrollSmoother } from "gsap/all";
import { SendMSGbtn } from "./SendMSGbtn";

const Footer = () => {
  const handleHireClick = () => {
    const smoother = ScrollSmoother.get();

    if (smoother) {
      smoother.scrollTo(0, false);
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-[120px] p-6 selection:bg-white selection:text-black bg-black text-white relative">
      <div className="flex 2xl:flex-row xl:flex-row lg:flex-row flex-col justify-between items-start mb-[50px]">
        <h1
          className="font-Gambarino xl:text-[140px] lg:text-[120px] md:text-[100px] text-[45px] 
        xl:leading-normal lg:leading-[130px] md:leading-[100px] leading-[60px]"
        >
          Let's Connect <br /> There
        </h1>

        <SendMSGbtn
          className=" bg-white text-black! hover:border-white hover:after:bg-white hover:text-black! mr-10 rounded-none! "
          to="lets-build-something-great-together"
        >
          Let's Build
        </SendMSGbtn>
      </div>
      <div className="py-[40px] flex xl:flex-row lg:flex-row md:flex-row flex-col xl:gap-0 lg:gap-0 md:gap-0 gap-[20px] justify-between border-t-2 border-white/50 xl:pr-[120px] lg:pr-[120px] md:pr-0">
        <div>
          <Link to="/" className="z-50">
            <p className="inline-block drop-shadow-2xl ml-[10px] xl:text-[20px] lg:text-[20px] md:text-[20px] text-[14px] font-aktura cursor-pointer select-none text-center leading-[25px] z-50">
              FAHAD <br /> IQBAL
            </p>
          </Link>
          <p className="xl:text-balance text-white/50 font-medium w-[300px] pl-[10px] mt-5 select-none ">
            I’m Fahad Iqbal — a Web & UX/UI Developer, as well as a visual
            creator. I build clean, user-friendly websites and design graphics
            that connect — from posters and banners to refined photo edits. My
            work blends creativity with purpose, always focused on delivering
            meaningful experiences.
          </p>
        </div>

        <div className="xl:ml-0 lg:ml-0 md:ml-0 ml-[10px]">
          <h1 className="font-Gambarino text-[24px] font-white">Contact</h1>
          <div className=" mt-5 ">
            <p className="text-white/50">fahadddd.im@gmail.com</p>
            <p className="text-white/50">+880 1748 996699</p>
          </div>
        </div>
        <div className="xl:ml-0 lg:ml-0 md:ml-0 ml-[10px]">
          <h1 className="font-Gambarino text-[24px] font-white">Social</h1>
          <div className=" flex justify-start items-start gap-4 mt-5 ">
            <a href="https://x.com/_fahad_01_" target="_blank">
              <img src="icons/x.png" className=" invert-100 w-8 " />
            </a>
            <a
              href="https://wa.me/8801748996699?text=Hi%20Fahad%2C%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
            >
              <img src="icons/whatsapp.png" className=" w-8 " />
            </a>
            <a
              href="https://www.linkedin.com/in/fahad-iqbal-a8a7003a1?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
            >
              <img src="icons/linkedin.png" className=" w-8 " />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
