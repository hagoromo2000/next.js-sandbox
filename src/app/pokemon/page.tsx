import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import PokemonForm from "./_components/pokemon-form";

export default function Pokemon() {
  return (
    <Grid container direction="column" spacing={6}>
      <Grid item>
        <PokemonForm />
      </Grid>
      <Grid item>
        <Typography>画像表示フィールド</Typography>
      </Grid>
    </Grid>
  );
}
