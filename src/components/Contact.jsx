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
    <>
      <Stack
        id="contact"
        color={"primary.dark"}
        borderBottom={"3px solid"}
        direction={"row"}
        justifyContent={"space-between"}
        mt={"10rem"}
      >
        <Typography
          textTransform={"uppercase"}
          fontWeight="700"
          fontSize={"24px"}
        >
          Curriculum PDF
        </Typography>
        <Button
          sx={{
            backgroundColor: "primary.dark",
            borderRadius: "0",
            color: "white",
          }}
          variant="contained"
          href="https://onedrive.live.com/?cid=38E2E5E104DF5E08&id=38E2E5E104DF5E08%21109&parId=root&o=OneUp"
        >
          Ver
        </Button>
      </Stack>
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
        <Stack gap="2rem" alignItems={"center"}>
          <Box>
            <Typography
              marginRight={{ xs: "0", md: "220px" }}
              marginLeft={{ xs: "0", md: "220px" }}
              textAlign="center"
              mt={"15px"}
            >
              Si llegaste a esta seccion y estas interesado en contactarte
              conmigo, te dejare mi email de contacto:
              reyfrancisco98@hotmail.com y mi numero telefonico:
              (+15)2216127834. Tambien podes comunicarte conmigo a traves del
              siguiente formulario:
            </Typography>
          </Box>
          <Form />
        </Stack>
      </Stack>
    </>
  );
};

export default Contact;
