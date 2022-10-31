import React from "react";
import {
  Stack,
  Typography,
  CardActionArea,
  CardContent,
  CardMedia,
  Card,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
const CardImg = ({ imgTech }) => {
  return (
    <motion.div
      whileHover={{ scale: [null, 1.3, 1.3] }}
      transition={{ duration: 0.5 }}
    >
      {/* <Card sx={{ maxWidth: 130, height: 140, backgroundColor: "black" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={imgTech.img}
            sx={{ objectFit: "contain" }}
            alt="img tech"
          />
        </CardActionArea>
      </Card> */}
      <Box>
        <img
          src={imgTech.img}
          style={{ maxWidth: "6rem", height: "6rem", objectFit: "contain" }}
          alt="img"
        />
      </Box>
    </motion.div>
  );
};

export default CardImg;
