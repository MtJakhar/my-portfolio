import React from "react";
import Image from "next/image";
import avatar from "../../public/images/avatar.png";
import Grid from "@mui/material/Grid";

const About = () => {
  return (
    <div className="lg:pb-[400px] md:pb-[250px] sm:pb-[250px]">
      <Grid container rowSpacing={2} columnSpacing={1}>
        <Grid item xs={12} md={6}>
          <div className="text-5xl text-indigo-900  leading-loose ml-28">
            <p>
              My Name is <span className="text-fuchsia-700">Muizz</span> Jakhar
              I am a <span className="text-fuchsia-700">Full-Stack </span> Web
              Developer
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image src={avatar} alt="Muizz Jakhar Avatar" />
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
