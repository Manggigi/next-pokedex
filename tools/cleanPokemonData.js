const fs = require("fs");
const pokemons = require("./pokemons.json");

const cleanPokemonData = (pokemons) => {
  const cleanData = pokemons
    .map((pokemon) => {
      const {
        abilities,
        moves,
        types,
        stats,
        base_experience,
        id,
        is_default,
        name,
        sprites,
      } = pokemon || {};
      return {
        abilities: abilities.map((a) => a.ability),
        moves: moves.map((m) => m.move.name),
        types: types.map((t) => t.type.name),
        stats: stats.map((s) => ({
          statName: s.stat.name,
          baseStat: s.base_stat,
        })),
        baseExperience: base_experience,
        id,
        isDefault: is_default,
        name,
        pictureUrl: sprites.other.dream_world.front_default,
      };
    })
    .filter(Boolean);

  const jsonString = JSON.stringify(cleanData);

  fs.writeFile("cleanPokemonsData.json", jsonString, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Data written to file");
  });
};

cleanPokemonData(pokemons);
