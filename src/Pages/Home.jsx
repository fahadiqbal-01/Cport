import React, { useEffect, useState } from "react";
import HomeMain from "../subPages/HomeMain";
import LeftSlide from "../Components/LeftSlide";
import Homesec from "../subPages/Homesec";
import { useLocation } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Home = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {isLoading ? (
        <div className=" h-[100vh] w-full ">
          <DotLottieReact src="json/amongus.lottie" loop autoplay />
        </div>
      ) : (
        <section>
          <HomeMain />
          <LeftSlide />
          <Homesec />
        </section>
      )}
    </>
  );
};

export default Home;
