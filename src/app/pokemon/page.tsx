import { PokemonSchema } from "@/types/schema/pokemon-form-schema";
import { CircularProgress, Grid } from "@mui/material";
import { Suspense } from "react";
import PokemonForm from "./_components/pokemon-form";
import PokemonImage from "./_components/pokemon-image";
import { pokemonSearchParamsCache } from "@/types/pokemon-search-params";
// import { lazy } from "react";

// const LazyPokemonImage = lazy(() => import("./_components/pokemon-image"));

type Props = {
  searchParams: Record<string, string | string[] | undefined>;
};

export default function Pokemon({ searchParams }: Props) {
  pokemonSearchParamsCache.parse(searchParams);

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
              {/* <LazyPokemonImage/> */}
              <PokemonImage />
            </Suspense>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
