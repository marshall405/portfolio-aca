import React, { Component } from 'react';

// import my components
import {Heading} from './components/Heading';
import {About} from './components/About';
import {Projects} from './components/Projects';

// import material-ui
import CssBaseline from '@material-ui/core/CssBaseline';

// import styles
import './styles/App.css';

class App extends Component {
  state = {
  
  }

  render() {
    return (
      <div>
        <CssBaseline />
        <Heading name='Marshall Slemp'/>
        <div className='section'>
          <About />
          <Projects />
        </div>
      </div>
    )
  }
}

export default App;
