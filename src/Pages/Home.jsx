import React, { useEffect, useState } from "react";
import HomeMain from "../subPages/HomeMain";
import LeftSlide from "../Components/LeftSlide";
import Homesec from "../subPages/Homesec";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ContactMSG } from "../Components/ContactMSG";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if loader was already shown in this browser
    const alreadyShown = sessionStorage.getItem("hasShownLoader");

    if (alreadyShown) {
      // Skip loader next time
      setIsLoading(false);
    } else {
      // First time visit: show loader for 3s
      sessionStorage.setItem("hasShownLoader", "true");
      const timer = setTimeout(() => setIsLoading(false), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="h-[100vh] w-full flex justify-center items-center">
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
