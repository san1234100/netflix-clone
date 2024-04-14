import { Route, Routes } from "react-router-dom";
import TheHeader from "./components/TheHeader";

import HomePage from "./layout/HomePage";

function App() {
  return (
    <>
      <TheHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
