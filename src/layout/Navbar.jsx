import React from "react";
import { Stack, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const buttonStyle = {
  fontSize: "22px",
  fontWeight: "400",
  textAlign: "center",
  textTransform: "uppercase",
  color: "black",
  "&:hover": {
    color: "primary.main",
    backgroundColor: "transparent",
    transition: "none",
  },
  "&:focus": {
    color: "primary.main",
    backgroundColor: "transparent",
  },
};

const Navbar = () => {
  return (
    <Stack
      mt={2}
      maxWidth={"1000px"}
      margin="0 auto"
      flexDirection="row"
      gap={{ xs: "2rem", md: "15rem" }}
    >
      <Box>
        <Button component={Link} to="/" sx={buttonStyle} disableRipple>
          Portafolio
        </Button>
      </Box>
      <Box>
        <Button component={Link} to="/aboutUs" sx={buttonStyle} disableRipple>
          Sobre Mi
        </Button>
        <Button
          component={Link}
          to="/technology"
          sx={buttonStyle}
          disableRipple
        >
          Tecnologias
        </Button>
        <Button component={Link} to="/projects" sx={buttonStyle} disableRipple>
          Proyectos
        </Button>
        <Button component={Link} to="/contact" sx={buttonStyle} disableRipple>
          Contacto
        </Button>
      </Box>
    </Stack>
  );
};

export default Navbar;
