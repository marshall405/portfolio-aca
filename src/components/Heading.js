import React from 'react';
// import '../styles/heading.css';


export function Heading(props) {
    return (
        <nav className='nav'>
            <div className='nav-container'>
                <div className='brand'>
                    <a href="#top" className='nav-icon' id='logo'><span>M S</span></a>
                </div>
                <div className='social'>
                    <a href='https://www.linkedin.com/in/marshall-slemp/' target='_blank' rel="noopener noreferrer" className='nav-icon'><i className="fab fa-linkedin fa-lg"></i></a>
                    <a href='https://github.com/marshall405' target='_blank' rel="noopener noreferrer" className='nav-icon'><i className="fab fa-github fa-lg"></i></a>
                </div>
            </div>
        </nav>
    )

}