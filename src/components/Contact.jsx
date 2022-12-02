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
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [t, i18n] = useTranslation("global");
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
          {t("contact.cv")}
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
          {t("contact.title")}
        </Typography>
        <Stack gap="2rem" alignItems={"center"}>
          <Box>
            <Typography
              marginRight={{ xs: "0", md: "220px" }}
              marginLeft={{ xs: "0", md: "220px" }}
              textAlign="center"
              mt={"15px"}
            >
              {t("contact.text-main")}
            </Typography>
          </Box>
          <Form />
        </Stack>
      </Stack>
    </>
  );
};

export default Contact;
