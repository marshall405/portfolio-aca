import React, { Component } from 'react';

// import styles
import '../styles/jumbo.css';

export class Jumbo extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <div className='jumbo'>
                <h1> MARSHALL SLEMP </h1>
                <p> web developer </p>
                <ul>
                    <li><a href="#about"> about </a></li>
                    <li><a href="#contact"> contact </a></li>
                    <li><a href="#projects"> projects </a></li>
                </ul>
            </div>
        )
    }
}

