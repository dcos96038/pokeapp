import {useEffect, useState} from "react";

import Layout from "../../components/layouts/Layout";
import NoFavourites from "../../components/ui/favourites/NoFavourites";
import {favouritesPokemons} from "../../utils/localStorage";
import FavouritePokemonCard from "../../components/ui/favourites/FavouritePokemonCard";

const Favoritos = () => {
  const [favourites, setFavourites] = useState<number[]>([]);

  useEffect(() => {
    setFavourites(favouritesPokemons());
  }, []);

  return (
    <Layout title="Pokemons favoritos">
      {favourites.length === 0 ? (
        <NoFavourites />
      ) : (
        <FavouritePokemonCard favourites={favourites} />
      )}
    </Layout>
  );
};

export default Favoritos;
