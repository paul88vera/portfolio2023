import { useState } from "react";
import Modal from "../../props/Card";

const cards = [
  {
    id: 0,
    name: "CBC Champion Plaza",
    img: "https://s3.amazonaws.com/paulvera.com/static/media/ChampionPlaza.0dd292a6cb5e6ef70da9.png",
    repoLink: "https://github.com/paul88vera/champion-plaza",
    webLink: "http://championplazatemp.s3-website-us-east-1.amazonaws.com/",
    para: "UX/UI | REACT | TAILWINDCSS | BLOGGER API",
    type: "REACT",
  },
  {
    id: 1,
    name: "Circulate",
    img: "https://s3.amazonaws.com/paulvera.com/static/media/Circulate.c10eef91acafcb09a075.png",
    repoLink: "https://github.com/paul88vera/circulateApp",
    webLink: "https://circulate-app.vercel.app/",
    para: "UX/UI | NEXT | TYPESCRIPT | TAILWINDCSS",
    type: "NEXT",
  },
  {
    id: 2,
    name: "Gower Family Dentistry",
    img: "https://s3.amazonaws.com/paulvera.com/static/media/Gower.300f7aadfa77bc566e5f.jpg",
    repoLink: "#",
    webLink: "https://gowerfamilydentistry.com/",
    para: "UI | CSS | JS | WORDPRESS",
    type: "WORDPRESS",
  },
  {
    id: 3,
    name: "Inspired Dentistry",
    img: "https://s3.amazonaws.com/paulvera.com/static/media/Inspired.d445a2b438813f2c4697.jpg",
    repoLink: "#",
    webLink: "https://inspireddentistrypc.com/",
    para: "UI | CSS | JS | WORDPRESS",
    type: "WORDPRESS",
  },
  {
    id: 4,
    name: "Client App (In Development)",
    img: "https://s3.amazonaws.com/paulvera.com/static/media/mobile_ui.ffe376859412f80cf243.gif",
    repoLink: "#",
    webLink:
      "https://www.figma.com/file/uiJMOdpq5hEpAotRVqGNHo/Transcendental-Client-Application?type=design&node-id=0-1&mode=design&t=R1PgSVGwzgEgHaq0-0",
    para: "UX/UI | REACT | SCSS | VELOX API",
    type: "REACT",
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
                  style={{ width: "190px", height: "395px", margin: "0 auto" }}
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
