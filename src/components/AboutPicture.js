import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../styles/aboutPicture.css'

export default class AboutPicture extends Component {
    render() {
        return (
            <div className="about-image">
                <img src={this.props.picture} alt="A closeup of ME!" />
            </div>
        )

    }
}



AboutPicture.propTypes = {
    picture: PropTypes.string
}