import React, { Component } from 'react';

// import my components
import { Heading } from './components/Heading';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import { Canvas } from './components/Canvas';
import { Jumbo } from './components/Jumbo';

import { SafariSmoothScroll } from './scripts/SafariSmoothScroll';
import { handleScroll } from './scripts/handleScroll.js';

// import styles
import './styles/App.css';

class App extends Component {

  componentDidMount() {
    SafariSmoothScroll();
    handleScroll();
    // wake up contact server 
    fetch('https://lit-mountain-55987.herokuapp.com/wakeup');
  }
  render() {
    return (
      <div className='container'>
        <Canvas />
        <Heading />
        <Jumbo />

        <div className='content-container'>
          <About />
          <Contact />
          <Projects />
        </div>
        <div className='footer'>
          <h6> Made by Marshall Slemp 2019</h6>
        </div>
      </div>
    )
  }
}

export default App;
