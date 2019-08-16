import React from 'react';

// import styles
import '../styles/Projects.css';

const projects = [
    {
        title: 'Classic Snake',
        desc: 'The classic snake game made using HTML5\'s canvas API and vanilla JavaScript. I first wrote this game using nothing but the developer tools console.',
        link: `https://marshall405.github.io/classic-snake/`,
    },
    {
        title: 'A Weather App',
        desc: 'One of the first Applications I built with React. Uses the \'openweathermap\' API, and allows you to get the current weather by your Zipcode.',
        link: 'https://marshall405.github.io/another-weather-app/'
    },

]

export class Projects extends React.Component {

    componentDidMount() {

    }
    renderProjects() {
        return projects.map((project, index) => {
            return <div key={index} className='project-container'>
                <h3> {project.title} </h3>
                <p> {project.desc} </p>
                <a href={project.link} target='_blank'> view project </a>
            </div>
        })

    }
    render() {
        return (
            <div className='section' id='projects'>
                <h2> PROJECTS </h2>
                <p> More projects coming soon... </p>
                {this.renderProjects()}
            </div>
        )
    }
}