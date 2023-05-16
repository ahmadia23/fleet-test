import { json, useLoaderData } from "react-router";
import "./MovieDetails.css";
import { buildMoviePath } from "../Util/helpers";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import SideSearch from "../Components/SideNavigation/SideSearch";

const MOVIEDB_KEY = process.env.REACT_APP_API_KEY;

//movie details page
const MovieDetails = ({ id }) => {
  //result data of movie fetched
  const movieData = useLoaderData();

  const genres = movieData.genres.map((genre) => {
    return <div className="movie-genre">{genre.name}</div>;
  });

  return (
    <Fragment>
      <div className="top-page">
        <SideSearch />
        <Link to={"/"} className="home-button">
          Home
        </Link>
      </div>
      <div className="movie-details">
        <div className="movie-showcase">
          <div className="movie-title">
            <h2>{movieData.title}</h2>
            <span className="original-title">{movieData.original_title}</span>
            <span>Year: {movieData.release_date}</span>
          </div>
          <div className="posters">
            <img
              className="poster-image"
              src={buildMoviePath(movieData.poster_path)}
              alt={"poster" + movieData.title}
            ></img>
            <p className="movie-resume">{movieData.overview}</p>
          </div>
        </div>
        <div className="movie-overview">
          <div className="genres">{genres}</div>
          <h3>Official Photo</h3>
          <div className="credit">
            <img
              className="scene-image"
              src={buildMoviePath(movieData.backdrop_path)}
              alt={movieData.title}
            ></img>
            <span>
              Popularity: <strong>{movieData.popularity}</strong>
            </span>
            <span>
              This movie has been voted <strong>{movieData.vote_count} </strong>
              times
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MovieDetails;

//fetch a single movie with its id and load all data in that component
export const loadMovieDetails = async ({ request, params }) => {
  const movie_id = parseInt(params.movie_id);
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${MOVIEDB_KEY}&language=en-US`
  );

  if (!response.ok) {
    return json({ message: "could not fetch movie details" }, { status: 500 });
  } else {
    return response;
  }
};
