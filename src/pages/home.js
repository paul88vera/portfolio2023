import Aside from "../component/Aside";

export default function Home() {
  return (
    <div id="home">
      <Aside />
      <section id="main">
        <nav id="main-nav">
          <ul>
            <li>
              {/* change the links later */}
              <a href="#home">+1-210-501-9271</a>
            </li>
            <li>
              <a href="#home">paul88vera@gmail.com</a>
            </li>
            <li>
              <a href="#home">Hi</a>
            </li>
          </ul>
        </nav>
      </section>

      <section id="intro">
        <div id="intro-container">
          <h1>
            Paul <span>Vera</span>
          </h1>
          <h3>Full Stack Developer</h3>
          <p>
            This is my short bio that will just be here for reference to see the
            size of an actual paragraph.
          </p>
          <button className="btn ">Experience & Certifications</button>
        </div>
      </section>

      <section id="about">
       <div className="img-cont">
        <img src="http://unsplash.it/400" alt="" />
        </div>
        <div id="about-para">

        <h1>About Me</h1>
        <h3>Full Stack Developer</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          tincidunt venenatis enim at consequat. Curabitur finibus fermentum
          eros, dictum pretium nisi scelerisque sit amet. Vivamus eu ligula eget
          odio ullamcorper vestibulum in ut purus. Ut laoreet nisl eget erat
          dictum, at dignissim tellus molestie. Sed et tortor quis nibh mattis
          tincidunt sit amet in velit. In sit amet arcu malesuada, interdum nibh
          at, gravida lorem. Etiam commodo id ante ac rutrum. Aliquam massa
          risus, tristique vulputate egestas ut, imperdiet sit amet elit. Duis
          non ornare mi, a mattis tellus. Quisque dapibus ut neque non rutrum.
          Integer eget magna et neque consectetur posuere sagittis at ex.
          Quisque mollis mattis ante eu suscipit.
        </p>
        <p>
          Vivamus eu nibh ut risus volutpat ultrices. In et laoreet ex. Nunc vel
          mauris cursus enim molestie vestibulum. Aliquam sed ipsum felis. Nunc
          eu pellentesque sapien. Nulla placerat, arcu at dapibus faucibus,
          tellus nibh consectetur libero, ultrices accumsan eros nisi ac lorem.
          Etiam non sagittis lectus. Phasellus imperdiet tortor vel tempor
          mattis. Integer dictum augue eu mauris congue consequat.
        </p>
        <div id="social-cont">
        <ul>
          <li>Paul Vera</li>
          <li>paul88vera@gmail.com</li>
          <li>Texas, USA</li>
          <li>Feb 24th, 1988</li>
          <li>210-501-9271</li>
        </ul>
        </div>
        </div>
      </section>
    </div>
  );
}
