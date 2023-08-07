import React from "react";
import Image from "next/image";
import avatar from "../../public/images/avatar.png";

const IntroPage = () => {
  return (
    <>
      <div>
        <div>
          <h1>My name is Muizz Jakhar I am a Full-stack Web Developer</h1>
        </div>
        <Image src={avatar} alt="Muizz Jakhar Avatar" />
      </div>
    </>
  );
};

export default IntroPage;
