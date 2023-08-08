import React from "react";
import Image from "next/image";
import NavBar from "./NavBar";
import avatar from "../../public/images/avatar.png";
import cyberCityDivder from "../../public/images/cyberCityDivider.png";
import cyberCityDivder2 from "../../public/images/cyberCityDivider2.png";
import crypticText from "../../public/images/crypticText.png";

const IntroPage = () => {
  return (
    <>
      <div>
        <NavBar />
        <Image
          className="w-full"
          src={cyberCityDivder2}
          alt="top city divider"
        />
        <div className="flex">
          <h1 className="flex-auto">
            My name is Muizz Jakhar I am a Full-stack Web Developer
          </h1>
          <Image src={avatar} alt="Muizz Jakhar Avatar" />
        </div>
        <Image className="w-full" src={cyberCityDivder} alt="cyberCity" />
        <Image src={crypticText} alt="crypticText" />
      </div>
    </>
  );
};

export default IntroPage;
