import z from "zod";

export const pokemonSchema = z.object({
  id: z.coerce // 数値を扱うときは、coerceを利用することで、数値を強制してあげる必要がある。そうしないとstringで扱われてエラーになる https://zenn.dev/yuki_tu/scraps/194e4813ef03db
    .number()
    .min(1, "1~1025で入力してください。")
    .max(1025, "1~1025で入力してください。")
    .default(1),
  sprite: z
    .enum(["front_default", "back_default", "front_shiny", "back_shiny"])
    .default("front_default"),
});

export type PokemonSchema = z.infer<typeof pokemonSchema>;
