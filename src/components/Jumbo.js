import React, { Component } from 'react';

// import styles
import '../styles/jumbo.css';

import { Bubbles } from './Bubbles';

export class Jumbo extends Component {

    componentDidMount() {
        let nav = document.getElementById('nav')
        window.addEventListener('scroll', e => {

            if (window.pageYOffset >= window.innerHeight) {
                nav.classList.add('reveal')
            } else {
                nav.classList.remove('reveal')
            }

        })
    }
    render() {
        return (
            <div className='jumbo' id='MS'>
                <Bubbles />
                <nav id="nav">
                    <ul id='nav-list'>
                        <li><a href="#about"> about </a></li>
                        <li><a href="#skills"> skills </a></li>
                        <li><a href="#contact"> contact </a></li>
                        <li><a href="#projects"> projects </a></li>
                    </ul>
                </nav>
                <div className='inner-jumbo'>

                    <h1> marshall slemp </h1>
                    <p><i className="fas fa-mountain"></i> Full Stack Developer <i className="fas fa-mountain"></i></p>


                </div>
                <div className='social'>
                    <a href='https://www.linkedin.com/in/marshall-slemp/' target='_blank' rel="noopener noreferrer" className='nav-icon'><i className="fab fa-linkedin-in"></i></a>
                    <a href='https://github.com/marshall405' target='_blank' rel="noopener noreferrer" className='nav-icon'><i className="fab fa-github"></i></a>
                </div>
            </div>
        )
    }
}

