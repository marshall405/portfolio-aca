import React from 'react';

import {Heading} from './Heading';
import {MovingCircle} from './MovingCircle';
export class Jumbo extends React.Component {
    render() {
        return (
            <div className='jumbo'>
                <Heading windowWidth={this.props.windowWidth} onClick={this.props.onClick}/>
                <h1 className='my-name' onClick={this.props.onClick}>
                    <span>M</span>arshall <span>S</span>lemp
                </h1> 
                <MovingCircle screenWidth={this.props.windowWidth}/>
                
            </div>
        )
    } 
        
    
}