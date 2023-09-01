import React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import fillerImage from "../../public/images/fillerImage.png";

const Projects = () => {
  let projectsData = [
    {
      image: fillerImage,
      description: "Some Description of website",
    },
    {
      image: fillerImage,
      description: "Other Description of website",
    },
    {
      image: fillerImage,
      description: "Another Description of website",
    },
  ];
  return (
    <div className="bg-blue-950 text-sky-400 bg-opacity-50 p-4 rounded-lg flex mx-auto my-auto">
      <div>
        <div className="mb-5">
          <h1>///.Projects.module</h1>
          <h4>loading...</h4>
        </div>
        <Grid container spacing={2}>
          {projectsData.map((data) => {
            return (
              <Grid
                item
                xs={12}
                md={4}
                key={projectsData.indexOf(data)}
                className="text-center"
              >
                <Image
                  className="rounded-lg"
                  src={data.image}
                  width={300}
                  height={300}
                  alt="image"
                />
                <p>{data.description}</p>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Projects;
