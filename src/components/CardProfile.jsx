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

const CardProfile = () => {
  return (
    <Card
      sx={{
        padding: "1.3rem",
        width: "35rem",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        border: "2px solid",
        borderColor: "primary.main",
      }}
    >
      <Avatar
        sx={{
          width: "90px",
          height: "90px",
        }}
        src="src\img\main-img.jpg"
        alt="algo"
      />
      <Stack>
        <Typography fontWeight={"700"} fontSize="28px">
          Desarrollador Frontend
        </Typography>
        <Typography color={"primary.main"} fontWeight={"400"} fontSize="28px">
          Web developer
        </Typography>
      </Stack>
    </Card>
  );
};

export default CardProfile;
