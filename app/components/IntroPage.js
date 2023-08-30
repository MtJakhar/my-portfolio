import React from "react";
import Image from "next/image";
import NavBar from "./NavBar";
import cyberCityDivder from "../../public/images/cyberCityDivider.png";
import cyberCityDivder2 from "../../public/images/cyberCityDivider2.png";
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
        <div>
          <Image
            src={cyberCityDivder2}
            alt="top city divider"
            className="w-full"
          />
        </div>
        <About />
        <Image className="w-full" src={cyberCityDivder} alt="cyberCity" />
        <div className="relative justify-center items-center flex">
          <Skills />
          <Image src={crypticText} className="w-full z-0" alt="crypticText" />
        </div>
        <div className="bg-neutral-950 justify-center items-center flex py-20 px-10">
          <Projects />
        </div>
        <div className="bg-neutral-950 justify-center items-center flex py-20 px-10">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default IntroPage;
