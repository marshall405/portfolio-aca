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


    const slider = document.getElementById('slider');
    slider.addEventListener('input', this.handlerSlider);

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
        {this.renderCanvas()}
        <div id='slider' className='colorRange'>
          <div>
            <label htmlFor='red'> r </label>
            <input id='red' type='range' name='red' min='0' max='255' step='1' defaultValue='255' />
          </div>
          <div>
            <label htmlFor='green'> g </label>
            <input id='green' type='range' name='green' min='0' max='255' step='1' defaultValue='255' />
          </div>
          <div >
            <label htmlFor='blue'> b </label>
            <input id='blue' type='range' name='blue' min='0' max='255' step='1' defaultValue='255' />
          </div>
        </div>
        <button id='changeCanvas' onClick={this.changeCanvas}> > </button>
        <button id='changeCanvasColor' onClick={this.changeCanvasColor}> dark </button>
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
