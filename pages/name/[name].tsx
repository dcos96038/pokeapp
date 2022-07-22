import {GetStaticPaths, GetStaticProps} from "next";
import React from "react";

import pokeApi from "../../api/pokeApi";
import Layout from "../../components/layouts/Layout";
import PokemonView from "../../components/ui/pokemon/PokemonView";
import {SinglePokemon} from "../../interfaces/pokemon";
import {PokeListResponse} from "../../interfaces/pokemon-list";

interface Props {
  pokemon: SinglePokemon;
}

const PokemonByName: React.FC<Props> = ({pokemon}) => {
  return (
    <Layout title={`Poke APP - ${pokemon.name}`}>
      <PokemonView pokemon={pokemon} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const {data} = await pokeApi.get<PokeListResponse>(`/pokemon?limit=200`);

  return {
    paths: data.results.map(({name}) => ({
      params: {name},
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {name} = params as {name: string};

  const {data} = await pokeApi.get<SinglePokemon>(`/pokemon/${name}`);

  return {
    props: {
      pokemon: {
        name: data.name,
        id: data.id,
        sprites: data.sprites,
        abilities: data.abilities,
        weight: data.weight,
        height: data.height,
      },
    },
  };
};

export default PokemonByName;
