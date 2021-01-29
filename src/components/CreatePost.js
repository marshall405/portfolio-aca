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
            title: '',
            isNameEmpty: false,
            isTitleEmpty: false,
            isTextEmpty: false,
            sending: false,
            messageSent: false,
            messageErr: false
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addNewPost = this.addNewPost.bind(this);
    }
    addNewPost(post) {
        fetch('http://127.0.0.1:8001/dashboard/api/email.php', {
            method: 'POST',
            body: JSON.stringify({
                post: post.post,
                name: post.name,
                email: post.title,
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
            })
    }

    handleOnChange(e) {
        const length = e.target.value.length;
        const post = e.target.value;
        this.setState({
            post_length: length,
            post: post,
            isTextEmpty: false
        });
    }
    handleNameChange(e) {
        const name = e.target.value;
        this.setState({
            name: name,
            isNameEmpty: false
        });
    }
    handleTitleChange(e) {
        const title = e.target.value;
        this.setState({
            title: title,
            isTitleEmpty: false
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        const newPost = this.state.post.trim();
        const name = this.state.name.trim();
        const title = this.state.title.trim();
        if (newPost && name && title) {
            this.addNewPost({ post: newPost, name: name, title: title });
            this.setState({
                post: '',
                name: '',
                title: '',
                post_length: 0,
                sending: true,
            })
        } else if (newPost) {
            this.setState({ isNameEmpty: true });
        } else {
            this.setState({ isTextEmpty: true });
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

                    <p className={`message-success ${this.state.messageSent ? 'show-message-success' : ''}`}> Message was sent! </p>
                    <p className={`message-error ${this.state.messageErr ? 'show-message-error' : ''}`}> {this.state.messageErr} </p>

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
                            className={this.state.isTextEmpty ? 'alert' : ''}>
                        </textarea>
                        <p> {1500 - this.state.post_length} characters remaining</p>
                        <div className='flex-container'>
                            <div>
                                <div className="label-inputs">
                                    <label className={this.state.title.length > 0 ? 'show-label' : null} htmlFor="email"> email </label>
                                    <input
                                        id="email"
                                        type='email'
                                        placeholder='email'
                                        value={this.state.title}
                                        className={this.state.isTitleEmpty ? 'alert' : ''}
                                        onChange={this.handleTitleChange}
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