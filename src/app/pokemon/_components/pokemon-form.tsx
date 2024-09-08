"use client";
import { useSafeForm } from "@/hooks/use-safe-form";
import {
  PokemonSchema,
  pokemonSchema,
} from "@/types/schema/pokemon-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { parseAsInteger, parseAsStringEnum, useQueryStates } from "nuqs";
import { Controller } from "react-hook-form";

export default function PokemonForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useSafeForm<PokemonSchema>({
    mode: "onChange",
    resolver: zodResolver(pokemonSchema),
    defaultValues: {
      id: 1,
      sprite: "front_default",
    },
  });

  const [_, setPokemonCondition] = useQueryStates(
    {
      id: parseAsInteger.withDefault(1),
      sprite: parseAsStringEnum([
        "front_default",
        "back_default",
        "front_shiny",
        "back_shiny",
      ]).withDefault("front_default"),
    },
    {
      shallow: false,
      history: "push",
    }
  );

  const usePokemonFormSubmit = (data: PokemonSchema) => {
    console.log(data);
    setPokemonCondition({
      id: data.id,
      sprite: data.sprite,
    });
  };

  return (
    <Grid
      container
      component="form"
      spacing={2}
      onSubmit={handleSubmit(usePokemonFormSubmit)}
    >
      <Grid item xs={6}>
        <FormControl fullWidth>
          <Controller
            name="id"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                id="id"
                variant="outlined"
                type="text"
                inputProps={{
                  inputMode: "numeric",
                  pattern: "[1-9][0-9]*",
                }}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "" || /^[1-9][0-9]*$/.test(value)) {
                    field.onChange(value);
                  }
                }}
                error={!!errors.id}
                helperText={
                  errors.id ? errors.id.message : "図鑑Noを選択してください"
                }
              />
            )}
          />
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <Controller
            name="sprite"
            control={control}
            defaultValue="front_default"
            render={({ field }) => (
              <Select {...field} id="sprite">
                <MenuItem value="front_default">正面</MenuItem>
                <MenuItem value="back_default">背面</MenuItem>
                <MenuItem value="front_shiny">正面_色違い</MenuItem>
                <MenuItem value="back_shiny">背面_色違い</MenuItem>
              </Select>
            )}
          />
          <FormHelperText>すがたを選択してください</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item>
            <Button variant="contained" color="primary" type="submit">
              画像を表示
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
