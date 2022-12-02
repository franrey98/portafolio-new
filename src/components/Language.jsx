import React, { useState } from "react";
import { MdLanguage } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Button, Stack } from "@mui/material";

const Language = () => {
  const [t, i18n] = useTranslation("global");
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  return (
    <Stack alignItems="center">
      <button
        onClick={openModal}
        style={{ fontSize: "30px", border: "none", cursor: "pointer" }}
      >
        <MdLanguage />
      </button>
      {modal && (
        <Stack
          position="absolute"
          mt="2rem"
          backgroundColor="#750370"
          sx={{ borderRadius: "5px" }}
        >
          <Button
            sx={{ height: "2.3rem", color: "white" }}
            onClick={() => i18n.changeLanguage("es")}
          >
            {t("language.spanish")}
          </Button>
          <Button
            sx={{ height: "2.3rem", color: "white" }}
            onClick={() => i18n.changeLanguage("en")}
          >
            {t("language.english")}
          </Button>
        </Stack>
      )}
    </Stack>
  );
};

export default Language;
