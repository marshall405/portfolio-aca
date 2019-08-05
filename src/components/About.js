import React from 'react';

// import styles
import '../styles/About.css';
import Cabo from '../images/cabo.jpg';
export class About extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className='section' id='about'>
                <h3> ABOUT </h3>
                <p> Hello, my name is Marshall. I am a Front End Developer living in Round Rock, TX. </p>
                <p> Currently seeking a junior web developer position around Austin, TX. </p>
                <div className='image-container'>
                    <img src={Cabo} alt='me in cabo'></img>
                </div>
                <h4> Skills </h4>
                <ul>
                    <li> HTML </li>
                    <li> CSS</li>
                    <li> JavaScript </li>
                    <li> React JS</li>

                </ul>
            </div>
        )
    }
}