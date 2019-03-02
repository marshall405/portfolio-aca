import React, { Component } from 'react';
import '../scripts/sayHello.js';
import '../styles/greeting.css';
export class Jumbo extends Component {
    componentDidMount() {
        const greetings = ['Hola!', 'Bonjour!', 'Hallo!', 'Ciao!', 'Namaste!', 'Konnichiwa!', 'Hello!'];
        let counter = 0;
        const h1 = document.getElementById('greeting');
        let shuffle = function() {
            fade(h1);
            if(counter >= greetings.length){
                counter = 0;
            }
            h1.innerHTML = greetings[counter];
            counter++;
        
        };
        function fade(ele) {
            let opc = 0;
            let fadeIn = function() {
                let fade = setInterval(function() {
                    if(opc >= 1) {
                        clearInterval(fade);
                        fadeOut();
                    }
                    ele.style.opacity = opc;
                    opc += .005;
                },5);
            }
            let fadeOut = function() {
                let fade = setInterval(function() {
                    if(opc <= 0) {
                        clearInterval(fade);
                        shuffle();
                    }
                    ele.style.opacity = opc;
                    opc -= .005;
                },5);
            }
            fadeIn();
        }
        fade(h1);
    }
    render() {
        return (
            <div className='jumbo'>
                <div className='greeting-container'>
                    <h1 id='greeting'>
                        Hello!
                    </h1>
                 </div>
             </div>
        )
    }
}    

