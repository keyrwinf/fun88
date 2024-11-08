export type Category = "game" | "new" | "slots" | "live" | "jackpots" | "others" | "favorites";

export interface CategoryOptions {
  id: number;
  name: string;
  value: Category;
  icon: string;
}
