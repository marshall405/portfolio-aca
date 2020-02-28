import React, { Component } from 'react';

// import styles
import '../styles/jumbo.css';

export class Jumbo extends Component {

    render() {
        return (
            <div className='jumbo' id='M S'>
                <div className='inner-jumbo'>

                    <h1> marshall slemp </h1>
                    <p><i class="fas fa-mountain"></i> Full Stack Developer <i class="fas fa-mountain"></i></p>
                    <ul id='nav-list'>
                        <li><a href="#about"> about </a></li>
                        <li><a href="#contact"> contact </a></li>
                        <li><a href="#projects"> projects </a></li>
                    </ul>

                </div>
                <div className='social'>
                    <a href='https://www.linkedin.com/in/marshall-slemp/' target='_blank' rel="noopener noreferrer" className='nav-icon'><i className="fab fa-linkedin-in"></i></a>
                    <a href='https://github.com/marshall405' target='_blank' rel="noopener noreferrer" className='nav-icon'><i className="fab fa-github"></i></a>
                </div>
            </div>
        )
    }
}

