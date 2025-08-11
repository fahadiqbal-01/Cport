import React, { useEffect, useState } from "react";
import HomeMain from "../subPages/HomeMain";
import LeftSlide from "../Components/LeftSlide";
import Homesec from "../subPages/Homesec";
import { useLocation } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Home = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true); // start true

  useEffect(() => {
    setIsLoading(true); // show loader immediately on route change
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {isLoading ? (
        <div className="h-[100vh] w-full">
          <DotLottieReact src="json/hello.lottie" loop autoplay />
        </div>
      ) : (
        <section className="overflow-x-hidden">
          <HomeMain />
          <LeftSlide />
          <Homesec />
        </section>
      )}
    </>
  );
};

export default Home;
