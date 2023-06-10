/*eslint-disable*/
import { useState } from "react"
import Images from "../constants/images"

export default function Work() {
  const [isHidden, setIsHidden] = useState(true)
  const [works] = useState([
    {
      id: 0,
      name: "CBC Champion Plaza",
      img: Images.Champ,
      repoLink: "https://github.com/paul88vera/champion-plaza",
      webLink: "http://championplazatemp.s3-website-us-east-1.amazonaws.com/",
      para: "REACT | TAILWINDCSS | BLOGGER API",
    },
    {
      id: 1,
      name: "Circulate",
      img: Images.Circulate,
      repoLink: "https://github.com/paul88vera/CirculateAPP",
      webLink: "https://circulate-app.vercel.app/",
      para: "T3STACK | TYPESCRIPT | CLERK",
    },
    {
      id: 2,
      name: "CBC Student Camp",
      img: Images.Students,
      repoLink: "https://github.com/paul88vera/student-camp",
      webLink: "http://studentcamp.s3-website-us-east-1.amazonaws.com/",
      para: "REACT | JS | WordPress",
    },
    {
      id: 3,
      name: "CBC Community Group Resources",
      img: Images.Comm,
      repoLink: "https://github.com/paul88vera/",
      webLink: "https://www.communitybible.com/community-group-resources/",
      para: "REACT | CSS | WordPress",
    },
    {
      id: 4,
      name: "CBC Ministry Training Institute",
      img: Images.MTI,
      repoLink: "https://github.com/paul88vera/",
      webLink: "http://ministrytraining.institute/",
      para: "REACT | CSS | WordPress",
    },
    {
      id: 5,
      name: "CBC Christmas",
      img: Images.Christmas,
      repoLink: "https://github.com/paul88vera/",
      webLink: "http://www.cbcchristmas.com",
      para: "HTML | CSS | JS",
    },
  ])

  const hiddenCardStyle = {
    position: "relative",
    top: 0,
    left: 0,
    zIndex: 999,
    visibility: isHidden ? "hidden" : "visible",
  }

  const toggleCardAppearance = () => {
    setIsHidden(!isHidden)
  }

  return (
    <div className="collage-card">
      {works.map((works) => (
        <div key={works.id} className="card-container">
          <img
            onClick={toggleCardAppearance}
            className="collage-img"
            src={works.img}
            alt={works.name}
            width="300"
          />
          <div style={hiddenCardStyle} data-id={works.id}>
            <a href={works.repoLink} target="_blank">
              Repository
            </a>
            <a href={works.webLink} target="_blank">
              {works.name}
            </a>
            <p>{works.para}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
