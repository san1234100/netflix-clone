import TheHeader from "./components/TheHeader";

function App() {
  return (
    <>
    <TheHeader/>
    <h4 className="text-xl text-white font-semibold px-5">Trending Movies</h4>
    <main className="p-10 grid grid-cols-5 gap-3">
      <a href="#" className="">
         <img src="./image_movies/leo.jpg"  className="card rounded w-72 h-40"  alt="" />
      </a>
      <a href="#" className="">
         <img src="./image_movies/leo.jpg"  className="card rounded w-72 h-40"  alt="" />
      </a>
      <a href="#" className="">
         <img src="./image_movies/leo.jpg"  className="card rounded w-72 h-40"  alt="" />
      </a>
      <a href="#" className="">
         <img src="./image_movies/leo.jpg"  className="card rounded w-72 h-40"  alt="" />
      </a>
      <a href="#" className="">
         <img src="./image_movies/leo.jpg"  className="card rounded w-72 h-40"  alt="" />
      </a>
      <a href="#" className="">
         <img src="./image_movies/leo.jpg"  className="card rounded w-72 h-40"  alt="" />
      </a>
      <a href="#" className="">
         <img src="./image_movies/leo.jpg"  className="card rounded w-72 h-40"  alt="" />
      </a>
    </main>
    </>
  );
}

export default App;
