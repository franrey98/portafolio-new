import { Stack, Button, Box, AppBar } from "@mui/material";
import { Link } from "react-scroll";
import { Fragment } from "react";
import DrawerMenu from "../components/DrawerMenu";
import { useTranslation } from "react-i18next";
import Language from "../components/Language";

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
  const [t, i18n] = useTranslation("global");
  return (
    <div id="navbar">
      <AppBar color="default">
        <Stack
          mt={3}
          maxWidth={"1000px"}
          margin="0 auto"
          flexDirection="row"
          gap={{ xs: "2rem", md: "15rem" }}
          padding="7px"
        >
          <Stack
            direction={"row"}
            gap={{ xs: "2rem", md: "6rem" }}
            alignItems="center"
          >
            <Language />
            <Link
              style={buttonStyle}
              smooth={true}
              offset={50}
              duration={500}
              to="navbar"
            >
              {t("navbar.portafolio")}
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
              {t("navbar.about")}
            </Link>
            <Link
              style={buttonStyle}
              smooth={true}
              offset={50}
              duration={500}
              to="technology"
            >
              {t("navbar.technologies")}
            </Link>
            <Link
              style={buttonStyle}
              smooth={true}
              offset={50}
              duration={500}
              to="projects"
            >
              {t("navbar.projects")}
            </Link>
            <Link
              style={buttonStyle}
              smooth={true}
              offset={50}
              duration={500}
              to="contact"
            >
              {t("navbar.contact")}
            </Link>
          </Stack>
        </Stack>
      </AppBar>
    </div>
  );
};

export default Navbar;
