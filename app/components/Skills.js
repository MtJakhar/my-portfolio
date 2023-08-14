import React from "react";
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
  let firstRow = [
    [html, "HTML"],
    [css, "CSS"],
    [tailWindCss, "Tailwindcss"],
    [figma, "Figma"],
    [javascript, "JavaScript"],
    [typescript, "TypeScript"],
    [react, "React"],
    [node, "NodeJS"],
    [nextjs, "Next.JS"],
    [aws, "AWS"],
    [git, "Git"],
    [mui, "MUI"],
  ];

  return (
    <div className=" absolute z-10 bg-neutral-900 text-sky-400 bg-opacity-50 p-4 rounded-lg flex">
      <div>
        <h1>///.Skills.module</h1>
        <h4>loading...</h4>
        <div className="grid grid-cols-4 gap-4">
          {firstRow.map((data) => {
            return (
              <div className="m-3 text-center">
                <Image
                  className="mx-auto"
                  src={data[0]}
                  width={50}
                  height={50}
                  alt={data[1]}
                />
                <p>{data[1]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
