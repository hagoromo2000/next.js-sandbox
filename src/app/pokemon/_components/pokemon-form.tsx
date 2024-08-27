import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export default function PokemonForm() {
  return (
    <Grid container component="form" spacing={2}>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <TextField type="number" />
          <FormHelperText>図鑑Noを選択してください</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="sprites-label">すがた</InputLabel>
          <Select labelId="sprites-label" label="すがた">
            <MenuItem value="front-default">正面</MenuItem>
            <MenuItem value="back">背中</MenuItem>
          </Select>
          <FormHelperText>すがたを選択してください</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Button variant="contained" color="primary" type="submit">
            画像を表示
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
