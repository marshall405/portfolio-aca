import React, { Component } from 'react';
import './styles/App.css';

// component imports
import {Heading} from './components/Heading';


class App extends Component {
  state = {
    firstName : 'Marshall',
    lastName : 'Slemp'
  }

  render() {
    return (
      <Heading name={`${this.state.firstName} ${this.state.lastName} `}/>
    )
  }
}

export default App;
