import "./Home.css";
import RandomMovies from "./Movies/RandomMovies";

const Home = () => {
  return (
    <div className="Home-content">
      <div className="Home-header">
        <h1>Welcome to Movie Future </h1>
        <span>You can browse your favorite movies and discover new ones !</span>
      </div>
      <div className="Home-features">
        <h3>Explore new movies</h3>
        <RandomMovies />
      </div>
    </div>
  );
};

export default Home;
