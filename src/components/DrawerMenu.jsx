import {
  Stack,
  IconButton,
  Drawer,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@mui/material";
import {
  MdOutlineMenu,
  MdBackHand,
  MdOutlineContacts,
  MdWork,
  MdOutlineCode,
} from "react-icons/md";

import { GrContact, GrFormClose } from "react-icons/gr";
import React, { useState } from "react";
import { Link } from "react-scroll";

const buttonStyle = {
  fontSize: "20px",
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

const DrawerMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack display={{ xs: "flex", md: "none" }}>
      <IconButton onClick={() => setOpen(true)}>
        <MdOutlineMenu fontSize="40px" />
      </IconButton>
      <Drawer
        variant="temporary"
        open={open}
        anchor={"left"}
        onClose={() => setOpen(false)}
      >
        <Stack width="250px" gap="1rem">
          <Stack direction="row" height="50px" justifyContent="flex-end">
            <IconButton onClick={() => setOpen(false)}>
              <GrFormClose fontSize="40px" />
            </IconButton>
          </Stack>
          <ListItem button onClick={() => setOpen(false)}>
            <ListItemIcon
              sx={{ gap: "2rem", fontSize: "2rem", alignItems: "center" }}
            >
              <MdBackHand />
              <Link
                style={buttonStyle}
                smooth={true}
                offset={50}
                duration={500}
                to="aboutus"
              >
                Sobre Mi
              </Link>
            </ListItemIcon>
          </ListItem>
          <ListItem button onClick={() => setOpen(false)} to="/">
            <ListItemIcon
              sx={{ gap: "2rem", fontSize: "2rem", alignItems: "center" }}
            >
              <MdOutlineCode />
              <Link
                style={buttonStyle}
                smooth={true}
                offset={50}
                duration={500}
                to="technology"
              >
                Tecnologias
              </Link>
            </ListItemIcon>
          </ListItem>
          <ListItem button onClick={() => setOpen(false)} to="/">
            <ListItemIcon
              sx={{ gap: "2rem", fontSize: "2rem", alignItems: "center" }}
            >
              <MdWork />
              <Link
                style={buttonStyle}
                smooth={true}
                offset={50}
                duration={500}
                to="projects"
              >
                Proyectos
              </Link>
            </ListItemIcon>
          </ListItem>
          <ListItem button onClick={() => setOpen(false)} to="/">
            <ListItemIcon
              sx={{ gap: "2rem", fontSize: "2rem", alignItems: "center" }}
            >
              <MdOutlineContacts />
              <Link
                style={buttonStyle}
                smooth={true}
                offset={50}
                duration={500}
                to="contact"
              >
                Contacto
              </Link>
            </ListItemIcon>
          </ListItem>
        </Stack>
      </Drawer>
    </Stack>
  );
};

export default DrawerMenu;
