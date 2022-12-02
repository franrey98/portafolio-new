import React from "react";
import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import CardImg from "./CardImg";
import imgcss from "../img/css.png";
import imghtml from "../img/html.png";
import imgjs from "../img/js.png";
import imggit from "../img/git.png";
import imgreact from "../img/react.png";
import imgnode from "../img/node.png";
import { useTranslation } from "react-i18next";

const imgTech = [
  {
    name: "css",
    img: imgcss,
  },
  {
    name: "HTML",
    img: imghtml,
  },
  {
    name: "javascript",
    img: imgjs,
  },
  {
    name: "react",
    img: imgreact,
  },
  {
    name: "node",
    img: imgnode,
  },
  {
    name: "git",
    img: imggit,
  },
];

const Technology = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [t, i18n] = useTranslation("global");

  return (
    <Stack id="technology">
      <Typography
        textTransform={"uppercase"}
        fontWeight="700"
        fontSize={"24px"}
        mt={6}
        color="white"
      >
        {t("technologies.title")}
      </Typography>
      <Typography color="white" mt={"40px"}>
        {t("technologies.text-main")}
      </Typography>
      {!isSmallScreen ? (
        <Stack
          direction={"row"}
          gap="4rem"
          padding={"25px"}
          borderRadius="10px"
          justifyContent="space-between"
          mt={"2rem"}
          backgroundColor="white"
          height="11rem"
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
