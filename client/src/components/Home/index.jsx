import React from "react";
import Navbar from "../Navbar";
import HeroBanner from "../Banner";
import About from "../About";
import Technologies from "../Technologies";
import ToggleTabs from "../ExperienceAndEducation/ToggleTabs";
import ProjectCarousel from "../Project/ProjectCarousel";
import Footer from "../Footer";
import Contact from "../Contact";
import Squares from "../Animation/SquareBox";
import Particles from "../Animation/Particals";

const Home = () => {
  return (
    <>
      {/* <Squares
        speed={0.3}
        squareSize={100}
        direction="diagonal" // up, down, left, right, diagonal
        borderColor="#003049"
        hoverFillColor="#222"
      > */}
      <Particles>
        <Navbar />
        <HeroBanner />
        <About />
        <Technologies />
        <ToggleTabs />
        <ProjectCarousel />
        <Contact />
        <Footer />
      </Particles>
      {/* </Squares> */}
    </>
  );
};

export default Home;
