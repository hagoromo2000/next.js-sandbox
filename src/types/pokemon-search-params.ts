import {
  createSearchParamsCache,
  parseAsInteger,
  parseAsStringEnum,
} from "nuqs/server";

export const pokemonSearchParamsCache = createSearchParamsCache({
  id: parseAsInteger.withDefault(1),
  sprite: parseAsStringEnum([
    "front_default",
    "back_default",
    "front_shiny",
    "back_shiny",
  ]).withDefault("front_default"),
});
