import games from "../constants/games";
import { Game } from "../types/game";
import { Category } from "../types/categories";

let debounceTimer: NodeJS.Timeout | null = null;

export async function getGamesByCategory(category: Category, search?: string, developerId?: number): Promise<Game[]> {
  return new Promise((resolve) => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    debounceTimer = setTimeout(() => {
      const filteredGames: Game[] = games.filter((game) => {
        const matchesCategory = (() => {
          switch (category) {
            case "new":
              return game.isNew;
            case "slots":
              return game.category === "slots";
            case "live":
              return game.isLive;
            case "jackpots":
              return game.category === "jackpots";
            case "others":
              return game.category === "others";
            case "game":
            default:
              return true; // Return all games if category is "game" or unrecognized
          }
        })();

        const matchesDeveloper = developerId ? game.developer?.id === developerId : true;

        const matchesSearch = search ? game.name.toLowerCase().includes(search.toLowerCase()) : true;

        return matchesCategory && matchesSearch && matchesDeveloper;
      });

      resolve(filteredGames);
    }, 1000); // Simulate a delay
  });
}

export async function getFavoritesGames(search?: string): Promise<Game[]> {
  return new Promise((resolve) => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    debounceTimer = setTimeout(() => {
      const localFavGames = JSON.parse(localStorage.getItem('favorite_games') || '[]');
      const filteredGames: Game[] = games.filter((game) => {
        const isFave = localFavGames.includes(game.id);
        const matchesSearch = search ? game.name.toLowerCase().includes(search.toLowerCase()) : true;
        return isFave && matchesSearch;
      });

      resolve(filteredGames);
    }, 1000); // Simulate a delay
  });
}
