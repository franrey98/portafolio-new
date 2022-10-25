import React from "react";
import { Grid, Stack, Typography, Box } from "@mui/material";
import ProjectCard from "./ProjectCard";
import petapp from "../img/petapp.png";
import reactapp from "../img/reactapp.png";
import todoapp from "../img/todoapp.png";
import native from "../img/native.png";

const infoCard = [
  {
    img: petapp,
    github: "https://github.com/franrey98/S4-11-ft-mern",
    url: "https://petfinder-phi.vercel.app/",
  },
  {
    img: reactapp,
    github: "https://github.com/franrey98/rey-app",
    url: "https://ecommerce-deportivo.netlify.app/",
  },
  {
    img: todoapp,
    github: "https://github.com/franrey98/Proyecto-para-portafolio-2",
    url: "https://apptodorey.netlify.app/",
  },
  {
    img: native,
    github: "https://github.com/franrey98/c6-30-ft-pern-1",
    url: "https://github.com/franrey98/c6-30-ft-pern-1",
  },
];

const Projects = () => {
  return (
    <Stack>
      <Typography
        textTransform={"uppercase"}
        fontWeight="700"
        fontSize={"24px"}
        mt={6}
        color="primary.main"
      >
        Proyectos
      </Typography>
      <Typography>
        Diversos trabajos tanto grupales como personales que he realizado hasta
        la fecha
      </Typography>
      <Stack alignItems={"center"}>
        <Stack direction={"row"}>
          <ProjectCard infoCard={infoCard[0]} />
          <ProjectCard infoCard={infoCard[1]} />
        </Stack>
        <Stack direction={"row"}>
          <ProjectCard infoCard={infoCard[2]} />
          <ProjectCard infoCard={infoCard[3]} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Projects;
