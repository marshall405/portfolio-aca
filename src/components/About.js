import React from 'react';

// import styles
import '../styles/About.css';
import Cabo from '../images/newPic.jpg';
export class About extends React.Component {
    render() {
        return (
            <div className='section' id='about'>
                <h2> ABOUT </h2>
                <p> Hello, my name is Marshall. I am a Web Developer living in Round Rock, TX.</p>
                <p> I will be attending <a href='https://flatironschool.com/' target='blank'>FLATIRON's</a> Software Engineering bootcamp starting April 20, 2020! </p>
                <p> I enjoy learning new technologies, working on cars and playing video games. </p>
                <div className='about-image-container'>
                    <img id='profileImg' src={Cabo} alt='me in cabo'></img>
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
            </div>
        )
    }
}