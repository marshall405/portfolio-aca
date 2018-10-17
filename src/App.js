import React, { Component } from 'react';

// import my components
import {Heading} from './components/Heading';
import {About} from './components/About';
import {Projects} from './components/Projects';
import {Jumbo} from './components/Jumbo';
import {Skills} from './components/Skills';
import {Contact} from './components/Contact';
import {ContactMe} from './components/ContactMe';
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
    this.handleChange = this.handleChange.bind(this);
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
  handleChange(e){
    if(e.target.value === ''){
      this.setState({name : 'Marshall Slemp'});
    } else {
      this.setState({name : e.target.value})
    }
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
  render() {
    if(this.state.contact){
      return (
        <div>
        <CssBaseline />
        <Contact onClick={this.onClick}/>
        <Heading name='MS' handleChange={this.handleChange}/>
        <Jumbo name={this.state.name} mouseOver={this.mouseOver} mouseOut={this.mouseOut} onClick={this.onClick}/>
        <div className='section container'>
          <About />
          <Skills />
          <Projects />
        </div>
        <div className='footer'>
          <h6> designed and developed by marshall 2018</h6>
        </div>
      </div>
      )
    }
    return (
      <div>
        <CssBaseline />
        <Heading name='MS' handleChange={this.handleChange}/>
        <ContactMe onClick={this.onClick}/>
        <Jumbo name={this.state.name} mouseOver={this.mouseOver} mouseOut={this.mouseOut} onClick={this.onClick}/>
        <div className='section container'>
          <About windowWidth={this.state.width}/>
          <Skills />
          <Projects />
        </div>
        <ContactMe onClick={this.onClick}/>
        <div className='footer'>
          <h6> designed and developed by marshall 2018</h6>
        </div>
      </div>
    )
  }
}

export default App;
