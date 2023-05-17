import { useRef } from "react";
import { json, useLoaderData } from "react-router";
import HomeMovieCard from "./HomeMovieCard";
import { useScroll } from "../Hook/useScroll";
import ArrowButtons from "../UI/ArrowButtons";
import "./RandomMovies.css";

const MOVIEDB_KEY = process.env.REACT_APP_API_KEY;

//showcase a list of random movies fetched for homepage
const RandomMovies = () => {
  //Select all the movie DOM elements
  const movieListRef = useRef(null);

  //movies fetched from the MOVIEDB
  const fetchedRandomMovies = useLoaderData().results;

  //custom hook to handle horizontal scrolling
  const {
    isLeftArrowDisabled,
    isRightArrowDisabled,
    handleLeftArrowClick,
    handleRightArrowClick,
  } = useScroll(fetchedRandomMovies, movieListRef);

  const randomMoviesComponent = fetchedRandomMovies.map((movie) => {
    return (
      <HomeMovieCard
        title={movie.original_title}
        image={"https://image.tmdb.org/t/p/original" + movie.poster_path}
        popularity={movie.popularity}
        key={movie.id}
        itemId={movie.id}
      />
    );
  });

  return (
    <div className="random__movies-container">
      <div className="random__movies-list snaps-inline" ref={movieListRef}>
        {randomMoviesComponent}
      </div>
      <ArrowButtons
        arrowSide={"left"}
        isLeftArrowDisabled={isLeftArrowDisabled}
        onClick={handleLeftArrowClick}
      ></ArrowButtons>
      <ArrowButtons
        arrowSide={"right"}
        isRightArrowDisabled={isRightArrowDisabled}
        onClick={handleRightArrowClick}
      ></ArrowButtons>
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
