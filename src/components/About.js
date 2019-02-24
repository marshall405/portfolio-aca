import React from 'react';
// import CaboPic from '../images/cabo.jpg';
import CartoonPic from '../images/cartoonPic.png';
import Resume from '../assets/resume.pdf';
// import { Timeline } from '../components/Timeline';

const greetingStyle = {
    transition: 'fontSize 2s',
    fontSize: 15,
    textAlign:'center', 
    marginTop: 30, 
    marginBottom: 10

}
const aStyle = {
    textDecoration: 'underline'
}
const divAStyle = {
    padding: 15,
    textAlign: 'center'
}
export class About extends React.Component {
    render() {
        return (
            <div id='about' className='about-container'>
               <h1> About Me </h1>
               <div className='inner-about-container'>
                    {/* <img className='profile-pic' src={CaboPic} alt='cabo :)'/> */}
                    <img className='profile-pic' src={CartoonPic} alt='animated profile'/>
                    <div>
                        <p style={greetingStyle}> Hello, my name is Marshall and I am a self-taught web developer!</p>
                        <p style={greetingStyle}> </p>
                        <p style={greetingStyle}> My most recent project is a Full-Stack application where you can 'post a comment'. I used HTML, CSS and ReactJS for the front end. NodeJS, Express and MySQL for the backend. At the end of every night all messages get deleted. </p>
                        <p style={greetingStyle}> Checkout some of my projects furthur down the page. Or click <a href="#projects" style={{borderBottom: '1px solid black'}}>here!</a></p>
                        <div style={divAStyle}><a href={Resume} style={aStyle}> View Resume </a></div>
                        {/* <Timeline windowWidth={this.props.windowWidth}/> */}
                    </div>
                </div>
            </div>
        )
    }
}