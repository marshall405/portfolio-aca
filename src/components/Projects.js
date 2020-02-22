import React from 'react';
import { Bubbles } from './Bubbles';
// import style
import '../styles/Projects.css';

// import images
import weather from '../images/weather.png';
import fallingBlocks from '../images/fallingBlocks.png';
import snake from '../images/snake.png';
import website from '../images/website.png';
import contact from '../images/contact.png';
import reactToDo from '../images/reactToDo.png';
import exchangeRates from '../images/exchangeRates.png';
const projects = [
    {
        title: 'Exchange Rates',
        desc: 'This app uses an API to get the exchange rates in different countries for the US Dollar. You can change the dollar amount to see the exchange value for a variety of currencies.',
        link: 'https://marshall405.github.io/exchange-rate-app/',
        img: exchangeRates
    },
    {
        title: 'React To Do List',
        desc: 'A simple to do list made using React Hooks. It also uses Local Storage to save your list.',
        link: 'https://marshall405.github.io/react-todo-app/',
        img: reactToDo
    },
    {
        title: 'Falling Blocks',
        desc: 'Another HTML5 Canvas game using vanilla JavaScript.',
        link: 'https://marshall405.github.io/fallingBlocks/index.html',
        img: fallingBlocks
    },
    {
        title: 'Classic Snake',
        desc: 'The classic snake game made using HTML5\'s canvas API and vanilla JavaScript. I first wrote this game using nothing but the developer tools console.',
        link: `https://marshall405.github.io/classic-snake/`,
        img: snake

    },
    {
        title: 'A Weather App',
        desc: 'One of the first Applications I built with React. Uses the \'openweathermap\' API, and allows you to get the current weather by your Zipcode.',
        link: 'https://marshall405.github.io/another-weather-app/',
        img: weather
    },
    {
        title: 'This Website',
        desc: 'Built my website from scratch using React. I also created a bash command that uses SFTP to automatically upload files to cPanel that I can use anytime I make changes to my website. ',
        link: '#top',
        img: website
    },
    {
        title: 'Contact Form',
        desc: 'The contact form you see on this website was built from scratch and uses form validation. It also keeps track of the total characters typed in the \'message\' field. I also built the backend using Node, Express and MySQL and is hosted on Heroku.',
        link: '#contact',
        img: contact
    }

]

export class Projects extends React.Component {

    componentDidMount() {

    }
    renderProjects() {
        return projects.map((project, index) => {
            return <div key={index} className='project-container'>
                <h3> {project.title} </h3>
                <div className='-container'>
                    <p> {project.desc} </p>
                    <div className='image-container'>
                        <a href={project.link} target=''> <img src={project.img} alt={project.desc} /> </a>
                        <a href={project.link} target=''> view project </a>
                    </div>
                </div>

            </div>
        })

    }
    render() {
        return (
            <div className='section' id='projects'>
                <h2> PROJECTS </h2>
                {this.renderProjects()}

                <div className='project-container'>
                    <h3> Bouncing Bubbles </h3>
                    <div className='-container'>
                        <p> Collision Detection for the WIN!!!</p>
                        <div className='image-container'>
                            <Bubbles />
                        </div>
                    </div>
                </div>


                <p> More projects coming soon... </p>
            </div>
        )
    }
}