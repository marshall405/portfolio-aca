import React, { Component } from 'react';

// import styles
import '../styles/jumbo.css';

export class Jumbo extends Component {
    // componentDidMount() {
    //     this.reveal();
    // }
    // reveal() {
    //     let left = 20;
    //     let div = document.getElementById('reveal');
    //     let raf;

    //     function moveDiv() {

    //         div.style.left = `${left}px`;
    //         left += 20;
    //         raf = requestAnimationFrame(moveDiv);
    //         if (left > window.outerWidth) {
    //             cancelAnimationFrame(raf);
    //             document.getElementById('M S').removeChild(div);
    //         }
    //     }
    //     moveDiv();

    // }
    render() {
        return (
            <div className='jumbo' id='M S'>
                <div id='reveal'></div>
                <h1> marshall slemp </h1>
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

