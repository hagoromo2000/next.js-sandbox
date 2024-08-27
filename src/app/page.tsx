import { Button, Grid, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={8} textAlign="center">
          <Typography variant="h2">Topページ</Typography>
        </Grid>
        <Grid item xs={6} textAlign="center">
          <Link href="/pokemon">
            <Button variant="contained" color="primary">
              ポケモンページへのリンク
            </Button>
          </Link>
        </Grid>
      </Grid>
    </main>
  );
}
