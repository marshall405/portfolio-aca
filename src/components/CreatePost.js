import React from 'react';
import '../styles/CreatePost.css';

import { FormatDate } from './FormatDate';

export class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post_length: 0,
            post: '',
            name: '',
            email: '',
            isNameEmpty: false,
            isEmailEmpty: false,
            isPostEmpty: false,
            sending: false,
            messageSent: false,
            messageErr: false
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addNewPost = this.addNewPost.bind(this);
    }
    addNewPost(post) {
        let dev = 'http://127.0.0.1:8001/dashboard/api/email.php';
        fetch('email.php', {
            method: 'POST',
            body: JSON.stringify({
                post: post.post,
                name: post.name,
                email: post.email,
                submit: true
            })
        })
            .then(res => res.json())
            .then(json => {
                if(json.err){
                    this.setState({
                        messageErr: json.err,
                        sending: false,
                    })
                }else {
                    this.setState({
                        sending: false,
                        messageSent: true
                    })
                }
                setTimeout(() => {
                    document.querySelectorAll(".show-message").forEach( ele => ele.classList.remove('show-message'))
                    this.setState({
                        messageErr: false,
                        messageSent: false
                    })
                }, 4000)
            })
    }

    handleOnChange(e) {
        const length = e.target.value.length;
        const post = e.target.value;
        this.setState({
            post_length: length,
            post: post,
            isPostEmpty: false
        });
    }
    handleNameChange(e) {
        const name = e.target.value;
        this.setState({
            name: name,
            isNameEmpty: false
        });
    }
    handleEmailChange(e) {
        const email = e.target.value;
        this.setState({
            email: email,
            isEmailEmpty: false
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        const post = this.state.post.trim();
        const name = this.state.name.trim();
        const email = this.state.email.trim();
        if (post && name && email) {
            this.addNewPost({ post: post, name: name, email: email });
            this.setState({
                post: '',
                name: '',
                email: '',
                post_length: 0,
                sending: true,
            })
            return;
        }
        if(!post){
            this.setState({
                isPostEmpty: true
            })
        }
        if(!name){
            this.setState({
                isNameEmpty: true
            })
        }
        if(!email){
            this.setState({
                isEmailEmpty: true
            })
        }
    }

    render() {
        return (
            <div className='create-post-container'>
                {
                    this.state.sending ?
                        <div id='messageSent'>
                            Sending...
                </div>
                        :
                        null
                }
                <div className='post-form'>

                    <p className={`message-success message ${this.state.messageSent ? 'show-message' : ''}`}> Message was sent! </p>
                    <p className={`message-error message ${this.state.messageErr ? 'show-message' : ''}`}> {this.state.messageErr || 'Error'} </p>

                    <form onSubmit={this.handleSubmit}>
                        <label className={this.state.post.length > 0 ? 'show-label' : null} htmlFor="post"> message </label>
                        <textarea
                            id="post"
                            rows='13'
                            cols='50'
                            placeholder='message'
                            maxLength='1500'
                            onChange={this.handleOnChange}
                            value={this.state.post}
                            className={this.state.isPostEmpty ? 'alert' : ''}>
                        </textarea>
                        <p> {1500 - this.state.post_length} characters remaining</p>
                        <div className='flex-container'>
                            <div>
                                <div className="label-inputs">
                                    <label className={this.state.email.length > 0 ? 'show-label' : null} htmlFor="email"> email </label>
                                    <input
                                        id="email"
                                        type='email'
                                        placeholder='email'
                                        value={this.state.email}
                                        className={this.state.isEmailEmpty ? 'alert' : ''}
                                        onChange={this.handleEmailChange}
                                    />
                                </div>
                                <div className="label-inputs">
                                    <label className={this.state.name.length > 0 ? 'show-label' : null} htmlFor="name"> name </label>
                                    <input
                                        id="name"
                                        type='text'
                                        placeholder='name'
                                        value={this.state.name}
                                        className={this.state.isNameEmpty ? 'alert' : ''}
                                        onChange={this.handleNameChange}
                                    />
                                </div>
                            </div>
                            <button type='submit'> Send Message </button>

                        </div>
                    </form>
                </div>
            </div>
        )
    }







}