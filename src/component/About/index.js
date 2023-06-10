import { useEffect } from "react"

import aboutImg from "../../img/about.png"

export default function About() {
  useEffect(() => {
    const handleScroll = () => {
      const icon0 = document.getElementById("icon0")
      const icon1 = document.getElementById("icon1")
      const icon2 = document.getElementById("icon2")
      const icon3 = document.getElementById("icon3")
      const icon4 = document.getElementById("icon4")

      const rotation = window.pageYOffset / 5
      icon0.style.transform = `rotate(${rotation}deg)`
      icon1.style.transform = `rotate(${rotation}deg)`
      icon2.style.transform = `rotate(${rotation}deg)`
      icon3.style.transform = `rotate(${rotation}deg)`
      icon4.style.transform = `rotate(${rotation}deg)`
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section id="about">
      <div className="img-cont">
        <img
          src={aboutImg}
          alt="Some programming languages and frameworks I know"
          width="300px"
        />
      </div>
      <div id="about-para">
        <h1>About Me</h1>
        <h3>Full Stack Developer</h3>
        <p>
          I am a developer who has a passion for creating responsive and
          functional websites. I have a strong background in diverse creative
          occupations and have experience with a variety of programming
          languages, including HTML, CSS, JavaScript, and Python.
        </p>
        <p>
          I am skilled in front-end and back-end development, and have a strong
          knowledge in frameworks like Vue, React, and JQuery. In my previous
          roles, I have successfully designed and developed various web and
          mobile applications.
        </p>
        <p>
          I am eager to learn new technologies and am committed to keeping up
          with the latest developments in the field. In my spare time, I enjoy
          utilizing HackTheBox challenges and finding bugs in HackerOne
          companies to continue my cybersecurity knowledge.
        </p>
        <p>
          I am excited to bring my skills and experience to a forward-thinking
          and dynamic team. I am eager to help develop innovative software
          solutions that will meet the needs of users.
        </p>
        <div id="social-cont">
          <ul>
            <li>
              <i id="icon0" className="fa-solid fa-plus rotate-icon"></i>
              Paul Vera
            </li>
            <li>
              <i id="icon1" className="fa-solid fa-plus rotate-icon"></i>
              paul88vera@gmail.com
            </li>
            <li>
              <i id="icon2" className="fa-solid fa-plus rotate-icon"></i>
              github.com/paul88vera
            </li>
            <li>
              <i id="icon3" className="fa-solid fa-plus rotate-icon"></i>Texas,
              USA
            </li>
            <li>
              <i id="icon4" className="fa-solid fa-plus rotate-icon"></i>
              210-501-9271
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
