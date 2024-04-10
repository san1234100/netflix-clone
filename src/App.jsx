import PopularMoviesSection from "./components/PopularMoviesSection";
import SeriesSection from "./components/SeriesSection";
import TheHeader from "./components/TheHeader";
import TrendingSection from "./components/TrendingSection";
import WatchItAgainSection from "./components/WatchItAgainSection";

function App() {
  return (
    <>
    <TheHeader/>
   <main>
      <TrendingSection/>
      <WatchItAgainSection/>
      <PopularMoviesSection/>
      <SeriesSection/>
   </main>
    </>
  );
}

export default App;
