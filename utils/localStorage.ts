const toggleFavourites = (id: number) => {
  let favourites: number[] = JSON.parse(localStorage.getItem("favourites") || "[]");

  if (favourites.includes(id)) {
    favourites = favourites.filter((poke) => poke !== id);
  } else {
    favourites.push(id);
  }

  localStorage.setItem("favourites", JSON.stringify(favourites));
};

const pokemonsExistsOnFavourites = (id: number): boolean => {
  if (typeof window === "undefined") return false;

  const favourites: number[] = JSON.parse(localStorage.getItem("favourites") || "[]");

  return favourites.includes(id);
};

const favouritesPokemons = (): number[] => {
  return JSON.parse(localStorage.getItem("favourites") || "[]");
};

export {toggleFavourites, pokemonsExistsOnFavourites, favouritesPokemons};
