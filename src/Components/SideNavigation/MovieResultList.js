import { useEffect, useState } from "react";
import "./MovieResultList.css";
import MovieResult from "../Movies/MovieResult";
import { buildMoviePath } from "../../Util/helpers";

const MOVIEDB_KEY = process.env.REACT_APP_API_KEY;

const MovieResultList = ({ searchInput }) => {
  //movies state to handle fetched searching results
  const [movies, setMovies] = useState([]);

  //fetch movies and update state only when user input changes
  useEffect(() => {
    const fetchMovies = async (searchInput) => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${MOVIEDB_KEY}&language=en-US&query=${searchInput}&page=1&include_adult=false`
      );

      const ResponseData = await response.json();
      setMovies(ResponseData.results);
    };
    fetchMovies(searchInput);
  }, [searchInput]);

  return (
    <div className="movies-list">
      {
        //display number of results
        searchInput && (
          <span className="notif-results">{movies.length} results</span>
        )
      }
      {movies.map((movie) => {
        return (
          <MovieResult
            movieId={movie.id}
            title={movie.title}
            image={buildMoviePath(movie.poster_path)}
            key={movie.id}
          />
        );
      })}
      {
        //give user a feedback when input does not match any movies
        searchInput && movies.length === 0 && (
          <span className="notif-results">
            No movie found with {searchInput}
          </span>
        )
      }
    </div>
  );
};

export default MovieResultList;
