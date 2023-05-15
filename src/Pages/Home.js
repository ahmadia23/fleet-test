import "./Home.css";
import RandomMovies from "../Components/Movies/RandomMovies";
import { Fragment } from "react";
import SideSearch from "../Components/SideNavigation/SideSearch";

const Home = () => {
  return (
    <Fragment>
      <SideSearch />
      <div className="Home-content">
        <div className="Home-header">
          <h1>Welcome to Movie Future </h1>
          <span>
            You can browse your favorite movies and discover new ones !
          </span>
        </div>
        <div className="Home-features">
          <h3>New Released</h3>
          <RandomMovies />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
