import { pokemonResponse } from "@/types/pokemon-response";
import { PokemonSchema } from "@/types/schema/pokemon-form-schema";
import { Grid } from "@mui/material";
import Image from "next/image.js";

type Props = {
  pokemonImageData: pokemonResponse;
  sprite: PokemonSchema["sprite"];
};

const PokemonImage = (props: Props) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        {props.pokemonImageData ? (
          <>
            <p>選択した図鑑番号のポケモン</p>
            <Image
              src={props.pokemonImageData.sprites[props.sprite]}
              alt="ポケモン"
              width={200}
              height={200}
            />
          </>
        ) : (
          <p>画像が見つかりません</p>
        )}
      </Grid>
    </Grid>
  );
};

export default PokemonImage;
