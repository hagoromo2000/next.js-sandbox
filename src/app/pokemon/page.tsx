import { pokemonResponse } from "@/types/pokemon-response";
import { PokemonSchema } from "@/types/schema/pokemon-form-schema";
import { CircularProgress, Grid } from "@mui/material";
import { Suspense } from "react";
import PokemonForm from "./_components/pokemon-form";
import PokemonImage from "./_components/pokemon-image";

type Props = {
  searchParams: {
    id?: string;
    sprite?: PokemonSchema["sprite"];
  };
};

export default function Pokemon({
  searchParams: { id = "1", sprite = "front_default" },
}: Props) {
  return (
    <Grid container direction="column" spacing={6}>
      <Grid item>
        <PokemonForm />
      </Grid>
      <Grid item>
        <Suspense fallback={<CircularProgress />}>
          {/* @ts-expect-error Server Component https://zenn.dev/waarrk/articles/23732d8c4102d0 */}
          <PokemonImage id={id} sprite={sprite} />
        </Suspense>
      </Grid>
    </Grid>
  );
}
