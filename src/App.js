import React, { Component } from 'react';

// import my components

import {About} from './components/About';
import {Projects} from './components/Projects';
import {Jumbo} from './components/Jumbo';
import {Skills} from './components/Skills';
import {Contact} from './components/Contact';
import {BackToTop} from './components/BackToTop';

// import material-ui
import CssBaseline from '@material-ui/core/CssBaseline';

// import styles
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContactInfo : false,
      width: window.innerWidth,
    }
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
  onClick() {
    if(this.state.showContactInfo){
      this.setState({showContactInfo:false})
    } else {
      this.setState({showContactInfo : true})
    }
  }
  showContactInfo() {
    if(this.state.showContactInfo){
      return (
        <Contact onClick={this.onClick}/>
      )
    }
  }
  render() {
    return (
      <div id='top'>
      <CssBaseline />
      {this.showContactInfo()}
      <Jumbo onClick={this.onClick} windowWidth={this.state.width}/>
      <div className='section container'>
        <About windowWidth={this.state.width}/>
        <Skills />
        <Projects />
      </div>
      <BackToTop width={this.state.width}/>
      <div className='footer'>
        <h6> designed and developed by marshall 2018</h6>
      </div>
    </div>
    )
  }
}

export default App;
