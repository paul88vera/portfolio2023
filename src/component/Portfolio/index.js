import PortHeader from "../PortHeader";
import Work from "../Work";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <nav id="port-nav">
        <PortHeader />
      </nav>
      <div id="gallery">
        <Work />
      </div>
    </section>
  );
};

export default Portfolio;
