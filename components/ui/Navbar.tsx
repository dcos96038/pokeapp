import {Stack, Typography, useTheme, Link as MuiLink, Button} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const theme = useTheme();

  return (
    <Stack
      alignItems="center"
      direction={"row"}
      justifyContent="space-between"
      padding={{xs: "0px 10px", md: "0px 100px"}}
      sx={{backgroundColor: theme.palette.background.paper}}
      width={"100%"}
    >
      <Stack alignItems={"center"} direction="row">
        <Image
          alt="pokemon"
          height={"50px"}
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          width={"50px"}
        />
        <Link passHref href="/">
          <MuiLink color="inherit" underline="none">
            <Typography color="white" variant={"h4"}>
              PokeAPP
            </Typography>
          </MuiLink>
        </Link>
      </Stack>
      <Link passHref href="/favoritos">
        <Button color="inherit" size="small" variant="outlined">
          <Typography color="white" variant={"h4"}>
            Favoritos
          </Typography>
        </Button>
      </Link>
    </Stack>
  );
};

export default Navbar;
