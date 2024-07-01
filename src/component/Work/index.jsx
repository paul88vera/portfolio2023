import { useState } from "react";
import Images from "../../constants/images";
import Modal from "../../props/Modal";

const cards = [
  {
    id: 1,
    name: "Client App",
    img: Images.Mob,
    repoLink: "https://github.com/transcendentalagency/clientApp",
    webLink: "https://evident-zeta.vercel.app/",
    figLink:
      "https://www.figma.com/file/uiJMOdpq5hEpAotRVqGNHo/Transcendental-Client-Application?type=design&node-id=0-1&mode=design&t=R1PgSVGwzgEgHaq0-0",
    para: "UX/UI | REACT | JSX | TAILWINDCSS | AUTH0 | ZOHO API | GOOGLE ANALYTICS",
    type: "REACT",
    case: "I developed the front-end for an analytics dashboard for a marketing company. The required features included integrating data from the ZoHo API and Google Analytics API. I implemented the design according to the marketing company's specifications, and this was validated by their graphic designers. Future enhancements of the application will include new features such as an online payment option via the QuickBooks API and a bulk API call to request a broader range of data. The application utilizes Auth0 for authentication and will incorporate administrator roles upon production release. Currently, the application is still in development with Auth0 temporarily disabled for viewing purposes. It will soon enter the alpha testing phase.",
  },
  {
    id: 3,
    name: "Circulate",
    img: Images.circulate,
    repoLink: "https://github.com/paul88vera/circulateApp",
    webLink: "https://circulate-app.vercel.app/",
    para: "UX/UI | NEXT | TYPESCRIPT | TAILWINDCSS | RESTAPI | CLERK",
    type: "NEXT",
    case: "Circulate is a comprehensive full-stack project designed to showcase a client's application idea and attract investor interest. I developed the application according to the client's specifications, successfully demonstrating its viability to potential investors. Following the acquisition of funding, we plan to develop an enhanced and upgraded version of this application in the near future.",
  },
  {
    id: 0,
    name: "CBC Champion Plaza",
    img: Images.cbc,
    repoLink: "https://github.com/paul88vera/champion-plaza",
    webLink: "http://championplazatemp.s3-website-us-east-1.amazonaws.com/",
    para: "UX/UI | REACT | JSX | TAILWINDCSS | BLOGGER API",
    type: "REACT",
    case: "I designed this website as an advertisement for the Community Bible Church Champion Plaza, aimed at attracting interest and investment in the plaza. To meet their preferred use case, I integrated the Blogger API to inform users of upcoming events. The website is currently not in production, as I was the sole maintainer and have since left the company. However, this is my recreation of the website, now connected to a temporary Blogger API as a placeholder.",
  },
  {
    id: 2,
    name: "10-4 Woodworks",
    img: Images.tfww,
    repoLink: "https://github.com/paul88vera/104-WoodWorks",
    webLink: "#",
    para: "UX/UI | REACT | JSX | CSS | CLERK | MONGODB",
    type: "REACT",
    case: "I developed this website for a client and will also use it as a template for showcasing potential e-commerce websites built with React. The site includes administrative logins, allowing administrators to easily create and delete shop items. Basic CRUD operations were implemented exclusively for administrators using Clerk. While basic users can log in, they cannot view administrator profiles or actions, but they can save their cart items for later use. An online payment API will be integrated at a later stage once the client is satisfied with the development. This project is currently in development and is expected to be completed this year. Please feel free to view the repository.",
  },
  {
    id: 4,
    name: "Inspire Dental Center",
    img: Images.inspire,
    repoLink: "#",
    webLink: "https://inspirefirestone.com/",
    para: "UI | HTML | CSS | JS | PHP | WORDPRESS | ELEMENTOR",
    type: "WORDPRESS",
    case: "This is a responsive and user-friendly website created for dental services. The site was developed using WordPress and Elementor, with all contact links managed globally for quick modifications. Since the website's launch, the client has increased their ROI by three times.",
  },
  // {
  //   id: 5,
  //   name: "Inspired Dentistry",
  //   img: Images.inspired,
  //   repoLink: "#",
  //   webLink: "https://inspireddentistrypc.com/",
  //   para: "UI | HTML | CSS | JS | PHP | WORDPRESS | ELEMENTOR",
  //   type: "WORDPRESS",
  //   case: "this is a case",
  // },
  // {
  //   id: 6,
  //   name: "Gower Family Dentistry",
  //   img: Images.gower,
  //   repoLink: "#",
  //   webLink: "https://gowerfamilydentistry.com/",
  //   para: "UI | HTML | CSS | JS | PHP | WORDPRESS | ELEMENTOR",
  //   type: "WORDPRESS",
  //   case: "this is a case",
  // },
  {
    id: 7,
    name: "DLP Services",
    img: Images.dlp,
    repoLink: "#",
    webLink: "https://dlpservicesllc.com/",
    para: "UI | HTML | CSS | JS | PHP | WORDPRESS | ELEMENTOR",
    type: "WORDPRESS",
    case: "This is a mobile-friendly and responsive website that I developed using WordPress and Elementor. I received the webpage designs and matched them according to the specifications provided by the graphic designers. All contact links, including social media, booking, address, phone, and email, are managed globally using PHP functions for easy updates. This website is one of two that I developed for DLP Services.",
  },
  // {
  //   id: 8,
  //   name: "The Smile Spot",
  //   img: Images.Spot,
  //   repoLink: "#",
  //   webLink: "https://www.thesmilespottx.com/",
  //   para: "UI | HTML | CSS | JS | PHP | WORDPRESS | ELEMENTOR",
  //   type: "WORDPRESS",
  //   case: "this is a case",
  // },
  // {
  //   id: 9,
  //   name: "Marshlands Dentistry",
  //   img: Images.Marshlands,
  //   repoLink: "#",
  //   webLink: "https://marshlandsdental.com/",
  //   para: "UI | CSS | JS | PHP | WORDPRESS | ELEMENTOR",
  //   type: "WORDPRESS",
  //   case: "this is a case",
  // },
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
