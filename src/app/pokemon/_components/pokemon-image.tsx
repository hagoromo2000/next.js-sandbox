import { pokemonResponse } from "@/types/pokemon-response";
import { PokemonSchema } from "@/types/schema/pokemon-form-schema";
import { Box } from "@mui/material";
import Image from "next/image.js";
import { fetchPokemonData } from "../_utils/fetch-pokemon-data";
import { pokemonSearchParamsCache } from "@/types/pokemon-search-params";

const PokemonImage = async () => {
  const id = pokemonSearchParamsCache.get("id");
  const sprite = pokemonSearchParamsCache.get("sprite");
  const pokemonImageData: pokemonResponse = await fetchPokemonData(id);

  return (
    <Box>
      {pokemonImageData ? (
        <>
          <p>選択した図鑑番号のポケモン</p>
          <Image
            src={pokemonImageData.sprites[sprite]}
            alt="ポケモン"
            width={200}
            height={200}
          />
        </>
      ) : (
        <p>画像が見つかりません</p>
      )}
    </Box>
  );
};

export default PokemonImage;
