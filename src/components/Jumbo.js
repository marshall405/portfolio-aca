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
                    <li><a href="#about"> about </a></li>
                    <li><a href="#contact"> contact </a></li>
                    <li><a href="#projects"> projects </a></li>
                </ul>
            </div>
        )
    }
}

