import React from 'react';

export class Contact extends React.Component {




    render() {
        return (
            <div>
            <div id='contact' onClick={() => this.props.onClick()}> 
            </div>
            <div className='contact-container'>
                <h1> Contact Me </h1>
                <p> 405-919-2960 </p>
                <p><a href='mailto:marshall.slemp@gmail.com'>marshall.slemp@gmail.com</a></p>
                <h3> Current Location </h3>
                <p> Round Rock, Texas </p>
            </div>
        </div>
        )
    }
}