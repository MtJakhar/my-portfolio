import React, { useEffect, useState } from "react";
import Image from "next/image";
import css from "../../public/images/css.png";
import figma from "../../public/images/figma2.png";
import git from "../../public/images/git.png";
import html from "../../public/images/html.png";
import javascript from "../../public/images/javascript.png";
import mui from "../../public/images/mu5.png";
import nextjs from "../../public/images/next-js.png";
import node from "../../public/images/node.png";
import aws from "../../public/images/aws.png";
import react from "../../public/images/react.png";
import tailWindCss from "../../public/images/tailWindCss.png";
import typescript from "../../public/images/typescript.png";

const Skills = () => {
  let skillData = [
    { image: html, text: "HTML" },
    { image: css, text: "CSS" },
    { image: tailWindCss, text: "Tailwindcss" },
    { image: figma, text: "Figma" },
    { image: javascript, text: "JavaScript" },
    { image: typescript, text: "TypeScript" },
    { image: react, text: "React" },
    { image: node, text: "NodeJS" },
    { image: nextjs, text: "Next.JS" },
    { image: aws, text: "AWS" },
    { image: git, text: "Git" },
    { image: mui, text: "MUI" },
  ];

  const [imageSize, setImageSize] = useState(50);

  const toggleImageChange = () => {
    if (window.innerWidth < 768) {
      setImageSize(40);
    } else {
      setImageSize(50);
    }
  };

  useEffect(() => {
    toggleImageChange();
    window.addEventListener("resize", toggleImageChange);
    return () => {
      window.removeEventListener("resize", toggleImageChange);
    };
  }, []);

  return (
    <div className="absolute z-10 bg-neutral-900 text-neutral-100 bg-opacity-80 p-4 rounded-lg flex mx-auto my-auto">
      <div>
        <div>
          <h1>///.Skills.module</h1>
          <h4>loading...</h4>
        </div>
        <div className="grid grid-cols-4 gap-">
          {skillData.map((data) => {
            return (
              <div
                key={skillData.indexOf(data)}
                className="sm:m-1 md:m-3 text-center"
              >
                <Image
                  className="m-auto"
                  src={data.image}
                  width={imageSize}
                  height={imageSize}
                  alt={data.text}
                />
                <p>{data.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
