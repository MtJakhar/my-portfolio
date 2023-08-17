import React from "react";
import Image from "next/image";
import nextjs from "../../public/images/next-js.png";
import node from "../../public/images/node.png";
import aws from "../../public/images/aws.png";

const Projects = () => {
  return (
    <div className="bg-neutral-900 text-sky-400 bg-opacity-50 p-4 rounded-lg flex mx-auto my-auto">
      <div>
        <h1>///.Projects.module</h1>
        <h4>loading...</h4>
        <div className="flex">
          <Image
            className="mx-auto"
            src={nextjs}
            width={100}
            height={100}
            alt="image"
          />
          <Image
            className="mx-auto"
            src={node}
            width={100}
            height={100}
            alt="image"
          />
          <Image
            className="mx-auto"
            src={aws}
            width={100}
            height={100}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
