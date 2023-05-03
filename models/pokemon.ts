// import { useQuery } from "@tanstack/react-query";

import PokeAPI from "pokedex-promise-v2";
import { useEffect, useState } from "react";

export function usePokemon(id: string) {
  const [pokemon, setPokemon] = useState<PokeAPI.Pokemon>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setPokemon(data);
    };
    fetchPokemon();
    setIsLoading(false);
  }, [id]);

  return { pokemon, isLoading } as const;
}
