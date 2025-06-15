import React from "react";
import NavBar from "../Components/NavBar";
import Container from "../components/Container";
import HomeMain from "../subPages/HomeMain";
import Star from "../Components/Star";

const Home = () => {
  return (
    <section>
      <Container>
        <HomeMain />
      </Container>
    </section>
  );
};

export default Home;
