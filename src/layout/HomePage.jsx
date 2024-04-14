import React from "react";
import TrendingSection from "../components/TrendingSection";
import WatchItAgainSection from "../components/WatchItAgainSection";
import PopularMoviesSection from "../components/PopularMoviesSection";
import SeriesSection from "../components/SeriesSection";
const HomePage = () => {
  return (
    <>
      <TrendingSection />
      <WatchItAgainSection />
      <PopularMoviesSection />
      <SeriesSection />
    </>
  );
};

export default HomePage;
