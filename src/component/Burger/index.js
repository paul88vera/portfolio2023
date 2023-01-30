import {useState} from 'react';

export default function Burger() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="topnav" role="navigation">

    <button className="btn bars" aria-expanded="false" onClick={() => {
      setShowNav(true);
    }}>
      <i className="fa fa-bars"></i>
    </button>

  {showNav && 
  <div id="myLinks" aria-hidden="true" aria-labelledby="icon">
    <button className="btn exe link" aria-expanded="true" onClick={() => {
      setShowNav(false)
    }}>X</button>
      <a href="#home" className="link" onClick={() => {
      setShowNav(false)
    }}>Home</a>
      <a href="#about" className="link" onClick={() => {
      setShowNav(false)
    }}>About</a>
      <a href="#portfolio" className="link" onClick={() => {
      setShowNav(false)
    }}>Portfolio</a>
    </div>}

  </div>
  )
  
};
