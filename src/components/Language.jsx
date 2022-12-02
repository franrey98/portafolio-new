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
    <div>
      <button
        onClick={openModal}
        style={{ fontSize: "30px", border: "none", cursor: "pointer" }}
      >
        <MdLanguage />
      </button>
      {modal && (
        <Stack>
          <Button
            sx={{ height: "5rem" }}
            onClick={() => i18n.changeLanguage("es")}
          >
            Cambiar a español
          </Button>
          <Button onClick={() => i18n.changeLanguage("en")}>
            Cambiar a ingles
          </Button>
        </Stack>
      )}
    </div>
  );
};

export default Language;
