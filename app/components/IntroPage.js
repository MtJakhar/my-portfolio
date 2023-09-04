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
        <Image
          src={cyberCityDivder2}
          alt="top city divider"
          className="w-full"
        />
        <About />

        <div className="relative justify-center items-center flex">
          <Image
            className="absolute z-10 w-full -top-[55%]"
            src={cyberCityDivder}
            alt="cyberCity"
          />
          <Image
            className="absolute z-10 w-full -bottom-[40%]"
            src={cyberCityDivder}
            alt="cyberCity"
          />
          <Skills />
          <Image src={crypticText} className="w-full z-0" alt="crypticText" />
        </div>

        <div className="bg-neutral-950 justify-center items-center flex pb-20 pt-[500px] px-10">
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
