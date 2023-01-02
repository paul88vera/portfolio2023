import PortHeader from '../PortHeader';
import React from 'react';
import Select from 'react-select';

import All from '../All';

const options = [
 {value: 'All', label: '---All---'},
 {value: 'React', label: 'React'},
 {value: 'Python', label: 'Python'},
 {value: 'Backend', label: 'Backend'},
 {value: 'WordPress', label: 'WordPress'},
]

const gallery = document.getElementById('gallery');

const showPage = () => {
 if (options.value === 'React') {
  gallery.appendData = (<React />);
 } else {
  return <All />
 }
}

showPage();

const Portfolio = () => {

  return (
    <section id="portfolio">
      <nav id='port-nav'>
      <PortHeader />
      <Select options={options}/>
      </nav>
      <div id='gallery'>
       {/**collage will append here */}
       <All />
      </div>
    </section>
  )
}

export default Portfolio;