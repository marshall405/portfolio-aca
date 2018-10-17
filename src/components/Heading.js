import React from 'react';
import linkedInLogo from '../images/In-Black-28px-R.png';
import GitHubLogo from '../images/GitHub-Mark-32px.png';
// import material-ui
import Toolbar from '@material-ui/core/Toolbar';




export class Heading extends React.Component {
    render() {
        return (
            <Toolbar className='flex-container header container'>
                    <div id='name' style={{width: 100}} >
                        <h1 style={{cursor: 'pointer'}}onClick={this.props.onClick}>{this.props.name}</h1>
                    </div>
                    <div id='input' className='container'>
                        <input type='text' placeholder='change name' onChange={(e) => this.props.handleChange(e)}/>
                    </div>
                    <div className='social-links' style={{width: 100}}>
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