import React from 'react';

// import styles
import PicturesCube from './PicturesCube';
import '../styles/About.css';
import profile from '../images/newPic.jpg';
import cabo from '../images/cabo.jpg';
export class About extends React.Component {
    render() {
        return (
            <div className='section' id='about'>
                <h2> ABOUT </h2>
                <p> Hello, my name is Marshall. I am a Web Developer living in Georgetown, TX.</p>
                <p> I recently graduated <a href='https://flatironschool.com/' target='blank'><strong>FLATIRON's</strong></a> Software Engineering Bootcamp! </p>
                <p> </p>
                <div className='about-image-container'>
                    <PicturesCube pictures={[profile, cabo]} />
                </div>
            </div>
        )
    }
}