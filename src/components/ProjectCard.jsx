import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const ProjectCard = ({ infoCard }) => {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
      }}
      alignItems="center"
      gap={3}
      mt={{ xs: "2rem" }}
    >
      <Typography
        fontWeight={"700"}
        textTransform="uppercase"
        fontSize={"24px"}
      >
        App {infoCard?.name}
      </Typography>
      <Stack sx={{ padding: "0px" }}>
        <img
          style={{ width: "100%", height: "180px" }}
          src={infoCard?.img}
          alt="imgprojects"
        />
      </Stack>
      <Typography color={"primary.dark"} fontWeight={"400"}>
        {infoCard?.tech}
      </Typography>
      <Stack direction={"row"} gap={"14px"} justifyContent="center">
        <Button variant="contained" href={infoCard?.github}>
          Github
        </Button>
        <Button variant="contained" href={infoCard?.url}>
          Visitar
        </Button>
      </Stack>
    </Stack>
  );
};

export default ProjectCard;
