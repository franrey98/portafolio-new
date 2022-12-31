import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const ProjectCard = ({ infoCard }) => {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        border: "1px solid ",
        borderRadius: "20px",
        borderColor: "#0e577e",
        backgroundColor: "#f5ede7",
        boxShadow: " 2px 4px 10px 1px rgb(0 0 0 / 59%)",
        overflow: "hidden",
      }}
      alignItems="center"
      gap={3}
      mt={{ xs: "2rem" }}
    >
      <Typography
        fontWeight={"700"}
        textTransform="uppercase"
        fontSize={"24px"}
        color="primary.main"
        mt="2rem"
      >
        {infoCard?.name} App
      </Typography>
      <Stack sx={{ padding: "0px" }}>
        <img
          style={{ width: "400px", height: "180px" }}
          src={infoCard?.img}
          alt="imgprojects"
        />
      </Stack>
      <Typography color={"primary.dark"} fontWeight={"600"}>
        {infoCard?.tech}
      </Typography>
      <Stack direction={"row"} gap={"14px"} justifyContent="center">
        <Button
          sx={{
            color: "#0e577e",
            border: "1px solid #0e577e",
            "&:hover": {
              color: "white",
              backgroundColor: "#0e577e",
            },
          }}
          variant=""
          href={infoCard?.github}
        >
          Github
        </Button>
        <Button
          sx={{
            color: "#0e577e",
            border: "1px solid #0e577e",
            "&:hover": {
              color: "white",
              backgroundColor: "#0e577e",
            },
          }}
          variant=""
          href={infoCard?.url}
        >
          Visitar
        </Button>
      </Stack>
    </Stack>
  );
};

export default ProjectCard;
