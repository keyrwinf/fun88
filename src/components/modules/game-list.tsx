import { useEffect, useCallback, useMemo, useState } from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { Game } from "../../types/game";
import gameDevelopers from "../../constants/developers";
import { getGamesByCategory, getFavoritesGames } from "../../utils/api";
import { Category } from "../../types/categories";

interface GameListProps {
  category: Category;
  search?: string;
  developerId?: number;
}

interface GameWithFave extends Game {
  isFave?: boolean; // Extend Game with isFave property
  refreshFaveGames?: () => void;
}

const GameCard = (props: GameWithFave) => {
  const { id, name, image, isFave, refreshFaveGames} = props;
  return (
    <Box
      height="auto"
      sx={{
        cursor: "pointer",
        position: "relative",
        "&:hover .favorite-button": {
          display: "block",
        },
        "&:hover img": {
          filter: "brightness(0.5)",
        },
      }}
    >
      <img src={image} alt={name} width="150px" />
      {isFave && (
        <span style={{ position: "absolute", top: "8px", right: 0, color: "red", transform: "scale(1.5)" }}>❤️</span>
      )}
      <Button
        className="favorite-button"
        sx={{
          position: "absolute",
          top: "50%",
          right: 0,
          display: "none",
          color: "white",
          backgroundColor: "#00000080",
        }}
        onClick={() => {
          const favoriteGames = JSON.parse(localStorage.getItem('favorite_games') || '[]');
          if (isFave) {
            // Remove from favorites
            const updatedFavorites = favoriteGames.filter((gameId: number) => gameId !== id);
            localStorage.setItem('favorite_games', JSON.stringify(updatedFavorites));
          } else {
            // Add to favorites
            favoriteGames.push(id);
            localStorage.setItem('favorite_games', JSON.stringify(favoriteGames));
          }

          if (refreshFaveGames) {
            refreshFaveGames();
          }
        }}
      >
        {isFave ? "Remove from favorites" : "Add to favorites"}
      </Button>
    </Box>
  );
};

const GameList = (props: GameListProps) => {
  const { category, search, developerId } = props;
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [favoriteGames, setFavoriteGames] = useState<number[]>([]);

  const fetchGames = useCallback(async () => {
    setIsLoading(true);
    if (category === "favorites") {
      const games = await getFavoritesGames(search);
      setGames(games);
    } else {
      const games = await getGamesByCategory(category, search, developerId);
      setGames(games);
    }
    setIsLoading(false);
  }, [category, search, developerId]);

  const fetchFaveGames = useCallback(async () => {
    const localFavGames = JSON.parse(localStorage.getItem('favorite_games') || '[]');
    setFavoriteGames(localFavGames);
  }, []);

  useEffect(() => {
    fetchGames();
  }, [category, fetchGames]);

  useEffect(() => {
    fetchFaveGames()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refreshFaveGames = () => {
    fetchFaveGames()
  };

  const selectedDeveloper = useMemo(() => {
    return gameDevelopers.find((developer) => developer.id === developerId);
  }, [developerId]);

  const content = useMemo(() => {
    if (isLoading) return <CircularProgress />;
    if (games.length) return games.map((game) => (
      <GameCard
        key={game.id}
        {...game}
        isFave={favoriteGames.includes(game.id)}
        refreshFaveGames={refreshFaveGames}
      />
    ));
    if (!games.length && search) return <Box>No games found that contain this "{search}"</Box>;
    return <Box>No games found</Box>;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, games, search, favoriteGames]);

  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
      sx={{ p: 2 }}
    >
      {selectedDeveloper && (
        <Box width="100%" display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h6">Games developed by</Typography>
          <img src={selectedDeveloper.image} alt={selectedDeveloper.name} width="100px" />
        </Box>
      )}
      {content}
    </Box>
  );
};

export default GameList;
