import Images from "../../constants/images";

export default function Aside() {
  return (
    <aside id="aside">
      <img src={Images.Me} alt="Paul Vera" />
      <h2>Paul Vera</h2>
      <br />
      <div className="aside-nav">
        <ul>
          <li>
            <a href="/#home">
              <i className="fa-solid fa-house"></i>Home
            </a>
          </li>
          <li>
            <a href="/#about">
              <i className="fa-solid fa-address-card"></i>About
            </a>
          </li>
          <li>
            <a href="/#experience">
              <i className="fa-solid fa-graduation-cap"></i>Experience
            </a>
          </li>
          <li>
            <a href="/#portfolio">
              <i className="fa-solid fa-briefcase"></i>Portfolio
            </a>
          </li>
          <li>
            <a href="/resume" target="_blank">
              <i className="fa-solid fa-file"></i>Resume
            </a>
          </li>
        </ul>
      </div>
      <div className="aside-bottom">
        <p id="made">
          Made with{" "}
          <a href="https://react.dev/" target="_blank" rel="noreferrer">
            <span className="landing--h--letter">R</span>
            <span className="landing--h--letter">e</span>
            <span className="landing--h--letter">a</span>
            <span className="landing--h--letter">c</span>
            <span className="landing--h--letter">t</span>
          </a>
        </p>
      </div>
    </aside>
  );
}
