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
    <Stack>
      <FormControl sx={{ width: "30rem", height: "5rem" }}>
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
        <Button variant="outlined" sx={{ marginTop: "20px" }}>
          Enviar Mensaje
        </Button>
      </FormControl>
    </Stack>
  );
};

export default Form;
