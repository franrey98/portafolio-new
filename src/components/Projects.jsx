import React from "react";
import { Grid, Stack, Typography, Box } from "@mui/material";
import ProjectCard from "./ProjectCard";
import petapp from "../img/petapp.png";
import reactapp from "../img/reactapp.png";
import todoapp from "../img/todoapp.png";
import native from "../img/native.png";

const infoCard = [
  {
    name: "Pet Finder",
    img: petapp,
    tech: "REACT - MUI - REDUX TOOLKIT",
    github: "https://github.com/franrey98/S4-11-ft-mern",
    url: "https://petfinder-phi.vercel.app/",
  },
  {
    name: "E-commerce",
    img: reactapp,
    tech: "REACT - TAILWIND - CONTEXT",
    github: "https://github.com/franrey98/rey-app",
    url: "https://ecommerce-deportivo.netlify.app/",
  },
  {
    name: "Todo List",
    img: todoapp,
    tech: "HTML - CSS - JAVASCRIPT",
    github: "https://github.com/franrey98/Proyecto-para-portafolio-2",
    url: "https://apptodorey.netlify.app/",
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
      <Typography mt={"1.5rem"}>
        Diversos trabajos tanto grupales como personales que he realizado hasta
        la fecha
      </Typography>
      <Stack mt={"2rem"} direction={{ sx: "column", md: "row" }} gap={"1rem"}>
        <ProjectCard infoCard={infoCard[0]} />
        <ProjectCard infoCard={infoCard[2]} />
        <ProjectCard infoCard={infoCard[1]} />
      </Stack>
    </Stack>
  );
};

export default Projects;
