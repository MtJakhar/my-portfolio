import React from "react";
import Image from "next/image";
import NavBar from "./NavBar";
import cyberCityDivder from "../../public/images/cyberCityDivider.png";
import cyberCityDivder2 from "../../public/images/cyberCityDivider2.png";
import cyberCityDivderBott from "../../public/images/cyberCityDividerBott.png";
import crypticText from "../../public/images/crypticText.png";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const IntroPage = () => {
  return (
    <>
      <div>
        <NavBar />
        <Image src={cyberCityDivder2} alt="topCityDiv" className="w-full" />
        <div></div>
        <div id="about">
          <About />
        </div>

        <div id="skills" className="relative justify-center items-center flex">
          <Image
            className="absolute z-20 w-full sm:-top-[60%] -top-[55%]"
            src={cyberCityDivder}
            alt="cyberCity"
          />
          <Image
            className="absolute z-20 w-full -bottom-[40%]"
            src={cyberCityDivder}
            alt="cyberCity"
          />
          <Skills />
          <Image src={crypticText} className="w-full z-0" alt="crypticText" />
        </div>

        <div
          id="projects"
          className="bg-neutral-950 justify-center items-center flex pb-20 px-20 sm:pt-[300px] md:pt-[460px] sm:px-20 md:px-15"
        >
          <Projects />
        </div>
        <div
          id="contact"
          className="bg-neutral-950 justify-center items-center flex pt-10 sm:px-20 md:px-15"
        >
          <Contact />
        </div>
        <Image
          src={cyberCityDivderBott}
          alt="botCityDiv"
          className="w-full bg-neutral-950"
        />
      </div>
    </>
  );
};

export default IntroPage;
