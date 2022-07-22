import {
  Box,
  Button,
  Collapse,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import {GiCrossedSwords} from "react-icons/gi";
import {AiOutlineRight, AiOutlineColumnHeight} from "react-icons/ai";
import {BsHeartFill} from "react-icons/bs";
import {GoDiffRenamed} from "react-icons/go";
import {MdExpandLess, MdExpandMore} from "react-icons/md";
import {FaBalanceScaleLeft} from "react-icons/fa";
import {useState} from "react";

import {SinglePokemon} from "../../../interfaces/pokemon";
import {pokemonsExistsOnFavourites, toggleFavourites} from "../../../utils/localStorage";

interface Props {
  pokemon: SinglePokemon;
}

const PokemonView: React.FC<Props> = ({pokemon}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInFavourites, setIsInFavourites] = useState(pokemonsExistsOnFavourites(pokemon.id));

  const collapse = () => {
    setIsOpen(!isOpen);
  };

  const onToggleFavourite = () => {
    toggleFavourites(pokemon.id);
    setIsInFavourites(pokemonsExistsOnFavourites(pokemon.id));
  };

  return (
    <Grid container alignItems={"stretch"} display={"flex"} justifyContent={"center"} spacing={2}>
      <Grid item alignItems={"center"} display={"flex"} justifyContent={"center"} md={4} xs={12}>
        <Box
          alignItems={"center"}
          border={"1px solid gray"}
          borderRadius="3px"
          display={"flex"}
          height="100%"
          justifyContent={"center"}
          sx={{backgroundColor: "rgba(0,0,0,0.5)"}}
          width={"100%"}
        >
          <Image
            alt={pokemon.name}
            height={"300px"}
            src={pokemon.sprites.other?.dream_world.front_default || "/no-image.png"}
            width={"300px"}
          />
        </Box>
      </Grid>
      <Grid item md={8} xs={12}>
        <Box
          border={"1px solid gray"}
          borderRadius="3px"
          height={"100%"}
          padding={{md: 3, xs: 2}}
          sx={{backgroundColor: "rgba(0,0,0,0.5)"}}
          width={"100%"}
        >
          <List disablePadding component="div" sx={{width: "100%"}}>
            <ListItem>
              <ListItemIcon sx={{justifyContent: "center"}}>
                <GoDiffRenamed />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant={"h3"}>NOMBRE: {pokemon.name.toUpperCase()} </Typography>
                }
              />
            </ListItem>
            <ListItemButton onClick={collapse}>
              <ListItemIcon sx={{justifyContent: "center"}}>
                <GiCrossedSwords />
              </ListItemIcon>
              <ListItemText
                primary={
                  <>
                    <Typography noWrap variant={"h3"}>
                      HABILIDADES {isOpen ? <MdExpandLess /> : <MdExpandMore />}
                    </Typography>
                  </>
                }
              />
            </ListItemButton>
            <Collapse unmountOnExit in={isOpen} timeout="auto">
              {pokemon.abilities.map((ab) => (
                <ListItem key={ab.ability.name} sx={{pl: 4}}>
                  <ListItemIcon sx={{justifyContent: "center"}}>
                    <AiOutlineRight />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant={"h3"}>{ab.ability.name}</Typography>
                  </ListItemText>
                </ListItem>
              ))}
            </Collapse>
            <ListItem>
              <ListItemIcon sx={{justifyContent: "center"}}>
                <AiOutlineColumnHeight />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant={"h3"}>ALTURA: {pokemon.height} </Typography>}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{justifyContent: "center"}}>
                <FaBalanceScaleLeft />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant={"h3"}>PESO: {pokemon.weight} </Typography>}
              />
            </ListItem>
            <Divider sx={{marginTop: "20px"}} />
            <ListItem sx={{display: "flex", justifyContent: "flex-end"}}>
              <Button color={"inherit"} variant={"outlined"} onClick={onToggleFavourite}>
                <ListItemIcon
                  sx={{justifyContent: "center", alignItems: "center", fontSize: "20px"}}
                >
                  <BsHeartFill fill={isInFavourites ? "red" : "white"} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    isInFavourites ? (
                      <Typography variant={"h3"}>Eliminar de Favoritos</Typography>
                    ) : (
                      <Typography variant={"h3"}>Guardar en Favoritos</Typography>
                    )
                  }
                />
              </Button>
            </ListItem>
          </List>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Stack
          border={"1px solid gray"}
          borderRadius="3px"
          padding={{md: 3}}
          sx={{backgroundColor: "rgba(0,0,0,0.5)"}}
        >
          <Typography textAlign="center" variant={"h5"}>
            SPRITES
          </Typography>
          <Stack direction="row" justifyContent={"space-evenly"}>
            <Image
              alt={`${pokemon.name} back sprite`}
              height={"100px"}
              src={pokemon.sprites.back_default}
              width={"100px"}
            />
            <Image
              alt={`${pokemon.name} front sprite`}
              height={"100px"}
              src={pokemon.sprites.front_default}
              width={"100px"}
            />
            <Image
              alt={`${pokemon.name} front shiny sprite`}
              height={"100px"}
              src={pokemon.sprites.front_shiny}
              width={"100px"}
            />
            <Image
              alt={`${pokemon.name} back shiny sprite`}
              height={"100px"}
              src={pokemon.sprites.back_shiny}
              width={"100px"}
            />
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default PokemonView;
