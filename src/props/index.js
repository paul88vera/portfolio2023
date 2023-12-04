// /*eslint-disable*/
// import { useState } from "react";
// import Images from "../constants/images";

// export default function Work() {
//   // const [show, setShow] = useState(false);
//   const [isHidden, setIsHidden] = useState(false);
//   const [works] = useState([
//     {
//       id: 0,
//       name: "CBC Champion Plaza",
//       img: Images.Champ,
//       repoLink: "https://github.com/paul88vera/champion-plaza",
//       webLink: "http://championplazatemp.s3-website-us-east-1.amazonaws.com/",
//       para: "REACT | TAILWINDCSS | BLOGGER API",
//     },
//     {
//       id: 1,
//       name: "Circulate",
//       img: Images.Circulate,
//       repoLink: "https://github.com/paul88vera/CirculateAPP",
//       webLink: "https://circulate-app.vercel.app/",
//       para: "T3STACK | TYPESCRIPT | CLERK",
//     },
//     {
//       id: 2,
//       name: "Gower Family Dentistry",
//       img: Images.Gower,
//       repoLink: "#",
//       webLink: "https://gowerfamilydentistry.com/",
//       para: "CSS | JS | WordPress",
//       type: "WordPress",
//     },
//     {
//       id: 3,
//       name: "Inspired Dentistry",
//       img: Images.Inspired,
//       repoLink: "#",
//       webLink: "https://inspireddentistrypc.com/",
//       para: "CSS | JS | WordPress",
//       type: "WordPress",
//     },
//     {
//       id: 4,
//       name: "CBC Student Camp",
//       img: Images.Students,
//       repoLink: "https://github.com/paul88vera/student-camp",
//       webLink: "http://studentcamp.s3-website-us-east-1.amazonaws.com/",
//       para: "REACT | CSS | WordPress",
//       type: "WordPress",
//     },
//   ]);

//   // const hiddenCardStyle = {
//   //   position: "relative",
//   //   top: 0,
//   //   left: 0,
//   //   zIndex: 999,
//   //   visibility: isHidden ? "hidden" : "visible",
//   // };

//   const toggleCardAppearance = () => {
//     setIsHidden(!isHidden);
//   };

//   // return (
//   //   <div className="collage-card">
//   //     {works.map((works) => (
//   //       <div key={works.id} className="card-container">
//   //         <img
//   //           onClick={toggleCardAppearance}
//   //           className="collage-img"
//   //           src={works.img}
//   //           alt={works.name}
//   //           width="300"
//   //         />
//   //         <div style={hiddenCardStyle} data-id={works.id}>
//   //           <a href={works.repoLink} target="_blank">
//   //             Repository
//   //           </a>
//   //           <a href={works.webLink} target="_blank">
//   //             {works.name}
//   //           </a>
//   //           <p>{works.para}</p>
//   //         </div>
//   //       </div>
//   //     ))}
//   //   </div>
//   // );

//   return (
//     <div className="collage-card">
//       {works.map((works) => (
//         <div key={works.id} className="card-container">
//           <img
//             onClick={toggleCardAppearance}
//             className="collage-img"
//             src={works.img}
//             alt={works.name}
//             width="300"
//           />
//           {isHidden && (
//             <div className="appear" data-id={works.id}>
//               <a href={works.repoLink} target="_blank">
//                 Repository
//               </a>
//               <a href={works.webLink} target="_blank">
//                 {works.name}
//               </a>
//               <p>{works.para}</p>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
