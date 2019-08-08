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
                messageSent: true,
            })
        } else if (newPost) {
            this.setState({ isNameEmpty: true });
        } else {
            this.setState({ isTextEmpty: true });
        }
    }
    messageSent() {

        if (this.state.messageSent) {
            setTimeout(() => {
                this.setState({
                    messageSent: false,
                });
            }, 4000);
            return (
                <div id='messageSent'>
                    Sending...
                </div>
            )
        } else {
            return;
        }

    }
    render() {
        return (
            <div className='create-post-container'>
                {this.messageSent()}
                <div className='post-form'>
                    <form onSubmit={this.handleSubmit}>
                        <textarea
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
                            <input
                                type='email'
                                placeholder='email'
                                value={this.state.title}
                                className={this.state.isTitleEmpty ? 'alert' : ''}
                                onChange={this.handleTitleChange}
                            />
                            <input
                                type='text'
                                placeholder='name'
                                value={this.state.name}
                                className={this.state.isNameEmpty ? 'alert' : ''}
                                onChange={this.handleNameChange}
                            />
                            <button type='submit'> Send Message </button>

                        </div>
                    </form>
                </div>
            </div>
        )
    }







}