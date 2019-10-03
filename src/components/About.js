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
                <h2> ABOUT </h2>
                <p> Hello, my name is Marshall. I am a Front End Developer living in Round Rock, TX. </p>
                <p> I am mostly self-taught but I did take an Intermediate JavaScript course at <a href='https://austincodingacademy.com/'>Austin Coding Academy</a> last fall!</p>
                <p> Lately I have been learning more about the HTML5 Canvas along with collision detection and using Sprites.</p>
                <p> I enjoy learning new technologies, working on cars and playing video games. </p>
                <p> Currently seeking a junior web developer position around Austin, TX. </p>
                <div className='about-image-container'>
                    <img src={Cabo} alt='me in cabo'></img>
                </div>
                <h4> Skills </h4>
                <ul className='skills-container'>
                    <li> HTML/CSS </li>
                    <li> JavaScript </li>
                    <li> React</li>
                    <li> Git/Github</li>
                    <li> NodeJS</li>
                    <li> ExpressJS</li>
                    <li> MySQL </li>
                    <li> </li>
                </ul>
                <h4> Skills...in progress </h4>
                <ul className='skills-container'>
                    <li> Wordpress/PHP </li>
                    <li> Bash Scripting </li>
                    <li> Regular Expressions </li>
                    <li>  </li>
                </ul>
            </div>
        )
    }
}