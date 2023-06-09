import React, { useState } from "react";
import { Drawer, Button, Input } from "@mui/material";
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

  //state for user input
  const [searchInput, setSearchInput] = useState("");

  //handling search input
  const movieSearchHandler = (event) => {
    setSearchInput(event.target.value);
  };

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

  const sidebar = (
    <div className="sidebar">
      {!windowSizeLarge && <Button onClick={toggleDrawer(false)}>Back</Button>}
      <h4>Find a Movie</h4>
      <Input
        placeholder="Ex: Batman, Inception..."
        className="sidebar-input"
        onChange={movieSearchHandler}
        style={{
          color: "white",
          borderBottom: "solid",
          borderColor: "#1876D1",
          padding: "0.2rem",
        }}
        type="text"
      />

      {<MoviesList searchInput={searchInput} />}
    </div>
  );

  return (
    <React.Fragment>
      {
        // rendering a toggle menu sidebar when screen size reduce
        !windowSizeLarge && (
          <div className="toggle-menu">
            <Button onClick={toggleDrawer(true)}>
              <FontAwesomeIcon icon={faBars} size="2x" />
            </Button>
            <Drawer
              anchor="left"
              open={sideBarOpen}
              onClose={toggleDrawer(false)}
              classes={{
                paper: "sidebar",
                modal: "MuiDrawer-modal",
                root: "MuiDrawer-root",
              }}
            >
              {sidebar}
            </Drawer>
          </div>
        )
      }
      {
        //permanent sidebar when screen is large
        windowSizeLarge && sidebar
      }
    </React.Fragment>
  );
};

export default SideSearch;
