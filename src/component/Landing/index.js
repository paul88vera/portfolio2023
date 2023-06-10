import Nav from "../Nav"

export default function Landing() {
  return (
    <div id="landing">
      <Nav />
      <section id="intro">
        <div id="intro-container">
          <h1>
            Paul <span>Vera</span>
          </h1>
          <h3>Full Stack Developer</h3>
          <p>
            I am a forever learner. I am a dreamer. I am an optimist. I am a
            developer.
          </p>
          <a href="#experience" className="btn-two">
            Experience & Certifications
          </a>
        </div>
      </section>
    </div>
  )
}
