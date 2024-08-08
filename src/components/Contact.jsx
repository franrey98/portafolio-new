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
import Loading from "./Loading";

const Contact = () => {
  const [viewCV, setViewCV] = useState(false);
  const [loading, setLoading] = useState(false);
  const [t, i18n] = useTranslation("global");

  const handleViewCV = () => {
    setLoading(true);
    setViewCV(!viewCV);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

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
          onClick={handleViewCV}
        >
          {t("contact.cv")}
        </Button>
      </Stack>
      <Stack>
        {loading ? (
          <Loading />
        ) : (
          viewCV && (
            <iframe
              src="https://onedrive.live.com/embed?resid=38E2E5E104DF5E08%21303&authkey=!AFOMau_n93AApcY&em=2"
              width="100%"
              height="1000rem"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          )
        )}
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
