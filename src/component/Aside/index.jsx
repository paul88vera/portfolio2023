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
    </aside>
  );
}
