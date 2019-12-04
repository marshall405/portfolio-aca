import React, { Component } from 'react';

// import my components
import { Heading } from './components/Heading';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import { Jumbo } from './components/Jumbo';
import { Blog } from './components/Blog';

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
      canvas: 0,
      canvasColor: 'rgb(255,255,255)'
    }
    this.changeCanvas = this.changeCanvas.bind(this);
    this.changeCanvasColor = this.changeCanvasColor.bind(this);
    this.handlerSlider = this.handlerSlider.bind(this);
  }
  componentDidMount() {
    SafariSmoothScroll();
    handleScroll();
    // wake up contact server 
    fetch('https://lit-mountain-55987.herokuapp.com/wakeup');
  }
  renderCanvas() {
    const canvas = [<Circles color={this.state.canvasColor} />, <Bubbles color={this.state.canvasColor} />, <Canvas color={this.state.canvasColor} />]
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
  changeCanvasColor() {
    let color = this.state.canvasColor === 'rgb(255,255,255)' ? 'rgb(0,0,0)' : 'rgb(255,255,255)';
    let button = document.getElementById('changeCanvasColor');
    button.innerText = color === 'rgb(255,255,255)' ? 'dark' : 'light';
    this.setState({
      canvasColor: color
    })
  }
  handlerSlider(e) {
    const red = document.getElementById('red').value;
    const green = document.getElementById('green').value;
    const blue = document.getElementById('blue').value;
    let colorRange = `rgb(${red},${green},${blue})`
    this.setState({
      canvasColor: colorRange
    })

  }
  render() {
    return (
      <div className='container'>
        {/* {this.renderCanvas()} */}
        {/* <Circles color={this.state.canvasColor} /> */}
        {/* <Bubbles color={this.state.canvasColor} /> */}
        <Heading />
        <Jumbo />

        <div className='content-container'>
          <About />
          <Projects />
          <Contact />
          <Blog />
        </div>
        <div className='footer'>
          <h6> Made by Marshall Slemp 2019</h6>
        </div>
      </div>
    )
  }
}

export default App;
