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
      <Typography mt={2} lineHeight={1.8} textAlign="center" mr={6} ml={6}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga amet
        magnam ab cumque placeat mollitia pariatur corrupti tenetur minus
        aliquam expedita dolore suscipit, tempora error quis nihil laboriosam
        nisi asperiores. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Fuga amet magnam ab cumque placeat mollitia pariatur corrupti
        tenetur minus aliquam expedita dolore suscipit, tempora error quis nihil
        laboriosam nisi asperiores daddas asdsadasdasd dsad nisi asperiores.
      </Typography>
      <Typography
        textTransform={"uppercase"}
        fontWeight="700"
        fontSize={"24px"}
        textAlign="center"
        color="primary.dark"
        borderBottom={"2px solid red"}
        mt={4}
      >
        Datos
      </Typography>
      <Typography
        textTransform={"uppercase"}
        fontWeight="700"
        fontSize={"24px"}
        textAlign="center"
        color="primary.dark"
        borderBottom={"2px solid red"}
        mt={4}
      >
        Etc
      </Typography>
    </Stack>
  );
};

export default AboutUs;
