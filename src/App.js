import Home from "./Components/Home";
import "./App.css";
import SearchBar from "./Components/SideNavigation/SearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Home />
    </div>
  );
}

export default App;
