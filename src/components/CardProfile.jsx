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
    <Stack direction={"row"} justifyContent="space-between">
      <Card
        sx={{
          padding: "9px",
          width: "25rem",
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
            fontSize="26px"
          >
            Desarrollador Frontend
          </Typography>
          <Typography
            color={"terciary.dark"}
            fontWeight={"400"}
            fontSize="24px"
          >
            Web developer
          </Typography>
        </Stack>
      </Card>
      <Card
        sx={{
          padding: "9px",
          width: "25rem",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          border: "2px solid",
          borderColor: "primary.dark",
        }}
      >
        <Avatar
          sx={{
            width: "100px",
            height: "100px",
          }}
          src="src\img\fotocv2.jpeg"
          alt="algo"
        />
        <Stack>
          <Typography
            color={"secondary.main"}
            fontWeight={"700"}
            fontSize="26px"
          >
            Francisco Rey
          </Typography>
        </Stack>
      </Card>
    </Stack>
  );
};

export default CardProfile;
