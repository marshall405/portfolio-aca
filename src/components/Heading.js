import React from 'react';
import '../styles/Heading.css';
export class Heading extends React.Component {
    render() {
        return (
            <h1> {this.props.greeting} {this.props.name} </h1>
        )
    }
}