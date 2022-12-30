import { Link } from 'react-router-dom';
import PortHeader from '../PortHeader';

import All from '../All';
import React from '../React';
import Backend from '../Backend';
import Python from '../Python';
import WordPress from '../WordPress';

const Portfolio = () => {

  return (
    <section id="portfolio">
      <nav id='port-nav'>
      <PortHeader />
        <ul>
          <li><Link to="/">All</Link></li>
          <li><Link to="/React">React</Link></li>
          <li><Link to="/Python">Python</Link></li>
          <li><Link to="/Backend">Backend</Link></li>
          <li><Link to="/WordPress">WordPress</Link></li>
        </ul>
      </nav>
      <br/>
      <div id='gallery'>
        <All />
        <React />
        <Backend />
        <Python />
        <WordPress />
      </div>
    </section>
  )
}

export default Portfolio;