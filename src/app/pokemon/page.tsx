import { Grid } from "@mui/material";
import { usePokemonData } from "./hooks/use-pokemon-data";
import PokemonForm from "./_components/pokemon-form";
import PokemonImage from "./_components/pokemon-image";

export default async function Pokemon({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const params = new URLSearchParams();
  params.set("id", searchParams.id ?? "1");
  params.set("sprite", searchParams.sprite ?? "front_default");
  const result: any = await usePokemonData(params);
  const sprite = searchParams.sprite ?? "front_default";
  return (
    <Grid container direction="column" spacing={6}>
      <Grid item>
        <PokemonForm />
      </Grid>
      <Grid item>
        <PokemonImage data={result} sprite={sprite} />
      </Grid>
    </Grid>
  );
}
