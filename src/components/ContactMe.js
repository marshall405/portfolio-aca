import React from 'react';


const contactStyle = {
   
    cursor: 'pointer',
    fontSize: 18,
    width: 250,
    textAlign: 'center',
    borderRadius: 10
}
export class ContactMe extends React.Component {
    render() {
        return (
            <h1 onClick={this.props.onClick} style={contactStyle} className='contact-me'>Contact Me </h1>
        )
    }
    
}