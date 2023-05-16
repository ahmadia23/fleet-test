import { Link } from "react-router-dom";
import "./HomeMovieCard.css";

// card for random movies on homepage
const HomeMovieCard = ({ title, image, itemId }) => {
  return (
    <Link to={`/movie/${itemId}`} className="movie-card">
      <img src={image} alt="movie"></img>
      <div className="movie__card-detail">
        <h6>{title}</h6>
      </div>
    </Link>
  );
};
export default HomeMovieCard;
