import PopularMoviesSection from "./components/PopularMoviesSection";
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
   </main>
    </>
  );
}

export default App;
