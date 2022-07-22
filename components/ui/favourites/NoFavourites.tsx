import {Stack, Typography} from "@mui/material";
import Image from "next/image";
import React from "react";

const NoFavourites = () => (
  <Stack alignItems={"center"} height={"80vh"} justifyContent={"center"} width={"100%"}>
    <Typography variant={"h5"}>No hay favoritos</Typography>
    <Image
      alt="gastly"
      height="200px"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png"
      style={{opacity: "0.2"}}
      width="200px"
    />
  </Stack>
);

export default NoFavourites;
