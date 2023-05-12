import { useEffect, useState } from "react";
import Movie from "./Movie";
import "./RandomMovies.css";

const RandomMovies = () => {
  const [movieDiscovery, setMovieDiscovery] = useState([]);

  useEffect(() => {
    const fetchRandomMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=e78e73fee299ae540fb717859644f524&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
      );

      const data = await response.json();
      setMovieDiscovery(data.results.slice(0, 5));
      return data.results.slice(0, 5);
    };
    fetchRandomMovies();
  }, []);
  console.log(movieDiscovery);
  return (
    <div className="random__movies-list">
      {movieDiscovery.map((movie) => {
        return (
          <Movie
            title={movie.original_title}
            image={"https://image.tmdb.org/t/p/original" + movie.poster_path}
            popularity={movie.popularity}
            key={movie.id}
          />
        );
      })}
    </div>
  );
};

export default RandomMovies;
