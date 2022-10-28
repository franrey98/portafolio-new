import React from "react";
import { Stack, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <Stack mt={6}>
      <Typography
        textTransform={"uppercase"}
        fontWeight="700"
        fontSize={"24px"}
        textAlign="center"
        color="primary.dark"
      >
        Sobre Mi
      </Typography>
      <Typography
        mt={2}
        lineHeight={1.8}
        textAlign="center"
        mr={{ xs: "0px", md: "190px" }}
        ml={{ xs: "0px", md: "190px" }}
      >
        Soy un desarrollador Front End, que arranco en febrero de 2021 como
        autodidacta. Probando distintos cursos, descubrí que esto era lo que me
        gustaba. Me encantó el desarrollo web así que me propuse seguir
        estudiándolo. En este tiempo de estudio, logre aprender HTML, CSS,
        JavaScript, Node, React y en herramientas como Git y GitHub para el
        control de versiones. Actualmente, me encuentro en búsqueda laboral,
        tengo un gran interés de mostrar las capacidades adquiridas en los
        distintos cursos que realice, y en los diversos trabajos grupales que
        concrete.
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
        Datos de interes
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
            ¿Años?
          </Typography>
          <Typography
            fontWeight={"700"}
            fontSize="22px"
            color="primary.dark"
            textAlign={"center"}
          >
            23
          </Typography>
        </Stack>
        <Stack>
          <Typography
            fontWeight={"700"}
            fontSize="22px"
            color="primary.dark"
            textAlign={"center"}
          >
            ¿Lugar de Nacimiento y Residencia actual?
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
            ¿Disponibilidad Horaria?
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
        Educación y Experiencias
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
            Coderhouse
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
