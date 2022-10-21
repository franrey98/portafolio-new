import React from "react";
import { Link, Stack, Typography } from "@mui/material";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <Stack width="100%" sx={{ pt: "85px" }}>
      <Stack
        width="100%"
        height="130px"
        sx={{ backgroundColor: "primary.main" }}
        py="10px"
        px="40px"
        justifyContent="center"
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          height="100%"
          sx={{ borderTop: "3px solid #FFF" }}
        >
          <Typography
            fontSize="16px"
            fontWeight="light"
            color="white"
            alignSelf="center"
          >
            © 2022 All Rights Reserved
          </Typography>

          <Stack
            direction="row"
            gap="15px"
            justifyContent="flex-end"
            alignSelf="center"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/"
            >
              <BsGithub fontSize="30px" color="white" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.twiter.com/">
              <BsLinkedin fontSize="30px" color="white" />
            </a>
          </Stack>
        </Stack>
        <Link
          href="#"
          target="_blank"
          sx={{
            fontSize: "12px",
            color: "white",
            margin: "auto",
            opacity: "50%",
          }}
        >
          Repository on GitHub
        </Link>
      </Stack>
    </Stack>
  );
};

export default Footer;
