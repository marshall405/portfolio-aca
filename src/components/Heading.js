import React from 'react';
import '../styles/heading.css';


export function Heading(props) {
    return (
        <nav className='nav'>
            <div className='nav-container'>
                <div className='brand'>
                    <a href="#top" className='nav-icon'><span>Marshall Slemp</span></a>
                </div>
                <div className='links'>
                    <a className={`nav-icon ${props.page === 'Projects' ? 'current' : ''}`}> Projects </a>
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