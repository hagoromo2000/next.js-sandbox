import { Grid } from "@mui/material";
import Image from "next/image.js";
import { FC } from "react";

type Props = {
  data?: any;
  sprite: string | null;
};

const PokemonImage: FC<Props> = (props) => {
  if (!props.data || !props.sprite) {
    return null;
  }
  console.log(props.data.sprites[props.sprite]);
  return (
    <Grid>
      <p>選択した図鑑番号のポケモン</p>
      <Image
        src={props.data.sprites[props.sprite]}
        alt="ポケモン"
        width={200}
        height={200}
      />
    </Grid>
  );
};

export default PokemonImage;
