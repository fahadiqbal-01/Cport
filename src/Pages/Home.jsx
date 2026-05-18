import React, { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Landing from "../subPages/Landing";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("hasShownLoader");

    if (alreadyShown) {
      setIsLoading(false);
    } else {
      sessionStorage.setItem("hasShownLoader", "true");
      const timer = setTimeout(() => setIsLoading(false), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen ">
          <DotLottieReact src="json/hello.lottie" loop autoplay className=" max-w-[70%] " />
        </div>
      ) : (
        <section className="overflow-x-hidden">
          <Landing />
        </section>
      )}
    </>
  );
};

export default Home;
