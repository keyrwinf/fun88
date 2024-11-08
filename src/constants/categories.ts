import StartIcon from "../assets/svg/fire-svgrepo-com-1.svg";
import NewIcon from "../assets/svg/NEW.svg";
import SlotsIcon from "../assets/svg/casino-dealer-illustration-2-svgrepo-com-1.svg"
import LiveIcon from "../assets/svg/LIVE.svg"
import JackpotsIcon from "../assets/svg/jackpots.svg"
import OthersIcon from "../assets/svg/3BAR.svg"
import FavoritesIcon from "../assets/svg/FAVE.svg"

import { CategoryOptions } from "../types/categories"; 

const categories: CategoryOptions[] = [
  {
    id: 1,
    name: "START",
    value: "game",
    icon: StartIcon,
  },
  {
    id: 2,
    name: "NEW",
    value: "new",
    icon: NewIcon,
  },
  {
    id: 3,
    name: "SLOTS",
    value: "slots",
    icon: SlotsIcon,
  },
  {
    id: 4,
    name: "LIVE",
    value: "live",
    icon: LiveIcon,
  },
  {
    id: 5,
    name: "JACKPOTS",
    value: "jackpots",
    icon: JackpotsIcon,
  },
  {
    id: 6,
    name: "OTHERS",
    value: "others",
    icon: OthersIcon,
  },
  {
    id: 7,
    name: "FAVORITES",
    value: "favorites",
    icon: FavoritesIcon,
  },
];

export default categories;
