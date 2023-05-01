const routes = {
  home: "/",
  pokedex: "/pokedex",
  type: "/type",
  moves: "/moves",
  items: "/items",
  locations: "/locations",
  abilities: "/abilities",
  pokemon: { link: (pokemonId: number) => `/pokemon/${pokemonId}` },
  profile: {
    index: "/profile",
    user: {
      link: (userId: string) => `/profile/${userId}`,
      href: "/profile/[userLink]",
    },
  },
};

export default routes;
