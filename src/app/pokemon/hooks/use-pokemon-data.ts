import fetcher from "@/lib/fetcher";

export const usePokemonData = (params: URLSearchParams) => {
  const pokemonId = params.get("id");
  const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  const result = fetcher(endpoint);
  return result;
};
