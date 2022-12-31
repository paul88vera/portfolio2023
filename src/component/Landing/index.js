export default function Landing() {
  return (
    <div id="landing">
      <section id="main">
        <nav id="main-nav">
          <ul>
            <li>
              <a href="tel:+1-210-501-9271">+1-210-501-9271</a>
            </li>
            <li>
              <a href="mailto:paul88vera@gmail.com">paul88vera@gmail.com</a>
            </li>
            <li>
              <a href="mailto:paul88vera@gmail.com" className="email-box"><img src="/assets/img/email_icon.png" width="50"
              alt="email" /></a>
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
          <a href="#portfolio" className="btn">Experience & Certifications</a>
        </div>
      </section>
    </div>
  )
}