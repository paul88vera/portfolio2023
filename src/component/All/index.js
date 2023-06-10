/*eslint-disable*/
import { useState } from "react"
import Images from "../../constants/images"

const All = () => {
  const [showInfo, setShowInfo] = useState(false)
  const [showInfo1, setShowInfo1] = useState(false)
  const [showInfo2, setShowInfo2] = useState(false)

  const collageImg = document.getElementsByClassName("collage-img")

  const toggleAppearance = () => {
    setShowInfo(!showInfo)
    collageImg.style.display = "none"
  }
  const toggleAppearance1 = () => {
    setShowInfo1(!showInfo1)
  }
  const toggleAppearance2 = () => {
    setShowInfo2(!showInfo2)
  }

  return (
    <section id="All">
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
            <p>REACT | JS | WordPress</p>
            <i class="fa-solid fa-angle-down" onClick={toggleAppearance}></i>
          </div>
        )}
      </div>
    </section>
  )
}

export default All
