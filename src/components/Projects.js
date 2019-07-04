import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LabelIcon from '@material-ui/icons/Label';



const projects = [
    {
        title: 'Color Mash',
        description: `The code is a mess and I had no idea what I was doing! Color Mash lets you combine two colors and shows you the result. This was one of the first programs I created but I learned a lot from this project.
                      I used the Canvas with vanilla JavaScript.`,
        href: 'https://htmlpreview.github.io/?https://github.com/marshall405/colorMash/blob/master/index.html',

    },
    {
        title: 'To Do List',
        description: `My first ReactJS App. A simple to do list, lets you add, edit, mark as complete or delete items. 
                      I learned about state in React and used Material UI for styling. I also became more comfortable with using some built in methods for Arrays like 'map', 'slice', 'splice' and 'indexOf'. 
                      This project was a perfect way to become more familiar with React and creating Components.`,
        href: 'https://marshall405.github.io/todolist/',

    },
    {
        title: 'Clock',
        description: `Clock app is also built with just ReactJS. You can click on the clock to switch between analog and digital. I learned more about the Date object and rendering different components based on some conditional.
                      `,
        href: 'https://marshall405.github.io/clock-react-app/',

    },
    {
        title: 'Weather App',
        description: `Created a simple weather app using "openweathermap's" API. I learned about using Fetch, passing props to children components and ComponentDidMount().
                      I also learned about making sure user input is what you expect it to be!`,
        href: 'https://marshall405.github.io/another-weather-app/',

    },
    {
        title: 'Create a Post',
        description: `My first full-stack project. A simple site where you can write a post and store it in a MySQL database. I used nodeJS, Express to build the server and React for the front end.
                    I learned some simple commands for SQL as well as connecting to a server with SSH. I'm using a free Heroku server so it takes a moment to spin up! `,
        href: 'https://lit-mountain-55987.herokuapp.com/'
    },
    {
        title: 'Memory Game',
        description: 'A memory game using Vanilla JS. I recently created this to keep JavaScript fresh in my mind. The styling needs work but I used no frameworks or libraries, just pure vanilla JavaScript and some DOM manipulation!',
        href: 'https://marshall405.github.io/memory_game/'
    }
]

export class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.viewMore = this.viewMore.bind(this);
        this.viewLess = this.viewLess.bind(this);
    }
    componentDidMount() {
        let nav = document.getElementsByTagName('nav');
        let navHeight = nav[0].offsetHeight;
        let section = document.getElementById('section');
    }
    viewMore(e, index) {
        let parent = e.currentTarget.parentNode.parentNode.children;
        let projectNodes = [...parent];
        this.viewLess(projectNodes);
        e.currentTarget.children[1].children[1].innerHTML = projects[index].description;
    }
    viewLess(projectNodes) {
        projectNodes.forEach((child, index) => {
            let shortDescription = projects[index].description.slice(0, 120);
            if (shortDescription.length >= 80) {
                shortDescription = shortDescription + '... view more';
            }
            child.children[0].children[1].children[1].innerHTML = shortDescription;
        });
    }
    render() {
        return (
            <div id='section' className='section container'>
                <div id='projects' className='projects-container'>
                    <h1> Projects </h1>
                    <div className='projects'>
                        {projects.map((project, index) => {
                            //only show 80 chars to start with.
                            let descMax = project.description.slice(0, 120);
                            // add '...' if the description reaches 80 chars or more
                            if (descMax.length >= 80) {
                                descMax = descMax + '... view more';
                            }
                            return (
                                <List key={index}>
                                    <ListItem button divider onClick={(e) => this.viewMore(e, index)}>
                                        <ListItemIcon>
                                            <LabelIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={project.title} secondary={descMax} className='list-desc' />
                                        <a href={project.href} className='view-projects'> View Project </a>
                                    </ListItem>
                                </List>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        )
    }
}