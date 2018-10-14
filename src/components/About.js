import React from 'react';
import CaboPic from '../images/cabo.jpg';


export class About extends React.Component {
    render() {
        return (
            <div className='about-container'>
               <h1> About Me </h1>
               <div className='inner-about-container'>
                    <img className='profile-pic' src={CaboPic} alt='cabo :)'/>
                    <div>
                        <p> I am currently attending <a href='https://austincodingacademy.com/'>Austin Coding Academy</a> and focusing on JavaScript.</p>
                        <p> Before attending ACA, I was teaching myself the basics of HTML, CSS and JavaScript!</p>
                        <p> I grew up in a small town in Oklahoma and graduated from Oklahoma State University in Stillwater, Ok with a degree in Business.</p>
                    </div>
                </div>
            </div>
        )
    }
}