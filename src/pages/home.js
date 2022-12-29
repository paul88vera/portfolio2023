import Aside from "../component/Aside";
import Nav from "../component/Nav";
import Landing from "../component/Landing";
import About from "../component/About";
import Experience from "../component/Experience";
import Portfolio from "../component/Portfolio";

export default function Home() {
  return (
    <div id="home">
      <Aside />
      <Nav />
      <Landing />
      <About />
      <Experience />
      <Portfolio />
    </div>
  );
}
