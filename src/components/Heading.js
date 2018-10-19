import React from 'react';
import linkedInLogo from '../images/ln-white.png';
import GitHubLogo from '../images/gh-white.png';






export class Heading extends React.Component {
    render() {
        return (
            <div className='flex-container header container'>  
                <h1 className='logoMS' onClick={this.props.onClick}>MS</h1>
                <h1 onClick={this.props.onClick} className='contact-me'>Contact Me </h1>
                <div className='social-links'>
                    <a href='https://www.linkedin.com/in/marshall-slemp/'>
                        <img src={linkedInLogo} alt='linkedIN' />
                    </a>
                    <a href='https://github.com/marshall405'>
                        <img src={GitHubLogo} alt='GitHub' />
                    </a>
                </div>
            </div>
        )
    }
}