import React, { Component } from 'react'
import PropTypes from 'prop-types'


const img = {
    width: '250px',
    maxWidth: '260px',
    minWidth: '200px',
    height: '96%',
    margin: '5px',
    borderRadius: '5px',
    boxShadow: '2px 2px 5px 1px rgb(58, 58, 58)',

}
const galleryContainer = {
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '300px',
    width: '100%',
    backgroundImage: 'linear-gradient(to right, rgba(45, 90, 121, 1), rgba(217, 219, -51, 1))',
    borderRadius: '5px'
}
const imgContainer = {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'scroll',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    width: '70%',
}

export default class PicturesCube extends Component {

    constructor(props) {
        super(props)
        this.state = {
            index: 0,
        }

    }

    scrollRight = () => {
        this.setState({ right: !this.state.right })
    }
    scrollLeft = () => {
        this.setState({ left: !this.state.left })
    }

    scroll = () => {
        if (this.state.right) {
            setTimeout(() => {
                document.getElementById('imageContainer').scrollLeft += 20
                if (this.state.right) {
                    this.scroll()
                }
            }, 20)
        }
        if (this.state.left) {
            setTimeout(() => {
                document.getElementById('imageContainer').scrollLeft -= 20
                if (this.state.left) {
                    this.scroll()
                }
            }, 20)
        }

    }
    render() {

        return (
            <div style={galleryContainer} className="image-gallery">
                <i className="fas fa-arrow-left arrow" onMouseEnter={this.scrollLeft} onMouseLeave={this.scrollLeft}></i>
                {
                    this.scroll()
                }
                <div id="imageContainer" style={imgContainer}>
                    {
                        this.props.pictures.map((picture, index) => {

                            return <img key={index} style={img} src={picture} alt="me" />

                        })
                    }
                </div>

                <i className="fas fa-arrow-right arrow" onMouseEnter={this.scrollRight} onMouseLeave={this.scrollRight}></i>


            </div>
        )

    }
}



PicturesCube.propTypes = {
    pictures: PropTypes.array
}