import Aside from "../component/Aside";
import Landing from "../component/Landing";
import About from "../component/About";
import Experience from "../component/Experience";
import Portfolio from "../component/Portfolio";

const Home = () => {
  return (
    <div id="home">
      <Aside />
      <Landing />
      <About />
      <Experience />
      <Portfolio />
    </div>
  );
};

export default Home;
