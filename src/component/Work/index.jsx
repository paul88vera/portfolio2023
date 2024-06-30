import { useState } from "react";
import Images from "../../constants/images";
import Modal from "../../props/Modal";

const cards = [
  {
    id: 0,
    name: "CBC Champion Plaza",
    img: Images.cbc,
    repoLink: "https://github.com/paul88vera/champion-plaza",
    webLink: "http://championplazatemp.s3-website-us-east-1.amazonaws.com/",
    para: "UX/UI | REACT | TAILWINDCSS | BLOGGER API",
    type: "REACT",
    case: "this is a case",
  },
  {
    id: 1,
    name: "Client App",
    img: Images.Mob,
    repoLink: "https://github.com/transcendentalagency/clientApp",
    webLink: "https://evident-zeta.vercel.app/",
    figLink:
      "https://www.figma.com/file/uiJMOdpq5hEpAotRVqGNHo/Transcendental-Client-Application?type=design&node-id=0-1&mode=design&t=R1PgSVGwzgEgHaq0-0",
    para: "UX/UI | REACT | TAILWINDCSS | AUTH0 | ZOHO API",
    type: "REACT",
    case: "this is a case",
  },
  {
    id: 2,
    name: "10-4 Woodworks",
    img: Images.tfww,
    repoLink: "https://github.com/paul88vera/104-WoodWorks",
    webLink: "#",
    para: "UX/UI | REACT | CSS | CLERK | MONGODB",
    type: "REACT",
    case: "this is a case",
  },
  {
    id: 3,
    name: "Circulate",
    img: Images.circulate,
    repoLink: "https://github.com/paul88vera/circulateApp",
    webLink: "https://circulate-app.vercel.app/",
    para: "UX/UI | NEXT | TYPESCRIPT | TAILWINDCSS | CLERK",
    type: "NEXT",
    case: "this is a case",
  },
  {
    id: 4,
    name: "Inspire Dental Center",
    img: Images.inspire,
    repoLink: "#",
    webLink: "https://inspirefirestone.com/",
    para: "UI | CSS | JS | WORDPRESS",
    type: "WORDPRESS",
    case: "this is a case",
  },
  {
    id: 5,
    name: "Inspired Dentistry",
    img: Images.inspired,
    repoLink: "#",
    webLink: "https://inspireddentistrypc.com/",
    para: "UI | CSS | JS | WORDPRESS",
    type: "WORDPRESS",
    case: "this is a case",
  },
  {
    id: 6,
    name: "Gower Family Dentistry",
    img: Images.gower,
    repoLink: "#",
    webLink: "https://gowerfamilydentistry.com/",
    para: "UI | CSS | JS | WORDPRESS",
    type: "WORDPRESS",
    case: "this is a case",
  },
];

export default function Work() {
  const [isModalOpen, setModalOpen] = useState();
  const [filterType, setFilterType] = useState(null);

  // Modal opens by index/key
  const openModal = (index) => {
    setModalOpen(index);
  };

  // Modal Closes if open
  const clearModal = () => {
    setModalOpen(null);
  };

  // Filtered Work by Type
  const filteredArray = filterType
    ? cards.filter((item) => item.type === filterType)
    : cards;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          gap: "1em",
          margin: "0 auto 2em auto",
          width: "100%",
          justifyContent: "center",
        }}>
        <button
          className="filter-btn"
          style={{ backgroundColor: "transparent" }}
          onClick={() => {
            setFilterType(null);
          }}
          value="ALL">
          ALL
        </button>
        <button
          className="filter-btn"
          style={{ backgroundColor: "transparent" }}
          onClick={(e) => {
            setFilterType(e.target.value);
          }}
          value="REACT">
          REACT
        </button>
        <button
          className="filter-btn"
          style={{ backgroundColor: "transparent" }}
          onClick={(e) => {
            setFilterType(e.target.value);
          }}
          value="NEXT">
          NEXT
        </button>
        <button
          className="filter-btn"
          style={{ backgroundColor: "transparent" }}
          onClick={(e) => {
            setFilterType(e.target.value);
          }}
          value="WORDPRESS">
          WORDPRESS
        </button>
      </div>
      <div id="All">
        {filteredArray.map(
          (card, index) =>
            (filterType === null || card.type === filterType) && (
              <div
                className="collage-card"
                key={index}
                style={{
                  background: `${card.img}`,
                }}>
                <img
                  src={card.img}
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "600px",
                  }}
                  alt={card.name}
                  width="400"
                  className="collage-img"
                  draggable="false"
                  onClick={() => openModal(index)}
                />
                {isModalOpen === index && (
                  <Modal
                    name={card.name}
                    webLink={card.webLink}
                    caseStudy={card.case}
                    para={card.para}
                    img={card.img}
                    repoLink={card.repoLink}
                    isOpen={true}
                    onClose={clearModal}
                  />
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
}
