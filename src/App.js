import React, { Component } from 'react';

// import my components

import {About} from './components/About';
import {Projects} from './components/Projects';
import {Jumbo} from './components/Jumbo';
import {Skills} from './components/Skills';
import {Contact} from './components/Contact';

// import material-ui
import CssBaseline from '@material-ui/core/CssBaseline';

// import styles
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : 'Marshall Slemp',
      contact : false,
      width: 0,
    }
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
    this.onClick = this.onClick.bind(this);
    this.updateWindowWidth = this.updateWindowWidth.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowWidth();
    window.addEventListener('resize', this.updateWindowWidth);
  }
  updateWindowWidth() {
    this.setState({width: window.innerWidth});
  }

  mouseOver(){
    this.setState({name : 'Hire Me!'})
  }
  mouseOut() {
    this.setState({name : 'Marshall Slemp'})
  }
  onClick() {
    if(this.state.contact){
      this.setState({contact:false})
    } else {
      this.setState({contact : true})
    }
  }
  isContact() {
    if(this.state.contact){
      return (
        <Contact onClick={this.onClick}/>
      )
    }
  }
  render() {
    return (
      <div id='top'>
      <CssBaseline />
      {this.isContact()}
      <Jumbo name={this.state.name} mouseOver={this.mouseOver} mouseOut={this.mouseOut} onClick={this.onClick} windowWidth={this.state.width}/>
      <div className='section container'>
        <About windowWidth={this.state.width}/>
        <Skills />
        <Projects />
      </div>
      <div className='footer'>
        <h6> designed and developed by marshall 2018</h6>
      </div>
    </div>
    )
  }
}

export default App;
