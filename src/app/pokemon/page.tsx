import { CircularProgress, Grid } from "@mui/material";
import { Suspense } from "react";
import PokemonForm from "./_components/pokemon-form";
import { searchParamsCache } from "@/types/search-params";
import PokemonImage from "./_components/pokemon-image";

// コンポーネントを遅延読み込みする場合はlazyを使用する（該当コンポーネントの読み込みをレンダリングされるまで延期させる）
// https://react.dev/reference/react/lazy
// import { lazy } from "react";
// const LazyPokemonImage = lazy(() => import("./_components/pokemon-image"));

type Props = {
  searchParams: Record<string, string | string[] | undefined>
};

export default function Pokemon({ searchParams }: Props) {
  const { id, sprite } = searchParamsCache.parse(searchParams)

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
              {/* 「型 'Promise<Element>' を型 'ReactNode' に割り当てることはできません。」という型エラー出る場合はLazyを使用する */}
              {/* <LazyPokemonImage id={id} sprite={sprite} /> */}
              <PokemonImage id={id} sprite={sprite} />
            </Suspense>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
