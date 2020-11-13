import React, { Component } from 'react';

// import styles
import '../styles/jumbo.css';

import Bubbles from './Bubbles';
import WhoAmI from './WhoAmI';

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
                    <ul id='navList'>
                        <li><a href="#about"> about </a></li>
                        <li><a href="#skills"> skills </a></li>
                        <li><a href="#contact"> contact </a></li>
                        <li><a href="#projects"> projects </a></li>
                    </ul>
                </nav>
                <div className='inner-jumbo'>

                    <h1> marshall slemp </h1>
                    <div style={{ margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '50%', minWidth: '300px', maxWidth: '400px' }}>
                        <a href='https://www.linkedin.com/in/marshall-slemp/' target='_blank' rel="noopener noreferrer" className='nav-icon'><i className="fab fa-linkedin-in"></i></a>
                        <WhoAmI />
                        <a href='https://github.com/marshall405' target='_blank' rel="noopener noreferrer" className='nav-icon'><i className="fab fa-github"></i></a>

                    </div>
                    {/* <p> Full Stack Developer <i className="fas fa-mountain"></i></p> */}


                </div>
            </div>
        )
    }
}

