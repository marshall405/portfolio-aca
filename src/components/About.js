import React from 'react';

// import styles
import '../styles/About.css'

import AboutPicture from './AboutPicture';
import profile from '../images/newPic.jpg';

export class About extends React.Component {
    render() {
        return (
            <div className='section' id='about'>
                <h2> ABOUT </h2>
                <p> Hello, my name is Marshall. I am a Web Developer living in Georgetown, Texas. I graduated from Oklahoma State University with a Bachelor's Degree in Business Administration.</p>
                <p> After spending a few years working as a Warehouse Lead, I decided to start teaching myself JavaScript. I realized this is what I wanted to do so I left Ditch Witch after 5 years to pursue a career in web development.</p>
                <p> I recently graduated <a href='https://flatironschool.com/' target='blank'><strong>FLATIRON's</strong></a> Software Engineering Bootcamp! I met some awesome people, learned more than I ever thought possible and made some pretty neat projects!  </p>
                <div className='about-image-container'>
                    <AboutPicture picture={profile} />
                </div>
            </div>
        )
    }
}