import React from 'react';

// import styles
import '../styles/About.css';
import Cabo from '../images/newPic.jpg';
export class About extends React.Component {
    render() {
        return (
            <div className='section' id='about'>
                <h2> ABOUT </h2>
                <p> Hello, my name is Marshall. I am a Web Developer living in Georgetown, TX.</p>
                <p> I recently graduated <a href='https://flatironschool.com/' target='blank'><strong>FLATIRON's</strong></a> Software Engineering Bootcamp! </p>
                <div className='about-image-container'>
                    <img id='profileImg' src={Cabo} alt='me in cabo'></img>
                </div>

                <h4>Technologies</h4>

                <div className="skills-container">
                    <div className="skill">
                        <h5> Programming Languages </h5>
                        <ul>
                            <li> JavaScript </li>
                            <li> Ruby </li>
                        </ul>
                    </div>

                    <div className="skill">

                        <h5> Libraries / Frameworks </h5>

                        <ul>
                            <li>Rails</li>
                            <li>React</li>
                            <li></li>
                        </ul>

                    </div>

                    <div className="skill">

                        <h5> Databases </h5>

                        <ul>
                            <li>SQL</li>
                            <li>PostgreSQL</li>
                        </ul>

                    </div>

                </div>
            </div>
        )
    }
}