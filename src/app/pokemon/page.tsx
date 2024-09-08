import { PokemonSchema } from "@/types/schema/pokemon-form-schema";
import { CircularProgress, Grid } from "@mui/material";
import { Suspense } from "react";
import PokemonForm from "./_components/pokemon-form";
import PokemonImage from "./_components/pokemon-image";
// import { lazy } from "react";

// const LazyPokemonImage = lazy(() => import("./_components/pokemon-image"));

type Props = {
  searchParams: {
    id?: string;
    sprite?: PokemonSchema["sprite"];
  };
};

export default function Pokemon({ searchParams }: Props) {
  const id = searchParams.id ?? "1";
  const sprite = searchParams.sprite ?? "front_default";

  return (
    <Grid container direction="column" spacing={6}>
      <Grid item>
        <PokemonForm />
      </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <Suspense
              key={JSON.stringify(searchParams)}
              fallback={<CircularProgress />}
            >
              {/* <LazyPokemonImage id={id} sprite={sprite} /> */}
              <PokemonImage id={id} sprite={sprite} />
            </Suspense>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
