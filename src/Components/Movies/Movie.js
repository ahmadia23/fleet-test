import "./Movie.css";

const Movie = ({ title, image, popularity }) => {
  return (
    <div className="movie-card">
      <img src={image} alt="movie"></img>
      <div className="movie__card-detail">
        <h6>{title}</h6>
        <span>{popularity} likes</span>
      </div>
    </div>
  );
};
export default Movie;
