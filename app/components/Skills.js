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

const Skills = () => {
  return (
    <div className=" absolute z-10 bg-neutral-900 text-sky-400 bg-opacity-50 p-4 rounded-lg flex">
      <div>
        <h1>///.Skills.module</h1>
        <h4>loading...</h4>
        <div className="flex m-2">
          <Image src={html} width={50} height={50} alt="html" />
          <Image src={css} width={50} height={50} alt="css" />
          <Image src={javascript} width={50} height={50} alt="javascript" />
          <Image src={node} width={50} height={50} alt="node" />
        </div>
        <div className="flex m-2">
          <Image src={nextjs} width={50} height={50} alt="nextjs" />
          <Image src={mui} width={50} height={50} alt="mui" />
          <Image src={git} width={50} height={50} alt="git" />
          <Image src={figma} width={50} height={50} alt="figma" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
