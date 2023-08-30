import React from "react";
import Image from "next/image";
import avatar from "../../public/images/avatar.png";

const About = () => {
  return (
    <div className="flex">
      <div className="w-1/2 text-5xl text-indigo-900  leading-loose ml-28">
        <p className="text-shadow-lg">My Name is</p>
        <p>
          <span className="text-fuchsia-700">Muizz</span> Jakhar
        </p>
        <p>I am a</p>
        <p className="text-fuchsia-700">Full-Stack</p>
        <p>Web Developer</p>
      </div>
      <Image src={avatar} alt="Muizz Jakhar Avatar" />
    </div>
  );
};

export default About;
