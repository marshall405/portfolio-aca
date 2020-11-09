import React, { Component } from 'react';

// import my components
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import { Jumbo } from './components/Jumbo';
import HelpfulLinks from './components/HelpfulLinks';

// import styles
import './styles/App.css';

class App extends Component {

  render() {
    return (
      <div className='container'>
        <div className='content-container'>
          <Jumbo />
          <About />
          <div className="break"></div>
          <Skills />
          <div className="break"></div>
          <Projects />
          <div className="break"></div>
          <Contact />
          <div className="break"></div>
          <HelpfulLinks />
          <div className="break"></div>
        </div>
        <div className='footer'>
          <div className='footer-social'>
            <a href='https://www.linkedin.com/in/marshall-slemp/' target='_blank' rel="noopener noreferrer" className='nav-icon'><i className="fab fa-linkedin-in"></i></a>
            <a href='https://github.com/marshall405' target='_blank' rel="noopener noreferrer" className='nav-icon'><i className="fab fa-github"></i></a>
          </div>
          <h6> Marshall Slemp 2020</h6>
        </div>
      </div>
    )
  }
}

export default App;
