import React from 'react';
// import style
import '../styles/Projects.css';

import { Fade } from 'react-awesome-reveal'
// import images
import weather from '../images/weather.png';
import snake from '../images/snake.png';
import coffee from '../images/coffee.png';
import eyefind from '../images/eyefind.png';
import cardtrader from '../images/cardtrader.png';
// import website from '../images/website.png';
// import contact from '../images/contact.png';
import exchangeRates from '../images/exchangeRates.png';
const projects = [
    {
        title: 'eyefind.info',
        desc: 'Eyefind is based off the website in the Grand Theft Auto series but uses YouTube videos. Built with React and lots of custom CSS. Hosted on Netlify! Still have more to add...working links, search, random functionality to name a few.',
        link: 'https://nervous-lovelace-0ff825.netlify.app/',
        img: eyefind
    },
    {
        title: 'CoffeeWeb',
        desc: 'A Website created using React, React Router and Semantic UI. Hosted on AWS S3 and a custom API for the Contact Form.',
        link: 'http://oncoffeeweb.com/',
        img: coffee
    },
    {
        title: 'Card Trader',
        desc: 'A Full Stack Application that allows users to upload and trade their sports cards. Made using React, React Router, Material UI, Ruby on Rails and PostgreSQL.',
        link: 'https://5f7f9067fdf5b800b4a65669--card-trader.netlify.app/',
        img: cardtrader
    },
    {
        title: 'Exchange Rates',
        desc: 'This app uses an API to get the exchange rates in different countries for the US Dollar. You can change the dollar amount to see the exchange value for a variety of currencies.',
        link: 'https://marshall405.github.io/exchange-rate-app/',
        img: exchangeRates
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
    }

]

export class Projects extends React.Component {

    componentDidMount() {

    }
    renderProjects() {
        return projects.map((project, index) => {
            return <div key={index} className='project-container'>
                <h3> {project.title} </h3>
                <Fade>
                    <div className='-container'>
                        <p> {project.desc} </p>
                        <div className='image-container'>
                            <a href={project.link} target='_blank'> <img src={project.img} alt={project.desc} /> </a>
                            <a href={project.link} target='_blank'> view project </a>
                        </div>
                    </div>
                </Fade>
            </div>
        })

    }
    render() {
        return (
            <div className='section' id='projects'>
                <h2> PROJECTS </h2>
                {this.renderProjects()}
                <p> More projects coming soon... </p>
            </div>
        )
    }
}