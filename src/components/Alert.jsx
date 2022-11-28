import { Box, Typography } from "@mui/material";
import React from "react";

const Alert = ({ children }) => {
  return (
    <Typography
      textTransform={"uppercase"}
      fontWeight="700"
      fontSize={"20px"}
      textAlign="center"
      color={"secondary.light"}
    >
      {children}
    </Typography>
  );
};

export default Alert;
