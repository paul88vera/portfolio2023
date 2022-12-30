export default function Aside() {
  return (
    <aside id="aside">
        <img src="http://unsplash.it/200" alt="Paul Vera" />
        <h2>Paul Vera</h2>
        <br/>
        <div class="aside-nav">
          <ul>
          <li><a href="#home" className="home-anchor">Home</a></li>
          <li><a href="#about" className="about-anchor">About</a></li>
          <li><a href="#portfolio" className="portfolio-anchor">Portfolio</a></li>
          </ul>
        </div>
      </aside>
  )
}