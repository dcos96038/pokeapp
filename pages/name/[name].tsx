import {GetStaticPaths, GetStaticProps} from "next";
import React from "react";

import pokeApi from "../../api/pokeApi";
import Layout from "../../components/layouts/Layout";
import PokemonView from "../../components/ui/pokemon/PokemonView";
import {SinglePokemon} from "../../interfaces/pokemon";
import {PokeListResponse} from "../../interfaces/pokemon-list";
import {getPokemonInfo} from "../../utils/getPokemonInfo";

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

  const pokemon = await getPokemonInfo(name);

  if (!pokemon) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      pokemon,
      revalidate: 86400,
    },
  };
};

export default PokemonByName;
