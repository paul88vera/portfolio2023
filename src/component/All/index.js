import { useState } from "react";
import Images from "../../constants/images";

const All = () => {
  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);
  const [showInfo3, setShowInfo3] = useState(false);
  const [showInfo4, setShowInfo4] = useState(false);
  const [showInfo5, setShowInfo5] = useState(false);
  const [showInfo6, setShowInfo6] = useState(false);
  const [showInfo7, setShowInfo7] = useState(false);

  return (
    <section id="All">
      <div className="collage-card" onMouseEnter={() => {
          setShowInfo1(true);
        }}
        onMouseLeave={() => {
          setShowInfo1(false);
        }}>
        <img className="collage-img" src={Images.Champ} alt="CBC Champion Plaza" width="300" />
        {showInfo1 && <div className="appear">
          <a href="https://www.championplaza.com/">CBC Champion Plaza</a>
          <p>HTML | CSS | JS</p>
        </div>}
      </div>

      <div className="collage-card" onMouseEnter={() => {
          setShowInfo2(true);
        }}
        onMouseLeave={() => {
          setShowInfo2(false);
        }}>
        <img className="collage-img" src={Images.Days} alt="CBC 21 Days Fasting Guide" width="300" />
        {showInfo2 && <div className="appear">
          <a href="https://www.communitybible.com/21days">
            CBC 21 Days of Fasting Guide
          </a>
          <p>WordPress | CSS | JS</p>
        </div>}
      </div>

      <div className="collage-card" onMouseEnter={() => {
          setShowInfo3(true);
        }}
        onMouseLeave={() => {
          setShowInfo3(false);
        }}>
        <img className="collage-img" src={Images.Leads} alt="CBC LeadsTV" width="300" />
        {showInfo3 && <div className="appear">
          <a href="https://www.communitybible.com/leadstv-test123455/">
            CBC LeadTV
          </a>
          <p>WordPress | CSS | JS</p>
        </div>}
      </div>

      <div className="collage-card" onMouseEnter={() => {
          setShowInfo4(true);
        }}
        onMouseLeave={() => {
          setShowInfo4(false);
        }}>
        <img className="collage-img" src={Images.Students} alt="Students page" width="300" />
        {showInfo4 && <div className="appear">
          <a href="https://www.communitybible.com/leadstv-test123455/">
            CBC Students Page
          </a>
          <p>WordPress | CSS | JS</p>
        </div>}
      </div>

      <div className="collage-card" onMouseEnter={() => {
          setShowInfo5(true);
        }}
        onMouseLeave={() => {
          setShowInfo5(false);
        }}>
        <img className="collage-img" src={Images.TenFour} alt="10-4 Woodworks" width="300" />
        {showInfo5 && <div className="appear">
          <a href="https://main.d3p0lxo7kvw2jn.amplifyapp.com/">Woodworking Site Template</a>
          <a href="https://www.github.com/paul88vera/104-woodworks">Repository</a>
          <p>React | CSS | JS</p>
          </div>}
        </div>

        <div className="collage-card" onMouseEnter={() => {
          setShowInfo6(true);
        }}
        onMouseLeave={() => {
          setShowInfo6(false);
        }}>
        <img className="collage-img" src={Images.Circulize} alt="Circulize - Restaurant Finder" width="300" />
        {showInfo6 && <div className="appear">
          <a href="http://circulate.com.s3-website-us-east-1.amazonaws.com">Circulize</a>
          <a href="https://www.github.com/paul88vera/restaurant-finder">Repository</a>
          <p>React | CSS | JS</p>
          </div>}
        </div>

        <div className="collage-card"
        onMouseEnter={() => {
          setShowInfo7(true);
        }}
        onMouseLeave={() => {
          setShowInfo7(false);
        }}>
        <img className="collage-img" src={Images.Social} alt="Social Network API" width="300" />
        {showInfo7 && <div className="appear">
          <a href="https://www.github.com/paul88vera/social-network-api">
            Social Network API
          </a>
          <p>JS | GraphQL | Backend</p>
        </div>}
      </div>
    </section>
  );
};

export default All;
