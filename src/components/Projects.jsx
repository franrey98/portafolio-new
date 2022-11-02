import React from "react";
import { Grid, Stack, Typography, Box, useMediaQuery } from "@mui/material";
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
  {
    name: "Quickly",
    img: native,
    tech: "REACT NATIVE - EXPO ",
    github: "https://github.com/franrey98/c6-30-ft-pern-1",
    url: "https://github.com/franrey98/c6-30-ft-pern-1",
  },
];

const Projects = () => {
  return (
    <Stack id="projects">
      <Typography
        textTransform={"uppercase"}
        fontWeight="700"
        fontSize={"24px"}
        mt={6}
        color="primary.main"
        borderBottom={"4px solid"}
      >
        Proyectos
      </Typography>
      <Typography fontWeight="400" fontSize={"20px"} mt={"1.5rem"}>
        Diversos trabajos tanto grupales como personales que he realizado hasta
        la fecha:
      </Typography>
      <Grid container justifyContent={"space-around"} gap="1rem">
        <Grid item>
          <ProjectCard infoCard={infoCard[2]} />
        </Grid>
        <Grid item>
          <ProjectCard infoCard={infoCard[0]} />
        </Grid>
        <Grid item>
          <ProjectCard infoCard={infoCard[1]} />
        </Grid>
        <Grid item>
          <ProjectCard infoCard={infoCard[3]} />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Projects;
