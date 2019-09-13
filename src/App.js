import React, { Component } from 'react';

// import my components
import { Heading } from './components/Heading';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import { Jumbo } from './components/Jumbo';

import { Canvas } from './components/Canvas';
import { Bubbles } from './components/Bubbles';
import { Circles } from './components/Circles';

import { SafariSmoothScroll } from './scripts/SafariSmoothScroll';
import { handleScroll } from './scripts/handleScroll.js';

// import styles
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canvas: 0
    }
    this.changeCanvas = this.changeCanvas.bind(this)
  }
  componentDidMount() {
    SafariSmoothScroll();
    handleScroll();
    // wake up contact server 
    fetch('https://lit-mountain-55987.herokuapp.com/wakeup');
  }
  renderCanvas() {
    const canvas = [<Bubbles />, <Circles />, <Canvas />]
    return canvas[this.state.canvas];
  }
  changeCanvas() {
    let currentState = this.state.canvas + 1;
    if (currentState > 2) {
      currentState = 0
    }
    this.setState({
      canvas: currentState
    })
  }
  render() {
    return (
      <div className='container'>
        {this.renderCanvas()}
        <button id='changeCanvas' onClick={this.changeCanvas}> > </button>
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
