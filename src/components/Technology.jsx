import React from "react";
import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
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
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Stack id="technology">
      <Typography
        textTransform={"uppercase"}
        fontWeight="700"
        fontSize={"24px"}
        mt={6}
        color="white"
      >
        Tecnologias
      </Typography>
      <Typography color="white" mt={"40px"}>
        Estas son las herramientas con las que trabaje y que mas utilizo
        diariamente
      </Typography>
      {!isSmallScreen ? (
        <Stack
          direction={"row"}
          gap="4rem"
          padding={"8px"}
          justifyContent="space-between"
          mt={"5rem"}
        >
          <CardImg imgTech={imgTech[1]} />
          <CardImg imgTech={imgTech[0]} />
          <CardImg imgTech={imgTech[2]} />
          <CardImg imgTech={imgTech[3]} />
          <CardImg imgTech={imgTech[4]} />
          <CardImg imgTech={imgTech[5]} />
        </Stack>
      ) : (
        <>
          <Grid
            container
            gap="30px"
            justifyContent={{ xs: "space-around", md: "center" }}
          >
            {imgTech.map((item, index) => (
              <Grid key={index} mt={"2rem"} item>
                <CardImg imgTech={item} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Stack>
  );
};

export default Technology;
