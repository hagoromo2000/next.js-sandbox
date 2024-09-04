import { pokemonResponse } from "@/types/pokemon-response";
import { PokemonSchema } from "@/types/schema/pokemon-form-schema";
import { Box } from "@mui/material";
import Image from "next/image.js";
import { fetchPokemonData } from "../_utils/fetch-pokemon-data";

type Props = {
  id: PokemonSchema["id"];
  sprite: PokemonSchema["sprite"];
};

const PokemonImage = async (props: Props) => {
  const pokemonImageData: pokemonResponse = await fetchPokemonData(props.id);

  return (
    <Box>
      {pokemonImageData ? (
        <>
          <p>選択した図鑑番号のポケモン</p>
          <Image
            src={pokemonImageData.sprites[props.sprite]}
            alt="ポケモン"
            priority
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
