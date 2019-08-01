import React from 'react';
import { CreatePost } from './CreatePost';
import '../styles/Contact.css';
export class Contact extends React.Component {
    render() {
        return (
            <div className='section' id='contact'>
                <h3> CONTACT </h3>
                <p> Get in touch with me on
                    <a href='https://www.linkedin.com/in/marshall-slemp/' target='_blank' rel="noopener noreferrer" > LinkedIn</a>
                </p>
                <p> Or Leave a message: </p>
                <CreatePost />
                <h4> Located in Round Rock, Texas </h4>
            </div>
        )
    }
}