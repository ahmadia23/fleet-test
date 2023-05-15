import React, { useState } from "react";
import { Drawer, Button } from "@mui/material";
import "./SideSearch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MoviesList from "./MovieResultList";

const SideSearch = () => {
  //two state to handle screen size reduced UI changes
  const [sideBarOpen, setSideBar] = useState(false);
  const [windowSizeLarge, setWindowSizeLarge] = useState(
    window.innerWidth > 1000
  );
  //handle user input
  const [searchInput, setSearchInput] = useState("");

  //listen to the screen size and updating windows size state to toggle side menu
  window.addEventListener("resize", () => {
    setWindowSizeLarge(window.innerWidth > 1000);
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === "esc") {
      return;
    }
    setSideBar(open);
  };

  const movieSearchHandler = (event) => {
    setSearchInput(event.target.value);
  };

  const sidebar = (
    <div className="sidebar">
      {!windowSizeLarge && <Button onClick={toggleDrawer(false)}>Back</Button>}
      <h4>Find a Movie</h4>
      <input
        placeholder="Batman, Inception..."
        onChange={movieSearchHandler}
        type="text"
        contenteditable
        height="20px"
      />
      {<MoviesList searchInput={searchInput} />}
    </div>
  );

  return (
    <React.Fragment>
      {!windowSizeLarge && (
        <div className="toggle-menu">
          <Button onClick={toggleDrawer(true)}>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </Button>
          <Drawer
            anchor="left"
            open={sideBarOpen}
            onClose={toggleDrawer(false)}
            style={{ color: "red" }}
            classes={{
              paper: "sidebar",
              modal: "MuiDrawer-modal",
              root: "MuiDrawer-root",
            }}
          >
            {sidebar}
          </Drawer>
        </div>
      )}

      {windowSizeLarge && sidebar}
    </React.Fragment>
  );
};

export default SideSearch;
