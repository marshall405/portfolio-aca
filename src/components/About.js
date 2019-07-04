import React from 'react';
import Resume from '../assets/resume.pdf';
import Cabo from '../images/cabo.jpg';

export class About extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <div id="top">
                <a href={Resume}> resume </a>
            </div>
        )
    }
}