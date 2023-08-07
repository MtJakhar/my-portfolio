import React from "react";
import Image from "next/image";
import avatar from "../../public/images/avatar.png";
import cyberCityDivder from "../../public/images/cyberCityDivider.png";

const IntroPage = () => {
  return (
    <>
      <div>
        <div className="flex">
          <h1 className="flex-auto">
            My name is Muizz Jakhar I am a Full-stack Web Developer
          </h1>
          <Image src={avatar} alt="Muizz Jakhar Avatar" />
        </div>
        <div>
          <Image className="w-full" src={cyberCityDivder} alt="cyberCity" />
        </div>
      </div>
    </>
  );
};

export default IntroPage;
