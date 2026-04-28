import React from "react";
import HomeMain from "../Components/HomeMain";
import ProjectsSection from "../Components/ProjectsSection";
import FAQ from "../Components/FAQ";
import Core from "../Components/Core";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";

const Landing = () => {
  return (
    <>
      <HomeMain />
      <ProjectsSection />
      <Services />
      <FAQ />
      <Testimonials />
    </>
  );
};

export default Landing;
