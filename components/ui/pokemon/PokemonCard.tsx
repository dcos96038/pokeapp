import {
  Card,
  CardActionArea,
  CardActions,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {BsShare, BsHeartFill} from "react-icons/bs";

import {Pokemon} from "../../../interfaces/pokemon-list";
import {pokemonsExistsOnFavourites, toggleFavourites} from "../../../utils/localStorage";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<Props> = ({pokemon}) => {
  const router = useRouter();
  const [isInFavourites, setIsInFavourites] = useState(pokemonsExistsOnFavourites(pokemon.id));
  const [color, setColor] = useState("white");

  useEffect(() => {
    setColor("red");
  }, []);

  const onToggleFavourite = () => {
    toggleFavourites(pokemon.id);
    setIsInFavourites(!isInFavourites);
  };

  const onClick = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  return (
    <Grid item lg={2} md={3} xs={6}>
      <Card variant="outlined">
        <CardActionArea onClick={onClick}>
          <CardHeader
            sx={{textAlign: "center"}}
            title={<Typography variant={"h3"}>{pokemon.name.toUpperCase()}</Typography>}
          />
          <CardMedia
            alt={pokemon.name}
            component="img"
            image={pokemon.img}
            sx={{paddingBottom: "15px"}}
          />
        </CardActionArea>
        <CardActions disableSpacing sx={{justifyContent: "space-between"}}>
          <IconButton onClick={onToggleFavourite}>
            <BsHeartFill fill={isInFavourites ? color : "white"} />
          </IconButton>
          <IconButton>
            <BsShare />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default PokemonCard;
