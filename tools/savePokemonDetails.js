const axios = require("axios");
const fs = require("fs");

const main = async () => {
  const pokemonData = await Promise.all(
    Array.from({ length: 100 }, (_, index) =>
      axios.get(`https://pokeapi.co/api/v2/pokemon/${index + 1}`, {
        timeout: 15000,
      })
    )
  )
    .then((responses) => responses.map((response) => response.data))
    .catch((error) => console.error(error));

  const jsonString = JSON.stringify(pokemonData);

  fs.writeFile("pokemons.json", jsonString, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Data written to file");
  });
};

main();
