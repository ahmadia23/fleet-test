import "./HomeMovieCard.css";

// card for random movies on homepage
const HomeMovieCard = ({ title, image }) => {
  return (
    <div className="movie-card">
      <img src={image} alt="movie"></img>
      <div className="movie__card-detail">
        <h6>{title}</h6>
      </div>
    </div>
  );
};
export default HomeMovieCard;
