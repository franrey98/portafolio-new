import React from "react";
import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <Stack id="aboutus" mt={6}>
      <Typography
        textTransform={"uppercase"}
        fontWeight="700"
        fontSize={"24px"}
        textAlign="center"
        color="primary.dark"
      >
        {t("about-me.title")}
      </Typography>
      <Typography
        mt={2}
        lineHeight={1.8}
        textAlign="center"
        mr={{ xs: "0px", md: "190px" }}
        ml={{ xs: "0px", md: "190px" }}
      >
        {t("about-me.description")}
      </Typography>
      <Typography
        textTransform={"uppercase"}
        fontWeight="700"
        fontSize={"24px"}
        color="primary.dark"
        borderBottom={"2px solid"}
        borderColor="primary.main"
        mt={8}
      >
        {t("data-interest.title")}
      </Typography>
      <Stack
        direction={"row"}
        gap={{ xs: "0", md: "2rem" }}
        justifyContent={"space-between"}
        mt="2rem"
      >
        <Stack>
          <Typography
            fontWeight={"700"}
            fontSize="22px"
            color="primary.dark"
            textAlign={"center"}
          >
            {t("data-interest.years")}
          </Typography>
          <Typography
            fontWeight={"700"}
            fontSize="22px"
            color="primary.dark"
            textAlign={"center"}
          >
            25
          </Typography>
        </Stack>
        <Stack>
          <Typography
            fontWeight={"700"}
            fontSize="22px"
            color="primary.dark"
            textAlign={"center"}
          >
            {t("data-interest.current-residence")}
          </Typography>
          <Typography
            fontWeight={"700"}
            fontSize="22px"
            color="primary.dark"
            textAlign={"center"}
          >
            La Plata, Argentina
          </Typography>
        </Stack>
        <Stack>
          <Typography
            textAlign={"center"}
            fontWeight={"700"}
            fontSize="22px"
            color="primary.dark"
          >
            {t("data-interest.availability")}
          </Typography>
          <Typography
            fontWeight={"700"}
            fontSize="22px"
            color="primary.dark"
            textAlign={"center"}
          >
            Full-Time
          </Typography>
        </Stack>
      </Stack>
      <Typography
        textTransform={"uppercase"}
        fontWeight="700"
        fontSize={"24px"}
        color="primary.dark"
        borderBottom={"2px solid"}
        mt={8}
      >
        {t("education.experience")}
      </Typography>
      <Stack
        direction={"row"}
        gap="2rem"
        justifyContent={"space-between"}
        mt="2rem"
        mb="4rem"
      >
        <Stack>
          <Typography fontWeight={"700"} fontSize="22px" color="primary.dark">
            Udemy
          </Typography>
        </Stack>
        <Stack>
          <Typography fontWeight={"700"} fontSize="22px" color="primary.dark">
            Fansbury
          </Typography>
        </Stack>
        <Stack>
          <Typography fontWeight={"700"} fontSize="22px" color="primary.dark">
            No Country
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AboutUs;
