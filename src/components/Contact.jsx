import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <Stack>
      <Typography
        textTransform={"uppercase"}
        fontWeight="700"
        fontSize={"24px"}
        mt={6}
        textAlign={"center"}
        color="primary.dark"
      >
        Contacto
      </Typography>
      <Stack direction={"row"} gap="2rem" alignItems={"center"}>
        <Form />
        <Box>
          <Typography>
            Si estas aqui eso es genial! y si quieres colaborar en la creación
            de una experiencia increíble para las personas, ponte en contacto
            conmigo. paulasaguz@hotmail.com (+52) 4731395791
          </Typography>
          <Typography>
            Si estas aqui eso es genial! y si quieres colaborar en la creación
            de una experiencia increíble para las personas, ponte en contacto
            conmigo. paulasaguz@hotmail.com (+52) 4731395791
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Contact;
