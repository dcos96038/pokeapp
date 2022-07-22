import {GetStaticPaths, GetStaticProps} from "next";

import pokeApi from "../../api/pokeApi";
import Layout from "../../components/layouts/Layout";
import PokemonView from "../../components/ui/pokemon/PokemonView";
import {SinglePokemon} from "../../interfaces/pokemon";

interface Props {
  pokemon: SinglePokemon;
}

const PokemonPage: React.FC<Props> = ({pokemon}) => {
  return (
    <Layout title={`Poke APP - ${pokemon.name}`}>
      <PokemonView pokemon={pokemon} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pokemon200 = [...Array(200)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemon200.map((id) => ({
      params: {id},
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {id} = params as {id: string};

  const {data} = await pokeApi.get<SinglePokemon>(`/pokemon/${id}`);

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

export default PokemonPage;
