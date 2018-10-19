import React from 'react';

import {Heading} from './Heading';
export class Jumbo extends React.Component {

    formatName(){
        console.log(this.props.name)
    }
    render() {
        return (
            <div className='jumbo'>
                <Heading onClick={this.props.onClick}/>
                <h1 onClick={this.props.onClick}>
                    <span>M</span>arshall <span>S</span>lemp
                </h1> 
            </div>
        )
    } 
        
    
}