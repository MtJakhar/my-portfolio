import React, { useState, useEffect } from "react";
import Image from "next/image";
import avatar from "../../public/images/avatar.png";

const About = () => {
  const [isImageVisible, setIsImageVisible] = useState(true);

  const toggleVisiblity = () => {
    if (window.innerWidth < 768) {
      setIsImageVisible(false);
    } else {
      setIsImageVisible(true);
    }
  };

  useEffect(() => {
    toggleVisiblity();
    window.addEventListener("resize", toggleVisiblity);
    return () => {
      window.removeEventListener("resize", toggleVisiblity);
    };
  }, []);

  return (
    <div className="lg:pb-[400px] md:pb-[250px] grid gap-4 md:grid-cols-2 mx-auto">
      <p className=" text-indigo-900  mx-auto px-10">
        My Name is <span className="text-fuchsia-700">Muizz</span> Jakhar I am a{" "}
        <span className="text-fuchsia-700">Full-Stack </span> Web Developer
      </p>
      {isImageVisible && (
        <Image className="mx-auto" src={avatar} alt="Muizz Jakhar Avatar" />
      )}
    </div>
  );
};

export default About;
