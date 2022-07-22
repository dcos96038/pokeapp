import {Grid} from "@mui/material";
import {GetStaticProps} from "next";

import pokeApi from "../api/pokeApi";
import Layout from "../components/layouts/Layout";
import PokemonCard from "../components/ui/pokemon/PokemonCard";
import {PokeListResponse, Pokemon} from "../interfaces/pokemon-list";

interface Props {
  pokemons: Pokemon[];
}

const Home: React.FC<Props> = ({pokemons}) => {
  return (
    <Layout title="Listado de Pokemons">
      <Grid container spacing={3}>
        {pokemons.map((poke) => {
          return <PokemonCard key={poke.id} pokemon={poke} />;
        })}
      </Grid>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const {data} = await pokeApi.get<PokeListResponse>("/pokemon?limit=200");

  const pokemons: Pokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
      i + 1
    }.png`,
    avatar: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
