import React from "react";
import {
  Box,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Stack,
  Card,
} from "@mui/material";
import { motion } from "framer-motion";

const CardResponsive = () => {
  return (
    <Stack mt={"3rem"} display={{ xs: "flex", md: "none" }}>
      <motion.div
        whileHover={{ scale: [null, 1.1, 1.1] }}
        transition={{ duration: 0.3 }}
      >
        <Card
          sx={{
            padding: "5px",
            width: "100%",
            height: "20rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            border: "2px solid",
            borderColor: "primary.dark",
          }}
        >
          <Avatar
            sx={{
              width: "140px",
              height: "140px",
            }}
            src="src\img\fotocv2.jpeg"
            alt="algo"
          />
          <Stack>
            <Typography
              color={"primary.light"}
              fontWeight={"700"}
              fontSize="34px"
            >
              Francisco Rey
            </Typography>
            <Typography
              color={"terciary.light"}
              fontWeight={"700"}
              fontSize="34px"
            >
              Front End Developer
            </Typography>
          </Stack>
        </Card>
      </motion.div>
    </Stack>
  );
};

export default CardResponsive;
