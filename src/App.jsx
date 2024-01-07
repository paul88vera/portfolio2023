import "./App.css";
import Home from "./pages/home";
import Portfolio from "./component/Portfolio";
import Burger from "./component/Burger";

const App = () => {
  return (
    <div>
      <Burger />
      <div id="arrow-container">
        <a href="#home" className="arrow-link">
          <div className="left-slant slant"></div>
          <div className="right-slant slant"></div>
        </a>
      </div>
      <Home />
      <Portfolio />
    </div>
  );
};

export default App;
