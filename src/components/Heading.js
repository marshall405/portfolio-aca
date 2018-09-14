import React from 'react';
import linkedInLogo from '../images/In-Black-28px-R.png';
import GitHubLogo from '../images/GitHub-Mark-32px.png';
// import material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


import '../styles/Heading.css';

export class Heading extends React.Component {
    render() {
        return (
            <AppBar position='fixed' color='default'>
                <Toolbar className='flex-container'>
                        <h1>
                            {this.props.name}
                        </h1>
                        <div className='social-links'>
                            <a href='https://www.linkedin.com/in/marshall-slemp/'>
                                <img src={linkedInLogo} alt='linkedIN' />
                            </a>
                            <a href='https://github.com/marshall405'>
                                <img src={GitHubLogo} alt='GitHub' />
                            </a>
                        </div>
                    
                </Toolbar>
            </AppBar>
        )
    }
}