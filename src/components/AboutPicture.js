import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../styles/aboutPicture.css'

export default class AboutPicture extends Component {

    constructor(props) {
        super(props)
        this.state = {
            left: 0,
        }

    }


    render() {
        return (
            <div className="about-image">
                <img style={{ left: this.state.left }} src={this.props.picture} alt="A closeup of ME!" />
            </div>
        )

    }
}



AboutPicture.propTypes = {
    picture: PropTypes.string
}