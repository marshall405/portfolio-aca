import React, { Component } from 'react';

// import styles
import '../styles/jumbo.css';

export class Jumbo extends Component {
    render() {
        return (
            <div className='jumbo' id='M S'>
                <h1> MARSHALL SLEMP </h1>
                <p> web developer </p>
                <ul id='nav-list'>
                    <a href="#about"><li> about </li></a>
                    <a href="#contact"><li> contact </li></a>
                    <a href="#projects"><li> projects </li></a>
                </ul>
            </div>
        )
    }
}

