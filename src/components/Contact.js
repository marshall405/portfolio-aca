import React from 'react';
import Clear from '@material-ui/icons/Clear';

export class Contact extends React.Component {



    render() {
        return (
            <div className='contact-modal'>
            <div  id='contact' onClick={() => this.props.onClick()}> 
            </div>
            <div className='contact-container'>
                <div> 
                    <Clear className='nav-clear spinner' onClick={this.props.onClick}/>
                </div>
                <div className='contact-center'>
                    <h1> Contact Me </h1>
                    <p> 405-919-2960 </p>
                    <p><a href='mailto:marshall.slemp@gmail.com'>marshall.slemp@gmail.com</a></p>
                    <h3> Current Location </h3>
                    <p> Round Rock, Texas </p>
                </div>
            </div>
        </div>
        )
    }
}