import React from 'react';
import { CreatePost } from './CreatePost';
import '../styles/Contact.css';
export class Contact extends React.Component {
    render() {
        return (
            <div className='section' id='contact'>
                <h2> CONTACT </h2>
                <p> Connect with me on
                    <a href='https://www.linkedin.com/in/marshall-slemp/' target='_blank' rel="noopener noreferrer" > LinkedIn</a>
                </p>
                <p> Or Leave a message: </p>
                <CreatePost />
            </div>
        )
    }
}