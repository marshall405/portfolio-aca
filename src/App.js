import React, { Component } from 'react';

// import my components
import {Heading} from './components/Heading';
import {About} from './components/About';
import {Projects} from './components/Projects';
import {Jumbo} from './components/Jumbo';
// import material-ui
import CssBaseline from '@material-ui/core/CssBaseline';

// import styles
import './styles/App.css';

class App extends Component {
  state = {
    name : 'Marshall Slemp'
  }
  handleChange(e){
    if(e.target.value === ''){
      this.setState({name : 'Marshall Slemp'});
    } else {
      this.setState({name : e.target.value})
    }
  }
 
  render() {
    return (
      <div>
        <CssBaseline />
        <Heading name='MS'/>
        <div id='input'>
          <input type='text' placeholder='change name' onChange={(e) => this.handleChange(e)}/>
        </div>
        <Jumbo name={this.state.name}/>
        <div className='section'>
          <About />
          <Projects />
        </div>
      </div>
    )
  }
}

export default App;
