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
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addNewPost = this.addNewPost.bind(this);
    }
    addNewPost(post) {
        fetch('https://lit-mountain-55987.herokuapp.com/api/createpost', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
                post: post.post,
                name: post.name,
                position: null,
                createdOn: FormatDate(),
                title: post.title,
            })
        })
            .then(res => {
                if (res.status === 200) {
                    this.setState({
                        sending: false,
                        messageSent: true
                    })
                    setTimeout(() => {
                        this.setState({ messageSent: false })
                    }, 4000)
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