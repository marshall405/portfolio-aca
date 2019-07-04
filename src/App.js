import React, { Component } from 'react';

// import my components
import { Heading } from './components/Heading';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Jumbo } from './components/Jumbo';
import { Skills } from './components/Skills';



// import styles
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      content: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(content) {
    this.setState({ content: content });
  }


  render() {
    return (
      <div id='top'>
        <Heading handleClick={this.handleClick} page={this.state.content} />
        <div>
          <About />
          <Projects />
          <Skills />
        </div>
        <div className='footer'>
          <h6> Made by Marshall Slemp 2019</h6>
        </div>
      </div>
    )
  }
}

export default App;
