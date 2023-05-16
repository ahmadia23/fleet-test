import { Link } from "react-router-dom";
import "./MovieResult.css";

//card  for search results in side navigation that links to result movie detail page
const MovieResult = ({ image, title, movieId }) => {
  return (
    <Link to={`/movie/${movieId}`} className="movie-result">
      <img className="result-image" src={image} alt={title}></img>
      <h3>{title}</h3>
    </Link>
  );
};

export default MovieResult;
