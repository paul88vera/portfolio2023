import PortHeader from "../PortHeader"
import All from "../All"
// import Work from "../../props"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <nav id="port-nav">
        <PortHeader />
      </nav>
      <div id="gallery">
        <All />
        {/* <Work /> */}
      </div>
    </section>
  )
}

export default Portfolio
