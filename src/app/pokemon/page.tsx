import { pokemonResponse } from "@/types/pokemon-response";
import { PokemonSchema } from "@/types/schema/pokemon-form-schema";
import { Grid } from "@mui/material";
import PokemonForm from "./_components/pokemon-form";
import PokemonImage from "./_components/pokemon-image";
import { fetchPokemonData } from "./_utils/fetch-pokemon-data";

type Props = {
  searchParams: {
    id?: string;
    sprite?: PokemonSchema["sprite"];
  };
};

export default async function Pokemon({ searchParams }: Props) {
  // デフォルト値をコンポーネント内で設定
  const id = searchParams.id ?? "1";
  const sprite = searchParams.sprite ?? "front_default";
  const pokemonImageData: pokemonResponse = await fetchPokemonData(id);

  return (
    <Grid container direction="column" spacing={6}>
      <Grid item>
        <PokemonForm />
      </Grid>
      <Grid item>
        <PokemonImage pokemonImageData={pokemonImageData} sprite={sprite} />
      </Grid>
    </Grid>
  );
}
