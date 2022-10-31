import {
  Stack,
  IconButton,
  Drawer,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@mui/material";
import { MdOutlineMenu, MdBackHand } from "react-icons/md";

import { GrContact, GrFormClose } from "react-icons/gr";
import React, { useState } from "react";

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
        <Stack width="250px">
          <Stack direction="row" height="50px" justifyContent="flex-end">
            <IconButton onClick={() => setOpen(false)}>
              <GrFormClose fontSize="40px" />
            </IconButton>
          </Stack>
          <ListItem button onClick={() => setOpen(false)} to="/">
            <ListItemIcon>
              <MdBackHand />
            </ListItemIcon>
            <ListItemText primary="Sobre Mi" />
          </ListItem>
          <ListItem button onClick={() => setOpen(false)} to="/">
            <ListItemIcon>
              <MdBackHand />
            </ListItemIcon>
            <ListItemText primary="Tecnologias" />
          </ListItem>
          <ListItem button onClick={() => setOpen(false)} to="/">
            <ListItemIcon>
              <MdBackHand />
            </ListItemIcon>
            <ListItemText primary="Proyectos" />
          </ListItem>
          <ListItem button onClick={() => setOpen(false)} to="/">
            <ListItemIcon>
              <MdBackHand />
            </ListItemIcon>
            <ListItemText primary="Contacto" />
          </ListItem>
        </Stack>
      </Drawer>
    </Stack>
  );
};

export default DrawerMenu;
