import { useState } from "react";
import Modal from "../../props/Card";
import Images from "../../constants/images";

const cards = [
  {
    id: 0,
    name: "CBC Champion Plaza",
    img: Images.cbc,
    repoLink: "https://github.com/paul88vera/champion-plaza",
    webLink: "http://championplazatemp.s3-website-us-east-1.amazonaws.com/",
    para: "UX/UI | REACT | TAILWINDCSS | BLOGGER API",
    type: "REACT",
  },
  {
    id: 1,
    name: "Client App (In Development)",
    img: Images.Mob,
    repoLink: "https://github.com/transcendentalagency/clientApp",
    webLink: "https://evident-zeta.vercel.app/",
    figLink:
      "https://www.figma.com/file/uiJMOdpq5hEpAotRVqGNHo/Transcendental-Client-Application?type=design&node-id=0-1&mode=design&t=R1PgSVGwzgEgHaq0-0",
    para: "UX/UI | REACT | TAILWINDCSS | AUTH0 | ZOHO API",
    type: "REACT",
  },
  {
    id: 2,
    name: "10-4 Woodworks (In Development)",
    img: Images.tfww,
    repoLink: "https://github.com/paul88vera/104-WoodWorks",
    webLink: "#",
    para: "UX/UI | REACT | CSS | CLERK | MONGODB",
    type: "REACT",
  },
  {
    id: 3,
    name: "Circulate",
    img: Images.circulate,
    repoLink: "https://github.com/paul88vera/circulateApp",
    webLink: "https://circulate-app.vercel.app/",
    para: "UX/UI | NEXT | TYPESCRIPT | TAILWINDCSS | CLERK",
    type: "NEXT",
  },
  {
    id: 4,
    name: "Inspire Dental Center",
    img: Images.inspire,
    repoLink: "#",
    webLink: "https://inspirefirestone.com/",
    para: "UI | CSS | JS | WORDPRESS",
    type: "WORDPRESS",
  },
  {
    id: 5,
    name: "Inspired Dentistry",
    img: Images.inspired,
    repoLink: "#",
    webLink: "https://inspireddentistrypc.com/",
    para: "UI | CSS | JS | WORDPRESS",
    type: "WORDPRESS",
  },
  {
    id: 6,
    name: "Gower Family Dentistry",
    img: Images.gower,
    repoLink: "#",
    webLink: "https://gowerfamilydentistry.com/",
    para: "UI | CSS | JS | WORDPRESS",
    type: "WORDPRESS",
  },
];

export default function Work() {
  const [isModalOpen, setModalOpen] = useState(null);
  const [filterType, setFilterType] = useState(null);

  // Modal opens by index/key
  const openModal = (index) => {
    setModalOpen(index);
  };

  const closeModal = () => {
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
        }}>
        <button
          style={{ backgroundColor: "transparent" }}
          onClick={() => {
            setFilterType(null);
          }}
          value="ALL">
          ALL
        </button>{" "}
        |{" "}
        <button
          style={{ backgroundColor: "transparent" }}
          onClick={(e) => {
            setFilterType(e.target.value);
          }}
          value="REACT">
          REACT
        </button>{" "}
        |{" "}
        <button
          style={{ backgroundColor: "transparent" }}
          onClick={(e) => {
            setFilterType(e.target.value);
          }}
          value="NEXT">
          NEXT
        </button>{" "}
        |{" "}
        <button
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
                onClick={() => openModal(index)}>
                <img
                  src={card.img}
                  style={{ width: "290px", height: "500px", margin: "0 auto" }}
                  alt={card.name}
                  width="300"
                  className="collage-img"
                  draggable="false"
                />
                {isModalOpen === index && (
                  <Modal
                    name={card.name}
                    webLink={card.webLink}
                    para={card.para}
                    repoLink={card.repoLink}
                    isOpen={true}
                    onClose={closeModal}
                  />
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
}
