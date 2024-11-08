import React, { useCallback } from 'react';
import { Box, Button, Container, Grid2, Input, Tabs, Tab } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import FilterIcon from '@mui/icons-material/Filter';
import SearchIcon from '@mui/icons-material/Search';
import GameList from '../../components/modules/game-list';
import categories from '../../constants/categories';
import gameDevelopers from '../../constants/developers';
import { Category } from '../../types/categories';
import { Swiper, SwiperSlide } from 'swiper/react';

import Banner from '../../assets/banner.webp';

const Home = () => {
  const [currentTab, setCurrentTab] = React.useState<Category>("game");
  const [search, setSearch] = React.useState<string>("");
  const [selectedDeveloper, setSelectedDeveloper] = React.useState<number>();
  const [searchState, setSearchState] = React.useState<boolean>(false);
  const [drawerState, setDrawerState] = React.useState<boolean>(false);

  const handleChange = (_: React.SyntheticEvent, newValue: Category) => {
    setSearch("");
    setCurrentTab(newValue);
  };

  const handleDeveloperChange = useCallback((developerId: number) => {
    setSelectedDeveloper(developerId);
    setDrawerState(false);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearch("");
    setSelectedDeveloper(undefined);
  }, []);

  return (
    <Container sx={{ padding: 2, height: "100%" }}>
      {/* Carousel Banner */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 1500 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={Banner} alt="Banner" width="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner} alt="Banner" width="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner} alt="Banner" width="100%" />
        </SwiperSlide>
      </Swiper>

      {/* Tabs Navigation */}
      <Box sx={{ width: '100%' }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", borderBottom: 1, borderColor: 'divider' }}>
          <Button
            variant="text"
            color="secondary"
            onClick={() => setSearchState(!searchState)}
          >
            <div>
              <SearchIcon />
              <span>Search</span>
            </div>
          </Button>
          <Tabs
            value={currentTab}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="scrollable"
            sx={{ width: "100%" }}
          >
            {categories.map((category) => (
              <Tab
                key={category.id}
                label={category.name}
                value={category.value}
                icon={<img src={category.icon} alt={category.name} width="20px" style={{ color: "white" }} />}
              />
            ))}
          </Tabs>
        </Box>
        {searchState && (
          <Box
            display="flex"
            alignItems="center"
            gap={2}
            padding={2}
            sx={{
              "& .MuiInputBase-root": {
                width: "100%",
              },
            }}
          >
            <Input
              placeholder="Search…"
              startAdornment={<SearchIcon />}
              endAdornment={<CloseIcon onClick={() => handleClearSearch()} />}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="contained" color="secondary" onClick={() => setDrawerState(true)}>
              <FilterIcon />
            </Button>
          </Box>
        )}
        <Box minHeight="500px">
          <GameList
            category={currentTab}
            search={search}
            developerId={selectedDeveloper}
          />
        </Box>
      </Box>


      {/* Game developer drawer */}
      <Drawer
        anchor="bottom"
        open={drawerState}
        onClose={() => setDrawerState(false)}
      >
        <Grid2
          container
          spacing={2}
          padding={2}
          maxHeight="500px"
          overflow="auto"
        >
          {gameDevelopers.map((developer) => (
            <Grid2
              key={developer.id}
              size={6}
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius={4}
              bgcolor="#cccccc50"
              onClick={() => handleDeveloperChange(developer.id)}
            >
              <img src={developer.image} alt={developer.name} width="100px" />
            </Grid2>
          ))}
        </Grid2>
      </Drawer>
    </Container>
  );
};

export default Home;
