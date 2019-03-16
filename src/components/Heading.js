import React from 'react';
import '../styles/heading.css';


export function Heading(props) {
    return (
        <nav className='nav'>
            <div className='nav-container'>
                <div className='brand'>
                    <a onClick={function() {props.handleClick('home')}} className='nav-icon'><i className="fas fa-user-astronaut fa-5x brand-icon"></i><span>Marshall Slemp</span></a>
                </div>
                <div className='links'>
                    <a onClick={function() {props.handleClick('About Me')}} className={`nav-icon ${props.page == 'About Me' ? 'current' : ''}`}> About Me </a> 
                    <a onClick={function() {props.handleClick('Skills')}} className={`nav-icon ${props.page == 'Skills' ? 'current' : ''}`}> Skills </a> 
                    <a onClick={function() {props.handleClick('Projects')}} className={`nav-icon ${props.page == 'Projects' ? 'current' : ''}`}> Projects </a> 
                </div>
                <div className='extra'>
                    <a href='https://www.linkedin.com/in/marshall-slemp/' target='_blank' rel="noopener noreferrer" className='nav-icon'><i className="fab fa-linkedin fa-lg"></i></a>
                    <a href='https://github.com/marshall405' target='_blank' rel="noopener noreferrer" className='nav-icon'><i className="fab fa-github fa-lg"></i></a>
                    <a href='https://ko-fi.com/marshallslemp' target='_blank' rel="noopener noreferrer" className='nav-icon'><i className="fas fa-coffee"></i></a>
                </div>
            </div> 
        </nav>    
    )
}