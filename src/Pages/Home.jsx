import React from "react";
import HomeMain from "../subPages/HomeMain";
import LeftSlide from "../Components/LeftSlide";
import Homesec from "../subPages/Homesec";

const Home = () => {
  return (
    <section>
      <HomeMain />
      <LeftSlide />
      <Homesec />
    </section>
  );
};

export default Home;
