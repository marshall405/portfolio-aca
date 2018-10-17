import React from 'react';
import CaboPic from '../images/cabo.jpg';
import { Timeline } from '../components/Timeline';

const greetingStyle = {
    transition: 'fontSize 2s',
    fontSize: 15,
    textAlign:'center', 
    marginTop: 30, 
    marginBottom: 10

}
export class About extends React.Component {
    render() {
        return (
            <div className='about-container'>
               <h1> About Me </h1>
               <div className='inner-about-container'>
                    <img className='profile-pic' src={CaboPic} alt='cabo :)'/>
                    <div>
                        <p style={greetingStyle}> Hello, my name is Marshall and I am a self-taught web developer...</p>
                        <Timeline windowWidth={this.props.windowWidth}/>
                    </div>
                </div>
            </div>
        )
    }
}