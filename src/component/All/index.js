/*eslint-disable*/
import { useState } from "react";
import Images from "../../constants/images";

const All = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);
  const [showInfo3, setShowInfo3] = useState(false);
  const [showInfo4, setShowInfo4] = useState(false);

  return (
    <section id="All">
      <div
        className="collage-card"
        onMouseEnter={() => {
          setShowInfo(true);
        }}
        onMouseLeave={() => {
          setShowInfo(false);
        }}
      >
        <img
          className="collage-img"
          src={Images.MTI}
          alt="CBC Ministry Training Institute"
          width="300"
        />
        {showInfo && (
          <div className="appear">
            <a href="http://ministrytraining.institute/" target="_blank">
              CBC Ministry Training Institute
            </a>
            <a href="https://www.github.com/paul88vera/CBCMTI" target="_blank">
              Repository
            </a>
            <p>REACT | CSS | WordPress</p>
          </div>
        )}
      </div>

      <div
        className="collage-card"
        onMouseEnter={() => {
          setShowInfo1(true);
        }}
        onMouseLeave={() => {
          setShowInfo1(false);
        }}
      >
        <img
          className="collage-img"
          src={Images.Students}
          alt="Students page"
          width="300"
        />
        {showInfo1 && (
          <div className="appear">
            <a href="https://www.communitybible.com/students/" target="_blank">
              CBC Students Page
            </a>
            <p>REACT | CSS | WordPress</p>
          </div>
        )}
      </div>

      <div
        className="collage-card"
        onMouseEnter={() => {
          setShowInfo2(true);
        }}
        onMouseLeave={() => {
          setShowInfo2(false);
        }}
      >
        <img
          className="collage-img"
          src={Images.Comm}
          alt="Community Group Resources page"
          width="300"
        />
        {showInfo2 && (
          <div className="appear">
            <a
              href="https://www.communitybible.com/community-group-resources/"
              target="_blank"
            >
              CBC Community Group Resources
            </a>
            <p>REACT | CSS | WordPress</p>
          </div>
        )}
      </div>

      <div
        className="collage-card"
        onMouseEnter={() => {
          setShowInfo3(true);
        }}
        onMouseLeave={() => {
          setShowInfo3(false);
        }}
      >
        <img
          className="collage-img"
          src={Images.Champ}
          alt="CBC Champion Plaza"
          width="300"
        />
        {showInfo3 && (
          <div className="appear">
            <a href="https://championplaza.com/" target="_blank">
              CBC Champion Plaza
            </a>
            <p>HTML | CSS | JS</p>
          </div>
        )}
      </div>

      <div
        className="collage-card"
        onMouseEnter={() => {
          setShowInfo4(true);
        }}
        onMouseLeave={() => {
          setShowInfo4(false);
        }}
      >
        <img
          className="collage-img"
          src={Images.Christmas}
          alt="CBC Christmas"
          width="300"
        />
        {showInfo4 && (
          <div className="appear">
            <a href="http://www.cbcchristmas.com" target="_blank">
              CBC Christmas
            </a>
            <p>HTML | CSS | JS</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default All;
