import pokeApi from "../api/pokeApi";
import {SinglePokemon} from "../interfaces/pokemon";

export const getPokemonInfo = async (input: string) => {
  try {
    const {data} = await pokeApi.get<SinglePokemon>(`/pokemon/${input}`);

    return {
      name: data.name,
      id: data.id,
      sprites: data.sprites,
      abilities: data.abilities,
      weight: data.weight,
      height: data.height,
    };
  } catch (error) {
    return null;
  }
};
