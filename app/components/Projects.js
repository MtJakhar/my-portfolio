import React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import fillerImage from "../../public/images/fillerImage.png";

const Projects = () => {
  let projectsData = [
    {
      image: fillerImage,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut aliquam purus sit amet luctus venenatis. Nam aliquam sem et tortor consequat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Vel quam elementum pulvinar etiam non.",
    },
    {
      image: fillerImage,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut aliquam purus sit amet luctus venenatis. Nam aliquam sem et tortor consequat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Vel quam elementum pulvinar etiam non.",
    },
    {
      image: fillerImage,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut aliquam purus sit amet luctus venenatis. Nam aliquam sem et tortor consequat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Vel quam elementum pulvinar etiam non.",
    },
  ];
  return (
    <div className="bg-blue-950 text-sky-400 bg-opacity-50 p-4 rounded-lg flex">
      <div>
        <div className="mb-5">
          <h1>///.Projects.module</h1>
          <h4>loading...</h4>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {projectsData.map((data) => {
            return (
              <div
                className="justify-center text-center"
                key={projectsData.indexOf(data)}
              >
                <Image
                  className="rounded-lg mx-auto my-3"
                  src={data.image}
                  width={300}
                  height={300}
                  alt="image"
                />
                <p className="max-w-md text-justify mx-auto px-4">
                  {data.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
