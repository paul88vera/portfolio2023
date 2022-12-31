import Aside from "../component/Aside";
import Landing from "../component/Landing";
import About from "../component/About";
import Experience from "../component/Experience";

const Home = () => {
  return (
    <div id="home">
      <Aside />
      <Landing />
      <About />
      <Experience />
    </div>

  );
}

export default Home;