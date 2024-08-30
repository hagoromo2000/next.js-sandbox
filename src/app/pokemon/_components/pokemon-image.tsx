import { pokemonResponse } from "@/types/pokemon-response";
import { PokemonSchema } from "@/types/schema/pokemon-form-schema";
import { Grid } from "@mui/material";
import Image from "next/image.js";
import { usePokemonData } from "../hooks/use-pokemon-data";

type Props = {
  id: string;
  sprite: PokemonSchema["sprite"];
};
const sleep = async (ms: number) => {
  return new Promise((res) => setTimeout(res, ms));
};

const PokemonImage = async (props: Props) => {
  console.log("ServerComponentを実行しています(sleepの前)");

  // データの取得をイメージ
  await sleep(3000);
  if (!props.id || !props.sprite) {
    return null;
  }
  const result: pokemonResponse = await usePokemonData(props.id);

  return (
    <Grid>
      <p>選択した図鑑番号のポケモン</p>
      <Image
        src={result.sprites[props.sprite]}
        alt="ポケモン"
        width={200}
        height={200}
      />
    </Grid>
  );
};

export default PokemonImage;
