import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div class="wrapper hover_collapse">
      <div className="sidebar">
        <h4>Search</h4>
        <input placeholder="Batman, Inception..."></input>
      </div>
    </div>
  );
};

export default SearchBar;
