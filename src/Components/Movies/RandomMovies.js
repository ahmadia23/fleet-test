import HomeMovieCard from "./HomeMovieCard";
import "./RandomMovies.css";
import { json, useLoaderData } from "react-router";

const MOVIEDB_KEY = process.env.REACT_APP_API_KEY;

//showcase a list of random movies fetched for homepage
const RandomMovies = () => {
  const fetchedRandomMovies = useLoaderData().results;

  return (
    <div className="random__movies-list">
      {
        //rendering each random movies in home cards
        fetchedRandomMovies.map((movie) => {
          return (
            <HomeMovieCard
              title={movie.original_title}
              image={"https://image.tmdb.org/t/p/original" + movie.poster_path}
              popularity={movie.popularity}
              key={movie.id}
            />
          );
        })
      }
    </div>
  );
};

export default RandomMovies;

//fetch popular random movies for homepage
export const fetchRandomMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${MOVIEDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
  );

  if (!response.ok) {
    return json({ message: "could not fetch random movies" }, { status: 500 });
  } else {
    return response;
  }
};
