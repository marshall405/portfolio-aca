import React, { useState, Component } from 'react'
import PropTypes from 'prop-types'


const img = {
    width: '50%',
    maxWidth: '260px',
    minWidth: '200px',
    height: '96%',
    borderRadius: '5px',
    boxShadow: '2px 2px 5px 1px rgb(58, 58, 58)',
    position: 'absolute'
}
const galleryContainer = {
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '300px',
    width: '100%',
}
const imgContainer = {
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%',
    width: '70%',
}

const arrow = {
    fontSize: '3em'
}
export default class PicturesCube extends Component {

    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
        this.OnLeftClick = this.OnLeftClick.bind(this)
        this.OnRightClick = this.OnRightClick.bind(this)
    }

    OnLeftClick() {
        let index = this.state.index
        if (index - 1 < 0) {
            index = this.props.pictures.length
        }
        this.setState({
            index: index -= 1
        })
    }
    OnRightClick() {
        let index = this.state.index
        if (index + 1 >= this.props.pictures.length) {
            index = -1
        }
        this.setState({
            index: index += 1
        })
    }
    render() {

        return (
            <div style={galleryContainer} className="image-gallery">
                <i className="fas fa-arrow-left arrow" onClick={this.OnLeftClick}></i>

                <div style={imgContainer}>
                    {
                        this.props.pictures.map((picture, index) => {
                            if (this.state.index === index) {
                                return <img className="show" style={img} src={picture} />
                            } else {
                                return <img className="hide" style={img} src={picture} />
                            }
                        })
                    }
                </div>

                {/* <img style={img} src={this.props.pictures[this.state.index]} /> */}

                <i className="fas fa-arrow-right arrow" onClick={this.OnRightClick}></i>


            </div>
        )

    }
}



PicturesCube.propTypes = {
    pictures: PropTypes.array
}