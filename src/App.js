import Home from "./Pages/Home";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieDetails, { loadMovieDetails } from "./Pages/MovieDetails";
import { fetchRandomMovies } from "./Components/Movies/RandomMovies";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        loader: fetchRandomMovies,
        element: <Home />,
      },
      {
        path: ":movie_id",
        loader: loadMovieDetails,
        element: <MovieDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
