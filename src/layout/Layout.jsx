import { Stack } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Stack spacing="0" width="100%" height="100vh">
      <Navbar />
      <Stack
        alignItems="center"
        justifyContent="space-between"
        spacing="0"
        width="100%"
        height="100vh"
      >
        {children}
        <Footer />
      </Stack>
    </Stack>
  );
};

export default Layout;
