import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Badge from "../Badge";
import Image from "next/image";
import Link from "next/link";
import routes from "@component/utils/routes";
import Divider from "../Divider";
import { capitalized } from "@component/utils/utils";
const cleanPokemonsData = require("../../tools/cleanPokemonsData.json");

export type Pokemon = {
  abilities: string[];
  moves: string[];
  types: PokemonType[];
  stats: {
    statName: string;
    baseStat: number;
  }[];
  baseExperience: number;
  id: number;
  isDefault: boolean;
  name: string;
  pictureUrl: string;
};

export enum PokemonType {
  Grass = "grass",
  Poison = "poison",
  Fire = "fire",
  Water = "water",
  Bug = "bug",
  Normal = "normal",
  Flying = "flying",
  Electric = "electric",
  Ground = "ground",
  Psychic = "psychic",
  Fighting = "fighting",
  Steel = "steel",
  Rock = "rock",
  Fairy = "fairy",
  Ice = "ice",
  Ghost = "ghost",
}

const pokemons = cleanPokemonsData.filter(
  (pokemon: Pokemon) => pokemon.isDefault === true
) as Pokemon[];

export default function Cards() {
  return (
    <div className="flex flex-wrap justify-center align-middle">
      {pokemons.map((pokemon: Pokemon) => (
        <Link key={pokemon.id} href={routes.pokemon.link(pokemon.id)}>
          <Card pokemon={pokemon} />
        </Link>
      ))}
    </div>
  );
}
function Card({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="relative col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-slate-200 text-center shadow m-2 h-60">
      <div className="h-40 px-8 mt-8 flex">
        <Badge className="top-3 left-3 absolute">#{pokemon.id}</Badge>
        <Image
          className="mx-auto flex-shrink-0 object-contain max-h-32"
          src={pokemon.pictureUrl}
          alt="pokemon image"
          width={120}
          height={120}
        />
      </div>

      <div className="absolute bottom-1 -mt-px flex divide-x divide-gray-200 ">
        <div className="flex w-0 flex-1 py-2 ">
          <div className="w-0 rounded-bl-lg border border-transparent text-sm font-semibold text-gray-700 pl-3">
            {capitalized(pokemon.name)}
            <div className="flex mt-2">
              {pokemon.types.map((type) => (
                <Badge type={type} key={type} className="mr-1">
                  {type}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
