import SugarRush from "../assets/game_icons/sugar_rush.webp";
import AnacondaWild2 from "../assets/game_icons/anaconda_wild_2.webp";
import AztecMagic from "../assets/game_icons/azteca.webp";
import BeachLife from "../assets/game_icons/beach_life.webp";
import BigBadWolf from "../assets/game_icons/big_bad_wolf.webp";
import BookOfEgypt from "../assets/game_icons/book_of_egypt.webp";
import CrocodileButz from "../assets/game_icons/crocodile_butz.webp";
import IncaJackpot from "../assets/game_icons/inca_jackpot.webp";
import MayaJackpot from "../assets/game_icons/maya_jackpot.webp";
import PiratesPower from "../assets/game_icons/pirates_power.webp";
import PrideOfPersia from "../assets/game_icons/pride_of_persia.webp";
import ShaolinCrew from "../assets/game_icons/shaolin_crew.webp";

import Developers from "./developers";
import { Game } from "../types/game";

const Games: Game[] = [
  {
    id: 1,
    name: "Pride of Persia",
    description: "A game about a prince who wants to save his kingdom",
    image: PrideOfPersia,
    developer: Developers.find((developer) => developer.id === 1),
    isNew: true,
    isLive: true,
    category: "",
  },
  {
    id: 2,
    name: "Sugar Rush",
    description: "A game about a sugar factory",
    image: SugarRush,
    developer: Developers.find((developer) => developer.id === 2),
    isNew: true,
    isLive: true,
    category: "",
  },
  {
    id: 3,
    name: "Anaconda Wild 2",
    description: "A game about an anaconda",
    image: AnacondaWild2,
    developer: Developers.find((developer) => developer.id === 3),
    isNew: true,
    isLive: true,
    category: "",
  },
  {
    id: 4,
    name: "Azteca",
    description: "A game about an azteca",
    image: AztecMagic,
    developer: Developers.find((developer) => developer.id === 4),
    isNew: false,
    isLive: false,
    category: "slots",
  },
  {
    id: 5,
    name: "Beach Life",
    description: "A game about a beach",
    image: BeachLife,
    developer: Developers.find((developer) => developer.id === 5),
    isNew: false,
    isLive: true,
    category: "slots",
  },
  {
    id: 6,
    name: "Big Bad Wolf",
    description: "A game about a big bad wolf",
    image: BigBadWolf,
    developer: Developers.find((developer) => developer.id === 6),
    isNew: true,
    isLive: true,
    category: "slots",
  },
  {
    id: 7,
    name: "Book of Egypt",
    description: "A game about a book of egypt",
    image: BookOfEgypt,
    developer: Developers.find((developer) => developer.id === 7),
    isNew: true,
    isLive: true,
    category: "jackpots",
  },
  {
    id: 8,
    name: "Crocodile Butz",
    description: "A game about a crocodile",
    image: CrocodileButz,
    developer: Developers.find((developer) => developer.id === 8),
    isNew: false,
    isLive: true,
    category: "slots",
  },
  {
    id: 9,
    name: "Inca Jackpot",
    description: "A game about an inca",
    image: IncaJackpot,
    developer: Developers.find((developer) => developer.id === 9),
    isNew: true,
    isLive: true,
    category: "jackpots",
  },
  {
    id: 10,
    name: "Maya Jackpot",
    description: "A game about a maya",
    image: MayaJackpot,
    developer: Developers.find((developer) => developer.id === 10),
    isNew: true,
    isLive: true,
    category: "",
  },
  {
    id: 11,
    name: "Pirates Power",
    description: "A game about pirates",
    image: PiratesPower,
    developer: Developers.find((developer) => developer.id === 11),
    isNew: false,
    isLive: true,
    category: "slots",
  },
  {
    id: 12,
    name: "Shaolin Crew",
    description: "A game about a shaolin crew",
    image: ShaolinCrew,
    developer: Developers.find((developer) => developer.id === 12),
    isNew: false,
    isLive: true,
    category: "slots",
  },
];

export default Games;