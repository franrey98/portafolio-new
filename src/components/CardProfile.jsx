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

const CardProfile = () => {
  return (
    <Stack direction={"row"} justifyContent="space-between">
      <motion.div
        whileHover={{ scale: [null, 1.1, 1.1] }}
        transition={{ duration: 0.3 }}
      >
        <Card
          sx={{
            padding: "9px",
            width: "25rem",
            height: "12rem",
            display: "flex",
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
          </Stack>
        </Card>
      </motion.div>
      <motion.div
        whileHover={{ scale: [null, 1.1, 1.1] }}
        transition={{ duration: 0.3 }}
      >
        <Card
          sx={{
            padding: "9px",
            width: "25rem",
            height: "12rem",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            border: "2px solid",
            borderColor: "terciary.main",
          }}
        >
          <Stack>
            <Typography
              color={"terciary.dark"}
              fontWeight={"700"}
              fontSize="34px"
            >
              Desarrollador Frontend
            </Typography>
            <Typography
              color={"terciary.dark"}
              fontWeight={"400"}
              fontSize="30px"
            >
              Web developer
            </Typography>
          </Stack>
        </Card>
      </motion.div>
    </Stack>
  );
};

export default CardProfile;
