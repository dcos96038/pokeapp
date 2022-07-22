import {Grid, Card, CardActionArea, CardMedia} from "@mui/material";
import {useRouter} from "next/router";
import React from "react";

interface Props {
  favourites: number[];
}

const FavouritePokemonCard: React.FC<Props> = ({favourites}) => {
  const router = useRouter();

  const onClick = (id: number) => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid container alignItems={"stretch"} display={"flex"} justifyContent={"center"} spacing={3}>
      {favourites.map((id) => {
        return (
          <Grid key={id} item lg={2} md={3} xs={6}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
              }}
              variant="outlined"
            >
              <CardActionArea sx={{flex: "1"}} onClick={() => onClick(id)}>
                <CardMedia
                  alt={`Pokemon de ID: ${id}`}
                  component="img"
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                  sx={{paddingBottom: "15px"}}
                />
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default FavouritePokemonCard;
