import React from "react";
import ProjectsSection from "../Components/ProjectsSection";
import HomeMain from "../Components/HomeMain";
import Services from "../Components/Services";
import Gallery from "../Components/Gallery";
import FAQ from "../Components/FAQ";
import Dream from "../Components/Dream";

const Landing = () => {
  return (
    <main className="bg-white">
      {/* Projects focus on top */}
      <ProjectsSection />

      <HomeMain />
      <Services />

      <section className="py-20">
        <h2 className="font-Gambarino text-5xl text-center mb-10">
          Art Gallery
        </h2>
        <Gallery />
      </section>

      <Dream />
      <FAQ />
    </main>
  );
};

export default Landing;
