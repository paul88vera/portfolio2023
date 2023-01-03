import Circulize from '../../img/Circulize.png';
import TenFour from '../../img/10-4ww.png';


export default function React() {
  return (
    <section id="React">
      <div className="collage-card">
        <img src={TenFour} alt="10-4 Woodworks" width="300" />
        <div className="invisible">
          <a href="https://main.d3p0lxo7kvw2jn.amplifyapp.com/">Woodworking Site Template</a>
          <a href="https://www.github.com/paul88vera/104-woodworks">Repository</a>
          <p>React</p>
          </div>
        </div>

        <div className="collage-card">
        <img src={Circulize} alt="Circulize - Restaurant Finder" width="300" />
        <div className="invisible">
          <a href="https://main.d3fnfglqayocb3.amplifyapp.com/">Circulize</a>
          <a href="https://www.github.com/paul88vera/restaurant-finder">Repository</a>
          <p>React</p>
          </div>
        </div>
    </section>
  )
}