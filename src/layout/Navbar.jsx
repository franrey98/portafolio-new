import { Stack, Button, Box, AppBar } from "@mui/material";
import { Link } from "react-scroll";
import { Fragment } from "react";
import DrawerMenu from "../components/DrawerMenu";

const buttonStyle = {
  fontSize: "22px",
  fontWeight: "400",
  textAlign: "center",
  textTransform: "uppercase",
  color: "black",
  cursor: "pointer",
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
    <div id="navbar">
      <AppBar color="default">
        <Stack
          mt={2}
          maxWidth={"1000px"}
          margin="0 auto"
          flexDirection="row"
          gap={{ xs: "2rem", md: "15rem" }}
          padding="7px"
        >
          <Stack direction={"row"} gap={"6rem"} alignItems="center">
            <Link
              style={buttonStyle}
              smooth={true}
              offset={50}
              duration={500}
              to="navbar"
            >
              Portafolio
            </Link>
            <DrawerMenu />
          </Stack>
          <Stack
            display={{ xs: "none", md: "flex" }}
            flexDirection={{ md: "row" }}
            gap="2rem"
          >
            <Link
              style={buttonStyle}
              smooth={true}
              offset={50}
              duration={500}
              to="aboutus"
            >
              Sobre Mi
            </Link>
            <Link
              style={buttonStyle}
              smooth={true}
              offset={50}
              duration={500}
              to="technology"
            >
              Tecnologias
            </Link>
            <Link
              style={buttonStyle}
              smooth={true}
              offset={50}
              duration={500}
              to="projects"
            >
              Proyectos
            </Link>
            <Link
              style={buttonStyle}
              smooth={true}
              offset={50}
              duration={500}
              to="contact"
            >
              Contacto
            </Link>
          </Stack>
        </Stack>
      </AppBar>
    </div>
  );
};

export default Navbar;
