import React from "react";
import Container from "../Components/Container";
import HomeMain from "../subPages/HomeMain";
import LeftSlide from "../Components/LeftSlide";

const Home = () => {
  return (
    <section>
      <Container>
        <HomeMain />
        <LeftSlide />
      </Container>
    </section>
  );
};

export default Home;
