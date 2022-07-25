import {GetStaticPaths, GetStaticProps} from "next";

import Layout from "../../components/layouts/Layout";
import PokemonView from "../../components/ui/pokemon/PokemonView";
import {SinglePokemon} from "../../interfaces/pokemon";
import {getPokemonInfo} from "../../utils/getPokemonInfo";

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
    // fallback: false,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {id} = params as {id: string};

  const pokemon = await getPokemonInfo(id);

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

export default PokemonPage;
