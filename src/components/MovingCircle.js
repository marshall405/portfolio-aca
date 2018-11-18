import React from 'react';

export class MovingCircle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            top: 0,
            left: 0,
            width: 50,
            height: 50,
            dx: .5,
            dy: .5,
            borderRadius : 10
        }
    }
    componentDidMount() {
    }
    randomNumber(min, max){
        // return random number between min and max
        return Math.floor( (Math.random() * max) + min ); 
    }

    randomSquares() {
        // create n squares with random width, height, and positioning (top, left)
        // return an array with the squares as objects
        const squaresArray = [];
        for(let i = 0; i < 6; i++){
            let square = {
                width: this.randomNumber(50, window.innerWidth - 50),
                height: this.randomNumber(50, window.innerHeight- 50),
                top: this.randomNumber(0, window.innerHeight - 50),
                left: this.randomNumber(0, window.innerWidth - 50),
                borderRadius: 10
            }
            squaresArray.push(square);
        }
        return squaresArray;
    }
    render() {
        return (
            <div>
                <div className='background-geo'>
                   {this.randomSquares().map( (square, index) => {
                       return (
                        <div key={index} className='square'style={{top: square.top, left: square.left, borderRadius: square.borderRadius, width: square.width, height:square.height, zIndex: -1}}>
                        </div>
                       )
                   })}
                </div>
            </div>
        )
    }
}
