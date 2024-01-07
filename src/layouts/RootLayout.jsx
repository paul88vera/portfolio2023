import Burger from "../component/Burger";
import Home from "../pages/home";

export default function RootLayout() {
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
    </div>
  );
}
