/*eslint-disable*/
import { useState } from "react"
import Images from "../../constants/images"

const All = () => {
  const [showInfo, setShowInfo] = useState(false)
  const [showInfo2, setShowInfo2] = useState(false)
  const [showInfo3, setShowInfo3] = useState(false)
  const [showInfo4, setShowInfo4] = useState(false)

  const toggleAppearance = () => {
    setShowInfo(!showInfo)
  }

  const toggleAppearance2 = () => {
    setShowInfo2(!showInfo2)
  }
  const toggleAppearance3 = () => {
    setShowInfo3(!showInfo3)
  }
  const toggleAppearance4 = () => {
    setShowInfo4(!showInfo4)
  }

  return (
    <section id="All">
      <img
        src={Images.Mob}
        alt="mobile darkmode ui sample #1"
        width="300"
        className="ui-img-card img-1"
      />

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
            <p>REACT | TAILWINDCSS | BLOGGER API</p>
            <i class="fa-solid fa-angle-down" onClick={toggleAppearance}></i>
          </div>
        )}
      </div>

      {/* This is an unfinished project template */}
      {/* <div className="collage-card" onClick={toggleAppearance1}>
        <img
          className="collage-img"
          src={Images.Circulate}
          alt="Circulate"
          width="300"
        />
        {showInfo1 && (
          <div className="appear toggleAppearance">
            <a href="https://circulate-app.vercel.app/" target="_blank">
              Circulate APP
            </a>
            <a
              href="https://github.com/paul88vera/CirculateAPP"
              target="_blank">
              Repository
            </a>
            <p>T3STACK | TYPESCRIPT | CLERK</p>
            <i class="fa-solid fa-angle-down" onClick={toggleAppearance}></i>
          </div>
        )}
      </div> */}

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
            <p>REACT | JS | WordPress</p>
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
            <p>CSS | JS | WordPress</p>
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
            <p>CSS | JS | WordPress</p>
            <i class="fa-solid fa-angle-down" onClick={toggleAppearance}></i>
          </div>
        )}
      </div>
    </section>
  )
}

export default All
