import React from 'react';
import Resume from '../assets/resume.pdf';
import Cabo from '../images/cabo.jpg';
import {Timeline} from './Timeline';

export class About extends React.Component {

    componentDidMount() {
        let nav = document.getElementsByTagName('nav');
        let navHeight = nav[0].offsetHeight;
        let section = document.getElementById('section');
        section.style.display = 'relative';
        section.style.top = navHeight + 10 +'px';
    }
    render() {
        let that = this;
        return (
            <div id='section' className='section container'>
                <div id='about' className='about-container'>
                    <h1> About Me </h1>
                    <div className='about-header'>
                        <img src={Cabo} alt='Me in Cabo San Lucas'></img>
                    </div>
                    <div className='inner-about-container'>
                        <div>
                            <p> Hi! My name is Marshall and I am a self-taught web developer!</p>
                            <p> </p>
                            <p>  </p>
                            <p> </p>
                            <p> Checkout some of my projects <a onClick={function() {that.props.handleClick('Projects')}} style={{borderBottom: '1px solid black'}}>here!</a></p>
                            <div className='resume'><a href={Resume} ><i className="fas fa-file fa-2x"></i> View Resume </a></div>
                            <Timeline />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}