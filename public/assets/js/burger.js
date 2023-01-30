/*eslint-disable */

const bars = document.querySelector(".bars");
const exe = document.querySelector(".exe");
const linkedArray = document.querySelectorAll(".link");
// const linked = document.querySelector(".link");
const links = document.getElementById("myLinks");

// animations for menu
const scrollIn = [{ height: "0vh" }, { height: "100vh" }];
const scrollInTiming = {
  duration: 300,
  iterations: 1,
};
const scrollOut = [
  { height: "100vh" },
  { height: "0vh" },
  { opacity: "1" },
  { opacity: "0" },
];
const scrollOutTiming = {
  duration: 500,
  iterations: 1,
};

// menu bars clicked open
bars.addEventListener(
  "click",
  (openNav = (e) => {
    console.log("clicked open");
    e.preventDefault();

    if (links.ariaHidden === "true") {
      bars.ariaExpanded = "true";

      if (bars.ariaExpanded === "true") {
        links.animate(scrollIn, scrollInTiming);
        links.style.display = "flex";
        links.style.height = "100vh";
        links.ariaHidden = "false";
        bars.style.display = "none";
        exe.style.display = "flex";
      }
    } else {
      bars.ariaExpanded = "false";
      links.ariaHidden = "true";
    }
  })
);

// all links close div after being clicked
linkedArray.forEach((el) => {
  el.addEventListener(
    "click",
    (closeNav = () => {
      console.log("clicked close");
      if (links.ariaHidden === "false") {
        bars.ariaExpanded = "false";

        if (bars.ariaExpanded === "false") {
          links.animate(scrollOut, scrollOutTiming);
          links.ariaHidden = "true";
          links.style.height = "0vh";
          bars.style.display = "flex";
          exe.style.display = "none";
        }
      } else {
        bars.ariaExpanded = "true";
        links.ariaHidden = "false";
      }
    })
  );
});
