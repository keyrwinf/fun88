import { Developer } from "./developer";

export type Game = {
  id: number;
  name: string;
  description: string;
  image: string;
  developer?: Developer;
  isNew: boolean;
  isLive: boolean;
  category: string;
};
