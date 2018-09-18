import React from 'react';

export class Jumbo extends React.Component {

    formatName(){
        console.log(this.props.name)
    }
    render() {
        
        if(this.props.name === 'Marshall Slemp'){
            return (
                <div className='jumbo'>
                    <h1><span>M</span>arshall <span>S</span>lemp</h1>
                </div>
            )
        } else {
            return (
                <div className='jumbo'>
                    <h1>{this.props.name}</h1>
                </div>
            )
        }
        
    }
}