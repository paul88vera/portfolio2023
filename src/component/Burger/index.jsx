import { useState } from "react";

export default function Burger() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="topnav" role="navigation">
      <button
        className="btn bars"
        aria-expanded="false"
        onClick={() => {
          setShowNav(true);
        }}>
        <i className="fa fa-bars"></i>
      </button>

      {showNav && (
        <div>
          <div
            id="myLinks"
            aria-hidden="true"
            aria-labelledby="icon"
            onClick={() => {
              setShowNav(false);
            }}>
            <button className="btn exe link" aria-expanded="true">
              X
            </button>
            <a
              href="#home"
              className="link"
              onClick={() => {
                setShowNav(false);
              }}>
              Home
            </a>
            <a
              href="#about"
              className="link"
              onClick={() => {
                setShowNav(false);
              }}>
              About
            </a>
            <a
              href="#experience"
              className="link"
              onClick={() => {
                setShowNav(false);
              }}>
              Experience
            </a>
            <a
              href="#portfolio"
              className="link"
              onClick={() => {
                setShowNav(false);
              }}>
              Portfolio
            </a>
            <a href="/resume" target="_blank">
              Resume
            </a>
          </div>
          <div className="mobile-nav-footer">
            <a href="tel:+12105019271">CALL</a>
            <a href="mailto:verafiedcreations@gmail.com">EMAIL</a>
          </div>
        </div>
      )}
    </div>
  );
}
