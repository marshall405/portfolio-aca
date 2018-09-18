import React, { Component } from 'react';

// import my components
import {Heading} from './components/Heading';
import {About} from './components/About';
import {Projects} from './components/Projects';
import {Jumbo} from './components/Jumbo';
import {Skills} from './components/Skills';
// import material-ui
import CssBaseline from '@material-ui/core/CssBaseline';

// import styles
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
      name : 'Marshall Slemp'
    }
    this.handleChange = this.handleChange.bind(this);
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
        <Heading name='MS' handleChange={this.handleChange}/>
        
        <Jumbo name={this.state.name}/>
        <div className='section container'>
          <Skills />
          <About />
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
