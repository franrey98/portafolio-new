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
    </Stack>
  );
};

export default AboutUs;
