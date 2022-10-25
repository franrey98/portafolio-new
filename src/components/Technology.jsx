import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import CardImg from "./CardImg";
import imgcss from "../img/css.png";
import imghtml from "../img/html.png";
import imgjs from "../img/js.png";
import imggit from "../img/git.png";
import imgreact from "../img/react.png";
import imgnode from "../img/node.png";

const imgTech = [
  {
    img: imgcss,
  },
  {
    img: imghtml,
  },
  {
    img: imgjs,
  },
  {
    img: imgreact,
  },
  {
    img: imgnode,
  },
  {
    img: imggit,
  },
];
const Technology = () => {
  return (
    <Stack>
      <Typography
        textTransform={"uppercase"}
        fontWeight="700"
        fontSize={"24px"}
        mt={6}
        color="white"
      >
        Tecnologias
      </Typography>
      <Typography color="white" mt={"20px"}>
        Estas son las herramientas con las que trabaje y que mas utilizo
        diariamente
      </Typography>
      <Box
        sx={{
          padding: "1rem",
          backgroundColor: "#000627",
          borderRadius: "1rem",
          marginTop: "2rem",
          width: "1000px",
        }}
      >
        <Stack direction={"row"} gap="4rem" padding={"8px"}>
          <CardImg imgTech={imgTech[1]} />
          <CardImg imgTech={imgTech[0]} />
          <CardImg imgTech={imgTech[2]} />
          <CardImg imgTech={imgTech[3]} />
          <CardImg imgTech={imgTech[4]} />
          <CardImg imgTech={imgTech[5]} />
        </Stack>
      </Box>
    </Stack>
  );
};

export default Technology;
