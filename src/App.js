import './App.css';
import Home from './pages/home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import All from './component/All';
import React from './component/React';
import Backend from './component/Backend';
import Python from './component/Python';
import WordPress from './component/WordPress';
import Portfolio from './component/Portfolio';

const App = () => {
  return (

      <Router>
      <Home />
      <Portfolio />
      <div id="port-nav">
          <Routes>
            <Route path="/" component={<All />}/>
            <Route path="/React" component={<React />}/>
            <Route path="/Backend" component={<Backend />}/>
            <Route path="/Python" component={<Python />}/>
            <Route path="/WordPress" component={<WordPress />}/>
          </Routes>
      </div>

    </Router>
  );
}

export default App;
