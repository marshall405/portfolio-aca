import React from 'react';
import linkedInLogo from '../images/In-Black-28px-R.png';
import GitHubLogo from '../images/GitHub-Mark-32px.png';
// import material-ui
import Toolbar from '@material-ui/core/Toolbar';




export class Heading extends React.Component {
    render() {
        return (
            <Toolbar className='flex-container heading'>
                    <div id='name'>
                        {this.props.name}
                    </div>
                    <div className='social-links'>
                        <a href='https://www.linkedin.com/in/marshall-slemp/'>
                            <img src={linkedInLogo} alt='linkedIN' />
                        </a>
                        <a href='https://github.com/marshall405'>
                            <img src={GitHubLogo} alt='GitHub' />
                        </a>
                    </div>
            </Toolbar>
        )
    }
}