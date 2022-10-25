import { Button, Stack } from "@mui/material";
import React from "react";

const ProjectCard = ({ infoCard }) => {
  return (
    <Stack>
      <Stack sx={{ border: "1px solid #282222", padding: "5px" }}>
        <img style={{ width: "100%" }} src={infoCard?.img} alt="native" />
      </Stack>
      <Stack direction={"row"} justifyContent="center">
        <Button>
          <a href={infoCard?.github}>github</a>
        </Button>
        <Button>
          <a href={infoCard?.url}>pagina</a>
        </Button>
      </Stack>
    </Stack>
  );
};

export default ProjectCard;
