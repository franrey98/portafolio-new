import React from "react";

import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const Form = () => {
  return (
    <Stack width={{ xs: "20rem", md: "30rem" }} maxWidth={{ xs: "100%" }}>
      <FormControl sx={{ height: "5rem" }}>
        <InputLabel htmlFor="">Nombre</InputLabel>
        <Input id="nombre" type="nombre" aria-describedby="nombre-helper" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="">Email</InputLabel>
        <Input id="email" type="email" aria-describedby="email-helper" />
      </FormControl>
      <FormControl>
        <TextField
          sx={{ marginTop: "40px", height: "5rem" }}
          placeholder="Mensaje"
          type="text-area"
          aria-describedby="msg-helper"
        />
        <Button variant="contained" sx={{ marginTop: "20px" }}>
          Enviar Mensaje
        </Button>
      </FormControl>
    </Stack>
  );
};

export default Form;
