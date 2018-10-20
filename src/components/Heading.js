import React from 'react';
import linkedInLogo from '../images/ln-white.png';
import GitHubLogo from '../images/gh-white.png';
import Dehaze from '@material-ui/icons/Dehaze';
import Clear from '@material-ui/icons/Clear';





export class Heading extends React.Component {
    state = {
        clicked: false,
    };
    handleClick() {
        const isClicked = this.state.clicked ? false : true;
        this.setState({clicked: isClicked});
    }
    nav() {
        if(this.props.windowWidth <= 530){
            if(this.state.clicked){
                return (
                    <div>
                        <div className='nav-burger' onClick={this.handleClick.bind(this)}>
                            <Dehaze />
                        </div>
                        <div className='small-nav nav'>
                            <a href='#about'> about </a> 
                            <a href='#skills'> skills </a> 
                            <a href='#projects'> projects </a> 
                            <Clear className='nav-clear' onClick={this.handleClick.bind(this)}/>
                        </div>
                    </div>
                )
            }
            return (
                <div className='nav-burger' onClick={this.handleClick.bind(this)}>
                    <Dehaze />
                </div> 
            )
        }
        return (
            <div className='nav'>
                <a href='#about'> about </a> 
                <a href='#skills'> skills </a> 
                <a href='#projects'> projects </a> 
            </div> 
        )
    }
    render() {
        console.log(this.state.clicked);
        return (
            <div>
                <div className='flex-container header'>  
                    <div className='fixed-width'>
                        <h1 className='logoMS'><a href='#top'>MS</a></h1>
                    </div>
                  
                        {this.nav()}
                   
                    <div className='fixed-width'> 
                        <h1 onClick={this.props.onClick} className='contact-me'>Contact Me </h1>
                    </div>
                </div>
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