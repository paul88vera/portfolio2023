import {useState} from 'react';

export default function Burger() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="topnav" role="navigation">

    <button className="btn bars" aria-expanded="false">
      <i className="fa fa-bars" onMouseDown={() => {
      setShowNav(true)
    }}></i>
    </button>
{showNav && <div id="myLinks" aria-hidden="true" aria-labelledby="icon">
    <button className="btn exe link" aria-expanded="true" onMouseDown={() => {
      setShowNav(false)
    }}>X</button>
      <a href="#home" className="link">Home</a>
      <a href="#giving" className="link">Giving</a>
      <a href="#involved" className="link">Get Involved</a>
    </div>}
  </div>
  )
  
};
