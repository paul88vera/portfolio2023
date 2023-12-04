/*eslint-disable*/
import { useState } from "react";
import Images from "../../constants/images";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";

const All = () => {
  const [show, setShow] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);
  const [showInfo3, setShowInfo3] = useState(false);
  const [showInfo4, setShowInfo4] = useState(false);

  const toggleAppearanc = () => {
    setShow(!show);
  };

  const toggleAppearance = () => {
    setShowInfo(!showInfo);
  };

  const toggleAppearance1 = () => {
    setShowInfo1(!showInfo1);
  };
  const toggleAppearance2 = () => {
    setShowInfo2(!showInfo2);
  };
  const toggleAppearance3 = () => {
    setShowInfo3(!showInfo3);
  };
  const toggleAppearance4 = () => {
    setShowInfo4(!showInfo4);
  };

  return (
    <section id="All">
      <div className="collage-card" onClick={toggleAppearanc}>
        <img
          src={Images.Mob}
          alt="mobile darkmode ui sample #1"
          style={{ width: "190px", height: "395px", margin: "0 auto" }}
          width="170"
          className="ui-img-card img-1"
        />
        {show && (
          <div className="appear">
            <a
              href="https://www.figma.com/file/uiJMOdpq5hEpAotRVqGNHo/Transcendental-Client-Application?type=design&node-id=0-1&mode=design&t=R1PgSVGwzgEgHaq0-0"
              target="_blank">
              Client App (In Development)
            </a>
            <p>UX/UI | REACT | SCSS | GOOGLE & VELOX API</p>
            <i class="fa-solid fa-angle-down" onClick={toggleAppearance}></i>
          </div>
        )}
      </div>

      <div className="collage-card" onClick={toggleAppearance}>
        <img
          className="collage-img"
          src={Images.Champ}
          alt="CBC Champion Plaza"
          width="300"
        />
        {showInfo && (
          <div className="appear">
            <a
              href="http://championplazatemp.s3-website-us-east-1.amazonaws.com/"
              target="_blank">
              CBC Champion Plaza
            </a>
            <a
              href="https://github.com/paul88vera/champion-plaza"
              target="_blank">
              Repository
            </a>
            <p>UX/UI | REACT | TAILWINDCSS | BLOGGER API</p>
            <i class="fa-solid fa-angle-down" onClick={toggleAppearance}></i>
          </div>
        )}
      </div>

      <div className="collage-card" onClick={toggleAppearance1}>
        <img
          className="collage-img"
          src={Images.Circulate}
          alt="Circulate"
          width="300"
        />
        {showInfo1 && (
          <div className="appear toggleAppearance">
            <a href="https://circulate-app.vercel.app/" target="_blank">
              Circulate
            </a>
            <a
              href="https://github.com/paul88vera/CirculateAPP"
              target="_blank">
              Repository
            </a>
            <p>UX/UI | REACT | TYPESCRIPT | CLERK | T3STACK</p>
            <i class="fa-solid fa-angle-down" onClick={toggleAppearance}></i>
          </div>
        )}
      </div>

      <div className="collage-card" onClick={toggleAppearance2}>
        <img
          className="collage-img"
          src={Images.Students}
          alt="CBC Student Camp"
          width="300"
        />
        {showInfo2 && (
          <div className="appear">
            <a
              href="http://studentcamp.s3-website-us-east-1.amazonaws.com/"
              target="_blank">
              CBC Student Camp
            </a>
            <a
              href="https://github.com/paul88vera/student-camp"
              target="_blank">
              Repository
            </a>
            <p>UX/UI | REACT | JS | WordPress</p>
            <i class="fa-solid fa-angle-down" onClick={toggleAppearance}></i>
          </div>
        )}
      </div>

      <div className="collage-card" onClick={toggleAppearance3}>
        <img
          className="collage-img"
          src={Images.Inspired}
          alt="Inspired"
          width="300"
        />
        {showInfo3 && (
          <div className="appear">
            <a href="https://inspireddentistrypc.com/" target="_blank">
              Inspired Dentistry
            </a>
            <p>UI | CSS | JS | WordPress</p>
            <i class="fa-solid fa-angle-down" onClick={toggleAppearance}></i>
          </div>
        )}
      </div>

      <div className="collage-card" onClick={toggleAppearance4}>
        <img
          className="collage-img"
          src={Images.Gower}
          alt="Gower"
          width="300"
        />
        {showInfo4 && (
          <div className="appear">
            <a href="https://gowerfamilydentistry.com/" target="_blank">
              Gower Family Dentistry
            </a>
            <p>UI | CSS | JS | WordPress</p>
            <i class="fa-solid fa-angle-down" onClick={toggleAppearance}></i>
          </div>
        )}
      </div>
    </section>
  );
};

export default All;
