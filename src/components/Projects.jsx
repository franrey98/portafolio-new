import React from "react";
import { Grid, Stack, Typography, Box, useMediaQuery } from "@mui/material";
import ProjectCard from "./ProjectCard";
import petapp from "../img/petapp.png";
import joblisting from "../img/job-listings.png";
import todoapp from "../img/todoapp.png";
import native from "../img/native.png";
import { useTranslation } from "react-i18next";

const infoCard = [
  {
    name: "Pet Finder",
    img: petapp,
    tech: "REACT - MUI - REDUX TOOLKIT",
    github: "https://github.com/franrey98/S4-11-ft-mern",
    url: "https://petfinder-phi.vercel.app/",
  },
  {
    name: "JOB LISTINGS",
    img: joblisting,
    tech: "REACT - SASS - TYPESCRIPT",
    github: "https://github.com/franrey98/job-listings",
    url: "https://job-listings-git-dev-franrey98.vercel.app/",
  },
  {
    name: "Netflix",
    img: todoapp,
    tech: "REACT - STYLED COMPONENTS - CONTEXT",
    github: "https://github.com/franrey98/netflix-app",
    url: "https://netflix-app-eta.vercel.app/",
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
  const [t, i18n] = useTranslation("global");
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
        {t("projects.title")}
      </Typography>
      <Typography fontWeight="400" fontSize={"20px"} mt={"1.5rem"}>
        {t("projects.text-main")}
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
